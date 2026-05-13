import type { SVGProps } from "react";

type P = SVGProps<SVGSVGElement>;

export const IconCap = (p: P) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" {...p}>
    <path d="M12 4 2 9l10 5 10-5-10-5Z" />
    <path d="M5 11v5c0 1 3 3 7 3s7-2 7-3v-5" />
  </svg>
);

export const IconPencil = (p: P) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" {...p}>
    <path d="M4 20h4l10-10-4-4L4 16v4Z" />
    <path d="m14 6 4 4" />
  </svg>
);

export const IconCode = (p: P) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" {...p}>
    <path d="m8 6-6 6 6 6" />
    <path d="m16 6 6 6-6 6" />
  </svg>
);

export const IconGear = (p: P) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" {...p}>
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.7 1.7 0 0 0 .4 1.9l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.9-.4 1.7 1.7 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1-1.5 1.7 1.7 0 0 0-1.9.4l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .4-1.9 1.7 1.7 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1a1.7 1.7 0 0 0 1.5-1 1.7 1.7 0 0 0-.4-1.9l-.1-.1A2 2 0 1 1 6.9 4.3l.1.1a1.7 1.7 0 0 0 1.9.4H9a1.7 1.7 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.9-.4l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.4 1.9V9a1.7 1.7 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1Z" />
  </svg>
);

export const IconX = (p: P) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" {...p}>
    <path d="m6 6 12 12M18 6 6 18" />
  </svg>
);

export const IconSpace = (p: P) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" {...p}>
    <path d="M4 10v3a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-3" />
  </svg>
);

export const IconBackspace = (p: P) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" {...p}>
    <path d="M21 5H8L3 12l5 7h13a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1Z" />
    <path d="m11 9 6 6M17 9l-6 6" />
  </svg>
);

export const IconDownload = (p: P) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" {...p}>
    <path d="M12 4v12" />
    <path d="m6 11 6 6 6-6" />
    <path d="M4 21h16" />
  </svg>
);

export const IconUpload = (p: P) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" {...p}>
    <path d="M12 20V8" />
    <path d="m6 13 6-6 6 6" />
    <path d="M4 4h16" />
  </svg>
);

export const IconMic = (p: P) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" {...p}>
    <rect x="9" y="3" width="6" height="12" rx="3" />
    <path d="M5 11a7 7 0 0 0 14 0" />
    <path d="M12 18v3" />
  </svg>
);

export const IconGlobe = (p: P) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" {...p}>
    <circle cx="12" cy="12" r="10" />
    <path d="M2 12h20" />
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10A15.3 15.3 0 0 1 12 2z" />
  </svg>
);

export const IconAnt = (p: P) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...p}>
    <circle cx="12" cy="12" r="2" fill="currentColor" />
    <path d="M8 12a4 4 0 0 1 8 0" />
    <path d="M5 12a7 7 0 0 1 14 0" />
    <path d="M2 12a10 10 0 0 1 20 0" />
    <path d="M12 14v6" />
  </svg>
);

export const Sig = () => (
  <svg width="18" height="12" viewBox="0 0 18 12" fill="currentColor">
    <rect x="0" y="9" width="3" height="3" />
    <rect x="5" y="6" width="3" height="6" />
    <rect x="10" y="3" width="3" height="9" />
    <rect x="15" y="0" width="3" height="12" />
  </svg>
);

export const Wifi = () => (
  <svg width="16" height="12" viewBox="0 0 16 12" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M1 4a11 11 0 0 1 14 0" />
    <path d="M3 7a7 7 0 0 1 10 0" />
    <path d="M6 10a3 3 0 0 1 4 0" />
  </svg>
);

export const Batt = () => (
  <svg width="26" height="12" viewBox="0 0 26 12" fill="none" stroke="currentColor" strokeWidth="1">
    <rect x="1" y="1" width="20" height="10" rx="2" />
    <rect x="3" y="3" width="14" height="6" fill="currentColor" />
    <rect x="22" y="4" width="2" height="4" rx="1" fill="currentColor" />
  </svg>
);
