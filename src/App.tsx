import { useState, useEffect, useRef, useMemo, useCallback } from "react";
import { MORSE_RU, MORSE_EN, PHRASES, type Lang, type Theme, type TabIndex } from "./data/morse";
import { I18N } from "./data/i18n";
import { useOscillator } from "./hooks/useOscillator";
import { exportWav, decodeFile, createMicDecoder, morseToText, type MicDecoderInstance } from "./data/morseCodec";
import {
  IconCap, IconPencil, IconCode, IconGear, IconX,
  IconSpace, IconBackspace, IconAnt,
  IconDownload, IconUpload, IconMic,
} from "./components/Icons";

function buildVerticalLayout(map: Record<string, string>, rootLabel: string, maxDepth = 5) {
  const nodes: Record<string, { code: string; char: string | null; kind: string; depth: number; children: typeof nodes[string][] }> = {};
  nodes[""] = { code: "", char: rootLabel, kind: "root", depth: 0, children: [] };
  for (const [ch, code] of Object.entries(map)) {
    if (code.length > maxDepth) continue;
    for (let i = 1; i <= code.length; i++) {
      const p = code.slice(0, i);
      if (!nodes[p]) {
        nodes[p] = { code: p, char: null, depth: i, kind: p.slice(-1) === "." ? "dot" : "dash", children: [] };
      }
    }
    nodes[code].char = ch;
  }
  for (const k of Object.keys(nodes)) {
    if (k === "") continue;
    nodes[k.slice(0, -1)].children.push(nodes[k]);
  }
  for (const n of Object.values(nodes)) {
    n.children.sort((a, b) => (a.kind === "dot" ? -1 : 1) - (b.kind === "dot" ? -1 : 1));
  }
  const positions: Record<string, { x: number; y: number }> = {};
  let slot = 0;
  function place(n: typeof nodes[string]): number {
    if (n.children.length === 0) {
      positions[n.code] = { x: slot, y: n.depth };
      slot++;
      return positions[n.code].x;
    }
    const xs = n.children.map(place);
    const x = (Math.min(...xs) + Math.max(...xs)) / 2;
    positions[n.code] = { x, y: n.depth };
    return x;
  }
  place(nodes[""]);
  return { nodes, positions, slots: slot, maxDepth };
}

