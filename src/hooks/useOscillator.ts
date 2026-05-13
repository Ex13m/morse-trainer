import { useRef, useCallback, useEffect } from "react";

export function useOscillator() {
  const ctxRef = useRef<AudioContext | null>(null);
  const oscRef = useRef<OscillatorNode | null>(null);
  const gainRef = useRef<GainNode | null>(null);
  const readyRef = useRef(false);

  // Pre-init AudioContext on first user gesture (removes first-tap lag)
  useEffect(() => {
    const warmup = () => {
      if (readyRef.current) return;
      const C = window.AudioContext || (window as never as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (!C) return;
      const ctx = new C();
      // Play silent buffer to fully unlock audio on iOS/Android
      const buf = ctx.createBuffer(1, 1, ctx.sampleRate);
      const src = ctx.createBufferSource();
      src.buffer = buf;
      src.connect(ctx.destination);
      src.start();
      ctxRef.current = ctx;
      readyRef.current = true;
    };
    document.addEventListener("pointerdown", warmup, { once: true });
    document.addEventListener("keydown", warmup, { once: true });
    return () => {
      document.removeEventListener("pointerdown", warmup);
      document.removeEventListener("keydown", warmup);
    };
  }, []);

  const on = useCallback((freq: number) => {
    let ctx = ctxRef.current;
    if (!ctx) {
      const C = window.AudioContext || (window as never as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (!C) return;
      ctx = new C();
      ctxRef.current = ctx;
    }
    if (ctx.state === "suspended") ctx.resume();
    if (oscRef.current) return;
    const osc = ctx.createOscillator();
    const g = ctx.createGain();
    osc.type = "sine";
    osc.frequency.value = freq;
    g.gain.setValueAtTime(0, ctx.currentTime);
    g.gain.linearRampToValueAtTime(0.22, ctx.currentTime + 0.008);
    osc.connect(g).connect(ctx.destination);
    osc.start();
    oscRef.current = osc;
    gainRef.current = g;
  }, []);

  const off = useCallback(() => {
    const ctx = ctxRef.current;
    if (!ctx || !oscRef.current) return;
    const g = gainRef.current!;
    const o = oscRef.current;
    g.gain.cancelScheduledValues(ctx.currentTime);
    g.gain.setValueAtTime(g.gain.value, ctx.currentTime);
    g.gain.linearRampToValueAtTime(0, ctx.currentTime + 0.015);
    o.stop(ctx.currentTime + 0.025);
    oscRef.current = null;
    gainRef.current = null;
  }, []);

  return { on, off };
}
