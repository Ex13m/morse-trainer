export const MORSE_EN: Record<string, string> = {
  A: ".-", B: "-...", C: "-.-.", D: "-..", E: ".", F: "..-.",
  G: "--.", H: "....", I: "..", J: ".---", K: "-.-", L: ".-..",
  M: "--", N: "-.", O: "---", P: ".--.", Q: "--.-", R: ".-.",
  S: "...", T: "-", U: "..-", V: "...-", W: ".--", X: "-..-",
  Y: "-.--", Z: "--..",
  "0": "-----", "1": ".----", "2": "..---", "3": "...--", "4": "....-",
  "5": ".....", "6": "-....", "7": "--...", "8": "---..", "9": "----.",
  ".": ".-.-.-", ",": "--..--", "?": "..--..", "-": "-....-",
};

export const MORSE_RU: Record<string, string> = {
  А: ".-", Б: "-...", В: ".--", Г: "--.", Д: "-..", Е: ".",
  Ж: "...-", З: "--..", И: "..", Й: ".---", К: "-.-", Л: ".-..",
  М: "--", Н: "-.", О: "---", П: ".--.", Р: ".-.", С: "...",
  Т: "-", У: "..-", Ф: "..-.", Х: "....", Ц: "-.-.", Ч: "---.",
  Ш: "----", Щ: "--.-", Ъ: "--.--", Ы: "-.--", Ь: "-..-", Э: "..-..",
  Ю: "..--", Я: ".-.-",
  "0": "-----", "1": ".----", "2": "..---", "3": "...--", "4": "....-",
  "5": ".....", "6": "-....", "7": "--...", "8": "---..", "9": "----.",
};

export const MORSE_ES: Record<string, string> = {
  A: ".-", B: "-...", C: "-.-.", D: "-..", E: ".", F: "..-.",
  G: "--.", H: "....", I: "..", J: ".---", K: "-.-", L: ".-..",
  M: "--", N: "-.", Ñ: "--.--", O: "---", P: ".--.", Q: "--.-", R: ".-.",
  S: "...", T: "-", U: "..-", V: "...-", W: ".--", X: "-..-",
  Y: "-.--", Z: "--..",
  "0": "-----", "1": ".----", "2": "..---", "3": "...--", "4": "....-",
  "5": ".....", "6": "-....", "7": "--...", "8": "---..", "9": "----.",
};

export const MORSE_DE: Record<string, string> = {
  A: ".-", B: "-...", C: "-.-.", D: "-..", E: ".", F: "..-.",
  G: "--.", H: "....", I: "..", J: ".---", K: "-.-", L: ".-..",
  M: "--", N: "-.", O: "---", P: ".--.", Q: "--.-", R: ".-.",
  S: "...", T: "-", U: "..-", Ü: "..--", V: "...-", W: ".--", X: "-..-",
  Y: "-.--", Z: "--..", Ä: ".-.-", Ö: "---.", CH: "----",
  "0": "-----", "1": ".----", "2": "..---", "3": "...--", "4": "....-",
  "5": ".....", "6": "-....", "7": "--...", "8": "---..", "9": "----.",
};

export const MORSE_FR: Record<string, string> = {
  A: ".-", B: "-...", C: "-.-.", D: "-..", E: ".", F: "..-.",
  G: "--.", H: "....", I: "..", J: ".---", K: "-.-", L: ".-..",
  M: "--", N: "-.", O: "---", P: ".--.", Q: "--.-", R: ".-.",
  S: "...", T: "-", U: "..-", V: "...-", W: ".--", X: "-..-",
  Y: "-.--", Z: "--..",
  "0": "-----", "1": ".----", "2": "..---", "3": "...--", "4": "....-",
  "5": ".....", "6": "-....", "7": "--...", "8": "---..", "9": "----.",
};

export const MORSE_IT: Record<string, string> = {
  A: ".-", B: "-...", C: "-.-.", D: "-..", E: ".", F: "..-.",
  G: "--.", H: "....", I: "..", J: ".---", K: "-.-", L: ".-..",
  M: "--", N: "-.", O: "---", P: ".--.", Q: "--.-", R: ".-.",
  S: "...", T: "-", U: "..-", V: "...-", W: ".--", X: "-..-",
  Y: "-.--", Z: "--..",
  "0": "-----", "1": ".----", "2": "..---", "3": "...--", "4": "....-",
  "5": ".....", "6": "-....", "7": "--...", "8": "---..", "9": "----.",
};

export const MORSE_PT: Record<string, string> = {
  A: ".-", B: "-...", C: "-.-.", D: "-..", E: ".", F: "..-.",
  G: "--.", H: "....", I: "..", J: ".---", K: "-.-", L: ".-..",
  M: "--", N: "-.", O: "---", P: ".--.", Q: "--.-", R: ".-.",
  S: "...", T: "-", U: "..-", V: "...-", W: ".--", X: "-..-",
  Y: "-.--", Z: "--..",
  "0": "-----", "1": ".----", "2": "..---", "3": "...--", "4": "....-",
  "5": ".....", "6": "-....", "7": "--...", "8": "---..", "9": "----.",
};