function MorseTree({ lang, activeCode, flashCode, rootLabel, hintCode }: {
  lang: Lang; activeCode: string | null; flashCode: string | null; rootLabel: string; hintCode: string | null;
}) {
  const map = lang === "RU" ? MORSE_RU : MORSE_EN;
  const layout = useMemo(() => buildVerticalLayout(map, rootLabel, 5), [map, rootLabel]);
  const { nodes, positions, slots, maxDepth } = layout;
  const W = 760, H = 720;
  const PADX = 26, PADTOP = 24, PADBOT = 64;
  const cellW = (W - PADX * 2) / Math.max(1, slots - 1);
  const cellH = (H - PADTOP - PADBOT) / maxDepth;
  const px = (x: number) => PADX + x * cellW;
  const py = (y: number) => PADTOP + y * cellH;

  const activeSet = new Set<string>();
  if (activeCode) for (let i = 1; i <= activeCode.length; i++) activeSet.add(activeCode.slice(0, i));
  const flashSet = new Set<string>();
  if (flashCode) for (let i = 1; i <= flashCode.length; i++) flashSet.add(flashCode.slice(0, i));
  const hintSet = new Set<string>();
  if (hintCode) for (let i = 1; i <= hintCode.length; i++) hintSet.add(hintCode.slice(0, i));

  const edges: { from: string; to: string; isDot: boolean }[] = [];
  for (const code of Object.keys(nodes)) {
    if (code === "") continue;
    edges.push({ from: code.slice(0, -1), to: code, isDot: code.slice(-1) === "." });
  }
  const nodeSize = 36;
  const rootSize = 56;

  return (
    <svg className="tree-svg" viewBox={`0 0 ${W} ${H}`} preserveAspectRatio="xMidYMid meet">
      <g className="edges">
        {edges.map((e, i) => {
          const p = positions[e.from], c = positions[e.to];
          const fromSz = e.from === "" ? rootSize : nodeSize;
          const x1 = px(p.x), y1 = py(p.y) + fromSz / 2 + 1;
          const x2 = px(c.x), y2 = py(c.y) - nodeSize / 2 - 1;
          const isActive = activeSet.has(e.to);
          const isFlash = flashSet.has(e.to);
          const isHint = hintSet.has(e.to);
          const cls = `edge ${e.isDot ? "dot" : "dash"} ${isHint ? "hint" : ""} ${isActive ? "active" : ""} ${isFlash ? "flash" : ""}`;
          const my = (y1 + y2) / 2;
          const d = x1 === x2
            ? `M ${x1} ${y1} L ${x2} ${y2}`
            : `M ${x1} ${y1} L ${x1} ${my} L ${x2} ${my} L ${x2} ${y2}`;
          return <path key={i} className={cls} d={d} />;
        })}
      </g>
      <g className="nodes">
        {Object.entries(nodes).map(([code, n]) => {
          const p = positions[code];
          if (!p) return null;
          const isRoot = code === "";
          const isActive = activeSet.has(code) || (isRoot && !!activeCode);
          const isFlash = flashSet.has(code);
          const isHintTarget = hintCode === code;
          const isHintPath = hintSet.has(code) && !isHintTarget;
          const sz = isRoot ? rootSize : nodeSize;
          const cls = `tnode ${isRoot ? "root" : ""} ${isHintTarget ? "hint-target" : ""} ${isHintPath ? "hint-path" : ""} ${isActive ? "active" : ""} ${isFlash ? "flash" : ""} ${n.char ? "has" : "empty"}`;
          return (
            <g key={code} transform={`translate(${px(p.x)} ${py(p.y)})`} className={cls}>
              <rect className="box" x={-sz / 2} y={-sz / 2} width={sz} height={sz} rx="4" />
              {n.char != null && <text className="lbl" y={isRoot ? 5 : 10} textAnchor="middle">{n.char}</text>}
            </g>
          );
        })}
      </g>
    </svg>
  );
}

function TrainField({ target, typed, flash }: { target: string; typed: string; flash: boolean }) {
  return (
    <span className="display">
      {target.split("").map((ch, i) => {
        const t = typed[i];
        let cls = "target";
        if (t != null && t === ch) cls = "ok";
        if (t != null && t !== ch) cls = "err";
        const isLast = i === typed.length - 1 && flash;
        return <span key={i} className={`${cls}${isLast ? " flash" : ""}`}>{ch === " " ? " " : ch}</span>;
      })}
      <span className="cursor" />
    </span>
  );
}

function FreeField({ text, pending, flash }: { text: string; pending: string; flash: boolean }) {
  return (
    <span className="display">
      {text.length === 0 && !pending && <span className="placeholder">…</span>}
      {text.split("").map((c, i) => {
        const isLast = i === text.length - 1 && flash;
        return <span key={i} className={`ok${isLast ? " flash" : ""}`}>{c === " " ? " " : c}</span>;
      })}
      {pending && <span className="pending">{pending.replace(/\./g, "•").replace(/-/g, "━")}</span>}
      <span className="cursor" />
    </span>
  );
}

function Scope({ active, seq }: { active: boolean; seq: string }) {
  const items = seq.split("");
  if (items.length === 0 && !active) return null;
  return (
    <svg className="scope-svg" viewBox="0 0 320 36" preserveAspectRatio="none">
      {items.length === 0 && <line x1="0" y1="18" x2="320" y2="18" stroke="#67c269" strokeWidth="2" />}
      {items.map((s, i) => {
        const x = 8 + i * 38;
        const w = s === "." ? 14 : 32;
        return (
          <g key={i}>
            <rect x={x - 2} y="6" width={w + 4} height="24" rx="3" fill="rgba(217,182,110,.08)" />
            <rect x={x} y="8" width={w} height="20" rx="2" fill="#b9e8a7" opacity=".9" />
          </g>
        );
      })}
    </svg>
  );
}

