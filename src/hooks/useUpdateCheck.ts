import { useState, useEffect, useRef } from "react";

const CHECK_INTERVAL = 60_000;

export function useUpdateCheck() {
  const [updateAvailable, setUpdateAvailable] = useState(false);
  const knownVersion = useRef<number | null>(null);

  useEffect(() => {
    async function check() {
      try {
        const res = await fetch("/version.json?t=" + Date.now(), { cache: "no-store" });
        if (!res.ok) return;
        const { v } = await res.json();
        if (knownVersion.current === null) {
          knownVersion.current = v;
        } else if (v !== knownVersion.current) {
          setUpdateAvailable(true);
        }
      } catch { /* offline or dev mode */ }
    }

    check();
    const id = setInterval(check, CHECK_INTERVAL);
    return () => clearInterval(id);
  }, []);

  return { updateAvailable, reload: () => location.reload() };
}
