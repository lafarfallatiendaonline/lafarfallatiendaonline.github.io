﻿/*
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
        id: 23,
        nombre: "SET DE CACEROLAS DE ESMALTE - 5 piezas con tapa",
        descripcion: "COCINA TRADICIONAL CON ESTILO. Juego de 5 cacerolas de esmalte con tapa: 16, 18, 20, 22 y 24 cm. Distribución uniforme del calor, fácil limpieza, diseño clásico. Para guisos con sabor casero.",
        precio: "Consultar",
        foto: "set-cacerolas-esmalte-5pzas.webp",
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
    },

    // ============================================
// NUEVOS PRODUCTOS AGREGADOS
// ============================================
{
    id: 80,
    nombre: "CORTAUÑAS METÁLICO PROFESIONAL",
    descripcion: "Fabricado en acero inoxidable de alto brillo. Su diseño clásico y robusto garantiza un corte preciso y duradero, sin perder el filo con el uso habitual.\n\nLa palanca metálica ofrece la presión justa para evitar tirones o cortes desiguales. Ideal tanto para uñas de manos como de pies, gracias a su tamaño estándar y su amplia boca de corte.\n\nResistente a la oxidación. Fácil de limpiar. Un útil de larga vida útil, sin piezas de plástico que se rompan o desgasten.",
    precio: "Consultar",
    categoria: "belleza",
    tieneFoto: true,
    foto: "cortaunas.jpg"
},
{
    id: 81,
    nombre: "PARAGUAS NEGRO",
    descripcion: "El clásico paraguas de toda la vida. Color negro sólido, apropiado para cualquier ocasión: trabajo, calle, campo o ciudad. Fácil de abrir y cerrar sin mecanismos complicados.\n\nFabricado con varillas resistentes, preparado para aguantar días de viento sin volverse frágil. Tejido impermeable que repele el agua de forma efectiva y se seca rápido al terminar la lluvia.\n\nUn producto sencillo, útil y duradero. Perfecto para tener siempre a mano en la entrada de casa, en la oficina o en el coche. No falla cuando más se necesita.",
    precio: "Consultar",
    categoria: "hogar",
    tieneFoto: true,
    foto: "sombrilla0.webp"
},
{
    id: 82,
    nombre: "MANGUERA DE JARDÍN RESISTENTE",
    descripcion: "La herramienta básica e imprescindible para mantener su jardín, huerto o terraza en perfectas condiciones. Fabricada en material flexible que soporta el paso del tiempo y la exposición al sol sin agrietarse ni endurecerse.\n\nSu diseño clásico permite un manejo sencillo: se estira con facilidad, no se enreda más de lo justo y vuelve a su forma original después de cada uso. Compatible con la mayoría de grifos y conectores estándar del mercado.\n\nIdeal para regar macetas, limpiar el coche, dar agua a las mascotas o refrescar el suelo en verano. Un producto versátil que se usa todo el año, tanto en tareas domésticas como en el mantenimiento del exterior.\n\nResistente a la presión normal del agua de casa. No se revienta ni pierde agua por las juntas con el uso habitual. Su longitud adecuada le permite llegar a todos los rincones sin necesidad de estar moviendo continuamente el grifo.\n\nFácil de enrollar y guardar después de usar. Un artículo sencillo, útil y duradero. Siempre viene bien tener una a mano para cualquier imprevisto o tarea cotidiana.",
    precio: "Consultar",
    categoria: "ferreteria",
    tieneFoto: true,
    foto: "manguera.webp"
},
{
    id: 83,
    nombre: "PAÑAL PARA BEBÉ",
    descripcion: "Lo que ningún padre o madre puede faltar en casa. Diseñado pensando en la piel delicada del bebé y en la tranquilidad de los adultos que lo cuidan a diario.\n\nSu absorción rápida mantiene la piel seca durante horas, evitando molestas irritaciones y dando confianza al pequeño para moverse, gatear o dormir sin interrupciones. La capa exterior transpirable ayuda a que el aire circule sin que el pañal pierda eficacia.\n\nLos ajustes laterales se adaptan suavemente al contorno del cuerpo, sujetando bien sin apretar. Las barras elásticas en los bordes evitan fugas por los costados, incluso cuando el bebé está boca abajo o de lado.\n\nIdeal tanto para el día a día en casa como para salidas al parque, visitas al médico o viajes largos. Un producto que da seguridad y evita imprevistos en cualquier situación.\n\nFácil de cambiar y de desechar. Un básico del cuidado infantil. Siempre útil tener una reserva a mano porque nunca se sabe cuándo se va a necesitar el siguiente.",
    precio: "Consultar",
    categoria: "hogar",
    tieneFoto: true,
    foto: "pamper.webp"
},
{
    id: 84,
    nombre: "CEPILLO DE MADERA PARA LIMPIEZA DOMÉSTICA",
    descripcion: "El aliado tradicional para mantener la casa limpia sin complicaciones. Fabricado con cuerpo de madera resistente, diseñado para soportar el uso diario y el contacto con agua y productos de limpieza.\n\nSus cerdas firmes pero respetuosas con las superficies permiten fregar y restregar con eficacia, eliminando la suciedad incrustada sin rayar ni dañar azulejos, encimeras, fregaderos o suelos de piedra.\n\nIdeal para tareas del hogar: limpiar los escalones de la entrada, fregar la bañera, restregar la terraza, lavar las baldosas de la cocina o dar brillo a las superficies de exterior. Un útil versátil que nunca falla.\n\nSu tamaño y forma están pensados para agarrarse con comodidad, sin forzar la muñeca. La madera aporta peso y firmeza, evitando que el cepillo se deslice o se vuelque mientras se usa.\n\nFácil de limpiar después de cada tarea. Un producto sencillo, duradero y ecológico, que acompaña durante años sin perder efectividad. De esos utensilios de toda la vida que siguen funcionando como el primer día.",
    precio: "Consultar",
    categoria: "hogar",
    tieneFoto: true,
    foto: "cepillomadera.webp"
},
{
    id: 85,
    nombre: "CANDADO PARA BICICLETA",
    descripcion: "Fabricado en acero resistente, diseñado para asegurar la bicicleta dondequiera que la deje. Su estructura robusta y su mecanismo de cierre por llave ofrecen la tranquilidad que se necesita en el día a día.\n\nÚtil también para otros asuntos cotidianos: asegurar un portón, una reja o cualquier otra cosa que requiera mantenerla cerrada con seguridad. Un producto sencillo, duradero y práctico, de los que siempre hacen falta.\n\nFácil de transportar, no pesa ni estorba.",
    precio: "Consultar",
    categoria: "ferreteria",
    tieneFoto: true,
    foto: "candadobici.webp"
},
{
    id: 86,
    nombre: "TURBINA HIDROTEK",
    descripcion: "Diseñada para garantizar el flujo de agua donde más se necesita. Fabricada con materiales resistentes a la corrosión y al desgaste, pensada para un uso continuo y exigente en el hogar, el campo o la pequeña industria.\n\nIdeal para extraer agua de pozos profundos, llenar tinacos, alimentar sistemas de riego por gravedad o mantener la presión en tuberías de viviendas. Su funcionamiento eficiente ahorra energía eléctrica sin sacrificar potencia.\n\nFácil de instalar y mantener. Soporta variaciones de voltaje comunes y no se sobrecalienta tras horas de trabajo. Una inversión segura para quien necesita agua disponible todos los días.",
    precio: "Consultar",
    categoria: "ferreteria",
    tieneFoto: true,
    foto: "hidrotekturbina.jpg"
},
{
    id: 87,
    nombre: "TOALLA PARA DESPUÉS DE LA DUCHA",
    descripcion: "La que siempre está ahí, esperando al salir del agua. Fabricada en tejido suave y absorbente, diseñada para secar el cuerpo sin necesidad de restregar ni pasar varias veces por la misma zona.\n\nSu textura aterciopelada acaricia la piel, mientras que las fibras abiertas capturan la humedad de forma rápida y eficaz. Al tacto se nota la diferencia: ni áspera, ni dura, ni de esas que parecen no secar nunca.\n\nIdeal para usar cada día después del baño, pero también para la piscina, la playa, el gimnasio o cualquier sitio donde haga una falta una buena ducha y algo decente con qué secarse.",
    precio: "Consultar",
    categoria: "hogar",
    tieneFoto: true,
    foto: "toalladucha.jpg"
},
{
    id: 88,
    nombre: "MARTILLO",
    descripcion: "La herramienta más básica y a la vez más necesaria en cualquier casa, taller o trabajo. Fabricado con cabeza de acero forjado y mango de madera resistente, diseñado para durar años sin que la cabeza se afloje ni el mango se astille.\n\nSu peso y equilibrio están calculados para que el golpe sea firme sin que el brazo se fatigue. Útil para clavar, enderezar, romper, golpear suavemente o incluso hacer palanca cuando hace falta.\n\nIdeal para colgar un cuadro, arreglar una tabla suelta, clavar un clavo en la pared, desarmar algo que está muy apretado o simplemente tenerlo a mano por si se ofrece. En cualquier casa cubana, el martillo es de esas cosas que siempre terminan pidiéndose prestado.\n\nCabeza endurecida que no se deforma con los golpes. Mango ergonómico que absorbe parte de la vibración. Un producto sencillo, fiable y útil todos los días.",
    precio: "Consultar",
    categoria: "ferreteria",
    tieneFoto: true,
    foto: "martillo.webp"
},
{
    id: 89,
    nombre: "DETERGENTE",
    descripcion: "El imprescindible de la colada, el que nunca puede faltar en casa si se quiere la ropa limpia y con buen olor. Formulado para quitar la suciedad incrustada, las manchas de comida, el sudor y la grasa sin dañar los tejidos.\n\nVale para lavar a mano o a máquina. Se disuelve rápido, no deja restos blancos en la ropa oscura y hace suficiente espuma como para notar que está limpiando, pero sin pasarse.\n\nIdeal para la ropa de cada día: camisas, pantalones, sábanas, toallas, uniformes escolares y cualquier otra cosa que termine en el balde o la lavadora. También sirve para fregar el piso muy sucio, desengrasar superficies o limpiar zapatos de lona.\n\nRinde lo suyo. Un poco hace bastante. Mantiene la ropa con un olor fresco y limpio sin necesidad de suavizante. De esos productos que se acaban rápido porque se usan a diario.",
    precio: "Consultar",
    categoria: "hogar",
    tieneFoto: true,
    foto: "detergenterosa.jpg"
},
{
    id: 90,
    nombre: "SÓCALO PARA BOMBILLO",
    descripcion: "Esa pieza pequeña que nunca se ve hasta que falla, y entonces se vuelve la más importante de la casa. Fabricado en material resistente al calor, diseñado para sostener el bombillo de forma firme y segura mientras cumple su función de iluminar.\n\nVálido para rosca estándar, el mismo que usan la mayoría de los bombillos comunes en los hogares cubanos. Fácil de instalar: se conecta, se atornilla y ya está listo para dar luz.\n\nIdeal para cambiar el viejo que ya no sujeta bien, para hacer un alargador casero, para reparar una lámpara de mesa, un velador o un piloto del techo. También sirve para tener un repuesto guardado, porque cuando se daña uno, nunca se encuentra.\n\nSoporta el calor del bombillo encendido sin deformarse. Aísla bien la conexión eléctrica. Un producto sencillo, económico y de esos que salvan el apuro cualquier noche.",
    precio: "Consultar",
    categoria: "ferreteria",
    tieneFoto: true,
    foto: "socalo.webp"
},
{
    id: 91,
    nombre: "ESPIGA PARA CORRIENTE",
    descripcion: "Esa pieza pequeña que permite que cualquier electrodoméstico tenga luz. Fabricada en plástico resistente al calor y con patillas metálicas firmes, diseñada para conectarse al tomacorriente sin holguras ni chispazos.\n\nVálida para el estándar cubano de dos patillas planas y paralelas, la misma que usan la mayoría de los equipos en la casa. Fácil de instalar: se abre, se pelan los cables, se atornillan y queda lista para usar.\n\nIdeal para reparar un cable viejo, para hacer una extensión casera, para cambiar la que se partió o simplemente para tener un repuesto guardado. Porque cuando se daña una espiga, siempre hace falta una nueva.\n\nSoporta el uso diario sin que el plástico se agriete ni las patillas se doblen. Un producto sencillo, económico y de esos que salvan cualquier apuro.",
    precio: "Consultar",
    categoria: "ferreteria",
    tieneFoto: true,
    foto: "tomacorriente.webp"
},
{
    id: 92,
    nombre: "TERMO PARA CAFÉ DE 1 LITRO",
    descripcion: "El compañero fiel de cada mañana, de cada tarde de trabajo y de cada visita inesperada. Fabricado con paredes dobles que mantienen la temperatura por horas, diseñado para que el café salga igual de caliente en la primera taza que en la última.\n\nCapacidad de 1 litro, la medida justa para compartir sin que sobre ni falte. Perfecto para la casa, la oficina, el campo o el día de pesca. También sirve para té, leche caliente, chocolate o cualquier bebida que se quiera conservar caliente.\n\nSu cierre hermético evita derrames aunque se caiga de lado. El pico vertedor está diseñado para servir sin gotear y sin tener que destapar por completo. La tapa hace también de vaso cuando no hay otro a mano.\n\nFácil de limpiar por dentro, con boca ancha que permite meter la esponja sin esfuerzo. Aísla bien por fuera: el cuerpo no quema al tacto aunque el contenido esté hirviendo.\n\nUn termo de toda la vida, de los que se llenan por la mañana y siguen calientes hasta la tarde.",
    precio: "Consultar",
    categoria: "hogar",
    tieneFoto: true,
    foto: "termo1l.jpg"
},
{
    id: 93,
    nombre: "TAZAS DE CERÁMICA",
    descripcion: "Las que acompañan el café de cada mañana, el té de la tarde y la leche antes de dormir. Fabricadas en cerámica resistente, con un peso equilibrado que las hace cómodas en la mano sin ser pesadas.\n\nSu acabado liso y brillante las hace fáciles de limpiar, sin que los restos de café o té se incrusten en la superficie. El borde redondeado es suave al contacto con los labios, justo como debe ser una buena taza.\n\nVienen en juegos, ideales para tener todas iguales y que nadie discuta por cuál le toca. Perfectas para el desayuno familiar, para las visitas o para tener un juego de repuesto guardado porque nunca faltan las que se rompen.",
    precio: "Consultar",
    categoria: "hogar",
    tieneFoto: true,
    foto: "tazasmirna.jpg"
},
{
    id: 94,
    nombre: "SOPORTE PARA TELEVISOR DE PARED",
    descripcion: "La forma más segura y práctica de colocar el televisor sin necesidad de una mesa o mueble que ocupe espacio. Fabricado en acero resistente, diseñado para sostener el peso del televisor con firmeza y mantenerlo fijo a la pared.\n\nLibera espacio en la habitación, algo siempre útil en cualquier casa cubana. Permite girar o inclinar el televisor según el modelo del soporte, para ajustar el ángulo de visión sin tener que mover todo el equipo.\n\nIdeal para salas pequeñas, habitaciones o cualquier sitio donde se quiera ver bien la pantalla sin que estorbe el mueble. También evita que niños o mascotas puedan tirarlo accidentalmente.\n\nFácil de instalar: se fija a la pared con los tornillos adecuados y el televisor se engancha sin complicaciones. Viene con todo lo necesario para una instalación segura.",
    precio: "Consultar",
    categoria: "tecnologia",
    tieneFoto: true,
    foto: "soportealexeis.jpg"
},
{
    id: 95,
    nombre: "TOALLITAS HÚMEDAS CON ALOE VERA Y VITAMINA E — XXL",
    descripcion: "Las que cuidan la piel mientras la limpian. Enriquecidas con aloe vera y vitamina E, dos ingredientes conocidos por suavizar, calmar y proteger. Ideales para manos, cara, cuerpo o cualquier parte que necesite una limpieza fresca sin resecar.\n\nSu tamaño XXL significa que cada toallita es más grande de lo habitual, cubriendo más superficie con una sola pieza. Útiles para limpiar al bebé, refrescarse en un día caluroso, quitarse el maquillaje, limpiar una mesa rápida o simplemente tener a mano por si acaso.\n\nLa textura es suave al tacto, no raspa ni irrita. El aloe vera calma, la vitamina E protege. Sin alcohol ni fragancias agresivas. Perfectas para pieles sensibles o para el uso diario de toda la familia.\n\nEl paquete XXL trae muchas toallitas, rinde bastante y siempre salva el apuro cuando no hay agua cerca o se necesita una limpieza rápida. Además, el cierre resellable evita que se sequen antes de tiempo.",
    precio: "Consultar",
    categoria: "belleza",
    tieneFoto: true,
    foto: "toallitashumedas.webp"
},
{
    id: 96,
    nombre: "SOPORTE DE PARED PARA TELEVISOR — APTO DE 40 A 80 PULGADAS",
    descripcion: "El soporte que necesita ese televisor grande que no puede quedar sobre ningún mueble. Diseñado universal para todo tipo de pantallas: LED, LCD y plasma. Fabricado en acero de alta resistencia, pensado para sostener con seguridad televisores que van desde las 40 hasta las 80 pulgadas.\n\nSu principal ventaja es liberar espacio en la sala o la habitación. El televisor queda fijo a la pared, fuera del alcance de niños, mascotas o golpes accidentales. Además, la instalación en pared permite ver la pantalla desde cualquier ángulo sin tener que mover muebles.\n\nApto para la mayoría de las marcas del mercado, gracias a su sistema de rieles ajustables que se adaptan a diferentes distancias entre tornillos traseros del televisor. Una vez montado, queda firme y nivelado.\n\nEl diseño permite, según el modelo, inclinar o girar la pantalla para conseguir el mejor ángulo de visión sin descolgar todo el equipo. Viene con todo el herraje necesario para una instalación segura en pared de concreto, ladrillo o bloque.",
    precio: "Consultar",
    categoria: "tecnologia",
    tieneFoto: true,
    foto: "soporte80.webp"
},
{
    id: 97,
    nombre: "JUEGO DE LLAVES COMBINADAS",
    descripcion: "El conjunto de herramientas que todo hombre o mujer práctico debería tener en casa. Cada llave combina dos bocas en una misma pieza: una abierta para trabajos rápidos y una estrella para sujetar tuercas y tornillos con más fuerza sin dañar las puntas.\n\nFabricadas en acero cromado, resistente a la oxidación y al uso diario. Vienen en un juego que incluye las medidas más usadas en la vida cotidiana y en pequeños trabajos mecánicos, del hogar o del taller.\n\nIdeales para apretar una tuerca floja, desarmar un mueble, reparar una bicicleta, cambiar un grifo, ajustar una pata de mesa o cualquier otra cosa que tenga una tuerca y un tornillo. También para tenerlas guardadas y que no falten cuando se necesita una.\n\nCada llave está marcada con su medida en milímetros, fácil de identificar rápidamente sin tener que probar una por una. El acabado pulido permite limpiarlas con facilidad después de cada uso.\n\nUn juego completo, ordenado y listo para usar. De esos que se agradecen tener cuando el apuro llega. Disponible por juego.",
    precio: "Consultar",
    categoria: "ferreteria",
    tieneFoto: true,
    foto: "productorepetido.webp"
},
{
    id: 98,
    nombre: "JUEGO DE 46 PIEZAS — LLAVES DE VASO",
    descripcion: "El kit completo que todo hogar o taller debería tener. Organizado en un estuche de plástico resistente que mantiene cada pieza en su lugar, lista para usar cuando se necesite.\n\nFabricado en acero con acabado que evita la oxidación. Incluye vasos, bocados, llaves Allen, extensiones rígidas y flexibles, juntas universales, mangos de trinquete y adaptadores. Todo lo necesario para apretar o aflojar tornillos y tuercas en cualquier rincón.\n\nIdeal para reparar electrodomésticos, bicicletas, muebles, motores pequeños o cualquier cosa que tenga un tornillo. Un juego completo que evita andar buscando herramienta por toda la casa.",
    precio: "Consultar",
    categoria: "ferreteria",
    tieneFoto: true,
    foto: "producto8.webp"
},
{
    id: 99,
    nombre: "PINZA",
    descripcion: "Esa herramienta que siempre termina haciendo falta cuando se necesita apretar, sujetar o cortar algo. Fabricada en acero con mango recubierto de plástico antideslizante, diseñada para durar años sin que las puntas se desgasten ni el eje se afloje.\n\nSirve para agarrar tuercas pequeñas, doblar alambres, cortar cables finos, sujetar piezas mientras se pegan o simplemente para hacer fuerza donde los dedos no llegan. En cualquier casa cubana, la pinza es de esas cosas que siempre se piden prestadas.\n\nSus puntas están diseñadas para cerrar parejo, sin holguras. El mango ergonómico permite apretar con fuerza sin lastimarse la mano. Un producto sencillo, fiable y útil todos los días.",
    precio: "Consultar",
    categoria: "ferreteria",
    tieneFoto: true,
    foto: "pinzaroja.webp"
},
{
    id: 100,
    nombre: "PILAS TRIPLE A",
    descripcion: "Las pequeñas que mantienen encendidos los aparatos que más se usan en la casa. Del tamaño justo para mandos a distancia, relojes de pared, juguetes pequeños, ratones de computadora, balanzas digitales o linternas delgadas.\n\nFabricadas con tecnología que garantiza una duración estable, sin perder potencia antes de tiempo. Ideales para esos dispositivos que no se apagan nunca del todo y necesitan una pila que aguante el ritmo diario.\n\nSiempre hace falta tener un par guardadas, porque cuando se acaban, siempre es en el peor momento.",
    precio: "Consultar",
    categoria: "tecnologia",
    tieneFoto: true,
    foto: "pilitas.webp"
},
{
    id: 101,
    nombre: "GRIFO",
    descripcion: "Ese que se abre y se cierra decenas de veces al día, en la cocina, en el baño o en el patio. Fabricado en metal resistente a la oxidación, diseñado para durar años sin que las juntas se gasten ni las roscas se traben.\n\nSirve para controlar el paso del agua donde se necesite: en el fregadero para lavar los platos, en el lavabo para lavarse las manos, etc.",
    precio: "Consultar",
    categoria: "ferreteria",
    tieneFoto: true,
    foto: "pilaagua.webp"
},
{
    id: 102,
    nombre: "MANDO UNIVERSAL",
    descripcion: "Ese que rescata cualquier televisor cuando el control original se pierde, se rompe o simplemente deja de funcionar. Diseñado para ser compatible con la mayoría de las marcas del mercado: Samsung, LG, Sony, Panasonic, Philips, RCA y muchas más.\n\nFácil de programar, siguiendo unos pasos sencillos que se explican en las instrucciones. Una vez configurado, funciona igual que el original: sube y baja el volumen, cambia de canal, enciende y apaga, y maneja las funciones básicas que más se usan.",
    precio: "Consultar",
    categoria: "tecnologia",
    tieneFoto: true,
    foto: "mandouniversal.webp"
},
{
    id: 103,
    nombre: "JUEGO DE 40 PIEZAS — LLAVES DE VASO COMBINADAS",
    descripcion: "El kit completo que todo hogar o taller debería tener. Organizado en un estuche resistente que mantiene cada pieza en su lugar, lista para usar cuando se necesite.\n\nFabricado en acero con acabado que evita la oxidación. Incluye vasos, bocados, extensiones, adaptadores y mangos de trinquete. Todo lo necesario para apretar o aflojar tornillos y tuercas en cualquier rincón, tanto en trabajos domésticos como en reparaciones más exigentes.\n\nIdeal para arreglar electrodomésticos, bicicletas, muebles, motores pequeños o cualquier cosa que tenga un tornillo. Un juego versátil que evita andar buscando herramienta por toda la casa cuando surge un apuro.",
    precio: "Consultar",
    categoria: "ferreteria",
    tieneFoto: true,
    foto: "juegodehombres.webp"
},
{
    id: 104,
    nombre: "JABÓN",
    descripcion: "El que no puede faltar en ningún baño, cocina o lavadero. Diseñado para limpiar la piel con suavidad, arrastrando la suciedad y las bacterias sin maltratar ni resecar.\n\nSirve para lavarse las manos antes de comer, después de llegar de la calle, al salir del baño o antes de cocinar. También para la ducha diaria, para lavar prendas delicadas o incluso para fregar algunos tipos de superficies.\n\nHace buena espuma, enjuaga sin dejar sensación jabonosa y tiene un olor limpio que no empalaga. Un producto básico, económico y de esos que se acaban rápido porque se usan muchas veces al día.",
    precio: "Consultar",
    categoria: "belleza",
    tieneFoto: true,
    foto: "jabon.webp"
},
{
    id: 105,
    nombre: "ESPONJA DE BAÑO",
    descripcion: "La que acompaña la ducha de cada día, ayudando a limpiar la piel con suavidad mientras levanta el jabón y lo convierte en espuma. Fabricada en material suave y poroso, diseñada para no raspar ni irritar, incluso en las zonas más delicadas del cuerpo.\n\nSu textura permite exfoliar de forma ligera, arrastrando las células muertas y dejando la piel más suave al tacto. Al mismo tiempo, su interior esponjoso retiene el jabón o el gel justo para que rinda más y no se desperdicie.\n\nIdeal para la ducha diaria, pero también para exfoliaciones suaves una o dos veces por semana. Se enjuaga fácilmente, no acumula malos olores y se seca rápido para estar lista al día siguiente.\n\nUn producto sencillo, práctico y de esos que marcan la diferencia entre una ducha cualquiera y una que de verdad deja sensación de limpieza.",
    precio: "Consultar",
    categoria: "belleza",
    tieneFoto: true,
    foto: "esponjadebano.jpg"
},
{
    id: 106,
    nombre: "CANDADO",
    descripcion: "El que cierra lo que no se quiere que nadie abra. Fabricado en metal resistente, con un mecanismo interno de seguro que solo se libera con su llave. Diseñado para durar a la intemperie sin que el óxido lo trabe ni el frío lo endurezca.\n\nSirve para asegurar un portón, una reja, una puerta de un cuarto, un armario, una taquilla, una bicicleta o cualquier cosa que necesite estar cerrada con confianza. También para tener un repuesto guardado, porque cuando se pierde una llave o se daña un candado, siempre hace falta otro. Un producto sencillo, fiable y de esos que dan tranquilidad.",
    precio: "Consultar",
    categoria: "ferreteria",
    tieneFoto: true,
    foto: "candado4.webp"
},
{
    id: 107,
    nombre: "CANDADO",
    descripcion: "El que cierra lo que no se quiere que nadie abra. Fabricado en metal resistente, con un mecanismo interno de seguro que solo se libera con su llave. Diseñado para durar a la intemperie sin que el óxido lo trabe ni el frío lo endurezca.\n\nSirve para asegurar un portón, una reja, una puerta de un cuarto, un armario, una taquilla, una bicicleta o cualquier cosa que necesite estar cerrada con confianza. También para tener un repuesto guardado, porque cuando se pierde una llave o se daña un candado, siempre hace falta otro. Un producto sencillo, fiable y de esos que dan tranquilidad.",
    precio: "Consultar",
    categoria: "ferreteria",
    tieneFoto: true,
    foto: "candado7.webp"
},
{
    id: 108,
    nombre: "CAFETERA DE 6 TAZAS",
    descripcion: "La que prepara el café de cada mañana, el de media tarde y el que acompaña la conversación cuando llegan visitas. Con capacidad para 6 tazas, la medida justa para una familia pequeña o para compartir sin que sobre ni falte.\n\nDiseñada para extraer todo el sabor del café, logrando una bebida aromática y con cuerpo, sin amargores ni sabores quemados. Su funcionamiento es sencillo y fiable, sin mecanismos complicados que puedan fallar con el tiempo.\n\nIdeal para el desayuno, para después de la comida o para cualquier momento del día en que se necesite un buen café caliente.",
    precio: "Consultar",
    categoria: "hogar",
    tieneFoto: true,
    foto: "cafeteraelectrica.webp"
},
{
    id: 109,
    nombre: "DISCO DE FRENO CON ALARMA — 110 DECIBELES",
    descripcion: "El que protege la moto o la bicicleta dondequiera que se deje. Diseñado para fijarse directamente al disco de freno, bloqueando el giro de la rueda. Su mecanismo interno incluye una alarma de 110 decibeles que se activa ante cualquier movimiento o golpe no autorizado.\n\nEl sonido es fuerte, de esos que alertan a medio vecindario y ahuyentan al más osado. Funciona con pilas, sin necesidad de instalar cables ni modificar el vehículo. Una vez colocado, no se mueve sin la llave.\n\nIdeal para motos, ciclomotores o bicicletas de cierto valor. También puede usarse en cualquier vehículo pequeño que tenga disco de freno. Un producto sencillo de poner y quitar, pero que multiplica la seguridad donde no hay garaje ni vigilancia.",
    precio: "Consultar",
    categoria: "transporte",
    tieneFoto: true,
    foto: "alarma.webp"
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
