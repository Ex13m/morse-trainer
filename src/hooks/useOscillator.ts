import { useRef } from "react";

export function useOscillator() {
  const ctxRef = useRef<AudioContext | null>(null);
  const oscRef = useRef<OscillatorNode | null>(null);
  const gainRef = useRef<GainNode | null>(null);

  const ensure = () => {
    if (!ctxRef.current) {
      const C = window.AudioContext || (window as never as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (!C) return null;
      ctxRef.current = new C();
    }
    return ctxRef.current;
  };

  const on = (freq: number) => {
    const ctx = ensure();
    if (!ctx) return;
    if (ctx.state === "suspended") ctx.resume();
    if (oscRef.current) return;
    const osc = ctx.createOscillator();
    const g = ctx.createGain();
    osc.type = "sine";
    osc.frequency.value = freq;
    g.gain.setValueAtTime(0, ctx.currentTime);
    g.gain.linearRampToValueAtTime(0.22, ctx.currentTime + 0.012);
    osc.connect(g).connect(ctx.destination);
    osc.start();
    oscRef.current = osc;
    gainRef.current = g;
  };

  const off = () => {
    const ctx = ctxRef.current;
    if (!ctx || !oscRef.current) return;
    const g = gainRef.current!;
    const o = oscRef.current;
    g.gain.cancelScheduledValues(ctx.currentTime);
    g.gain.setValueAtTime(g.gain.value, ctx.currentTime);
    g.gain.linearRampToValueAtTime(0, ctx.currentTime + 0.02);
    o.stop(ctx.currentTime + 0.03);
    oscRef.current = null;
    gainRef.current = null;
  };

  return { on, off };
}
