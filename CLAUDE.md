# Morse Trainer

## Stack
- React 19 + TypeScript + Vite 8
- Single-page app, no routing
- CSS with design tokens (no CSS-in-JS)
- Web Audio API for oscillator, WAV export, file decode, mic decode

## Structure
```
src/
  App.tsx          — main component with all state and 4 tab views
  main.tsx         — entry point
  data/
    morse.ts       — MORSE_RU, MORSE_EN maps + PHRASES pools
    i18n.ts        — I18N string tables (RU/EN)
    morseCodec.ts  — WAV export, file decode, mic decode
  hooks/
    useOscillator.ts — sine wave oscillator hook
  components/
    Icons.tsx      — all SVG icon components
  styles/
    tokens.css     — CSS custom properties (brass palette, fonts, sizing)
    app.css        — all visual styling
```

## Dev
- `npm run dev` — start Vite dev server
- `npm run build` — build for production
- Node.js path on this machine: `C:\Program Files\nodejs`

## Design
- Mobile-first device frame 414x896px
- Brass-engraved aesthetic with layered box-shadows
- Fonts: Cinzel (headings), IBM Plex Sans (UI), JetBrains Mono (technical), Special Elite (typed text)
- Design reference: `../design_handoff_morse_trainer/`