export const MORSE_MAPS: Record<Lang, Record<string, string>> = {
  RU: MORSE_RU, EN: MORSE_EN, ES: MORSE_ES, DE: MORSE_DE,
  FR: MORSE_FR, IT: MORSE_IT, PT: MORSE_PT,
};

export const PHRASES: Record<Lang, Record<string, string[]>> = {
  RU: {
    sea: ["МАЯК НА ТРАВЕРЗЕ", "ТУМАН ЗА БОРТОМ", "КУРС ОСТ", "ВЫЗЫВАЮ БЕРЕГ", "СПАСИТЕ НАШИ ДУШИ", "ШТОРМ БАЛЛ ШЕСТЬ"],
    war: ["ОГОНЬ ПО КВАДРАТУ", "ПОДКРЕПЛЕНИЕ ИДЕТ", "ВЫСОТА ВЗЯТА", "ПОТЕРЯ СВЯЗИ", "ОТХОД К ОВРАГУ"],
    spy: ["ВОРОН ВЫЛЕТЕЛ", "ЛУНА ВЗОШЛА", "ЯЩЕРИЦА СПИТ", "СВЕРТЫВАЙТЕСЬ", "ЯВКА ПРОВАЛЕНА"],
    sos: ["СОС", "ПОМОГИТЕ", "ПОЖАР НА БОРТУ", "ТЕРЯЕМ ВЫСОТУ"],
    pirate: ["КЛАД НА ОСТРОВЕ", "ПОДНЯТЬ ПАРУСА", "АБОРДАЖ", "СУНДУК С ЗОЛОТОМ", "ПОПУТНЫЙ ВЕТЕР"],
    space: ["ВЫХОД НА ОРБИТУ", "СТЫКОВКА ЧЕРЕЗ ЧАС", "НЕВЕСОМОСТЬ", "СВЯЗЬ С ЗЕМЛЕЙ", "АСТЕРОИД РЯДОМ"],
    animal: ["ВОЛК ВОЕТ", "ОРЕЛ ЛЕТИТ", "МЕДВЕДЬ СПИТ", "ДЕЛЬФИН ПЛЫВЕТ", "СОВА ВИДИТ"],
  },
  EN: {
    sea: ["LIGHT ABEAM", "FOG ON BOW", "COURSE EAST", "SHORE THIS IS BOAT", "SOS", "STORM FORCE SIX"],
    war: ["FIRE ON SECTOR", "REINFORCE INBOUND", "HEIGHT TAKEN", "RADIO SILENCE", "FALL BACK"],
    spy: ["RAVEN HAS FLOWN", "MOON IS UP", "LIZARD SLEEPS", "BREAK CONTACT", "BURNED"],
    sos: ["SOS", "MAYDAY", "FIRE ON DECK", "LOSING ALTITUDE"],
    pirate: ["TREASURE ON ISLAND", "HOIST THE SAILS", "ALL HANDS ON DECK", "CHEST OF GOLD", "FAIR WINDS"],
    space: ["ENTER ORBIT", "DOCKING IN ONE HOUR", "ZERO GRAVITY", "CONTACT EARTH", "ASTEROID NEARBY"],
    animal: ["WOLF HOWLS", "EAGLE FLIES", "BEAR SLEEPS", "DOLPHIN SWIMS", "OWL SEES ALL"],
  },
  ES: {
    sea: ["FARO A ESTRIBOR", "NIEBLA EN PROA", "RUMBO ESTE", "COSTA AQUI BARCO", "SOS", "TORMENTA FUERZA SEIS"],
    war: ["FUEGO EN SECTOR", "REFUERZOS EN CAMINO", "ALTURA TOMADA", "SILENCIO DE RADIO", "RETIRADA"],
    spy: ["EL CUERVO VOLO", "LA LUNA SUBIO", "EL LAGARTO DUERME", "ROMPER CONTACTO", "QUEMADO"],
    sos: ["SOS", "AUXILIO", "FUEGO A BORDO", "PERDEMOS ALTITUD"],
    pirate: ["TESORO EN LA ISLA", "IZAR LAS VELAS", "TODOS A CUBIERTA", "COFRE DE ORO", "BUEN VIENTO"],
    space: ["ENTRAR EN ORBITA", "CONTACTO CON TIERRA", "GRAVEDAD CERO", "ASTEROIDE CERCA", "DESPEGUE"],
    animal: ["EL LOBO AULLA", "EL AGUILA VUELA", "EL OSO DUERME", "EL DELFIN NADA", "EL BUHO VE TODO"],
  },
  DE: {
    sea: ["LEUCHTTURM QUERAB", "NEBEL AM BUG", "KURS OST", "KÜSTE HIER BOOT", "SOS", "STURM SECHS"],
    war: ["FEUER AUF SEKTOR", "HILFE KOMMT", "HÖHE GENOMMEN", "FUNKSTILLE", "RÜCKZUG"],
    spy: ["DER RABE FLOG", "MOND IST OBEN", "EIDECHSE SCHLÄFT", "KONTAKT ABBRECHEN", "ENTTARNT"],
    sos: ["SOS", "MAYDAY", "FEUER AN BORD", "HÖHE VERLOREN"],
    pirate: ["SCHATZ AUF INSEL", "SEGEL SETZEN", "ALLE MANN AN DECK", "GOLDKISTE", "GUTER WIND"],
    space: ["IN UMLAUFBAHN", "ANDOCKEN IN EINER STUNDE", "SCHWERELOSIGKEIT", "KONTAKT ZUR ERDE", "ASTEROID NAH"],
    animal: ["DER WOLF HEULT", "DER ADLER FLIEGT", "DER BÄR SCHLÄFT", "DER DELFIN SCHWIMMT", "DIE EULE SIEHT"],
  },
  FR: {
    sea: ["PHARE EN VUE", "BRUME A TRIBORD", "CAP AU NORD", "COTE ICI BATEAU", "SOS", "TEMPETE FORCE SIX"],
    war: ["FEU SUR SECTEUR", "RENFORTS EN ROUTE", "POSITION TENUE", "SILENCE RADIO", "REPLI"],
    spy: ["LE CORBEAU A VOLE", "LA LUNE EST HAUTE", "CONTACT ROMPU", "MISSION TERMINEE", "GRILLE"],
    sos: ["SOS", "AU SECOURS", "FEU A BORD", "PERTE ALTITUDE"],
    pirate: ["TRESOR SUR ILE", "HISSER LES VOILES", "TOUT LE MONDE SUR PONT", "COFFRE EN OR", "BON VENT"],
    space: ["EN ORBITE", "AMARRAGE DANS UNE HEURE", "APESANTEUR", "CONTACT AVEC TERRE", "ASTEROIDE PROCHE"],
    animal: ["LE LOUP HURLE", "AIGLE EN VOL", "OURS QUI DORT", "DAUPHIN QUI NAGE", "HIBOU QUI VOIT"],
  },
  IT: {
    sea: ["FARO IN VISTA", "NEBBIA A PRUA", "ROTTA A NORD", "COSTA QUI BARCA", "SOS", "TEMPESTA FORZA SEI"],
    war: ["FUOCO SUL SETTORE", "RINFORZI IN ARRIVO", "POSIZIONE TENUTA", "SILENZIO RADIO", "RITIRATA"],
    spy: ["IL CORVO HA VOLATO", "LA LUNA E ALTA", "CONTATTO PERSO", "MISSIONE FINITA", "BRUCIATO"],
    sos: ["SOS", "AIUTO", "FUOCO A BORDO", "PERDIAMO QUOTA"],
    pirate: ["TESORO SULLA ISOLA", "ISSARE LE VELE", "TUTTI SUL PONTE", "CASSA ORO", "BUON VENTO"],
    space: ["IN ORBITA", "ATTRACCO TRA UN ORA", "ASSENZA GRAVITA", "CONTATTO CON TERRA", "ASTEROIDE VICINO"],
    animal: ["IL LUPO ULULA", "AQUILA IN VOLO", "ORSO CHE DORME", "DELFINO CHE NUOTA", "GUFO CHE VEDE"],
  },
  PT: {
    sea: ["FAROL A VISTA", "NEVOEIRO A PROA", "RUMO AO NORTE", "COSTA AQUI BARCO", "SOS", "TEMPESTADE FORCA SEIS"],
    war: ["FOGO NO SETOR", "REFORCOS A CAMINHO", "POSICAO MANTIDA", "SILENCIO DE RADIO", "RETIRADA"],
    spy: ["O CORVO VOOU", "A LUA SUBIU", "CONTATO PERDIDO", "MISSAO COMPLETA", "QUEIMADO"],
    sos: ["SOS", "SOCORRO", "FOGO A BORDO", "PERDENDO ALTITUDE"],
    pirate: ["TESOURO NA ILHA", "ICAR AS VELAS", "TODOS NO CONVES", "BAU DE OURO", "BOM VENTO"],
    space: ["EM ORBITA", "ACOPLAGEM EM UMA HORA", "GRAVIDADE ZERO", "CONTATO COM TERRA", "ASTEROIDE PERTO"],
    animal: ["O LOBO UIVA", "AGUIA EM VOO", "URSO DORMINDO", "GOLFINHO NADANDO", "CORUJA QUE VE"],
  },
};

export type Lang = "RU" | "EN" | "ES" | "DE" | "FR" | "IT" | "PT";
export type Theme = "sea" | "war" | "spy" | "sos" | "pirate" | "space" | "animal" | "mix";
export type TabIndex = 0 | 1 | 2 | 3;
