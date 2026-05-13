import type { Lang, Theme } from "./morse";

const WORDS: Record<Lang, Record<string, string[]>> = {
  RU: {
    sea: [
      "МАЯК", "ЯКОРЬ", "КОМПАС", "ШТУРВАЛ", "БОРТ", "КОРМА", "ПАРУС", "МАЧТА", "ВОЛНА", "ШТОРМ",
      "ТУМАН", "РЕЙД", "ПРИЧАЛ", "БУХТА", "ПРОЛИВ", "РИСК", "ЛОЦМАН", "БУКСИР", "ТРАП", "КАЮТА",
      "КУРС", "ДРЕЙФ", "ЗАЛИВ", "ФАРВАТЕР", "БЕРЕГ", "ПОРТ", "КАТЕР", "ШЛЮПКА", "КАНАТ", "УЗЕЛ",
      "ПРИБОЙ", "ПРИЛИВ", "ОТЛИВ", "ГЛУБИНА", "МЕЛЬ", "ОСТРОВ", "БРИЗ", "ПАЛУБА", "ТРЮМ", "РУМБ",
    ],
    war: [
      "АТАКА", "ФЛАНГ", "ШТУРМ", "ОКОП", "ДОЗОР", "РУБЕЖ", "СВЯЗЬ", "РЕЗЕРВ", "ПОЗИЦИЯ", "ВЫСОТА",
      "МАРШ", "ЗАСАДА", "ПРИКАЗ", "ОГОНЬ", "ОТХОД", "РАЗВЕДКА", "КОЛОННА", "БРОНЬ", "ЗАЛП", "РАДИО",
      "ПОСТ", "ШТАБ", "БЛИНДАЖ", "ДИВИЗИЯ", "ФРОНТ", "ТЫЛ", "МИНЕР", "ДЕСАНТ", "БУНКЕР", "ПАТРУЛЬ",
      "ЗАДАЧА", "СИГНАЛ", "ПРОРЫВ", "УКРЫТИЕ", "РАЦИЯ", "КОНВОЙ", "БОРЬБА", "ПОБЕДА", "ОБОРОНА", "УДАР",
    ],
    spy: [
      "АГЕНТ", "ПАРОЛЬ", "ШИФР", "ЯВКА", "КОНВЕРТ", "ТАЙНИК", "ВСТРЕЧА", "ПРОВАЛ", "СЛЕД", "ДОНОС",
      "ЗАПИСЬ", "МАСКА", "ЛЕГЕНДА", "СВЯЗНОЙ", "КОНТАКТ", "ОПАСНОСТЬ", "ПОБЕГ", "НАБЛЮДЕНИЕ", "ПЕРЕХВАТ", "ДОСЬЕ",
      "ВОРОН", "ЛУНА", "ТЕНЬ", "РАССВЕТ", "ЗАКАТ", "ЯЩЕРИЦА", "СИГНАЛ", "НОЧЬ", "МОСТ", "КЛЮЧ",
      "ОТЧЕТ", "МИССИЯ", "БАЗА", "ТОЧКА", "ВЫХОД", "ВХОД", "АРХИВ", "ПЛАН", "ФОТО", "КАРТА",
    ],
    sos: [
      "СОС", "ПОМОЩЬ", "ПОЖАР", "АВАРИЯ", "ТРЕВОГА", "СПАСЕНИЕ", "ЭВАКУАЦИЯ", "КРУШЕНИЕ", "ОПАСНОСТЬ", "БЕДСТВИЕ",
      "РАНЕН", "ВОДА", "БЕРЕГ", "КООРДИНАТЫ", "СИГНАЛ", "РАКЕТА", "БУРЯ", "ТЕЧЬ", "КРЕН", "ДРЕЙФ",
    ],
    pirate: [
      "КЛАД", "СУНДУК", "ЗОЛОТО", "ОСТРОВ", "САБЛЯ", "ПУШКА", "АБОРДАЖ", "КАПИТАН", "ФЛАГ", "БРИГ",
      "КАРТА", "КОМПАС", "ЯКОРЬ", "БОЧКА", "РОМ", "ТРЮМ", "МАТРОС", "ШТУРВАЛ", "ПИРАТ", "ВЕТЕР",
      "НАГРАДА", "ОХОТА", "БУХТА", "СКАЛА", "ПЕЩЕРА", "РУБИН", "ЖЕМЧУГ", "КОРОНА", "КИНЖАЛ", "ДОБЫЧА",
    ],
    space: [
      "ОРБИТА", "РАКЕТА", "КОСМОС", "ЗВЕЗДА", "ПЛАНЕТА", "КОМЕТА", "ЛУНА", "МОДУЛЬ", "СТАНЦИЯ", "СКАФАНДР",
      "СТЫКОВКА", "ПУСК", "ДВИГАТЕЛЬ", "ТОПЛИВО", "ЗОНД", "РАДАР", "МАРС", "ЮПИТЕР", "СПУТНИК", "ТРАЕКТОРИЯ",
      "НЕВЕСОМОСТЬ", "ВАКУУМ", "КОРАБЛЬ", "ЭКИПАЖ", "ПИЛОТ", "АНТЕННА", "СОЛНЦЕ", "ГАЛАКТИКА", "АСТЕРОИД", "ТУМАННОСТЬ",
    ],
    animal: [
      "ВОЛК", "ОРЕЛ", "МЕДВЕДЬ", "ДЕЛЬФИН", "СОВА", "ЛИСА", "ЗАЯЦ", "ТИГР", "ОЛЕНЬ", "ВОРОН",
      "ЯСТРЕБ", "БАРСУК", "РЫСЬ", "БОБЕР", "ЛОСЬ", "ЗМЕЯ", "ЖУРАВЛЬ", "ПАНТЕРА", "КОБРА", "СОКОЛ",
      "ВЫДРА", "ЦАПЛЯ", "БЕЛКА", "ЕНОТ", "ПУМА", "КУНИЦА", "ХОРЕК", "ФИЛИН", "СКОРПИОН", "ПЕЛИКАН",
    ],
  },
  EN: {
    sea: [
      "BEACON", "ANCHOR", "COMPASS", "HELM", "STERN", "BOW", "SAIL", "MAST", "WAVE", "STORM",
      "FOG", "HARBOR", "DOCK", "BAY", "STRAIT", "PILOT", "TUGBOAT", "GANGWAY", "CABIN", "COURSE",
      "DRIFT", "GULF", "SHORE", "PORT", "BOAT", "DINGHY", "ROPE", "KNOT", "TIDE", "REEF",
      "DEPTH", "ISLAND", "BREEZE", "DECK", "HOLD", "RUDDER", "BUOY", "CARGO", "FLEET", "VOYAGE",
    ],
    war: [
      "ATTACK", "FLANK", "STORM", "TRENCH", "PATROL", "LINE", "RADIO", "RESERVE", "POST", "HEIGHT",
      "MARCH", "AMBUSH", "ORDER", "FIRE", "RETREAT", "RECON", "COLUMN", "ARMOR", "VOLLEY", "SIGNAL",
      "BASE", "HQ", "BUNKER", "FRONT", "REAR", "SAPPER", "SQUAD", "STRIKE", "GUARD", "CONVOY",
      "TASK", "BREACH", "COVER", "MISSION", "RALLY", "DEFEND", "CHARGE", "VICTORY", "SECTOR", "FLARE",
    ],
    spy: [
      "AGENT", "CODE", "CIPHER", "DROP", "LETTER", "CACHE", "MEET", "BLOWN", "TRAIL", "REPORT",
      "MASK", "COVER", "CONTACT", "DANGER", "ESCAPE", "WATCH", "INTERCEPT", "RAVEN", "MOON", "SHADOW",
      "DAWN", "SUNSET", "LIZARD", "SIGNAL", "NIGHT", "BRIDGE", "KEY", "DOSSIER", "MISSION", "TARGET",
      "EXIT", "ENTRY", "ARCHIVE", "PLAN", "PHOTO", "MAP", "SAFE", "DEAD DROP", "HANDLER", "MOLE",
    ],
    sos: [
      "SOS", "HELP", "FIRE", "CRASH", "ALARM", "RESCUE", "DANGER", "WRECK", "HURT", "WATER",
      "SHORE", "SIGNAL", "FLARE", "STORM", "LEAK", "DRIFT", "SINKING", "MAYDAY", "STRANDED", "FLOOD",
    ],
    pirate: [
      "TREASURE", "CHEST", "GOLD", "ISLAND", "SWORD", "CANNON", "BOARD", "CAPTAIN", "FLAG", "BRIG",
      "MAP", "COMPASS", "ANCHOR", "BARREL", "RUM", "HOLD", "SAILOR", "HELM", "PIRATE", "WIND",
      "BOUNTY", "HUNT", "COVE", "ROCK", "CAVE", "RUBY", "PEARL", "CROWN", "DAGGER", "LOOT",
    ],
    space: [
      "ORBIT", "ROCKET", "COSMOS", "STAR", "PLANET", "COMET", "MOON", "MODULE", "STATION", "SUIT",
      "DOCKING", "LAUNCH", "ENGINE", "FUEL", "PROBE", "RADAR", "MARS", "JUPITER", "SATELLITE", "PATH",
      "GRAVITY", "VACUUM", "CRAFT", "CREW", "PILOT", "ANTENNA", "SUN", "GALAXY", "ASTEROID", "NEBULA",
    ],
    animal: [
      "WOLF", "EAGLE", "BEAR", "DOLPHIN", "OWL", "FOX", "RABBIT", "TIGER", "DEER", "RAVEN",
      "HAWK", "BADGER", "LYNX", "BEAVER", "MOOSE", "SNAKE", "CRANE", "PANTHER", "COBRA", "FALCON",
      "OTTER", "HERON", "SQUIRREL", "RACCOON", "PUMA", "MARTEN", "FERRET", "HORNET", "PELICAN", "SHARK",
    ],
  },
  ES: {
    sea: [
      "FARO", "ANCLA", "BRUJULA", "TIMON", "POPA", "PROA", "VELA", "MASTIL", "OLA", "TORMENTA",
      "NIEBLA", "PUERTO", "MUELLE", "BAHIA", "ESTRECHO", "PILOTO", "BOTE", "CUBIERTA", "RUMBO", "DERIVA",
      "GOLFO", "COSTA", "ISLA", "BRISA", "CARGA", "FLOTA", "VIAJE", "NUDO", "MAREA", "ARRECIFE",
    ],
    war: [
      "ATAQUE", "FLANCO", "ASALTO", "TRINCHERA", "PATRULLA", "LINEA", "RADIO", "RESERVA", "PUESTO", "ALTURA",
      "MARCHA", "EMBOSCADA", "ORDEN", "FUEGO", "RETIRADA", "COLUMNA", "BLINDAJE", "SALVA", "BASE", "FRENTE",
      "BUNKER", "MISION", "DEFENSA", "CARGA", "VICTORIA", "SECTOR", "GUARDIA", "CONVOY", "BRECHA", "ESCUADRA",
    ],
    spy: [
      "AGENTE", "CLAVE", "CIFRA", "PUNTO", "SOBRE", "CONTACTO", "PELIGRO", "ESCAPE", "INFORME", "SOMBRA",
      "AMANECER", "NOCHE", "PUENTE", "LLAVE", "MISION", "OBJETIVO", "SALIDA", "ENTRADA", "ARCHIVO", "PLAN",
      "FOTO", "MAPA", "CAJA", "RASTRO", "MASCARA", "CODIGO", "MENSAJE", "ENLACE", "HUIDA", "SECRETO",
    ],
    sos: [
      "SOS", "AUXILIO", "FUEGO", "CHOQUE", "ALARMA", "RESCATE", "PELIGRO", "HERIDO", "AGUA", "COSTA",
      "TORMENTA", "HUNDIMIENTO", "SOCORRO", "DERIVA", "NAUFRAGIO", "EMERGENCIA", "AYUDA", "REFUGIO", "AVISO", "ALERTA",
    ],
    pirate: [
      "TESORO", "COFRE", "ORO", "ISLA", "ESPADA", "CANON", "CAPITAN", "BANDERA", "MAPA", "BRUJULA",
      "ANCLA", "BARRIL", "RON", "MARINERO", "PIRATA", "VIENTO", "BOTIN", "CUEVA", "ROCA", "PERLA",
    ],
    space: [
      "ORBITA", "COHETE", "COSMOS", "ESTRELLA", "PLANETA", "COMETA", "LUNA", "MODULO", "ESTACION", "TRAJE",
      "LANZAMIENTO", "MOTOR", "COMBUSTIBLE", "SONDA", "RADAR", "MARTE", "SATELITE", "GRAVEDAD", "VACIO", "NAVE",
    ],
    animal: [
      "LOBO", "AGUILA", "OSO", "DELFIN", "BUHO", "ZORRO", "CONEJO", "TIGRE", "CIERVO", "CUERVO",
      "HALCON", "LINCE", "CASTOR", "SERPIENTE", "GRULLA", "PANTERA", "COBRA", "NUTRIA", "GARZA", "TIBURON",
    ],
  },
  DE: {
    sea: [
      "LEUCHTTURM", "ANKER", "KOMPASS", "STEUER", "HECK", "BUG", "SEGEL", "MAST", "WELLE", "STURM",
      "NEBEL", "HAFEN", "KAI", "BUCHT", "MEERENGE", "LOTSE", "BOOT", "DECK", "KURS", "DRIFT",
      "GOLF", "KÜSTE", "INSEL", "BRISE", "LADUNG", "FLOTTE", "REISE", "KNOTEN", "TIDE", "RIFF",
    ],
    war: [
      "ANGRIFF", "FLANKE", "STURM", "GRABEN", "PATROUILLE", "LINIE", "FUNK", "RESERVE", "POSTEN", "HÖHE",
      "MARSCH", "HINTERHALT", "BEFEHL", "FEUER", "RÜCKZUG", "KOLONNE", "PANZER", "SALVE", "BASIS", "FRONT",
      "BUNKER", "MISSION", "ABWEHR", "ANGRIFF", "SIEG", "SEKTOR", "WACHE", "KONVOI", "TRUPPE", "STELLUNG",
    ],
    spy: [
      "AGENT", "CODE", "CHIFFRE", "TREFF", "BRIEF", "KONTAKT", "GEFAHR", "FLUCHT", "BERICHT", "SCHATTEN",
      "MORGEN", "NACHT", "BRÜCKE", "SCHLÜSSEL", "MISSION", "ZIEL", "AUSGANG", "EINGANG", "ARCHIV", "PLAN",
      "FOTO", "KARTE", "SAFE", "SPUR", "MASKE", "NACHRICHT", "VERBINDUNG", "GEHEIM", "TARNUNG", "AKTE",
    ],
    sos: [
      "SOS", "HILFE", "FEUER", "UNFALL", "ALARM", "RETTUNG", "GEFAHR", "VERLETZT", "WASSER", "KÜSTE",
      "STURM", "UNTERGANG", "NOTRUF", "DRIFT", "HAVARIE", "NOTFALL", "ZUFLUCHT", "WARNUNG", "SIGNAL", "LECK",
    ],
    pirate: [
      "SCHATZ", "TRUHE", "GOLD", "INSEL", "SCHWERT", "KANONE", "KAPITÄN", "FLAGGE", "KARTE", "KOMPASS",
      "ANKER", "FASS", "RUM", "MATROSE", "PIRAT", "WIND", "BEUTE", "HÖHLE", "FELSEN", "PERLE",
    ],
    space: [
      "ORBIT", "RAKETE", "KOSMOS", "STERN", "PLANET", "KOMET", "MOND", "MODUL", "STATION", "ANZUG",
      "START", "MOTOR", "TREIBSTOFF", "SONDE", "RADAR", "MARS", "SATELLIT", "SCHWERKRAFT", "VAKUUM", "SCHIFF",
    ],
    animal: [
      "WOLF", "ADLER", "BÄR", "DELFIN", "EULE", "FUCHS", "HASE", "TIGER", "HIRSCH", "RABE",
      "FALKE", "LUCHS", "BIBER", "SCHLANGE", "KRANICH", "PANTHER", "KOBRA", "OTTER", "REIHER", "HAI",
    ],
  },
};

function pick<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

export function generatePhrase(lang: Lang, theme: Theme): string {
  const pool = WORDS[lang];
  const themeKeys = theme === "mix" ? Object.keys(pool) : [theme];
  const words = pool[pick(themeKeys)] || pool.sea;

  const patterns = [
    () => pick(words),
    () => `${pick(words)} ${pick(words)}`,
    () => `${pick(words)} ${pick(words)} ${pick(words)}`,
  ];

  return pick(patterns)();
}
