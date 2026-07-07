import { MORSE_MAPS, type Lang, type Theme } from "./morse";

export const PHRASES: Record<Lang, Record<string, string[]>> = {
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
      "MOTOR AVERIADO", "CASCO ROTO", "SIN COMBUSTIBLE", "SEÑAL DE SOCORRO",
    ],
    pirate: [
      "TESORO EN LA ISLA", "ORO EN EL COFRE", "BANDERA NEGRA IZADA", "VIENTO A FAVOR",
      "CAPITAN EN PUENTE", "MAPA DEL TESORO", "CUEVA BAJO AGUA", "CAZA COMENZADA",
      "RON EN LA BODEGA", "CAÑON LISTO", "PERLA DEL FONDO", "BOTIN A BORDO",
    ],
    space: [
      "ORBITA ESTABLE", "COHETE EN RAMPA", "SALIDA AL ESPACIO", "MOTOR ENCENDIDO",
      "COMBUSTIBLE NORMAL", "SONDA ENVIADA", "TRIPULACION LISTA", "RUMBO CORRECTO",
      "LUNA A LA VISTA", "RADAR ACTIVO", "MODULO ACOPLADO", "REGRESO A CASA",
    ],
    animal: [
      "LOBO EN CAMINO", "AGUILA EN CIELO", "OSO EN CUEVA", "ZORRO EN MADRIGUERA",
      "TIGRE EN ACECHO", "CIERVO EN EL RIO", "SERPIENTE EN ROCA", "HALCON EN VUELO",
      "BUHO EN LA RAMA", "LINCE AL ACECHO", "NUTRIA EN EL RIO", "CONDOR EN LO ALTO",
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
      "MOTOR AUSGEFALLEN", "RUMPF IST LECK", "KEIN TREIBSTOFF", "NOTSIGNAL GESENDET",
    ],
    pirate: [
      "SCHATZ AUF INSEL", "GOLD IN DER TRUHE", "SCHWARZE FLAGGE HOCH", "WIND IST GUT",
      "KAPITÄN AN DECK", "SCHATZKARTE GEFUNDEN", "HÖHLE UNTER WASSER", "JAGD BEGINNT",
      "RUM IM FASS", "KANONEN BEREIT", "PERLE VOM GRUND", "BEUTE AN BORD",
    ],
    space: [
      "ORBIT IST STABIL", "RAKETE AM START", "AB INS ALL", "MOTOR LÄUFT",
      "TREIBSTOFF NORMAL", "SONDE GESENDET", "BESATZUNG BEREIT", "KURS IST RICHTIG",
      "MOND IN SICHT", "RADAR AKTIV", "MODUL ANGEDOCKT", "RÜCKKEHR ZUR ERDE",
    ],
    animal: [
      "WOLF AUF DEM PFAD", "ADLER AM HIMMEL", "BÄR IN DER HÖHLE", "FUCHS IM BAU",
      "TIGER IM HINTERHALT", "HIRSCH AM FLUSS", "SCHLANGE UNTER STEIN", "FALKE IM FLUG",
      "EULE AUF DEM AST", "LUCHS AUF DER JAGD", "OTTER IM FLUSS", "RABE AUF DER EICHE",
    ],
  },
  FR: {
    sea: [
      "CAP AU NORD", "PHARE EN VUE", "TEMPETE SE LÈVE", "LEVEZ ANCRE",
      "EN AVANT TOUTE", "BARRE À BABORD", "COTE EN VUE", "BROUILLARD ÉPAIS",
      "TENIR LE CAP", "PORT EN APPROCHE", "VENT SE LÈVE", "ILE DROIT DEVANT",
    ],
    war: [
      "MISSION ACCOMPLIE", "ORDRE REÇU", "CESSEZ LE FEU", "TENIR LA POSITION",
      "PATROUILLE EN ROUTE", "RÉSERVE PRETE", "EMBUSCADE SUR ROUTE", "SILENCE RADIO",
      "CONVOI EN MARCHE", "BUNKER TROUVÉ", "FRONT STABLE", "ATTAQUE À AUBE",
    ],
    spy: [
      "AGENT EN LIGNE", "CODE ACCEPTÉ", "COUVERTURE GRILLÉE", "RENDEZ VOUS À MINUIT",
      "DANGER PROCHE", "MISSION TERMINÉE", "CONTACT ÉTABLI", "SORTIE PAR LE PONT",
      "NUIT SANS LUNE", "PLAN APPROUVÉ", "CIBLE REPÉRÉE", "FUITE PAR LE TOIT",
    ],
    sos: [
      "BESOIN DE SECOURS", "FEU À BORD", "HOMME À LA MER", "DÉRIVE SANS MOTEUR",
      "TEMPETE APPROCHE", "ATTENDONS SECOURS", "CANOTS À LA MER", "ALERTE ALERTE",
      "MOTEUR EN PANNE", "COQUE PERCÉE", "PLUS DE CARBURANT", "SIGNAL DE DÉTRESSE",
    ],
    pirate: [
      "TRÉSOR SUR ILE", "OR DANS LE COFFRE", "PAVILLON NOIR HISSÉ", "BON VENT",
      "CAPITAINE SUR PONT", "CARTE AU TRÉSOR", "GROTTE SOUS MARINE", "LA CHASSE COMMENCE",
      "RHUM DANS LA CALE", "CANONS PARÉS", "PERLE DES PROFONDEURS", "BUTIN À BORD",
    ],
    space: [
      "ORBITE STABLE", "FUSÉE AU DÉPART", "SORTIE DANS ESPACE", "MOTEUR EN MARCHE",
      "CARBURANT NORMAL", "SONDE ENVOYÉE", "ÉQUIPAGE PARÉ", "CAP CORRECT",
      "LUNE EN VUE", "RADAR ACTIF", "MODULE AMARRÉ", "RETOUR SUR TERRE",
    ],
    animal: [
      "LOUP SUR LE SENTIER", "AIGLE DANS LE CIEL", "OURS DANS SA GROTTE", "RENARD DANS TERRIER",
      "TIGRE EN EMBUSCADE", "CERF À LA RIVIÈRE", "SERPENT SOUS PIERRE", "FAUCON EN VOL",
      "HIBOU SUR LA BRANCHE", "LYNX À LA CHASSE", "LOUTRE DANS LA RIVIÈRE", "CORBEAU EN VOL",
    ],
  },
  IT: {
    sea: [
      "ROTTA A NORD", "FARO IN VISTA", "TEMPESTA IN ARRIVO", "LEVARE ANCORA",
      "AVANTI TUTTA", "BARRA A SINISTRA", "COSTA IN VISTA", "NEBBIA FITTA",
      "MANTENERE ROTTA", "PORTO VICINO", "VENTO SI ALZA", "ISOLA A PRUA",
    ],
    war: [
      "MISSIONE COMPIUTA", "ORDINE RICEVUTO", "CESSATE IL FUOCO", "TENERE POSIZIONE",
      "PATTUGLIA IN MARCIA", "RISERVA PRONTA", "IMBOSCATA SU STRADA", "SILENZIO RADIO",
      "CONVOGLIO IN MARCIA", "BUNKER TROVATO", "FRONTE STABILE", "ATTACCO ALL ALBA",
    ],
    spy: [
      "AGENTE IN LINEA", "CODICE ACCETTATO", "COPERTURA SALTATA", "INCONTRO A MEZZANOTTE",
      "PERICOLO VICINO", "MISSIONE FINITA", "CONTATTO STABILITO", "USCITA DAL PONTE",
      "NOTTE SENZA LUNA", "PIANO APPROVATO", "BERSAGLIO TROVATO", "FUGA DAL TETTO",
    ],
    sos: [
      "ABBIAMO BISOGNO AIUTO", "FUOCO A BORDO", "UOMO IN MARE", "DERIVA SENZA MOTORE",
      "TEMPESTA IN ARRIVO", "ASPETTIAMO SOCCORSI", "SCIALUPPE IN MARE", "ALLARME ALLARME",
      "MOTORE IN AVARIA", "SCAFO FORATO", "CARBURANTE FINITO", "SEGNALE DI SOCCORSO",
    ],
    pirate: [
      "TESORO SULLA ISOLA", "ORO NEL FORZIERE", "BANDIERA NERA ALTA", "BUON VENTO",
      "CAPITANO SUL PONTE", "MAPPA DEL TESORO", "GROTTA SOTTOMARINA", "CACCIA INIZIA",
      "RUM NELLA STIVA", "CANNONI PRONTI", "PERLA DAL FONDO", "BOTTINO A BORDO",
    ],
    space: [
      "ORBITA STABILE", "RAZZO AL LANCIO", "USCITA NELLO SPAZIO", "MOTORE ACCESO",
      "CARBURANTE NORMALE", "SONDA INVIATA", "EQUIPAGGIO PRONTO", "ROTTA CORRETTA",
      "LUNA IN VISTA", "RADAR ATTIVO", "MODULO AGGANCIATO", "RITORNO A TERRA",
    ],
    animal: [
      "LUPO SUL SENTIERO", "AQUILA NEL CIELO", "ORSO NELLA TANA", "VOLPE NELLA TANA",
      "TIGRE IN AGGUATO", "CERVO AL FIUME", "SERPENTE SOTTO SASSO", "FALCO IN VOLO",
      "GUFO SUL RAMO", "LINCE IN CACCIA", "LONTRA NEL FIUME", "CORVO SULLA QUERCIA",
    ],
  },
  PT: {
    sea: [
      "RUMO AO NORTE", "FAROL A VISTA", "TEMPESTADE SE FORMA", "LEVANTAR ANCORA",
      "AVANTE TODA", "LEME A BOMBORDO", "COSTA A VISTA", "NEVOEIRO DENSO",
      "MANTER RUMO", "PORTO PERTO", "VENTO AUMENTA", "ILHA A FRENTE",
    ],
    war: [
      "MISSAO CUMPRIDA", "ORDEM RECEBIDA", "CESSAR FOGO", "MANTER POSIÇAO",
      "PATRULHA EM MARCHA", "RESERVA PRONTA", "EMBOSCADA NA ESTRADA", "SILENCIO DE RADIO",
      "COMBOIO A CAMINHO", "BUNKER ENCONTRADO", "FRENTE FIRME", "ATAQUE AO AMANHECER",
    ],
    spy: [
      "AGENTE EM LINHA", "CODIGO ACEITO", "COBERTURA QUEIMADA", "ENCONTRO A MEIA NOITE",
      "PERIGO PERTO", "MISSAO TERMINADA", "CONTATO FEITO", "SAIDA PELA PONTE",
      "NOITE SEM LUA", "PLANO APROVADO", "ALVO LOCALIZADO", "FUGA PELO TELHADO",
    ],
    sos: [
      "PRECISAMOS DE AJUDA", "FOGO A BORDO", "HOMEM AO MAR", "DERIVA SEM MOTOR",
      "TEMPESTADE SE APROXIMA", "AGUARDANDO RESGATE", "BOTES AO MAR", "ALERTA ALERTA",
      "MOTOR AVARIADO", "CASCO FURADO", "SEM COMBUSTIVEL", "SINAL DE SOCORRO",
    ],
    pirate: [
      "TESOURO NA ILHA", "OURO NO BAU", "BANDEIRA NEGRA HASTEADA", "BOM VENTO",
      "CAPITAO NO CONVES", "MAPA DO TESOURO", "CAVERNA SUBMARINA", "CAÇA COMEÇA",
      "RUM NO PORAO", "CANHAO PRONTO", "PEROLA DO FUNDO", "SAQUE A BORDO",
    ],
    space: [
      "ORBITA FIRME", "FOGUETE NO LANÇAMENTO", "SAIDA PARA ESPAÇO", "MOTOR LIGADO",
      "COMBUSTIVEL NORMAL", "SONDA ENVIADA", "TRIPULAÇAO PRONTA", "ROTA CORRETA",
      "LUA A VISTA", "RADAR ATIVO", "MODULO ACOPLADO", "RETORNO A TERRA",
    ],
    animal: [
      "LOBO NA TRILHA", "AGUIA NO ALTO", "URSO NA TOCA", "RAPOSA NA TOCA",
      "TIGRE NA TOCAIA", "CERVO NO RIO", "COBRA SOB PEDRA", "FALCAO EM VOO",
      "CORUJA NO GALHO", "LINCE NA CAÇADA", "LONTRA NO RIO", "CORVO NO CARVALHO",
    ],
  },
  PL: {
    sea: [
      "KURS NA PÓŁNOC", "LATARNIA NA HORYZONCIE", "SZTORM NADCIĄGA", "PODNIEŚĆ KOTWICĘ",
      "PEŁNĄ NAPRZÓD", "STER NA LEWĄ", "BRZEG BLISKO", "GĘSTA MGŁA",
      "TRZYMAĆ KURS", "PORT BLISKO", "WIATR SIĘ WZMAGA", "WYSPA PO PRAWEJ",
    ],
    war: [
      "MISJA WYKONANA", "ROZKAZ OTRZYMANY", "OGIEŃ WSTRZYMAĆ", "POZYCJA UTRZYMANA",
      "PATROL WYRUSZYŁ", "REZERWA GOTOWA", "ZASADZKA NA DRODZE", "CISZA RADIOWA",
      "KONWÓJ W DRODZE", "BUNKIER ZNALEZIONY", "FRONT STABILNY", "ATAK O ŚWICIE",
    ],
    spy: [
      "AGENT NA ŁĄCZNOŚCI", "HASŁO PRZYJĘTE", "SPOTKANIE O PÓŁNOCY", "NIEBEZPIECZEŃSTWO",
      "MISJA ZAKOŃCZONA", "KONTAKT NAWIĄZANY", "TECZKA OTRZYMANA", "WYJŚCIE PRZEZ MOST",
      "NOC BEZ KSIĘŻYCA", "PLAN ZATWIERDZONY", "CEL NAMIERZONY", "UCIECZKA PRZEZ DACH",
    ],
    sos: [
      "POTRZEBUJEMY POMOCY", "POŻAR NA POKŁADZIE", "CZŁOWIEK ZA BURTĄ", "DRYFUJEMY",
      "SZTORM NADCHODZI", "CZEKAMY NA RATUNEK", "ŁODZIE NA WODĘ", "ALARM ALARM",
      "SILNIK ZEPSUTY", "KADŁUB PRZEBITY", "BRAK PALIWA", "SYGNAŁ RATUNKOWY",
    ],
    pirate: [
      "SKARB NA WYSPIE", "ZŁOTO W SKRZYNI", "CZARNA FLAGA W GÓRĘ", "DOBRY WIATR",
      "KAPITAN NA MOSTKU", "MAPA SKARBÓW", "JASKINIA POD WODĄ", "POLOWANIE CZAS",
      "RUM W ŁADOWNI", "ARMATY GOTOWE", "PERŁA Z DNA", "ŁUP NA POKŁADZIE",
    ],
    space: [
      "ORBITA STABILNA", "RAKIETA NA STARCIE", "WYJŚCIE W KOSMOS", "DOKOWANIE GOTOWE",
      "PALIWO W NORMIE", "SONDA WYSŁANA", "ZAŁOGA GOTOWA", "KURS PRAWIDŁOWY",
      "KSIĘŻYC BLISKO", "RADAR DZIAŁA", "MODUŁ POŁĄCZONY", "POWRÓT NA ZIEMIĘ",
    ],
    animal: [
      "WILK NA ŚCIEŻCE", "ORZEŁ NA NIEBIE", "NIEDŹWIEDŹ W JAMIE", "SOWA NA GAŁĘZI",
      "LIS W NORZE", "TYGRYS W ZASADZCE", "JELEŃ NAD RZEKĄ", "SOKÓŁ W LOCIE",
      "RYŚ NA ŁOWACH", "WYDRA W RZECE", "KRUK NA DĘBIE", "ŻUBR NA ŁĄCE",
    ],
  },
  TR: {
    sea: [
      "ROTA KUZEYE", "FENER GÖRÜNÜYOR", "FIRTINA YAKLAŞIYOR", "DEMIR KALDIR",
      "TAM YOLLA İLERİ", "İSKELEYE DÜMEN", "KIYIYI GÖRÜYORUZ", "YOĞUN SİS",
      "ROTAYI TUT", "LİMAN YAKIN", "RÜZGAR ARTIYOR", "ADA GÖRÜNÜYOR",
    ],
    war: [
      "GÖREV TAMAM", "EMİR ALINDI", "ATEŞ KES", "MEVZİ TUTULDU",
      "DEVRIYE ÇIKTI", "YEDEK HAZIR", "PUSU YOLDA", "TELSİZ SUSKUNLUĞU",
      "KONVOY YOLDA", "BUNKER BULUNDU", "CEPHE SABİT", "ŞAFAKTA SALDIRI",
    ],
    spy: [
      "AJAN AKTİF", "ŞİFRE KABUL", "BULUŞMA GECE YARISI", "TEHLİKE YAKIN",
      "GÖREV BİTTİ", "TEMAS KURULDU", "DOSYA ALINDI", "ÇIKIŞ KÖPRÜDEN",
      "AYSIZ GECE", "PLAN ONAYLI", "HEDEF BELİRLENDİ", "ÇATIDAN KAÇIŞ",
    ],
    sos: [
      "YARDIM GEREKİYOR", "GÜVERTEDE YANGIN", "DENİZE DÜŞEN VAR", "SÜRÜKLENIYORUZ",
      "FIRTINA GELİYOR", "KURTARMA BEKLİYORUZ", "FİLİKALAR DENİZE", "ALARM ALARM",
      "MOTOR ARIZALI", "GÖVDE DELİK", "YAKIT BİTTİ", "TEHLİKE SİNYALİ",
    ],
    pirate: [
      "ADADA HAZİNE", "SANDIKTA ALTIN", "SİYAH BAYRAK ÇEKİLİ", "İYİ RÜZGAR",
      "KAPTAN GÜVERTEDE", "HAZİNE HARİTASI", "SU ALTI MAĞARA", "AV BAŞLADI",
      "AMBARDA ROM VAR", "TOPLAR HAZIR", "DİPTEN İNCİ", "GANİMET GEMİDE",
    ],
    space: [
      "YÖRÜNGE SABİT", "ROKET FIRLATILDI", "UZAYA ÇIKIŞ", "MOTOR ÇALIŞIYOR",
      "YAKIT NORMAL", "SONDA GÖNDERİLDİ", "MÜRETTEBAT HAZIR", "ROTA DOĞRU",
      "AY GÖRÜNDÜ", "RADAR AKTİF", "MODÜL KENETLENDİ", "DÜNYAYA DÖNÜŞ",
    ],
    animal: [
      "KURT ULUYOR", "KARTAL UÇUYOR", "AYI UYUYOR", "BAYKUŞ DALDA",
      "TİLKİ YUVADA", "KAPLAN PUSUDA", "GEYİK NEHIRDE", "ŞAHIN UÇUŞTA",
      "VAŞAK AVDA", "SU SAMURU NEHİRDE", "KUZGUN DALDA", "KURT İZDE",
    ],
  },
  NL: {
    sea: [
      "KOERS NAAR NOORD", "VUURTOREN IN ZICHT", "STORM KOMT OP", "ANKER LICHTEN",
      "VOLLE KRACHT VOORUIT", "ROER NAAR BAKBOORD", "KUST IN ZICHT", "DICHTE MIST",
      "KOERS HOUDEN", "HAVEN IS DICHTBIJ", "WIND NEEMT TOE", "EILAND VOORUIT",
    ],
    war: [
      "MISSIE VOLBRACHT", "BEVEL ONTVANGEN", "STAAKT HET VUREN", "POSITIE HOUDEN",
      "PATROUILLE VERTROKKEN", "RESERVE GEREED", "HINDERLAAG OP WEG", "RADIOSTILTE",
      "KONVOOI ONDERWEG", "BUNKER GEVONDEN", "FRONT STABIEL", "AANVAL BIJ DAGERAAD",
    ],
    spy: [
      "AGENT IS ACTIEF", "CODE GEACCEPTEERD", "DEKMANTEL OPGEBLAZEN", "ONTMOETING MIDDERNACHT",
      "GEVAAR IS NABIJ", "MISSIE VOLTOOID", "CONTACT GEMAAKT", "UITGANG VIA BRUG",
      "NACHT ZONDER MAAN", "PLAN GOEDGEKEURD", "DOEL GEVONDEN", "ONTSNAPPING VIA DAK",
    ],
    sos: [
      "WIJ HEBBEN HULP NODIG", "BRAND AAN BOORD", "MAN OVERBOORD", "DRIJVEN ZONDER MOTOR",
      "STORM IN AANTOCHT", "WACHTEN OP REDDING", "BOTEN TE WATER", "ALARM ALARM",
      "MOTOR KAPOT", "ROMP LEK", "GEEN BRANDSTOF", "NOODSIGNAAL VERZONDEN",
    ],
    pirate: [
      "SCHAT OP EILAND", "GOUD IN DE KIST", "ZWARTE VLAG GEHESEN", "GOEDE WIND",
      "KAPITEIN AAN DEK", "SCHATKAART GEVONDEN", "GROT ONDER WATER", "JACHT BEGINT",
      "RUM IN HET RUIM", "KANONNEN GEREED", "PAREL VAN DE BODEM", "BUIT AAN BOORD",
    ],
    space: [
      "BAAN IS STABIEL", "RAKET BIJ LANCERING", "NAAR DE RUIMTE", "MOTOR DRAAIT",
      "BRANDSTOF NORMAAL", "SONDE VERZONDEN", "BEMANNING GEREED", "KOERS IS JUIST",
      "MAAN IN ZICHT", "RADAR ACTIEF", "MODULE GEKOPPELD", "TERUG NAAR AARDE",
    ],
    animal: [
      "WOLF OP HET PAD", "AREND IN DE LUCHT", "BEER IN DE GROT", "UIL OP DE TAK",
      "VOS IN ZIJN HOL", "TIJGER IN HINDERLAAG", "HERT BIJ DE RIVIER", "VALK IN VLUCHT",
      "LYNX OP JACHT", "OTTER IN DE RIVIER", "RAAF OP DE EIK", "ELAND IN HET BOS",
    ],
  },
  SV: {
    sea: [
      "KURS NORRUT", "FYREN I SIKTE", "STORMEN ÖKAR", "LYFTA ANKARET",
      "FULL FART FRAMÅT", "RODER ÅTBABORD", "KUSTEN I SIKTE", "TÄT DIMMA",
      "HÅLLA KURSEN", "HAMNEN ÄR NÄRA", "VINDEN ÖKAR", "ÖN FÖRUT",
    ],
    war: [
      "UPPDRAG KLART", "ORDER MOTTAGEN", "ELDUPPHÖR", "HÅLL STÄLLNINGEN",
      "PATRULL UTE", "RESERV REDO", "BAKHÅLL PÅ VÄGEN", "RADIOTYSTNAD",
      "KONVOJ PÅ VÄG", "BUNKER HITTAD", "FRONTEN STABIL", "ANFALL VID GRYNING",
    ],
    spy: [
      "AGENT ÄR AKTIV", "KOD GODKÄND", "TÄCKNING RÖJD", "MÖTE VID MIDNATT",
      "FARA ÄR NÄRA", "UPPDRAG AVSLUTAT", "KONTAKT UPPRÄTTAD", "UTGÅNG VIA BRON",
      "NATT UTAN MÅNE", "PLAN GODKÄND", "MÅL HITTAT", "FLYKT ÖVER TAKET",
    ],
    sos: [
      "VI BEHÖVER HJÄLP", "BRAND OMBORD", "MAN ÖVERBORD", "DRIVER UTAN MOTOR",
      "STORM PÅ VÄG", "VÄNTAR PÅ RÄDDNING", "BÅTAR I VATTNET", "ALARM ALARM",
      "MOTORN TRASIG", "SKROVET LÄCKER", "BRÄNSLET SLUT", "NÖDSIGNAL SÄND",
    ],
    pirate: [
      "SKATT PÅ ÖN", "GULD I KISTAN", "SVART FLAGG HISSAD", "GOD VIND",
      "KAPTEN PÅ DÄCK", "SKATTKARTA HITTAD", "GROTTA UNDER VATTEN", "JAKTEN BÖRJAR",
      "ROM I LASTEN", "KANONERNA KLARA", "PÄRLA FRÅN DJUPET", "BYTE OMBORD",
    ],
    space: [
      "OMLOPPSBANA STABIL", "RAKET VID START", "UT I RYMDEN", "MOTORN GÅR",
      "BRÄNSLE NORMALT", "SOND SKICKAD", "BESÄTTNING REDO", "KURSEN ÄR RÄTT",
      "MÅNEN I SIKTE", "RADARN AKTIV", "MODULEN DOCKAD", "ÅTER TILL JORDEN",
    ],
    animal: [
      "VARGEN PÅ STIGEN", "ÖRNEN PÅ HIMLEN", "BJÖRNEN I IDET", "UGGLAN PÅ GRENEN",
      "RÄVEN I LYAN", "TIGERN I BAKHÅLL", "HJORTEN VID ÄN", "FALKEN I FLYKT",
      "LODJUR PÅ JAKT", "UTTERN I ÄN", "KORPEN PÅ EKEN", "ÄLGEN I SKOGEN",
    ],
  },
  UK: {
    sea: [
      "КУРС НА ПІВНІЧ", "МАЯК НА ОБРІЇ", "ШТОРМ ПОСИЛЮЄТЬСЯ", "ПІДНЯТИ ЯКІР",
      "ПОВНИЙ ВПЕРЕД", "КЕРМО ЛІВОРУЧ", "БЕРЕГ БЛИЗЬКО", "ГУСТИЙ ТУМАН",
      "ТРИМАТИ КУРС", "ПОРТ ПОРУЧ", "ВІТЕР ПОСИЛЮЄТЬСЯ", "ОСТРІВ ПОПЕРЕДУ",
    ],
    war: [
      "МІСІЯ ВИКОНАНА", "НАКАЗ ОТРИМАНО", "ВОГОНЬ ПРИПИНИТИ", "ПОЗИЦІЮ УТРИМАНО",
      "ПАТРУЛЬ ВИРУШИВ", "РЕЗЕРВ ГОТОВИЙ", "ЗАСІДКА НА ШЛЯХУ", "ТИША В ЕФІРІ",
      "КОНВОЙ В ДОРОЗІ", "БУНКЕР ЗНАЙДЕНО", "ФРОНТ СТАБІЛЬНИЙ", "АТАКА НА СВІТАНКУ",
    ],
    spy: [
      "АГЕНТ НА ЛІНІЇ", "ПАРОЛЬ ПРИЙНЯТО", "ЗУСТРІЧ ОПІВНОЧІ", "НЕБЕЗПЕКА ПОРУЧ",
      "МІСІЯ ЗАВЕРШЕНА", "КОНТАКТ ВСТАНОВЛЕНО", "ДОСЬЄ ОТРИМАНО", "ВИХІД ЧЕРЕЗ МІСТ",
      "НІЧ БЕЗ МІСЯЦЯ", "ПЛАН ЗАТВЕРДЖЕНО", "ЦІЛЬ ВИЯВЛЕНО", "ВТЕЧА ЧЕРЕЗ ДАХ",
    ],
    sos: [
      "ПОТРІБНА ДОПОМОГА", "ПОЖЕЖА НА БОРТУ", "ЛЮДИНА ЗА БОРТОМ", "ДРЕЙФУЄМО",
      "ШТОРМ НАБЛИЖАЄТЬСЯ", "ЧЕКАЄМО ПОРЯТУНКУ", "ШЛЮПКИ НА ВОДУ", "ТРИВОГА ТРИВОГА",
      "ДВИГУН ЗЛАМАВСЯ", "КОРПУС ПРОБИТО", "ПАЛЬНЕ СКІНЧИЛОСЬ", "СИГНАЛ ЛИХА",
    ],
    pirate: [
      "СКАРБ НА ОСТРОВІ", "ЗОЛОТО В СКРИНІ", "ЧОРНИЙ ПРАПОР ПІДНЯТО", "ДОБРИЙ ВІТЕР",
      "КАПІТАН НА МІСТКУ", "КАРТА СКАРБІВ", "ПЕЧЕРА ПІД ВОДОЮ", "ПОЛЮВАННЯ ПОЧАЛОСЬ",
      "РОМ У ТРЮМІ", "ГАРМАТИ ГОТОВІ", "ПЕРЛИНА З ДНА", "ЗДОБИЧ НА БОРТУ",
    ],
    space: [
      "ОРБІТА СТАБІЛЬНА", "РАКЕТА НА СТАРТІ", "ВИХІД У КОСМОС", "СТИКУВАННЯ ЗАВЕРШЕНО",
      "ПАЛЬНЕ В НОРМІ", "ЗОНД ВІДПРАВЛЕНО", "ЕКІПАЖ ГОТОВИЙ", "КУРС ВІРНИЙ",
      "МІСЯЦЬ ПОПЕРЕДУ", "РАДАР ПРАЦЮЄ", "МОДУЛЬ ПРИСТИКОВАНО", "ПОВЕРНЕННЯ ДОДОМУ",
    ],
    animal: [
      "ВОВК НА СТЕЖЦІ", "ОРЕЛ У НЕБІ", "ВЕДМІДЬ У БАРЛОЗІ", "СОВА НА ГІЛЦІ",
      "ЛИСИЦЯ В НОРІ", "ТИГР У ЗАСІДЦІ", "ОЛЕНЬ БІЛЯ РІЧКИ", "СОКІЛ У ПОЛЬОТІ",
      "РИСЬ НА ПОЛЮВАННІ", "ВИДРА В РІЧЦІ", "КРУК НА ДУБІ", "ЛОСЬ У ЛІСІ",
    ],
  },
  NO: {
    sea: [
      "KURS MOT NORD", "FYRET I SIKTE", "STORMEN ØKER", "LØFT ANKERET",
      "FULL FART FREM", "ROR TIL BABORD", "KYSTEN I SIKTE", "TETT TÅKE",
      "HOLD KURSEN", "HAVNEN ER NÆR", "VINDEN ØKER", "ØYA FORUT",
    ],
    war: [
      "OPPDRAG FULLFØRT", "ORDRE MOTTATT", "STANS ILDEN", "HOLD STILLINGEN",
      "PATRULJE UTE", "RESERVE KLAR", "BAKHOLD PÅ VEIEN", "RADIOTAUSHET",
      "KONVOI PÅ VEI", "BUNKER FUNNET", "FRONTEN STABIL", "ANGREP VED DAGGRY",
    ],
    spy: [
      "AGENT ER AKTIV", "KODE GODKJENT", "DEKNING AVSLØRT", "MØTE VED MIDNATT",
      "FARE ER NÆR", "OPPDRAG AVSLUTTET", "KONTAKT OPPRETTET", "UTGANG VIA BROEN",
      "NATT UTEN MÅNE", "PLAN GODKJENT", "MÅL FUNNET", "FLUKT OVER TAKET",
    ],
    sos: [
      "VI TRENGER HJELP", "BRANN OM BORD", "MANN OVER BORD", "DRIVER UTEN MOTOR",
      "STORM PÅ VEI", "VENTER PÅ REDNING", "BÅTER I VANNET", "ALARM ALARM",
      "MOTOREN ER DØD", "SKROGET LEKKER", "TOM FOR DRIVSTOFF", "NØDSIGNAL SENDT",
    ],
    pirate: [
      "SKATT PÅ ØYA", "GULL I KISTEN", "SVART FLAGG HEIST", "GOD VIND",
      "KAPTEINEN PÅ DEKK", "SKATTKART FUNNET", "GROTTE UNDER VANN", "JAKTEN STARTER",
      "ROM I LASTEN", "KANONENE KLARE", "PERLE FRA DYPET", "BYTTE OM BORD",
    ],
    space: [
      "BANEN ER STABIL", "RAKETT VED START", "UT I ROMMET", "MOTOREN GÅR",
      "DRIVSTOFF NORMALT", "SONDE SENDT", "MANNSKAP KLART", "KURSEN ER RIKTIG",
      "MÅNEN I SIKTE", "RADAREN AKTIV", "MODULEN DOKKET", "TILBAKE TIL JORDEN",
    ],
    animal: [
      "ULVEN PÅ STIEN", "ØRNEN PÅ HIMMELEN", "BJØRNEN I HIET", "UGLA PÅ GREINA",
      "REVEN I HIET", "TIGEREN I BAKHOLD", "HJORTEN VED ELVA", "FALKEN I FLUKT",
      "GAUPE PÅ JAKT", "OTEREN I ELVA", "RAVNEN PÅ EIKA", "ELGEN I SKOGEN",
    ],
  },
};

