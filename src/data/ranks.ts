export interface Rank {
  key: string;
  minWpm: number;
  icon: string;
  label: Record<string, string>;
}

export const RANKS: Rank[] = [
  { key: "recruit",   minWpm: 0,  icon: "⚓", label: { RU: "ЮНГА",       EN: "RECRUIT",    ES: "RECLUTA",   DE: "REKRUT",    FR: "RECRUE",     IT: "RECLUTA",   PT: "RECRUTA",   PL: "REKRUT",    TR: "ACEMI",     NL: "REKRUUT",   SV: "REKRYT",    UK: "ЮНГА",       NO: "REKRUTT"   } },
  { key: "seaman",    minWpm: 3,  icon: "🔵", label: { RU: "МАТРОС",     EN: "SEAMAN",     ES: "MARINERO",  DE: "MATROSE",   FR: "MATELOT",    IT: "MARINAIO",  PT: "MARINHEIRO", PL: "MARYNARZ",  TR: "DENIZCI",   NL: "MATROOS",   SV: "MATROS",    UK: "МАТРОС",     NO: "MATROS"    } },
  { key: "signalman", minWpm: 6,  icon: "📡", label: { RU: "СИГНАЛЬЩИК", EN: "SIGNALMAN",  ES: "SENALERO",  DE: "SIGNALER",  FR: "SIGNALEUR",  IT: "SEGNALATORE", PT: "SINALEIRO", PL: "SYGNALISTA", TR: "SINYALCI", NL: "SEINER",    SV: "SIGNALIST", UK: "СИГНАЛЬНИК", NO: "SIGNALIST" } },
  { key: "operator",  minWpm: 10, icon: "🎧", label: { RU: "РАДИСТ",     EN: "OPERATOR",   ES: "OPERADOR",  DE: "FUNKER",    FR: "OPÉRATEUR",  IT: "OPERATORE", PT: "OPERADOR",  PL: "OPERATOR",  TR: "OPERATÖR",  NL: "OPERATOR",  SV: "OPERATÖR",  UK: "РАДИСТ",     NO: "OPERATØR"  } },
  { key: "officer",   minWpm: 15, icon: "⭐", label: { RU: "ОФИЦЕР",     EN: "OFFICER",    ES: "OFICIAL",   DE: "OFFIZIER",  FR: "OFFICIER",   IT: "UFFICIALE", PT: "OFICIAL",   PL: "OFICER",    TR: "SUBAY",     NL: "OFFICIER",  SV: "OFFICER",   UK: "ОФІЦЕР",     NO: "OFFISER"   } },
  { key: "captain",   minWpm: 20, icon: "🏅", label: { RU: "КАПИТАН",    EN: "CAPTAIN",    ES: "CAPITÁN",   DE: "KAPITÄN",   FR: "CAPITAINE",  IT: "CAPITANO",  PT: "CAPITÃO",   PL: "KAPITAN",   TR: "KAPTAN",    NL: "KAPITEIN",  SV: "KAPTEN",    UK: "КАПІТАН",    NO: "KAPTEIN"   } },
  { key: "commander", minWpm: 28, icon: "🎖️", label: { RU: "КОМАНДОР",   EN: "COMMANDER",  ES: "COMANDANTE", DE: "KOMMANDANT", FR: "COMMANDANT", IT: "COMANDANTE", PT: "COMANDANTE", PL: "KOMANDOR", TR: "KOMUTAN",   NL: "COMMANDANT", SV: "KOMMENDÖR", UK: "КОМАНДОР",  NO: "KOMMANDØR" } },
  { key: "admiral",   minWpm: 35, icon: "👑", label: { RU: "АДМИРАЛ",    EN: "ADMIRAL",    ES: "ALMIRANTE", DE: "ADMIRAL",   FR: "AMIRAL",     IT: "AMMIRAGLIO", PT: "ALMIRANTE", PL: "ADMIRAŁ",  TR: "AMIRAL",    NL: "ADMIRAAL",  SV: "AMIRAL",    UK: "АДМІРАЛ",    NO: "ADMIRAL"   } },
];

export function getRank(wpm: number): Rank {
  let r = RANKS[0];
  for (const rank of RANKS) {
    if (wpm >= rank.minWpm) r = rank;
  }
  return r;
}

export function getNextRank(wpm: number): Rank | null {
  for (const rank of RANKS) {
    if (wpm < rank.minWpm) return rank;
  }
  return null;
}
