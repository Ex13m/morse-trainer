import { MORSE_MAPS } from "./morse";

const dotMs = (wpm: number) => 1200 / Math.max(5, wpm);

function audioBufferToWav(buffer: AudioBuffer): Blob {
  const numCh = buffer.numberOfChannels;
  const sampleRate = buffer.sampleRate;
  const len = buffer.length * numCh * 2 + 44;
  const arr = new ArrayBuffer(len);
  const view = new DataView(arr);
  const writeStr = (off: number, s: string) => {
    for (let i = 0; i < s.length; i++) view.setUint8(off + i, s.charCodeAt(i));
  };
  writeStr(0, "RIFF");
  view.setUint32(4, len - 8, true);
  writeStr(8, "WAVE");
  writeStr(12, "fmt ");
  view.setUint32(16, 16, true);
  view.setUint16(20, 1, true);
  view.setUint16(22, numCh, true);
  view.setUint32(24, sampleRate, true);
  view.setUint32(28, sampleRate * numCh * 2, true);
  view.setUint16(32, numCh * 2, true);
  view.setUint16(34, 16, true);
  writeStr(36, "data");
  view.setUint32(40, len - 44, true);
  let off = 44;
  const channels: Float32Array[] = [];
  for (let c = 0; c < numCh; c++) channels.push(buffer.getChannelData(c));
  for (let i = 0; i < buffer.length; i++) {
    for (let c = 0; c < numCh; c++) {
      const s = Math.max(-1, Math.min(1, channels[c][i]));
      view.setInt16(off, s < 0 ? s * 0x8000 : s * 0x7fff, true);
      off += 2;
    }
  }
  return new Blob([arr], { type: "audio/wav" });
}

async function renderMorseAudio(
  text: string,
  map: Record<string, string>,
  opts: { wpm?: number; freq?: number; sampleRate?: number } = {}
): Promise<AudioBuffer> {
  const { wpm = 15, freq = 620, sampleRate = 22050 } = opts;
  const dot = dotMs(wpm) / 1000;
  const segments: { on: boolean; dur: number }[] = [];
  let total = 0;
  for (const raw of text.toUpperCase()) {
    if (raw === " ") {
      segments.push({ on: false, dur: dot * 7 });
      total += dot * 7;
      continue;
    }
    const code = map[raw];
    if (!code) continue;
    for (let i = 0; i < code.length; i++) {
      const sym = code[i];
      const d = sym === "." ? dot : dot * 3;
      segments.push({ on: true, dur: d });
      total += d;
      if (i < code.length - 1) {
        segments.push({ on: false, dur: dot });
        total += dot;
      }
    }
    segments.push({ on: false, dur: dot * 3 });
    total += dot * 3;
  }
  if (total < 0.05) total = 0.05;
  const C = window.OfflineAudioContext || (window as any).webkitOfflineAudioContext;
  const ctx = new C(1, Math.ceil(total * sampleRate) + 1, sampleRate);
  let t = 0;
  for (const seg of segments) {
    if (seg.on) {
      const osc = ctx.createOscillator();
      const g = ctx.createGain();
      osc.frequency.value = freq;
      osc.type = "sine";
      g.gain.setValueAtTime(0, t);
      g.gain.linearRampToValueAtTime(0.5, t + 0.005);
      g.gain.setValueAtTime(0.5, t + seg.dur - 0.005);
      g.gain.linearRampToValueAtTime(0, t + seg.dur);
      osc.connect(g).connect(ctx.destination);
      osc.start(t);
      osc.stop(t + seg.dur + 0.01);
    }
    t += seg.dur;
  }
  return ctx.startRendering();
}

export async function exportWav(
  text: string,
  map: Record<string, string>,
  opts: { wpm?: number; freq?: number }
): Promise<Blob> {
  const buf = await renderMorseAudio(text, map, opts);
  return audioBufferToWav(buf);
}

function envelope(buffer: AudioBuffer, winMs = 8) {
  const ch = buffer.getChannelData(0);
  const sr = buffer.sampleRate;
  const win = Math.max(8, Math.floor((winMs / 1000) * sr));
  const n = Math.floor(ch.length / win);
  const env = new Float32Array(n);
  for (let i = 0; i < n; i++) {
    let sum = 0;
    const start = i * win;
    const end = start + win;
    for (let j = start; j < end; j++) sum += ch[j] * ch[j];
    env[i] = Math.sqrt(sum / win);
  }
  return { env, dt: win / sr };
}

