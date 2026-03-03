/*
===========================================================
✨ YELI - AQUÍ ACTUALIZAS TUS PRODUCTOS ✨
===========================================================
PARA AGREGAR UN NUEVO PRODUCTO, COPIA Y PEGA ESTE EJEMPLO:

{
    id: 79,                         // Número siguiente
    nombre: "NOMBRE DEL PRODUCTO",  // Ej: "Vestido Elegante"
    descripcion: "Descripción detallada...",  // Explica bien
    precio: "$XX.00",               // Con el signo $
    categoria: "ropa",              // hogar, ferreteria, belleza, ropa, tecnologia, deportes
    tieneFoto: false,               // true si tienes foto, false si no
    foto: "nombre-foto.jpg"         // Solo si tieneFoto es true
}

===========================================================
*/

// 🔒 NÚMERO DE WHATSAPP PROTEGIDO
// Está dividido en partes para protección
const NUMERO_PARTE1 = '535';
const NUMERO_PARTE2 = '466';
const NUMERO_PARTE3 = '9402';
const NUMERO_YELI = NUMERO_PARTE1 + NUMERO_PARTE2 + NUMERO_PARTE3;


// 📦 PRODUCTOS DE YELI (79 productos - IDs del 1 al 79)
const productos = [
    // ============================================
    // FERRETERIA (IDs 1-19) - 19 productos
    // ============================================
    // Tapas/Asientos de baño
    {
        id: 1,
        nombre: "TAPA DE INODORO UNIVERSAL HUIRD!",
        descripcion: "PARA TU HOGAR: ¿Necesitas reponer esa tapa vieja y desgastada? HUIRD! es la solución perfecta. Plástico resistente, fácil instalación y diseño universal que se adapta a la mayoría de las tazas sanitarias estándar.\n\nY PARA TUS VIAJES: ¿Sabías que también es PORTÁTIL? Llévala contigo a campings, autocaravanas, hoteles o baños públicos. Su diseño ligero permite guardarla en una mochila y tener SIEMPRE tu propia tapa higiénica donde quieras.\n\nDos necesidades, un solo producto. La comodidad de tu hogar te acompaña a todas partes.",
        precio: "Consultar",
        foto: "tapa.png",
        tieneFoto: true,
        categoria: "ferreteria"
    },
    {
        id: 2,
        nombre: "ASIENTO DE INODORO HIDROTEK - Cierre Lento",
        descripcion: "HIDROTEK. La tapa que cierra sola, sin golpes, sin ruidos, sin molestias.\n\nCIERRE LENTO (SOFT CLOSE). La tapa y la taza bajan suavemente con solo empujarlas ligeramente. Adiós a los golpes fuertes, adiós a los dedos pillados.\n\nMATERIAL DE ALTA CALIDAD. Fabricado con materiales resistentes. No se mancha, no se deforma.\n\nFACIL INSTALACION. Diseño universal que se adapta a la mayoría de las tazas sanitarias estándar.\n\nHidrotek. Tu baño merece lo mejor.",
        precio: "Consultar",
        foto: "hidrotek.jpg",
        tieneFoto: true,
        categoria: "ferreteria"
    },
    {
        id: 3,
        nombre: "ASIENTO DE BAÑO LALIE HOME - Calidad Americana",
        descripcion: "CALIDAD CERTIFICADA PARA TU BAÑO. Asiento resistente a golpes, diseño ergonómico, fácil instalación. Superficie lisa que no acumula bacterias. Compatible con inodoros estándar. Dale a tu baño el toque de calidad que merece.",
        precio: "Consultar",
        foto: "asiento-bano-lalie.webp",
        tieneFoto: true,
        categoria: "ferreteria"
    },
    // Fregadero y tubo
    {
        id: 4,
        nombre: "FREGADERO DE ACERO INOXIDABLE - Cocina",
        descripcion: "EL CORAZON DE TU COCINA. El fregadero es uno de los lugares que más se usan en el hogar. Por eso, mereces uno que dure toda la vida.\n\nDURABILIDAD GARANTIZADA. Fabricado en acero inoxidable de alta calidad. No se oxida, no se mancha, no se deforma.\n\nFACIL DE LIMPIAR. Con solo pasar un paño húmedo recupera su brillo original.\n\nRESISTENTE A TODO: Rayones superficiales, cambios de temperatura, productos de limpieza.\n\nINVERSION INTELIGENTE. En Cuba, donde conseguir productos duraderos es difícil, este fregadero es la compra que haces UNA VEZ y te acompaña por décadas.",
        precio: "Consultar",
        foto: "fregadero.png",
        tieneFoto: true,
        categoria: "ferreteria"
    },
    {
        id: 5,
        nombre: "TUBO FLEXIBLE PARA DESAGÜE - Tipo fuelle",
        descripcion: "SOLUCIÓN FÁCIL PARA TU FREGADERO. Tubo flexible de drenaje que se adapta a cualquier espacio. Fácil instalación (no necesitas fontanero), evita malos olores, resistente a altas temperaturas. Universal para cocina y baño.",
        precio: "Consultar",
        foto: "tubo-flexible-desague.webp",
        tieneFoto: true,
        categoria: "ferreteria"
    },
    // Resistencias
    {
        id: 6,
        nombre: "RESISTENCIA PARA FOGON ELECTRICO - 4 vueltas (Modelo con círculo plateado)",
        descripcion: "LA PIEZA QUE HACE FUNCIONAR TU ESTUFA. Resistencia eléctrica de 4 vueltas para fogones de cocinas eléctricas.\n\nPARA FOGONES ELECTRICOS. Repuesto exacto si la hornilla de tu estufa dejó de calentar.\n\nCARACTERISTICA: Este modelo cuenta con un círculo plateado en el centro.\n\nMATERIAL RESISTENTE AL CALOR. Fabricada para soportar altas temperaturas.\n\nFACIL INSTALACION. Reemplaza la dañada en minutos.",
        precio: "Consultar",
        foto: "resistencia1.jpg",
        tieneFoto: true,
        categoria: "ferreteria"
    },
    {
        id: 7,
        nombre: "RESISTENCIA PARA FOGON ELECTRICO - 4 vueltas (Modelo clásico, sin círculo)",
        descripcion: "LA PIEZA QUE HACE FUNCIONAR TU ESTUFA. Resistencia eléctrica de 4 vueltas para fogones de cocinas eléctricas.\n\nPARA FOGONES ELECTRICOS. Repuesto exacto si la hornilla de tu estufa dejó de calentar.\n\nCARACTERISTICA: Este es el modelo clásico, sin círculo plateado.\n\nMATERIAL RESISTENTE AL CALOR. Fabricada para soportar altas temperaturas.\n\nFACIL INSTALACION. Reemplaza la dañada en minutos.",
        precio: "Consultar",
        foto: "resistencia.jpg",
        tieneFoto: true,
        categoria: "ferreteria"
    },
    // Herramientas varias
    {
        id: 8,
        nombre: "PEGAMENTO MULTIUSOS EVERCHEM - 500g",
        descripcion: "EL ALIADO DE TODAS LAS REPARACIONES. Everchem es la solución para pegar, reparar, restaurar.\n\nINCREIBLEMENTE FUERTE. Adhesión en madera, cerámica, vidrio, metal, plástico.\n\nLIJABLE Y PINTABLE. Lija y pinta encima sin problema.\n\nSIN ESPUMA. No se expande.\n\n500g DE RENDIMIENTO. Tamaño familiar.\n\nEverchem. El pegamento que hace todo bien.",
        precio: "Consultar",
        foto: "pegamento.webp",
        tieneFoto: true,
        categoria: "ferreteria"
    },
    {
        id: 9,
        nombre: "CANDADOS CON LLAVES - Varios tamaños",
        descripcion: "SEGURIDAD PARA LO QUE MÁS QUIERES. Candados resistentes con juego de llaves incluidas. Tamaños variados: para bicicletas, mochilas, taquillas, puertas, cajas de herramientas. Prácticos y económicos.",
        precio: "Consultar",
        foto: "candados-con-llaves.webp",
        tieneFoto: true,
        categoria: "ferreteria"
    },
    {
        id: 10,
        nombre: "MASCARA PARA SOLDAR - Protección profesional",
        descripcion: "PROTEGE TUS OJOS Y TU CARA. Máscara para soldar, imprescindible para trabajos de soldadura.\n\nPROTECCION VISUAL. Filtro contra radiación UV e infrarroja.\n\nPROTECCION TERMICA. Resistente a chispas y salpicaduras.\n\nCOMODA DE USAR. Diseño ergonómico.\n\nMáscara para soldar. Tu seguridad no es un juego.",
        precio: "Consultar",
        foto: "careta.jpg",
        tieneFoto: true,
        categoria: "ferreteria"
    },
    {
        id: 11,
        nombre: "LIGAS DE AMARRE ELÁSTICAS - Con ganchos metálicos",
        descripcion: "SUJETA TU CARGA CON SEGURIDAD. Ligas elásticas con ganchos metálicos para moto, bicicleta o lo que necesites asegurar. Multiusos: amarrar carga, fijar objetos, asegurar maletas. Duraderas, resistentes al sol y agua.",
        precio: "Consultar",
        foto: "ligas-elasticas-amarre.webp",
        tieneFoto: true,
        categoria: "ferreteria"
    },
    {
        id: 12,
        nombre: "MULTÍMETRO DIGITAL - Herramienta de medición",
        descripcion: "LO QUE TODO ELECTRICISTA NECESITA. Mide voltaje, corriente, resistencia y prueba continuidad. Pantalla LCD, selector de funciones, puntas incluidas. Ideal para profesionales, aficionados y reparaciones del hogar.",
        precio: "Consultar",
        foto: "multimetro-digital.webp",
        tieneFoto: true,
        categoria: "ferreteria"
    },
    {
        id: 13,
        nombre: "CINTA MÉTRICA 3 METROS",
        descripcion: "PRECISIÓN EN CADA MEDIDA. Longitud 10 pies / 3 metros. Cinta flexible, freno de seguridad, diseño compacto. Ideal para costura, bricolaje, manualidades, medir muebles. Práctica y precisa.",
        precio: "Consultar",
        foto: "cinta-metrica-3m.webp",
        tieneFoto: true,
        categoria: "ferreteria"
    },
    // Protectores y otros
    {
        id: 14,
        nombre: "PROTECTOR DE VOLTAJE VOLTAGE ELECTRONICSART",
        descripcion: "PROTEGE TUS EQUIPOS. Protector de voltaje para electrodomésticos. Entrada 90V-140V, corriente máxima 20A. Corta la corriente automáticamente si detecta irregularidades. Ideal para TV, refrigeradores, computadoras.",
        precio: "Consultar",
        foto: "protector-voltage-electronicsart.webp",
        tieneFoto: true,
        categoria: "ferreteria"
    },

    // ============================================
    // HOGAR (IDs 15-29) - 15 productos
    // ============================================
    // CESTOs
    {
        id: 15,
        nombre: "CESTO PARA BASURA KEEP CLEAN PRINCFRARE",
        descripcion: "KEEP CLEAN. Mantén tu hogar limpio y organizado con este práctico cesto para basura.\n\nPRACTICO Y RESISTENTE. Diseñado para soportar el uso diario. Material duradero que no se deforma ni se rompe fácilmente.\n\nPARA TODA LA CASA: Baño (papeles, hisopos, algodones), Cocina (desperdicios de alimentos), Habitación (papeles pequeños).\n\nFACIL DE LIMPIAR. Superficie lisa que se lava rápidamente. No absorbe olores ni humedad.\n\nKeep Clean. Tu aliado para un hogar siempre limpio.",
        precio: "Consultar",
        foto: "cesto.jpg",
        tieneFoto: true,
        categoria: "hogar"
    },
    {
        id: 16,
        nombre: "CESTO PARA ROPA GRANDE - Organizador",
        descripcion: "ORGANIZA TU HOGAR CON ESTILO. Capacidad extra, resistente, ligero y transpirable. Ideal para ropa sucia, almacenar juguetes, mantas o productos de limpieza. Ahorra espacio y mantiene todo ordenado.",
        precio: "Consultar",
        foto: "cesto-ropa-grande.webp",
        tieneFoto: true,
        categoria: "hogar"
    },
    // Cocina y limpieza
    {
        id: 17,
        nombre: "SET JARRA CON COLADOR + VASOS",
        descripcion: "PARA TUS BEBIDAS DIARIAS: Jarra de plástico de grado alimenticio (libre de BPA) con colador incorporado y vasos a juego. Perfecta para servir agua fresca, jugos naturales (el colador atrapa las semillas y pulpa), limonadas, té helado y más.\n\nPARA TU COCINA: ¿Sabías que puedes usar esta jarra para calentar líquidos en el microondas? Ideal para preparar leche caliente, caldos o infusiones. El colador también sirve para escurrir verduras pequeñas, enjuagar frutas o colar pastas.\n\nPARA TU DESPENSA: Úsala para almacenar granos, cereales o legumbres. Al ser de grado alimenticio, conserva tus alimentos sin contaminantes.\n\nPARA TUS REUNIONES: El set completo te permite servir bebidas a tus invitados con estilo y practicidad.\n\nUn solo set, infinitas posibilidades en tu hogar.",
        precio: "Consultar",
        foto: "jarra.png",
        tieneFoto: true,
        categoria: "hogar"
    },
    {
        id: 18,
        nombre: "GAMUZA CLEAN CHAM - Paño de microfibra para limpieza",
        descripcion: "LA REINA DE LA LIMPIEZA. Clean Cham no es una gamuza cualquiera. Es tu aliada para dejar todo impecable, sin esfuerzo y sin rayas.\n\nPARA TU VEHICULO: Úsala para secar el carro después del lavado. Absorbe el agua al instante, no deja marcas ni pelusas, y deja la pintura brillante.\n\nPARA TODA LA CASA: Ventanas y espejos sin rayas, cocina seca encimeras y ollas, baño deja azulejos brillantes, mascotas seca a tu perro después del baño.\n\nSUPER ABSORCION: Puede absorber hasta 7 veces su peso en agua.\n\nClean Cham. Una gamuza, mil usos.",
        precio: "Consultar",
        foto: "gamuza.jpg",
        tieneFoto: true,
        categoria: "hogar"
    },
    {
        id: 19,
        nombre: "POZUELOS REDONDOS - Set de 5 recipientes grandes",
        descripcion: "EL ENCANTO DE LO ESENCIAL. Descubre la practicidad con estilo en estos 5 recipientes grandes. Plástico engomado de excelente calidad, resistentes y suaves al tacto. Ideales para microondas, nevera y mesa. ¡Porque hasta lo cotidiano merece ser bello!",
        precio: "Consultar",
        foto: "pozuelos-redondos.webp",
        tieneFoto: true,
        categoria: "hogar"
    },
    {
        id: 20,
        nombre: "POTES CON CUCHARA Y FLORES - Almacena con estilo",
        descripcion: "LINDOS, PRÁCTICOS Y REUTILIZABLES. Potes plásticos con tapa, diseño exterior con flores, incluyen cucharita. Ideales para: especias, café, azúcar, cremas, manualidades. Organiza con flor y vida.",
        precio: "Consultar",
        foto: "potes-cuchara-flores.webp",
        tieneFoto: true,
        categoria: "hogar"
    },
    {
        id: 21,
        nombre: "CAZUELA VENEZIA - Acero Inoxidable con Tapa (2 piezas)",
        descripcion: "EL CORAZÓN DE TU COCINA. Cazuela de acero inoxidable de alta calidad + tapa de ajuste perfecto. Cocción uniforme, fácil limpieza, diseño elegante. Ideal para guisos, sopas, arroces. Tradición italiana en tu hogar.",
        precio: "Consultar",
        foto: "cazuela-venezia-acero.webp",
        tieneFoto: true,
        categoria: "hogar"
    },
    {
        id: 22,
        nombre: "SARTÉN ANTIADHERENTE VENEZIA - Varios tamaños",
        descripcion: "COCINA CON LIBERTAD. Disponible en 18, 20, 24, 26 y 28 cm. Antiadherente de calidad, base durable, mango ergonómico. Para desayunos, almuerzos, cenas familiares. Durabilidad y rendimiento.",
        precio: "Consultar",
        foto: "sarten-venezia-antiadherente.webp",
        tieneFoto: true,
        categoria: "hogar"
    },
    {
        id: 23,
        nombre: "SET DE CACEROLAS DE ESMALTE - 5 piezas con tapa",
        descripcion: "COCINA TRADICIONAL CON ESTILO. Juego de 5 cacerolas de esmalte con tapa: 16, 18, 20, 22 y 24 cm. Distribución uniforme del calor, fácil limpieza, diseño clásico. Para guisos con sabor casero.",
        precio: "Consultar",
        foto: "set-cacerolas-esmalte-5pzas.webp",
        tieneFoto: true,
        categoria: "hogar"
    },
    {
        id: 24,
        nombre: "SET COLADOR LIZHI FA-40 - Acero Inoxidable",
        descripcion: "ESCURRE, CUELA Y SIRVE CON ESTILO. Colador de acero inoxidable con rejilla fina. Ideal para: escurrir aceite de frituras, colar pastas, enjuagar granos. Práctico, duradero y fácil de limpiar.",
        precio: "Consultar",
        foto: "colador-lizhi-fa40.webp",
        tieneFoto: true,
        categoria: "hogar"
    },
    {
        id: 25,
        nombre: "CEPILLOS DE LAVAR - Multiusos",
        descripcion: "LIMPIEZA PROFUNDA, ESFUERZO MÍNIMO. Diseño ergonómico con cerdas resistentes. Variedad de tamaños. Ideales para: lavar verduras, botellas, zapatos, llantas, bañeras. Ahorran esfuerzo y son duraderos.",
        precio: "Consultar",
        foto: "cepillos-lavar-multiusos.webp",
        tieneFoto: true,
        categoria: "hogar"
    },
    {
        id: 26,
        nombre: "ESPONJAS DE FREGAR - 2 capas",
        descripcion: "LIMPIEZA PRÁCTICA Y EFICIENTE. Dos caras en una: lado de estropajo para suciedad difícil, lado de esponja suave para superficies delicadas. Duraderas, absorbentes y económicas. Pack múltiple.",
        precio: "Consultar",
        foto: "esponjas-limpieza-multiusos.webp",
        tieneFoto: true,
        categoria: "hogar"
    },
    {
        id: 27,
        nombre: "BOMBILLO LED SHUAI SERIES - 20W Luz Blanca",
        descripcion: "LUZ BRILLANTE, AHORRO INTELIGENTE. Bombillo LED 20W con rosca estándar E27. Alta protección, luz blanca y potente, 90% de ahorro energético. Ideal para leer, trabajar o cocinar. ¡Dile adiós a los bombillos que se funden rápido!",
        precio: "Consultar",
        foto: "bombillo-led-shuai-20w.webp",
        tieneFoto: true,
        categoria: "ferreteria"
    },
    {
        id: 28,
        nombre: "SOMBRILLAS PARA TODOS - Grandes satinadas + infantiles",
        descripcion: "ELEGANCIA Y DIVERSIÓN BAJO LA LLUVIA. Grandes satinadas con mango dorado (para adultos). Modelos infantiles con diseños divertidos. Resistentes, duraderas. Para toda la familia.",
        precio: "Consultar",
        foto: "sombrillas-familiares.webp",
        tieneFoto: true,
        categoria: "hogar"
    },
    {
        id: 29,
        nombre: "PAÑALES PAMPER TIPITI - Protección 12 horas",
        descripcion: "TRANQUILIDAD PARA TI, PROTECCIÓN PARA ÉL. Hasta 12 horas de sequedad, ajuste perfecto, suavidad hipoalergénica. La protección que tu bebé merece. Prueba la diferencia Pamper Tipiti.",
        precio: "Consultar",
        foto: "panales-pamper-tipiti.webp",
        tieneFoto: true,
        categoria: "hogar"
    },

    // ============================================
    // TECNOLOGIA (IDs 30-41) - 12 productos
    // ============================================
    // Parlantes + Radio
    {
        id: 30,
        nombre: "PARLANTE INALAMBRICO PORTATIL G15-1346 - 3 pulgadas",
        descripcion: "SONIDO GRANDE, TAMAÑO COMPACTO. Este parlante inalámbrico demuestra que lo bueno sí viene en frasco pequeño.\n\nCALIDAD FANTASTICA. A pesar de su tamaño compacto, ofrece un sonido limpio y potente.\n\nINALAMBRICO. Conéctalo por Bluetooth a tu celular, tablet o cualquier dispositivo.\n\nPORTATIL. Diseñado para que lo lleves contigo. A la playa, al parque, de viaje.\n\nParlante G15-1346. Sonido grande donde vayas.",
        precio: "Consultar",
        foto: "speaker.jpg",
        tieneFoto: true,
        categoria: "tecnologia"
    },
    {
        id: 31,
        nombre: "PARLANTE INALAMBRICO PENTACLE - 6.5 pulgadas con LUZ",
        descripcion: "MUSICA Y LUZ EN UN SOLO EQUIPO. El parlante Pentacle no solo suena fuerte, también tiene luz incorporada.\n\nSONIDO POTENTE. Con 6.5 pulgadas de potencia, llena cualquier espacio de música.\n\nLUZ INCORPORADA. Ideal para crear ambiente en reuniones.\n\nINALAMBRICO. Conéctalo por Bluetooth.\n\nPORTATIL. Llévalo a donde quieras.\n\nPentacle. Música que se ve y se siente.",
        precio: "Consultar",
        foto: "bocina2.jpg",
        tieneFoto: true,
        categoria: "tecnologia"
    },
    {
        id: 32,
        nombre: "PARLANTE INALAMBRICO CON LUZ - 4 pulgadas",
        descripcion: "MUSICA Y LUZ EN TU BOLSILLO. Versión compacta del parlante Pentacle.\n\nSONIDO CLARO. Ofrece un sonido nítido para su tamaño.\n\nLUZ INCORPORADA. Útil para iluminar o darle un toque diferente.\n\nINALAMBRICO. Conexión Bluetooth rápida.\n\nSUPER PORTATIL. Cabe en cualquier mochila.\n\nParlante 4 pulgadas. Música y luz donde vayas.",
        precio: "Consultar",
        foto: "bocina.jpg",
        tieneFoto: true,
        categoria: "tecnologia"
    },
    {
        id: 33,
        nombre: "RADIO BLUETOOTH AM/FM - Con panel solar y linterna",
        descripcion: "¡TODO EN UNO! Radio portátil con AM/FM, Bluetooth, USB y Micro SD. Panel solar integrado para carga, linterna lateral. Ideal para camping, emergencias, playa o cortes de luz. ¡Compañero ideal para exteriores!",
        precio: "Consultar",
        foto: "radio-bluetooth-solar.webp",
        tieneFoto: true,
        categoria: "tecnologia"
    },
    // Regletas
    {
        id: 34,
        nombre: "REGLETA ELECTRICA 6 TOMACORRIENTES - Protector de voltaje",
        descripcion: "MAS CONEXIONES, MAS SEGURIDAD. La regleta que necesitas para conectar todos tus dispositivos.\n\n6 TOMACORRIENTES. Conecta múltiples dispositivos a la vez.\n\nPROTECCION DE VOLTAJE. Ayuda a proteger tus equipos contra picos de corriente.\n\nDISEÑO SEGURO. Contactos firmes que evitan chispazos.\n\nRegleta. Donde necesites más, ahí estamos.",
        precio: "Consultar",
        foto: "extension.jpg",
        tieneFoto: true,
        categoria: "tecnologia"
    },
    {
        id: 35,
        nombre: "POWER STRIP - Regleta de 6 enchufes con 5 metros",
        descripcion: "LLEVA LA ENERGÍA A DONDE LA NECESITES. Regleta con 6 tomacorrientes y cable de 5 metros de largo. Ideal para habitaciones grandes, talleres o exteriores. Material resistente, protección contra sobrecargas.",
        precio: "Consultar",
        foto: "regleta-6enchufes-5m.webp",
        tieneFoto: true,
        categoria: "tecnologia"
    },
    {
        id: 36,
        nombre: "REGLETA ELÉCTRICA - 10 tomas + USB + Tipo C",
        descripcion: "TODO LO QUE NECESITAS EN UN SOLO LUGAR. 10 tomas de corriente + 2 puertos USB + 1 puerto Tipo C. Botón de encendido y apagado. Para cargar múltiples dispositivos a la vez.",
        precio: "Consultar",
        foto: "regleta-10tomos-usb-c.webp",
        tieneFoto: true,
        categoria: "tecnologia"
    },
    // Soportes TV
    {
        id: 37,
        nombre: "SOPORTE DE PARED PARA TV HD601 - 14 a 42 pulgadas",
        descripcion: "AHORRA ESPACIO, GANA ESTILO. Soporte universal de pared modelo HD601. Compatible con pantallas LED/LCD de 14 a 42 pulgadas. Incluye kit de montaje. Acero resistente, fácil instalación.",
        precio: "Consultar",
        foto: "soporte-tv-hd601-42.webp",
        tieneFoto: true,
        categoria: "tecnologia"
    },
    {
        id: 38,
        nombre: "SOPORTE INCLINABLE HT-002 - 32 a 55 pulgadas",
        descripcion: "LA BASE PERFECTA PARA TU TV. Soporte inclinable con amplia compatibilidad VESA. Peso máximo 20 kg. Reduce reflejos y mejora el ángulo de visión. Fácil instalación, acero de alta resistencia.",
        precio: "Consultar",
        foto: "soporte-inclinable-ht002.webp",
        tieneFoto: true,
        categoria: "tecnologia"
    },
    {
        id: 39,
        nombre: "SOPORTE INCLINABLE HT-003 - 32 a 70 pulgadas",
        descripcion: "POTENCIA PARA PANTALLAS GRANDES. Soporte reforzado para TV de 32 a 70 pulgadas. Alta capacidad de carga, estructura robusta, inclinación ajustable. Para salas, cine en casa o espacios comerciales.",
        precio: "Consultar",
        foto: "soporte-inclinable-ht003.webp",
        tieneFoto: true,
        categoria: "tecnologia"
    },

    // ============================================
    // BELLEZA (IDs 40-57) - 18 productos
    // ============================================
    // Perfumes VV.LOVE
    {
        id: 40,
        nombre: "SET DE PERFUME V.V. LOVE AMAZING PINK - Perfume + Crema",
        descripcion: "ELEGANCIA Y SEDUCCION EN UN SOLO SET. V.V. LOVE Amazing Pink para la mujer que quiere sentirse bella.\n\nAMAZING PINK: Fragancia femenina y cautivadora. Notas florales.\n\nSET COMPLETO: Eau de Toilette (35ml) + Body Lotion (12 Fl. Oz).\n\nREGALO PERFECTO: Para tu pareja, madre, amiga o para ti misma.\n\nV.V. LOVE Amazing Pink. La fragancia que no pasa desapercibida.",
        precio: "Consultar",
        foto: "perfume 3.png",
        tieneFoto: true,
        categoria: "belleza"
    },
    {
        id: 41,
        nombre: "SET DE PERFUME V.V. LOVE LA BELLA VIVA - Perfume + Crema",
        descripcion: "LA BELLA VIVA. Para la mujer que vive intensamente.\n\nLA BELLA VIVA: Fragancia vibrante y cautivadora.\n\nSET COMPLETO: Eau de Toilette (35ml) + Body Lotion (12 Fl. Oz).\n\nREGALO PERFECTO: Para tu pareja, madre, amiga.\n\nV.V. LOVE La Bella Viva. Vive intensamente. Huele inolvidable.",
        precio: "Consultar",
        foto: "perfume 2.png",
        tieneFoto: true,
        categoria: "belleza"
    },
    {
        id: 42,
        nombre: "SET DE PERFUME V.V. LOVE ENCHANTMENT - Perfume + Crema",
        descripcion: "ENCHANTMENT. La fragancia que encanta, que seduce.\n\nENCHANTMENT: Fragancia envolvente y misteriosa.\n\nSET COMPLETO: Eau de Toilette (35ml) + Body Lotion (12 Fl. Oz).\n\nREGALO PERFECTO: Para esa mujer especial.\n\nV.V. LOVE Enchantment. Hechiza con tu aroma.",
        precio: "Consultar",
        foto: "perfume1.jpg",
        tieneFoto: true,
        categoria: "belleza"
    },
    {
        id: 43,
        nombre: "SET DE PERFUME V.V. LOVE FOREVER EMOTION - Perfume + Crema",
        descripcion: "FOREVER EMOTION. Emociones que duran para siempre.\n\nFOREVER EMOTION: Fragancia que despierta sentimientos.\n\nSET COMPLETO: Eau de Toilette (35ml) + Body Lotion (12 Fl. Oz).\n\nREGALO PERFECTO: Para quien despierta emociones en ti.\n\nV.V. LOVE Forever Emotion. Emociones que duran para siempre.",
        precio: "Consultar",
        foto: "perfume.jpg",
        tieneFoto: true,
        categoria: "belleza"
    },
    {
        id: 44,
        nombre: "SET VV.LOVE SOUL JOURNEY - Shower Gel + Eau de Toilette",
        descripcion: "EL VIAJE DE TU ALMA EN DOS FRAGANCIAS. Set que incluye Shower Gel + Eau de Toilette. Notas de salida: frutos rojos y cítricos; corazón de flores blancas; fondo de maderas suaves y vainilla. Para almas viajeras.",
        precio: "Consultar",
        foto: "set-soul-journey.webp",
        tieneFoto: true,
        categoria: "belleza"
    },
    // Colonias varias
    {
        id: 45,
        nombre: "COLONIAS SPLASH MIST PYW - 250 ml (6 códigos / 36 aromas)",
        descripcion: "¡LAS MÁS VIRALES! Tamaño familiar de 250 ml. Duppe de fragancias importadas, réplicas exactas de perfumes famosos. Larga duración, fijación increíble. Para damas, caballeros y jóvenes. ¡Variedad de aromas!",
        precio: "Consultar",
        foto: "colonias-splash-mist.webp",
        tieneFoto: true,
        categoria: "belleza"
    },
    // Tintes Nevada
    {
        id: 46,
        nombre: "TINTE NEVADA - Red Intense (Rojo intenso)",
        descripcion: "COLOR PERMANENTE CON COBERTURA TOTAL DE CANAS. Tono rojo intenso y vibrante. Fórmula profesional enriquecida con minerales y nutrientes. Acabado brillante, larga duración. ¡Resultado de salón en casa!",
        precio: "Consultar",
        foto: "tinte-nevada-red-intense.webp",
        tieneFoto: true,
        categoria: "belleza"
    },
    {
        id: 47,
        nombre: "TINTE NEVADA - 1 Natural Black (Negro intenso)",
        descripcion: "NEGRO PROFUNDO, COBERTURA PERFECTA. Tinte permanente negro intenso con cobertura total de canas. Fórmula enriquecida que nutre mientras tiñe. Brillo profesional, color elegante y sofisticado.",
        precio: "Consultar",
        foto: "tinte-nevada-black-1.webp",
        tieneFoto: true,
        categoria: "belleza"
    },
    {
        id: 48,
        nombre: "TINTE NEVADA - 9.3 Very Light Golden Blonde",
        descripcion: "RUBIO DORADO CLARO Y LUMINOSO. Tinte permanente con reflejos dorados. Cobertura total de canas, fórmula nutritiva. Acabado brillante, color cálido y favorecedor. Para quienes buscan un rubio elegante.",
        precio: "Consultar",
        foto: "tinte-nevada-blonde-93.webp",
        tieneFoto: true,
        categoria: "belleza"
    },
    // Higiene bucal
    {
        id: 49,
        nombre: "PASTA DENTAL BENDFRESH TOTAL + CEPILLO - Menta Fresca",
        descripcion: "BENDFRESH TOTAL. La pasta dental que cuida toda tu salud bucal.\n\nINCLUYE CEPILLO DENTAL. Todo lo que necesitas en un solo producto.\n\nTRES EFICACIAS EN UNA: Protección anticaries, Aliento fresco, Cuidado de encías.\n\nFRESCURA MENTA. Sabor intenso y refrescante.\n\nBendfresh Total. Tu sonrisa, nuestra prioridad.",
        precio: "Consultar",
        foto: "cepillo.jpg",
        tieneFoto: true,
        categoria: "belleza"
    },
    {
        id: 50,
        nombre: "PASTA DENTAL COIGORE ALMIGHTY - 100g - Menta Fresca",
        descripcion: "COIGORE ALMIGHTY. La pasta dental que lo puede todo.\n\nHOLD EFFECT 12 HORAS. Protección y frescura por 12 horas.\n\nFRESCURA MENTA. Combate el mal aliento.\n\nALMIGHTY: Combate caries, fortalece esmalte, cuida encías.\n\nCoigore Almighty. El poder que tu sonrisa merece.",
        precio: "Consultar",
        foto: "pasta.jpg",
        tieneFoto: true,
        categoria: "belleza"
    },
    {
        id: 51,
        nombre: "CEPILLO DENTAL K - Medium",
        descripcion: "PROTEGE TU SONRISA, CUIDA TU BOCA. Cerdas medium (suavidad media) para limpieza profunda sin lastimar encías. Diseño ergonómico, mango cómodo. Ideal para adultos y jóvenes.",
        precio: "Consultar",
        foto: "cepillo-dental-k-medium.webp",
        tieneFoto: true,
        categoria: "belleza"
    },
    // Protección femenina
    {
        id: 52,
        nombre: "PROTECTORES DIARIOS SUEÑOS COMODOS PLUS LARGE - 12 horas",
        descripcion: "SUEÑOS COMODOS. Tu tranquilidad y bienestar merecen la mejor protección.\n\nPLUS LARGE: Diseño más grande para mayor cobertura.\n\n12 HORAS DE PROTECCION: Control de olores de larga duración.\n\nCONTROL DE OLORES: Neutraliza los olores.\n\nCOMODOS Y DISCRETOS: Suaves al tacto.\n\nSueños Cómodos. Tu tranquilidad mientras vives, mientras duermes.",
        precio: "Consultar",
        foto: "diaria.png",
        tieneFoto: true,
        categoria: "belleza"
    },
    {
        id: 53,
        nombre: "TOALLAS NEW SUEÑOS ULTRA - 240mm (10 unidades)",
        descripcion: "PROTECCIÓN QUE DURA. Toallas desechables con ultra absorción para flujo moderado. Tamaño 240mm, cómodas y discretas. Paquete de 10 unidades, ideal para llevar en la cartera. Frescura y seguridad.",
        precio: "Consultar",
        foto: "toallas-new-suenos-ultra.webp",
        tieneFoto: true,
        categoria: "belleza"
    },
    {
        id: 54,
        nombre: "TOALLAS NOCTURNAS NEW SUEÑOS ULTRA - 280mm con alas (10 unidades)",
        descripcion: "3X PROTECCIÓN NOCTURNA. Triple capa: InstantDry (absorción rápida), LeakGuard (anti-fugas), OdourLock (control de olores). Con alas, tamaño 280mm. Duerme tranquila, despierta segura.",
        precio: "Consultar",
        foto: "toallas-nocturnas-new-suenos.webp",
        tieneFoto: true,
        categoria: "belleza"
    },
    // Hisopos
    {
        id: 55,
        nombre: "HISOPOS DE ALGODON - Paquete",
        descripcion: "MUCHO MAS QUE LIMPIEZA DE OIDOS. Los hisopos tienen MIL USOS.\n\nPARA HIGIENE PERSONAL: El uso clásico.\n\nPARA BELLEZA: Corrige errores de maquillaje, difumina sombras.\n\nPARA LIMPIEZA: Rincones difíciles, teclados, celulares.\n\nPARA MANUALIDADES: Aplicar pegamento, mezclar pinturas.\n\nHisopos. Un pequeño gran aliado en tu hogar.",
        precio: "Consultar",
        foto: "hisopo.jpg",
        tieneFoto: true,
        categoria: "belleza"
    },
    {
        id: 56,
        nombre: "HISOPOS DE ALGODÓN - Limpieza suave",
        descripcion: "LIMPIEZA SUAVE Y PRECISA. Puntas de algodón suave hipoalergénicas, bastón resistente. Para higiene, maquillaje, manualidades, limpieza de objetos delicados. Prácticos e higiénicos.",
        precio: "Consultar",
        foto: "hisopos-algodon.webp",
        tieneFoto: true,
        categoria: "belleza"
    },
    // Otros belleza
    {
        id: 57,
        nombre: "TRATAMIENTO CAPILAR ORIGEM NAZCA",
        descripcion: "PARA RIZOS PERFECTOS: ¿Tienes cabello rizado o encrespado? Origem Nazca es tu aliado ideal. Hidratación intensiva que define tus rizos.\n\nPARA TODA LA FAMILIA: Beneficia a TODO tipo de cabello: seco, maltratado, con frizz, teñido.\n\nUn tratamiento versátil para que toda la familia luzca un cabello saludable.",
        precio: "Consultar",
        foto: "origem.jpg",
        tieneFoto: true,
        categoria: "belleza"
    },
    {
        id: 58,
        nombre: "MÁSCARA A PRUEBA DE AGUA FLEUR CHABELY",
        descripcion: "PESTAÑAS PERFECTAS TODO EL DÍA. Fórmula resistente al agua, lágrimas, humedad y sudor. Larga duración, sin manchas ni grumos. Volumen y definición para que brilles sin preocupaciones. ¡Belleza que no teme a nada!",
        precio: "Consultar",
        foto: "mascara-fleur-chabely.webp",
        tieneFoto: true,
        categoria: "belleza"
    },
    {
        id: 59,
        nombre: "SHAMPOO MARYNA VOLUME & SHINE",
        descripcion: "BRILLO Y VOLUMEN PARA TU CABELLO. Fórmula que levanta la raíz, da cuerpo y luminosidad. Limpieza suave, sensación de frescura por más tiempo. Para cabellos sin vida que necesitan volumen sin perder suavidad.",
        precio: "Consultar",
        foto: "shampoo-maryna-volume.webp",
        tieneFoto: true,
        categoria: "belleza"
    },
    {
        id: 60,
        nombre: "HOJAS DE AFEITAR DORCO TG708N - Paquete con 5 hojas",
        descripcion: "PRECISIÓN Y CALIDAD. Cartuchos de repuesto tipo fijo, multihojas con tira lubricante. Afeitado suave, cercano y cómodo. Compatibles con mangos DORCO. Económicas y duraderas.",
        precio: "Consultar",
        foto: "hojas-dorco-tg708n.webp",
        tieneFoto: true,
        categoria: "belleza"
    },

    // ============================================
    // ROPA (IDs 61-73) - 13 productos
    // ============================================
    // Sandalias y calzado (todos juntos)
    {
        id: 61,
        nombre: "SANDALIAS FLIP FLOP - Rojo Picnic",
        descripcion: "EL TOQUE DE COLOR PARA TUS DÍAS DE VERANO. Súper cómodas, ligeras y con un diseño vibrante. Ideales para playa, paseos o el día a día. Frescura y estilo en cada paso.",
        precio: "Consultar",
        foto: "sandalias-rojo-picnic.webp",
        tieneFoto: true,
        categoria: "ropa"
    },
    {
        id: 62,
        nombre: "COOL SANDALS - Marrones con corazoncitos dorados",
        descripcion: "EL DETALLE DORADO QUE TU LOOK ESPERABA. Sandalias marrones decoradas con delicados corazoncitos dorados. Estilo único, cómodas y frescas. Perfectas para looks casuales, bohemios o arreglados.",
        precio: "Consultar",
        foto: "sandalias-cool-doradas.webp",
        tieneFoto: true,
        categoria: "ropa"
    },
    {
        id: 63,
        nombre: "ZAPATOS ROSADOS - Diseño elegante",
        descripcion: "EL TOQUE FEMENINO QUE TU LOOK NECESITA. Diseño que afina visualmente el pie. Color rosado combinable. Ideales para fiestas, bodas, cenas románticas, sesiones de fotos. Haz que cada paso cuente.",
        precio: "Consultar",
        foto: "zapatos-rosados-elegantes.webp",
        tieneFoto: true,
        categoria: "ropa"
    },
    {
        id: 64,
        nombre: "TACONES NEGROS - El clásico que nunca falla",
        descripcion: "ELEGANCIA Y PODER EN CADA PASO. Color negro combina con todo, tacón cómodo, diseño versátil. Para fiestas, oficina, eventos formales. Estilo atemporal que toda mujer necesita.",
        precio: "Consultar",
        foto: "tacones-negros-clasicos.webp",
        tieneFoto: true,
        categoria: "ropa"
    },
    {
        id: 65,
        nombre: "CHANCLETAS COLOR BANDERA AMERICANA",
        descripcion: "ESTILO CASUAL CON ONDA VERANIEGA. Rojo, blanco y azul en diseño moderno. Cómodas y frescas para playa, piscina, fiestas al aire libre. Resistente y versátil.",
        precio: "Consultar",
        foto: "chanclas-bandera-usa.webp",
        tieneFoto: true,
        categoria: "ropa"
    },
    {
        id: 66,
        nombre: "ZAPATOS PARA NIÑOS - 4 pares (2 niñas + 2 niños)",
        descripcion: "ESTILO Y COMODIDAD PARA LOS MÁS PEQUEÑOS. Para ellas: colores suaves y femeninos. Para ellos: diseños resistentes y prácticos. Ideales para escuela, hogar, juegos. Cómodos y fáciles de limpiar.",
        precio: "Consultar",
        foto: "zapatos-ninos-4pares.webp",
        tieneFoto: true,
        categoria: "ropa"
    },
    {
        id: 67,
        nombre: "SANDALIAS NEGRAS - Básicas y cómodas",
        descripcion: "LA COMODIDAD QUE TUS PIES MERECEN. Color negro clásico, suela suave, frescas y ligeras. Para el día a día, casa, calle. No cansan los pies, fáciles de poner, resistentes.",
        precio: "Consultar",
        foto: "sandalias-negras-basicas.webp",
        tieneFoto: true,
        categoria: "ropa"
    },
    {
        id: 68,
        nombre: "SANDALIAS ROSAS - Suaves y femeninas",
        descripcion: "LA SUAVIDAD QUE TUS PIES MERECEN. Color rosa suave, suela acolchada, frescas y ligeras. Para playa, ciudad, casa. No cansan los pies, detalle femenino que alegra cualquier look.",
        precio: "Consultar",
        foto: "sandalias-rosas-suaves.webp",
        tieneFoto: true,
        categoria: "ropa"
    },
    {
        id: 69,
        nombre: "SANDALIAS A NEW DAY - Con soporte contorneado",
        descripcion: "DISEÑO MODERNO, COMODIDAD QUE SE SIENTE. Plantilla contorneada que se adapta al pie, soporte adicional para el arco. Amortiguación, durabilidad. Ideales para quienes buscan comodidad todo el día.",
        precio: "Consultar",
        foto: "sandalias-a-new-day-soporte.webp",
        tieneFoto: true,
        categoria: "ropa"
    },
    {
        id: 70,
        nombre: "SANDALIAS NEGRAS CON TRABILLAS",
        descripcion: "UFF, QUÉ ESTILO. Negro total, con trabillas que sujetan perfecto. Cómodas, frescas, para andar horas sin parar. Estilizan, se ven modernas. Para jeans, short, vestido.",
        precio: "Consultar",
        foto: "sandalias-negras-trabillas.webp",
        tieneFoto: true,
        categoria: "ropa"
    },
    // Coser/manualidades
    {
        id: 71,
        nombre: "SET DE HILOS DE COSER - 10 colores",
        descripcion: "10 HILOS, 10 COLORES, INFINITAS POSIBILIDADES. Set con paleta de colores vibrantes para costuras rápidas, bordados, remiendos creativos o manualidades. ¡Ten siempre el color perfecto a la mano!",
        precio: "Consultar",
        foto: "set-hilos-10-colores.webp",
        tieneFoto: true,
        categoria: "hogar"
    },
    {
        id: 72,
        nombre: "KIT DE COSTURA PORTÁTIL",
        descripcion: "TODO LO NECESARIO PARA TUS ARREGLOS. Incluye: corta hilos, hilos de coser, cinta métrica, alfileres, agujas para mano y máquina. Portátil, completo y práctico. Para modistas, estudiantes y emergencias en casa.",
        precio: "Consultar",
        foto: "kit-costura-portatil.webp",
        tieneFoto: true,
        categoria: "hogar"
    },
    {
        id: 73,
        nombre: "JUEGO DE 3 TIJERAS SAV COLLECTION",
        descripcion: "PRECISIÓN Y ESTILO PARA CADA TAREA. Tres tijeras de alta calidad para oficina, costura, manualidades y hogar. Filo duradero, mango ergonómico, diseño elegante. Las 3 que necesitas, siempre a mano.",
        precio: "Consultar",
        foto: "tijeras-sav-collection-3piezas.webp",
        tieneFoto: true,
        categoria: "ferreteria"
    },
    // Plumas (solas)
    {
        id: 74,
        nombre: "PLUMAS DE GEL - Colores vibrantes",
        descripcion: "LA SUAVIDAD QUE TUS APUNTES MERECEN. Colores vibrantes (clásicos y neón), punta fina/mediana, tinta de secado rápido. Para tomar apuntes, dibujar, firmar, decorar agendas. ¡Sin borrones!",
        precio: "Consultar",
        foto: "plumas-gel-colores.webp",
        tieneFoto: true,
        categoria: "hogar"
    },

    // ============================================
    // TRANSPORTE (IDs 75-77) - 3 productos (Mishozuki)
    // ============================================
    {
        id: 75,
        nombre: "BICICLETA ELECTRICA MISHOZUKI (Modelo 1)",
        descripcion: "LA SOLUCION INTELIGENTE PARA MOVERTE EN CUBA. ¿Cansado de esperar guaguas llenas, pagar combustible caro o llegar agotado al trabajo? Mishozuki llegó para cambiarlo todo.\n\nCOMO FUNCIONA: Pedalea con normalidad y la asistencia eléctrica hace el resto. Sube cuestas sin esfuerzo, llega fresco a tu destino.\n\nBATERIA DE LARGA DURACION. Una sola carga te da para varios días de uso. La recargas en tu casa como un celular gigante.\n\nPARA TODOS. Personas mayores, quienes tienen condición física limitada, trabajadores que llegan agotados, estudiantes... Mishozuki es para cualquiera.\n\nTRES MODELOS DISPONIBLES. Visualmente diferentes, pero con la MISMA calidad y rendimiento.\n\nMishozuki. Porque tu tiempo y tu energía valen oro.",
        precio: "Consultar",
        foto: "bici.jpg",
        tieneFoto: true,
        categoria: "transporte"
    },
    {
        id: 76,
        nombre: "BICICLETA ELECTRICA MISHOZUKI (Modelo 2)",
        descripcion: "LA SOLUCION INTELIGENTE PARA MOVERTE EN CUBA. ¿Cansado de esperar guaguas llenas, pagar combustible caro o llegar agotado al trabajo? Mishozuki llegó para cambiarlo todo.\n\nCOMO FUNCIONA: Pedalea con normalidad y la asistencia eléctrica hace el resto. Sube cuestas sin esfuerzo, llega fresco a tu destino.\n\nBATERIA DE LARGA DURACION. Una sola carga te da para varios días de uso. La recargas en tu casa como un celular gigante.\n\nPARA TODOS. Personas mayores, quienes tienen condición física limitada, trabajadores que llegan agotados, estudiantes... Mishozuki es para cualquiera.\n\nTRES MODELOS DISPONIBLES. Visualmente diferentes, pero con la MISMA calidad y rendimiento.\n\nMishozuki. Porque tu tiempo y tu energía valen oro.",
        precio: "Consultar",
        foto: "bici1.jpg",
        tieneFoto: true,
        categoria: "transporte"
    },
    {
        id: 77,
        nombre: "BICICLETA ELECTRICA MISHOZUKI (Modelo 3)",
        descripcion: "LA SOLUCION INTELIGENTE PARA MOVERTE EN CUBA. ¿Cansado de esperar guaguas llenas, pagar combustible caro o llegar agotado al trabajo? Mishozuki llegó para cambiarlo todo.\n\nCOMO FUNCIONA: Pedalea con normalidad y la asistencia eléctrica hace el resto. Sube cuestas sin esfuerzo, llega fresco a tu destino.\n\nBATERIA DE LARGA DURACION. Una sola carga te da para varios días de uso. La recargas en tu casa como un celular gigante.\n\nPARA TODOS. Personas mayores, quienes tienen condición física limitada, trabajadores que llegan agotados, estudiantes... Mishozuki es para cualquiera.\n\nTRES MODELOS DISPONIBLES. Visualmente diferentes, pero con la MISMA calidad y rendimiento.\n\nMishozuki. Porque tu tiempo y tu energía valen oro.",
        precio: "Consultar",
        foto: "bici2.jpg",
        tieneFoto: true,
        categoria: "transporte"
    },

    // ============================================
    // DEPORTES (IDs 78-79) - 2 productos
    // ============================================
    {
        id: 78,
        nombre: "PELOTA INFLABLE - Para juegos y diversión",
        descripcion: "DIVERSION ASEGURADA PARA TODAS LAS EDADES. Pelota inflable resistente.\n\nMULTIUSOS: Para niños, juegos en familia, playa, campo.\n\nRESISTENTE. Material duradero.\n\nFACIL DE INFLAR.\n\nVERSATIL: Fútbol casual, voleibol playero.\n\nPelota inflable. Porque la diversión no tiene edad.",
        precio: "Consultar",
        foto: "pelota.jpg",
        tieneFoto: true,
        categoria: "deportes"
    },
    {
        id: 79,
        nombre: "RODILLERA DEPORTIVA XIAOHUI INTERNATIONAL",
        descripcion: "SOPORTE Y PROTECCIÓN PARA TUS RODILLAS. Compresión suave que reduce inflamación, material transpirable. Ideal para correr, pesas, fútbol, rehabilitación. Estabilidad y alivio para deportistas y personas con molestias.",
        precio: "Consultar",
        foto: "rodillera-xiaohui-sport.webp",
        tieneFoto: true,
        categoria: "deportes"
    }
];

/*
===========================================================
📝 INSTRUCCIONES :
===========================================================
1. Para AGREGAR un producto: Copia el ejemplo de arriba
   y pégalo al final de la lista (antes del ])

2. Para CAMBIAR un producto: Modifica los datos que están
   entre las comillas " "

3. Para poner FOTO: 
   - Cambia "tieneFoto: false" por "tieneFoto: true"
   - Sube la foto a la misma carpeta
   - Escribe el nombre exacto: "foto: 'nombre-foto.jpg'"

4. El "id" siempre debe ser un número diferente
   (sigue la secuencia: 80, 81, 82...)

5. El número de WhatsApp está protegido, no lo cambies
   a menos que sea necesario

¡ES MUY FÁCIL! 😊
===========================================================
*/
