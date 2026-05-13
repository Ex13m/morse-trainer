import { useState, useEffect } from "react";

const STORAGE_KEY = "morse-build-v";

export function useUpdateCheck() {
  const [updateAvailable, setUpdateAvailable] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch("/version.json?t=" + Date.now(), { cache: "no-store" });
        if (!res.ok) return;
        const { v } = await res.json();
        const prev = localStorage.getItem(STORAGE_KEY);
        if (prev && prev !== String(v)) {
          setUpdateAvailable(true);
        }
        localStorage.setItem(STORAGE_KEY, String(v));
      } catch { /* offline or dev mode */ }
    })();
  }, []);

  return { updateAvailable, reload: () => location.reload() };
}
