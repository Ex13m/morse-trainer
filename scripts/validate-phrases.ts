// Validates that every training phrase can be keyed with the language's
// Morse map (no characters without a code). Run: npx tsx scripts/validate-phrases.ts
import { MORSE_MAPS } from "../src/data/morse";
import { PHRASES } from "../src/data/phraseGen";

let bad = 0;
const stats: Record<string, number> = {};
for (const [lang, themes] of Object.entries(PHRASES)) {
  const map = MORSE_MAPS[lang as keyof typeof MORSE_MAPS];
  let total = 0;
  for (const [theme, phrases] of Object.entries(themes)) {
    total += phrases.length;
    for (const p of phrases) {
      const missing = [...new Set(p.split(""))].filter(c => c !== " " && !map[c]);
      if (missing.length) {
        bad++;
        console.log(`${lang}/${theme}: "${p}" -> missing [${missing.join(" ")}]`);
      }
    }
  }
  stats[lang] = total;
}
console.log("---- pool sizes ----");
console.log(JSON.stringify(stats));
console.log(bad === 0 ? "ALL OK" : `${bad} BAD PHRASES`);
if (bad > 0) process.exit(1);