function sleep(ms: number) { return new Promise(r => setTimeout(r, ms)); }

const TAB_ICONS = [IconCap, IconPencil, IconCode, IconGear];

export default function App() {
  const [lang, setLang] = useState<Lang>("RU");
  const [tab, setTab] = useState<TabIndex>(0);
  const [theme, setTheme] = useState<Theme>("mix");
  const [phrase, setPhrase] = useState("");
  const [typed, setTyped] = useState("");
  const [freeText, setFreeText] = useState("");
  const [codeText, setCodeText] = useState("ПРИВЕТ МИР");
  const [activeCode, setActiveCode] = useState<string | null>(null);
  const [flashCode, setFlashCode] = useState<string | null>(null);
  const [wrongCode, setWrongCode] = useState<string | null>(null);
  const [fieldFlash, setFieldFlash] = useState(false);
  const [currentSeq, setCurrentSeq] = useState("");
  const [isPlaying, setIsPlaying] = useState(false);
  const [keyDown, setKeyDown] = useState(false);
  const [pressDur, setPressDur] = useState(0);
  const [transmitIdx, setTransmitIdx] = useState(-1);
  const [decodedAlpha, setDecodedAlpha] = useState<Lang | null>(null);
  const [micActive, setMicActive] = useState(false);
  const [micMorse, setMicMorse] = useState("");

  const [freq, setFreq] = useState(620);
  const [threshold, setThreshold] = useState(260);
  const [wpm, setWpm] = useState(15);
  const [vibEnabled, setVibEnabled] = useState(true);

  const t = I18N[lang];
  const map = lang === "RU" ? MORSE_RU : MORSE_EN;
  const code2char = useMemo(() => {
    const o: Record<string, string> = {};
    for (const [k, v] of Object.entries(map)) o[v] = k;
    return o;
  }, [map]);

  const osc = useOscillator();
  const pressStartRef = useRef(0);
  const railIntervalRef = useRef<number>(0);
  const seqTimeoutRef = useRef<number>(0);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const micRef = useRef<MicDecoderInstance | null>(null);
  const isPlayingRef = useRef(false);
  useEffect(() => { isPlayingRef.current = isPlaying; }, [isPlaying]);

  const pickNewPhrase = useCallback(() => {
    const pool = PHRASES[lang];
    const list = theme === "mix"
      ? [...pool.sea, ...pool.war, ...pool.spy, ...pool.sos]
      : pool[theme] || [];
    const next = list[Math.floor(Math.random() * list.length)] || "SOS";
    setPhrase(next);
    setTyped("");
    setActiveCode(null);
    setCurrentSeq("");
    setFlashCode(null);
  }, [lang, theme]);

  useEffect(() => { if (tab === 0) pickNewPhrase(); }, [lang, theme, tab, pickNewPhrase]);

  useEffect(() => {
    setCodeText(lang === "RU" ? "ПРИВЕТ МИР" : "HELLO WORLD");
  }, [lang]);

  const handleDown = useCallback(() => {
    if (keyDown) return;
    if (seqTimeoutRef.current) { clearTimeout(seqTimeoutRef.current); seqTimeoutRef.current = 0; }
    setKeyDown(true);
    pressStartRef.current = performance.now();
    osc.on(freq);
    if (vibEnabled && navigator.vibrate) navigator.vibrate(20);
    setPressDur(0);
    railIntervalRef.current = window.setInterval(() => {
      setPressDur(performance.now() - pressStartRef.current);
    }, 16);
  }, [keyDown, freq, vibEnabled, osc]);

  const addSymbol = useCallback((sym: string) => {
    if (seqTimeoutRef.current) clearTimeout(seqTimeoutRef.current);
    setCurrentSeq(prev => {
      const next = prev + sym;
      setActiveCode(next);
      const letterGap = Math.max(700, 3600 / Math.max(5, wpm));
      seqTimeoutRef.current = window.setTimeout(() => {
        const ch = code2char[next];
        const flashChain = () => {
          setFlashCode(next);
          setTimeout(() => { setFlashCode(null); setActiveCode(null); }, 520);
        };
        if (tab === 0) {
          const expected = phrase.replace(/\s/g, "")[typed.replace(/\s/g, "").length] || "";
          if (ch) {
            if (ch === expected) {
              setTyped(s => s + ch);
              setFieldFlash(true);
              setTimeout(() => setFieldFlash(false), 520);
              flashChain();
            } else {
              setWrongCode(next);
              setTimeout(() => { setWrongCode(null); setActiveCode(null); }, 600);
            }
          } else {
            setTimeout(() => setActiveCode(null), 400);
          }
        } else if (tab === 1) {
          if (ch) {
            setFreeText(s => s + ch);
            setFieldFlash(true);
            setTimeout(() => setFieldFlash(false), 520);
            flashChain();
          } else {
            setTimeout(() => setActiveCode(null), 400);
          }
        }
        setCurrentSeq("");
      }, letterGap);
      return next;
    });
  }, [wpm, code2char, tab, phrase, typed]);

  const handleUp = useCallback(() => {
    if (!keyDown) return;
    const dur = performance.now() - pressStartRef.current;
    setKeyDown(false);
    osc.off();
    clearInterval(railIntervalRef.current);
    setPressDur(0);
    if (tab === 3) return;
    if (dur < 40) return;
    const symbol = dur >= threshold ? "-" : ".";
    addSymbol(symbol);
  }, [keyDown, threshold, osc, tab, addSymbol]);

  useEffect(() => {
    const inEditable = (el: EventTarget | null) => {
      if (!el || !(el instanceof HTMLElement)) return false;
      return el.tagName === "INPUT" || el.tagName === "TEXTAREA" || el.isContentEditable;
    };
    const down = (e: KeyboardEvent) => { if (e.code === "Space" && !e.repeat && !inEditable(e.target)) { e.preventDefault(); handleDown(); } };
    const up = (e: KeyboardEvent) => { if (e.code === "Space" && !inEditable(e.target)) { e.preventDefault(); handleUp(); } };
    window.addEventListener("keydown", down);
    window.addEventListener("keyup", up);
    return () => { window.removeEventListener("keydown", down); window.removeEventListener("keyup", up); };
  }, [handleDown, handleUp]);

  useEffect(() => {
    if (keyDown) {
      setKeyDown(false);
      osc.off();
      clearInterval(railIntervalRef.current);
      setPressDur(0);
    }
    if (tab !== 2 && isPlayingRef.current) {
      isPlayingRef.current = false;
      setIsPlaying(false);
      osc.off();
      setActiveCode(null);
      setFlashCode(null);
      setCurrentSeq("");
    }
    if (seqTimeoutRef.current) {
      clearTimeout(seqTimeoutRef.current);
      seqTimeoutRef.current = 0;
    }
  }, [tab]);

  const pressSpace = () => {
    if (tab === 0) setTyped(s => s + " ");
    else if (tab === 1) setFreeText(s => s + " ");
    else if (tab === 2) setCodeText(s => s + " ");
  };
  const pressDelete = () => {
    if (tab === 0) setTyped(s => s.slice(0, -1));
    else if (tab === 1) setFreeText(s => s.slice(0, -1));
    else if (tab === 2) setCodeText(s => s.slice(0, -1));
  };

  const transmit = useCallback(async () => {
    if (isPlayingRef.current) { isPlayingRef.current = false; setIsPlaying(false); setTransmitIdx(-1); return; }
    setIsPlaying(true); isPlayingRef.current = true;
    const dotMs = Math.round(1200 / Math.max(5, wpm));
    const text = codeText.toUpperCase();
    for (let idx = 0; idx < text.length; idx++) {
      const ch = text[idx];
      if (!isPlayingRef.current) break;
      setTransmitIdx(idx);
      if (ch === " ") {
        setActiveCode(null); setCurrentSeq("");
        await sleep(dotMs * 4); continue;
      }
      const code = map[ch]; if (!code) continue;
      for (let i = 1; i <= code.length; i++) {
        if (!isPlayingRef.current) break;
        const prefix = code.slice(0, i);
        const symbol = prefix.slice(-1);
        const beepDur = symbol === "." ? dotMs : dotMs * 3;
        setActiveCode(prefix);
        setCurrentSeq(prefix);
        osc.on(freq);
        await sleep(beepDur);
        osc.off();
        if (vibEnabled && navigator.vibrate) navigator.vibrate(symbol === "." ? 18 : 50);
        await sleep(dotMs);
      }
      setFlashCode(code);
      await sleep(420);
      setFlashCode(null);
      setActiveCode(null);
      setCurrentSeq("");
      await sleep(dotMs * 2);
    }
    setIsPlaying(false); isPlayingRef.current = false;
    setTransmitIdx(-1);
  }, [wpm, codeText, map, freq, vibEnabled, osc]);

  async function handleExport() {
    const text = codeText.trim().toUpperCase();
    if (!text) return;
    const blob = await exportWav(text, map, { wpm, freq });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `morse-${lang.toLowerCase()}.wav`;
    a.click();
    setTimeout(() => URL.revokeObjectURL(url), 1500);
  }

  function handleImportClick() {
    fileInputRef.current?.click();
  }

  async function handleImportFile(e: React.ChangeEvent<HTMLInputElement>) {
    const f = e.target.files?.[0];
    e.target.value = "";
    if (!f) return;
    try {
      const r = await decodeFile(f);
      if (r && r.text) {
        setCodeText(r.text);
        setDecodedAlpha(r.alpha as Lang);
        if (r.alpha && r.alpha !== lang) setLang(r.alpha as Lang);
      }
    } catch (err) {
      console.error(err);
    }
  }

  async function handleMicToggle() {
    if (micActive) {
      micRef.current?.stop();
      micRef.current = null;
      setMicActive(false);
      const morse = micMorse;
      if (morse) {
        const ru = morseToText(morse, MORSE_RU);
        const en = morseToText(morse, MORSE_EN);
        const best = (ru.total - ru.unknown) >= (en.total - en.unknown)
          ? { ...ru, alpha: "RU" as Lang } : { ...en, alpha: "EN" as Lang };
        if (best.text) {
          setCodeText(best.text);
          setDecodedAlpha(best.alpha);
          if (best.alpha !== lang) setLang(best.alpha);
        }
      }
      setMicMorse("");
      return;
    }
    try {
      const dec = createMicDecoder({
        onSymbol: (_sym, full) => setMicMorse(full),
      });
      await dec.start();
      micRef.current = dec;
      setMicActive(true);
    } catch (err) {
      console.error(err);
    }
  }

  const hintCode = tab === 0
    ? map[phrase.replace(/\s/g, "")[typed.replace(/\s/g, "").length] || ""] || null
    : null;

  return (
    <div className="app">
          {/* TOP BAR */}
          <div className="topbar">
            <div className="plate lang">
              <button className={lang === "RU" ? "on" : ""} onClick={() => setLang("RU")}>RU</button>
              <span className="divider" />
              <button className={lang === "EN" ? "on" : ""} onClick={() => setLang("EN")}>EN</button>
            </div>
            <div className="plate tabs">
              {TAB_ICONS.map((Ic, i) => (
                <button key={i} className={`tab ${tab === i ? "on" : ""}`} onClick={() => setTab(i as TabIndex)}>
                  <Ic />
                  <span>{t.tabs[i]}</span>
                </button>
              ))}
            </div>
          </div>

          {/* FIELD */}
          <div className="plate field">
            <span className="metastrip">
              {tab === 0 && t.field_train}
              {tab === 1 && t.field_free}
              {tab === 2 && t.field_code}
              {tab === 3 && t.settings.title}
            </span>

            {tab === 0 && <TrainField target={phrase} typed={typed} flash={fieldFlash} />}
            {tab === 1 && <FreeField text={freeText} pending={currentSeq} flash={fieldFlash} />}
            {tab === 2 && (
              isPlaying ? (
                <span className="display code-display">
                  {codeText.split("").map((c, i) => {
                    let cls = "target";
                    if (i < transmitIdx) cls = "ok";
                    else if (i === transmitIdx) cls = "ok flash";
                    return <span key={i} className={cls}>{c === " " ? " " : c}</span>;
                  })}
                </span>
              ) : micActive ? (
                <span className="display code-display">
                  {micMorse
                    ? <span className="pending">{micMorse.replace(/\./g, "•").replace(/-/g, "━").replace(/\//g, " / ")}</span>
                    : <span className="placeholder">{lang === "RU" ? "Слушаю…" : "Listening…"}</span>}
                  <span className="cursor" />
                </span>
              ) : (
                <input value={codeText} onChange={e => setCodeText(e.target.value.toUpperCase())} placeholder={t.field_code} />
              )
            )}
            {tab === 3 && <span className="display">{t.settings.title}</span>}

            {tab !== 3 && (
              <button className="clear" onClick={() => {
                if (tab === 0) pickNewPhrase();
                else if (tab === 1) setFreeText("");
                else if (tab === 2) setCodeText("");
              }}><IconX /></button>
            )}
          </div>

          {/* THEMES SLOT */}
          <div className="themes-slot">
            {tab === 0 && (
              <div className="themes">
                {(["sea", "war", "spy", "sos", "mix"] as Theme[]).map(k => (
                  <button key={k} className={theme === k ? "on" : ""} onClick={() => setTheme(k)}>{t.themes[k]}</button>
                ))}
                <button className="next" onClick={pickNewPhrase}>{t.next}</button>
              </div>
            )}
            {tab === 2 && (
              <div className="code-tools">
                <button className="tool-btn" disabled={!codeText.trim() || isPlaying} onClick={handleExport}>
                  <IconDownload /><span>WAV</span>
                </button>
                <button className="tool-btn" disabled={isPlaying || micActive} onClick={handleImportClick}>
                  <IconUpload /><span>{lang === "RU" ? "ФАЙЛ" : "FILE"}</span>
                </button>
                <button className={`tool-btn ${micActive ? "on" : ""}`} disabled={isPlaying} onClick={handleMicToggle}>
                  <IconMic /><span>{micActive ? (lang === "RU" ? "СТОП" : "STOP") : (lang === "RU" ? "МИКРОФОН" : "MIC")}</span>
                </button>
                {decodedAlpha && <span className="alpha-badge">{decodedAlpha}</span>}
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="audio/wav,audio/mp3,audio/mpeg,audio/x-wav,audio/*"
                  onChange={handleImportFile}
                  style={{ display: "none" }}
                />
              </div>
            )}
          </div>

          {/* TREE PANEL */}
          <div className="plate treepanel">
            {tab !== 3 && (
              <>
                <div className="treehead">
                  <span className="title">{t.title}</span>
                  <span className="legend">
                    <span><i className="lg-dot" /> {t.legend_dot}</span>
                    <span><i className="lg-dash" /> {t.legend_dash}</span>
                  </span>
                </div>
                <div className="tree-wrap">
                  <MorseTree lang={lang} activeCode={activeCode} flashCode={flashCode} rootLabel={t.root} hintCode={hintCode} />
                </div>
                <div className="scope-wrap">
                  <Scope active={keyDown} seq={currentSeq} />
                </div>
              </>
            )}

            {tab === 3 && (
              <div className="settings">
                <div className="set-title">{t.settings.title}</div>
                <div className="set-row">
                  <div className="top"><span>{t.settings.freq}</span><b>{freq} {t.units.hz}</b></div>
                  <input type="range" min="300" max="1200" step="10" value={freq} onChange={e => setFreq(+e.target.value)} />
                </div>
                <div className="set-row">
                  <div className="top"><span>{t.settings.thr}</span><b>{threshold} {t.units.ms}</b></div>
                  <input type="range" min="80" max="500" step="10" value={threshold} onChange={e => setThreshold(+e.target.value)} />
                </div>
                <div className="set-row">
                  <div className="top"><span>{t.settings.wpm}</span><b>{wpm} {t.units.wpm}</b></div>
                  <input type="range" min="5" max="40" step="1" value={wpm} onChange={e => setWpm(+e.target.value)} />
                </div>
                <div className="set-row toggle">
                  <div className="top" style={{ flex: 1 }}><span>{t.settings.vib}</span></div>
                  <div className={`switch ${vibEnabled ? "on" : ""}`} onClick={() => setVibEnabled(v => !v)} />
                </div>
                <button className="set-reset" onClick={() => { setFreq(620); setThreshold(260); setWpm(15); setVibEnabled(true); }}>
                  {lang === "RU" ? "СБРОСИТЬ ПО УМОЛЧАНИЮ" : "RESET TO DEFAULTS"}
                </button>
                <div className="set-footer">MORSE TRAINER · v2</div>
              </div>
            )}
          </div>

          {/* KEYBAY */}
          <div className="plate keybay">
            <div className="screws">
              <span className="screw tl" /><span className="screw tr" />
              <span className="screw bl" /><span className="screw br" />
            </div>

            <div className="key-rail">
              <span className="seg">
                <span className={`led ${keyDown && pressDur < threshold ? "on" : ""}`} />
                {t.short}
              </span>
              <span className="seg mid">
                {tab === 2 && !currentSeq && (
                  <button className="transmit" onClick={transmit}>{isPlaying ? t.stop : t.transmit}</button>
                )}
                {currentSeq && (
                  <strong className="seq-display">{currentSeq.replace(/\./g, "•").replace(/-/g, "━")}</strong>
                )}
              </span>
              <span className="seg">
                {t.long}
                <span className={`led ${keyDown && pressDur >= threshold ? "on" : ""}`} />
              </span>
            </div>

            <div className="threshold">
              <div className="thr-bar" style={{ "--fill": Math.min(100, pressDur / 500 * 100) + "%" } as React.CSSProperties}>
                <div className="thr-ticks">
                  {Array.from({ length: 20 }).map((_, i) => <span key={i} className="thr-tick" />)}
                </div>
                <div className={`thr-fill ${pressDur >= threshold ? "in-dash" : ""}`} />
                <div className="thr-marker" style={{ left: (threshold / 500 * 100) + "%" }} />
              </div>
              <span className="thr-label">{Math.round(pressDur).toString().padStart(3, "0")} {t.units.ms}</span>
            </div>

            <div className="key-row">
              <button className="side-btn space-btn" onClick={pressSpace} disabled={tab === 3} title={t.space}>
                <IconSpace /><span>{t.space}</span>
              </button>
              <div className="key-mount">
                <div
                  className={`keyround ${keyDown ? "down" : ""}`}
                  onPointerDown={(e) => { e.currentTarget.setPointerCapture(e.pointerId); handleDown(); }}
                  onPointerUp={handleUp}
                  onPointerCancel={handleUp}
                >
                  <span className="keyround-rim" />
                  <span className="keyround-face" />
                  <span className="keyround-icon"><IconAnt /></span>
                </div>
              </div>
              <button className="side-btn del-btn" onClick={pressDelete} disabled={tab === 3} title={t.del}>
                <IconBackspace /><span>{t.del}</span>
              </button>
            </div>
          </div>

          {/* CENTER LETTER POP */}
          {flashCode && code2char[flashCode] && (
            <div className="letterpop">
              <span className="letterpop-glyph">{code2char[flashCode]}</span>
              <span className="letterpop-code">{flashCode.replace(/\./g, "•").replace(/-/g, "━")}</span>
            </div>
          )}
          {wrongCode && code2char[wrongCode] && !flashCode && (
            <div className="letterpop wrong">
              <span className="letterpop-glyph">{code2char[wrongCode]}</span>
              <span className="letterpop-code">{wrongCode.replace(/\./g, "•").replace(/-/g, "━")}</span>
            </div>
          )}
    </div>
  );
}
