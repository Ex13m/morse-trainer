import { useState, useEffect } from "react";

export default function Splash({ onDone }: { onDone: () => void }) {
  const [phase, setPhase] = useState<"in" | "out">("in");

  useEffect(() => {
    const t1 = setTimeout(() => setPhase("out"), 2400);
    const t2 = setTimeout(onDone, 3200);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, [onDone]);

  return (
    <div className={`splash ${phase}`} onClick={() => { setPhase("out"); setTimeout(onDone, 600); }}>
      <div className="splash-ring splash-ring-3" />
      <div className="splash-ring splash-ring-2" />
      <div className="splash-ring splash-ring-1" />
      <div className="splash-key">
        <div className="splash-dot" />
      </div>
      <div className="splash-mast" />
      <div className="splash-morse">
        <span className="sm-dot" />
        <span className="sm-dash" />
        <span className="sm-dot" />
        <span className="sm-dot" />
        <span className="sm-dash" />
      </div>
      <h1 className="splash-title">MORSE<br/>TRAINER</h1>
      <p className="splash-sub">·· — ·</p>
    </div>
  );
}