function runsToMorse(env: Float32Array, _dt: number, threshold: number): string {
  const runs: { on: boolean; samples: number }[] = [];
  let cur = env[0] > threshold ? 1 : 0;
  let len = 1;
  for (let i = 1; i < env.length; i++) {
    const s = env[i] > threshold ? 1 : 0;
    if (s === cur) { len++; continue; }
    runs.push({ on: cur === 1, samples: len });
    cur = s; len = 1;
  }
  runs.push({ on: cur === 1, samples: len });

  const onRuns = runs.filter(r => r.on).map(r => r.samples);
  if (onRuns.length < 1) return "";
  onRuns.sort((a, b) => a - b);
  const dotSamples = onRuns[Math.max(0, Math.floor(onRuns.length * 0.25))];
  if (!dotSamples) return "";

  const out: string[] = [];
  for (let i = 0; i < runs.length; i++) {
    const r = runs[i];
    const units = r.samples / dotSamples;
    if (r.on) {
      out.push(units < 2 ? "." : "-");
    } else {
      if (i === 0 || i === runs.length - 1) continue;
      if (units >= 5) out.push(" ");
      else if (units >= 2) out.push("/");
    }
  }
  let s = out.join("");
  s = s.replace(/\/+/g, "/").replace(/ +/g, " ");
  return s;
}

export function morseToText(morse: string, map: Record<string, string>) {
  const rev: Record<string, string> = {};
  for (const [k, v] of Object.entries(map)) rev[v] = k;
  let text = "";
  let unknown = 0, total = 0;
  const words = morse.split(" ");
  for (let w = 0; w < words.length; w++) {
    const letters = words[w].split("/");
    for (const l of letters) {
      if (!l) continue;
      total++;
      const ch = rev[l];
      if (ch) text += ch;
      else { text += "·"; unknown++; }
    }
    if (w < words.length - 1) text += " ";
  }
  return { text, unknown, total };
}

async function decodeBuffer(buffer: AudioBuffer, alphabets: Record<string, Record<string, string>>) {
  const { env, dt } = envelope(buffer, 8);
  let peak = 0;
  for (let i = 0; i < env.length; i++) if (env[i] > peak) peak = env[i];
  const threshold = peak * 0.25;
  const morse = runsToMorse(env, dt, threshold);
  let best: { text: string; unknown: number; total: number; score: number; alpha: string; morse: string } | null = null;
  for (const [name, map] of Object.entries(alphabets)) {
    const r = morseToText(morse, map);
    const score = r.total > 0 ? (r.total - r.unknown) / r.total : 0;
    if (!best || score > best.score) best = { ...r, score, alpha: name, morse };
  }
  return best || { text: "", alpha: "", morse: "", score: 0, unknown: 0, total: 0 };
}

export async function decodeFile(file: File) {
  const arr = await file.arrayBuffer();
  const C = window.AudioContext || (window as any).webkitAudioContext;
  const ctx = new C();
  const buf = await ctx.decodeAudioData(arr);
  const r = await decodeBuffer(buf, MORSE_MAPS);
  ctx.close?.();
  return r;
}

export interface MicDecoderInstance {
  start(): Promise<void>;
  stop(): void;
  getMorse(): string;
}

export function createMicDecoder(opts: {
  onSymbol?: (sym: string, full: string) => void;
}): MicDecoderInstance {
  let stream: MediaStream;
  let ctx: AudioContext;
  let raf: number;
  const buffer: string[] = [];
  let lastOn = false;
  let onStartT = 0, offStartT = 0;
  let dotEstimate = 0.12;

  async function start() {
    stream = await navigator.mediaDevices.getUserMedia({
      audio: { echoCancellation: false, noiseSuppression: false, autoGainControl: false },
    });
    const AC = window.AudioContext || (window as any).webkitAudioContext;
    ctx = new AC();
    const src = ctx.createMediaStreamSource(stream);
    const analyser = ctx.createAnalyser();
    analyser.fftSize = 1024;
    analyser.smoothingTimeConstant = 0.3;
    src.connect(analyser);
    const data = new Uint8Array(analyser.fftSize);
    const loop = () => {
      analyser.getByteTimeDomainData(data);
      let sum = 0;
      for (let i = 0; i < data.length; i++) {
        const v = (data[i] - 128) / 128;
        sum += v * v;
      }
      const rms = Math.sqrt(sum / data.length);
      const now = ctx.currentTime;
      const ON_TH = 0.05;
      const isOn = rms > ON_TH;
      if (isOn && !lastOn) {
        const gap = now - offStartT;
        if (offStartT && gap > dotEstimate * 5) buffer.push(" ");
        else if (offStartT && gap > dotEstimate * 2) buffer.push("/");
        onStartT = now;
        lastOn = true;
      } else if (!isOn && lastOn) {
        const dur = now - onStartT;
        const sym = dur < dotEstimate * 2 ? "." : "-";
        if (sym === ".") dotEstimate = dotEstimate * 0.85 + dur * 0.15;
        buffer.push(sym);
        offStartT = now;
        lastOn = false;
        opts.onSymbol?.(sym, buffer.join(""));
      }
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
  }

  function stop() {
    cancelAnimationFrame(raf);
    stream?.getTracks().forEach(t => t.stop());
    ctx?.close();
  }

  function getMorse() { return buffer.join(""); }

  return { start, stop, getMorse };
}