function shuffle<T>(arr: T[]): T[] {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

// Deck system: each (lang, theme) pool is shuffled and dealt without
// repeats until exhausted, then reshuffled (never the same phrase twice in a row).
const decks: Record<string, string[]> = {};
const lastDraw: Record<string, string> = {};

function draw(pool: string[], key: string): string {
  let deck = decks[key];
  if (!deck || deck.length === 0) {
    deck = shuffle([...pool]);
    // avoid repeating the previous phrase right after a reshuffle
    if (deck.length > 1 && deck[deck.length - 1] === lastDraw[key]) {
      [deck[0], deck[deck.length - 1]] = [deck[deck.length - 1], deck[0]];
    }
    decks[key] = deck;
  }
  const p = deck.pop()!;
  lastDraw[key] = p;
  return p;
}

export function generatePhrase(lang: Lang, theme: Theme): string {
  const pool = PHRASES[lang];
  const phrases = theme === "mix"
    ? Object.values(pool).flat()
    : pool[theme] || pool.sea;
  const phrase = draw(phrases, `${lang}:${theme}`);
  // safety net: drop characters that have no Morse code in this language
  const map = MORSE_MAPS[lang];
  return phrase
    .split("")
    .filter(c => c === " " || map[c])
    .join("")
    .replace(/\s+/g, " ")
    .trim();
}
