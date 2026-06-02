import type { Lang, Theme } from "./morse";

const PHRASES: Record<Lang, Record<string, string[]>> = {
  RU: {
    sea: [
      "КУРС НА СЕВЕР", "МАЯК НА ГОРИЗОНТЕ", "ШТОРМ УСИЛИВАЕТСЯ", "ЯКОРЬ ПОДНЯТЬ",
      "ПОЛНЫЙ ВПЕРЕД", "ЛЕВО РУЛЯ", "ПРАВО РУЛЯ", "БЕРЕГ БЛИЗКО", "ТУМАН ГУСТОЙ",
      "ВОЛНА С БОРТА", "ДЕРЖАТЬ КУРС", "ОТДАТЬ ШВАРТОВЫ", "ПОРТ НАЗНАЧЕНИЯ",
      "ГЛУБИНА ДЕСЯТЬ", "ВЕТЕР КРЕПЧАЕТ", "ПРИБОЙ У СКАЛ", "ЛОЦМАН НА БОРТУ",
      "БУХТА ЗА МЫСОМ", "ТЕЧЕНИЕ СИЛЬНОЕ", "ОСТРОВ ПО КУРСУ", "ДРЕЙФ НА ЗАПАД",
      "ПАЛУБА ЧИСТАЯ", "ТРЮМ СУХОЙ", "КОМПАС ВЕРНЫЙ", "ПАРУС ПОДНЯТ",
      "КАТЕР НА ВОДЕ", "КАНАТ ЗАКРЕПИТЬ", "МЕЛЬ ВПЕРЕДИ", "БРИЗ С МОРЯ",
    ],
    war: [
      "СВЯЗЬ УСТАНОВЛЕНА", "ЗАДАЧА ВЫПОЛНЕНА", "ПРИКАЗ ПОЛУЧЕН", "ПРОТИВНИК ОТСТУПАЕТ",
      "ОГОНЬ ПРЕКРАТИТЬ", "ВЫХОД НА РУБЕЖ", "ЗАСАДА НА ДОРОГЕ", "РАЗВЕДКА ДОЛОЖИЛА",
      "ФЛАНГ УКРЕПЛЕН", "ПОЗИЦИЯ УДЕРЖАНА", "РЕЗЕРВ ГОТОВ", "МАРШ БРОСОК",
      "СИГНАЛ К АТАКЕ", "ОТХОД НА БАЗУ", "ПАТРУЛЬ ВЫШЕЛ", "ШТАБ КОМАНДУЕТ",
      "РАДИО МОЛЧАНИЕ", "ПОСТ НАБЛЮДЕНИЯ", "РУБЕЖ ОБОРОНЫ", "КОНВОЙ В ПУТИ",
      "РАКЕТА КРАСНАЯ", "БУНКЕР ОБНАРУЖЕН", "ДЕСАНТ ВЫСАЖЕН", "ЗАДАЧА ЯСНА",
    ],
    spy: [
      "АГЕНТ НА СВЯЗИ", "ПАРОЛЬ ПРИНЯТ", "ЯВКА ПРОВАЛЕНА", "ВСТРЕЧА В ПОЛНОЧЬ",
      "ШИФР РАЗГАДАН", "КОНВЕРТ В ТАЙНИКЕ", "ОПАСНОСТЬ РЯДОМ", "УХОДИМ НЕМЕДЛЕННО",
      "СЛЕД ПОТЕРЯН", "НАБЛЮДЕНИЕ ВЕДЕТСЯ", "ПЕРЕХВАТ УДАЛСЯ", "КОНТАКТ УСТАНОВЛЕН",
      "ДОСЬЕ ПОЛУЧЕНО", "МИССИЯ ЗАВЕРШЕНА", "ВЫХОД ЧЕРЕЗ МОСТ", "НОЧЬ БЕЗ ЛУНЫ",
      "ТЕНЬ НА СТЕНЕ", "КЛЮЧ ПОД КАМНЕМ", "КАРТА В АРХИВЕ", "ПЛАН УТВЕРЖДЕН",
      "СВЯЗНОЙ ОПОЗДАЛ", "ПОБЕГ ЧЕРЕЗ КРЫШУ", "СИГНАЛ НА РАССВЕТЕ", "МАСКА СБРОШЕНА",
    ],
    sos: [
      "ТЕРПИМ БЕДСТВИЕ", "НУЖНА ПОМОЩЬ", "ПОЖАР НА БОРТУ", "КООРДИНАТЫ ПЕРЕДАНЫ",
      "СПАСИТЕ НАШИ ДУШИ", "ТРЕВОГА ТРЕВОГА", "РАНЕН НУЖЕН ВРАЧ", "ВОДА ПОСТУПАЕТ",
      "КРЕН НА ПРАВЫЙ БОРТ", "ДРЕЙФУЕМ БЕЗ ХОДА", "СИГНАЛ БЕДСТВИЯ", "БЕРЕГ НЕ ВИДНО",
      "БУРЯ НАДВИГАЕТСЯ", "ТЕЧЬ В КОРПУСЕ", "ЭКИПАЖ ЭВАКУИРОВАН", "ЖДЕМ ПОМОЩИ",
      "ЗАПАС ВОДЫ КОНЧАЕТСЯ", "ШЛЮПКИ НА ВОДУ", "РАКЕТУ ДАЛИ", "ТОПЛИВО НА НУЛЕ",
    ],
    pirate: [
      "КЛАД НА ОСТРОВЕ", "ЗОЛОТО В СУНДУКЕ", "ПУШКИ К БОЮ", "АБОРДАЖ НАЧАТЬ",
      "КАПИТАН НА МОСТИКЕ", "ЧЕРНЫЙ ФЛАГ ПОДНЯТ", "КАРТА СОКРОВИЩ", "РОМ В БОЧКЕ",
      "МАТРОС НА РЕЙКЕ", "ВЕТЕР ПОПУТНЫЙ", "ДОБЫЧА БОГАТАЯ", "БУХТА ЗА СКАЛОЙ",
      "ПЕЩЕРА ПОД ВОДОЙ", "ЖЕМЧУГ СО ДНА", "КИНЖАЛ НАГОТОВЕ", "ОХОТА НАЧАЛАСЬ",
      "НАГРАДА ЗА ГОЛОВУ", "РУБИН В КОРОНЕ", "ШТУРВАЛ ДЕРЖИ", "ЯКОРЬ БРОСИТЬ",
    ],
    space: [
      "ОРБИТА СТАБИЛЬНА", "РАКЕТА НА СТАРТЕ", "ВЫХОД В КОСМОС", "СТЫКОВКА ЗАВЕРШЕНА",
      "ПУСК ЧЕРЕЗ МИНУТУ", "ДВИГАТЕЛЬ ЗАПУЩЕН", "ТОПЛИВО В НОРМЕ", "ЗОНД ОТПРАВЛЕН",
      "МАРС НА ЭКРАНЕ", "СПУТНИК ВЫШЕЛ НА СВЯЗЬ", "ЭКИПАЖ ГОТОВ", "АНТЕННА РАЗВЕРНУТА",
      "СОЛНЦЕ ВСТАЕТ", "ЗВЕЗДА ПУТЕВОДНАЯ", "НЕВЕСОМОСТЬ ОЩУЩАЕТСЯ", "МОДУЛЬ ПРИСТЫКОВАН",
      "ТРАЕКТОРИЯ ВЕРНАЯ", "РАДАР РАБОТАЕТ", "КОМЕТА ВИДНА", "ПЛАНЕТА БЛИЗКО",
      "ГАЛАКТИКА ДАЛЕКО", "ВАКУУМ ЗА БОРТОМ", "СКАФАНДР ПРОВЕРЕН", "КОРАБЛЬ НА КУРСЕ",
    ],
    animal: [
      "ВОЛК НА ТРОПЕ", "ОРЕЛ В НЕБЕ", "МЕДВЕДЬ В БЕРЛОГЕ", "ДЕЛЬФИН У БОРТА",
      "СОВА НА ВЕТКЕ", "ЛИСА В НОРЕ", "ЗАЯЦ В ПОЛЕ", "ТИГР В ЗАСАДЕ",
      "ОЛЕНЬ У РЕКИ", "ВОРОН НА ДУБЕ", "ЯСТРЕБ КРУЖИТ", "РЫСЬ КРАДЕТСЯ",
      "БОБЕР СТРОИТ", "ЛОСЬ В ЛЕСУ", "ЗМЕЯ ПОД КАМНЕМ", "ЖУРАВЛЬ ЛЕТИТ",
      "БЕЛКА НА СОСНЕ", "СОКОЛ ПИКИРУЕТ", "ВЫДРА НЫРЯЕТ", "ФИЛИН УХАЕТ",
    ],
  },
  EN: {
    sea: [
      "COURSE DUE NORTH", "BEACON ON HORIZON", "STORM IS RISING", "RAISE THE ANCHOR",
      "FULL SPEED AHEAD", "HARD TO PORT", "HARD TO STARBOARD", "SHORE IS NEAR",
      "THICK FOG AHEAD", "HOLD THE COURSE", "CAST OFF LINES", "PORT OF CALL",
      "DEPTH IS TEN", "WIND PICKS UP", "PILOT ON BOARD", "ISLAND AHEAD",
      "DRIFT TO WEST", "DECK IS CLEAR", "COMPASS IS TRUE", "SAIL IS SET",
    ],
    war: [
      "RADIO CHECK OVER", "MISSION COMPLETE", "ORDERS RECEIVED", "ENEMY RETREATS",
      "CEASE FIRE NOW", "HOLD THE LINE", "AMBUSH ON ROAD", "RECON REPORTS IN",
      "FLANK IS SECURE", "POSITION HELD", "RESERVE IS READY", "MARCH AT DAWN",
      "SIGNAL TO ATTACK", "FALL BACK TO BASE", "PATROL IS OUT", "HQ CONFIRMS",
      "RADIO SILENCE NOW", "OUTPOST MANNED", "CONVOY EN ROUTE", "BUNKER LOCATED",
    ],
    spy: [
      "AGENT IS ACTIVE", "CODE ACCEPTED", "COVER IS BLOWN", "MEET AT MIDNIGHT",
      "CIPHER DECODED", "DEAD DROP SET", "DANGER IS NEAR", "ABORT THE MISSION",
      "TRAIL WENT COLD", "TARGET ACQUIRED", "CONTACT MADE", "DOSSIER OBTAINED",
      "EXIT VIA BRIDGE", "MOONLESS NIGHT", "SHADOW ON WALL", "KEY UNDER STONE",
      "MAP IN ARCHIVE", "PLAN APPROVED", "HANDLER IS LATE", "SAFE HOUSE OPEN",
    ],
    sos: [
      "WE NEED HELP", "FIRE ON BOARD", "SEND COORDINATES", "SAVE OUR SOULS",
      "MAN OVERBOARD", "TAKING ON WATER", "LISTING TO PORT", "DRIFTING NO POWER",
      "DISTRESS SIGNAL", "SHORE NOT SEEN", "STORM APPROACHING", "HULL IS BREACHED",
      "CREW EVACUATED", "WAITING FOR RESCUE", "FUEL IS GONE", "LIFEBOATS LAUNCHED",
    ],
    pirate: [
      "TREASURE ON ISLAND", "GOLD IN THE CHEST", "CANNONS AT READY", "BOARD THE SHIP",
      "CAPTAIN ON DECK", "BLACK FLAG RAISED", "TREASURE MAP FOUND", "RUM IN BARREL",
      "FAIR WIND BLOWS", "RICH PLUNDER AHEAD", "CAVE UNDER WATER", "PEARL FROM DEEP",
      "DAGGER IS DRAWN", "THE HUNT BEGINS", "BOUNTY ON HEAD", "RUBY IN CROWN",
    ],
    space: [
      "ORBIT IS STABLE", "ROCKET AT LAUNCH", "GOING TO SPACE", "DOCKING COMPLETE",
      "LAUNCH IN ONE MINUTE", "ENGINE IS RUNNING", "FUEL LEVEL NORMAL", "PROBE IS SENT",
      "MARS ON SCREEN", "CREW IS READY", "ANTENNA DEPLOYED", "SUN IS RISING",
      "ZERO GRAVITY NOW", "MODULE IS DOCKED", "COURSE IS CORRECT", "RADAR IS ACTIVE",
    ],
    animal: [
      "WOLF ON THE TRAIL", "EAGLE IN THE SKY", "BEAR IN THE DEN", "OWL ON A BRANCH",
      "FOX IN ITS BURROW", "RABBIT IN FIELD", "TIGER IN AMBUSH", "DEER BY THE RIVER",
      "HAWK IS CIRCLING", "LYNX IS STALKING", "BEAVER IS BUILDING", "SNAKE UNDER ROCK",
      "CRANE IN FLIGHT", "FALCON DIVES DOWN", "OTTER IS DIVING", "OWL HOOTS AT NIGHT",
    ],
  },
  ES: {
    sea: [
      "RUMBO AL NORTE", "FARO EN HORIZONTE", "TORMENTA SE ACERCA", "ANCLA ARRIBA",
      "AVANTE A TODA", "COSTA A LA VISTA", "NIEBLA ESPESA", "MANTENER RUMBO",
      "PUERTO CERCANO", "VIENTO FUERTE", "ISLA POR PROA", "MAREA ALTA",
    ],
    war: [
      "MISION CUMPLIDA", "ORDEN RECIBIDA", "FUEGO A DISCRECION", "POSICION SEGURA",
      "PATRULLA EN MARCHA", "RESERVA LISTA", "EMBOSCADA EN RUTA", "RADIO EN SILENCIO",
      "CONVOY EN CAMINO", "BUNKER HALLADO", "FRENTE ESTABLE", "ATAQUE AL ALBA",
    ],
    spy: [
      "AGENTE EN LINEA", "CLAVE ACEPTADA", "PUNTO DE ENCUENTRO", "PELIGRO CERCANO",
      "MISION TERMINADA", "CONTACTO HECHO", "INFORME RECIBIDO", "SALIDA POR PUENTE",
      "NOCHE SIN LUNA", "PLAN APROBADO", "OBJETIVO FIJADO", "HUIDA POR TECHO",
    ],
    sos: [
      "NECESITAMOS AYUDA", "FUEGO A BORDO", "HOMBRE AL AGUA", "DERIVA SIN MOTOR",
      "TORMENTA SE ACERCA", "ESPERAMOS RESCATE", "BOTES AL AGUA", "ALERTA MAXIMA",
    ],
    pirate: [
      "TESORO EN LA ISLA", "ORO EN EL COFRE", "BANDERA NEGRA IZADA", "VIENTO A FAVOR",
      "CAPITAN EN PUENTE", "MAPA DEL TESORO", "CUEVA BAJO AGUA", "CAZA COMENZADA",
    ],
    space: [
      "ORBITA ESTABLE", "COHETE EN RAMPA", "SALIDA AL ESPACIO", "MOTOR ENCENDIDO",
      "COMBUSTIBLE NORMAL", "SONDA ENVIADA", "TRIPULACION LISTA", "RUMBO CORRECTO",
    ],
    animal: [
      "LOBO EN CAMINO", "AGUILA EN CIELO", "OSO EN CUEVA", "ZORRO EN MADRIGUERA",
      "TIGRE EN ACECHO", "CIERVO EN EL RIO", "SERPIENTE EN ROCA", "HALCON EN VUELO",
    ],
  },
  DE: {
    sea: [
      "KURS NACH NORDEN", "LEUCHTTURM IN SICHT", "STURM KOMMT AUF", "ANKER LICHTEN",
      "VOLLE FAHRT VORAUS", "KÜSTE IN SICHT", "DICHTER NEBEL", "KURS HALTEN",
      "HAFEN IST NAH", "WIND WIRD STÄRKER", "INSEL VORAUS", "DECK IST KLAR",
    ],
    war: [
      "MISSION ERFÜLLT", "BEFEHL ERHALTEN", "FEUER EINSTELLEN", "STELLUNG HALTEN",
      "PATROUILLE RAUS", "RESERVE BEREIT", "HINTERHALT AUF WEG", "FUNK STILLE",
      "KONVOI UNTERWEGS", "BUNKER GEFUNDEN", "FRONT IST STABIL", "ANGRIFF IM MORGEN",
    ],
    spy: [
      "AGENT IST AKTIV", "CODE ANGENOMMEN", "TARNUNG GEFLOGEN", "TREFF UM MITTERNACHT",
      "GEFAHR IST NAH", "MISSION BEENDET", "KONTAKT HERGESTELLT", "AUSGANG ÜBER BRÜCKE",
      "NACHT OHNE MOND", "PLAN GENEHMIGT", "ZIEL ERFASST", "FLUCHT ÜBER DACH",
    ],
    sos: [
      "WIR BRAUCHEN HILFE", "FEUER AN BORD", "MANN ÜBER BORD", "TREIBEN OHNE MOTOR",
      "STURM IM ANMARSCH", "WARTEN AUF RETTUNG", "BOOTE ZU WASSER", "ALARM ALARM",
    ],
    pirate: [
      "SCHATZ AUF INSEL", "GOLD IN DER TRUHE", "SCHWARZE FLAGGE HOCH", "WIND IST GUT",
      "KAPITÄN AN DECK", "SCHATZKARTE GEFUNDEN", "HÖHLE UNTER WASSER", "JAGD BEGINNT",
    ],
    space: [
      "ORBIT IST STABIL", "RAKETE AM START", "AB INS ALL", "MOTOR LÄUFT",
      "TREIBSTOFF NORMAL", "SONDE GESENDET", "BESATZUNG BEREIT", "KURS IST RICHTIG",
    ],
    animal: [
      "WOLF AUF DEM PFAD", "ADLER AM HIMMEL", "BÄR IN DER HÖHLE", "FUCHS IM BAU",
      "TIGER IM HINTERHALT", "HIRSCH AM FLUSS", "SCHLANGE UNTER STEIN", "FALKE IM FLUG",
    ],
  },
};

function pick<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

export function generatePhrase(lang: Lang, theme: Theme): string {
  const pool = PHRASES[lang];
  const themeKeys = theme === "mix" ? Object.keys(pool) : [theme];
  const phrases = pool[pick(themeKeys)] || pool.sea;
  return pick(phrases);
}
