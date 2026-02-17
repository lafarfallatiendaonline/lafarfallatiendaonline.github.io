/*
===========================================================
✨ YELI - AQUÍ ACTUALIZAS TUS PRODUCTOS ✨
===========================================================
PARA AGREGAR UN NUEVO PRODUCTO, COPIA Y PEGA ESTE EJEMPLO:

{
    id: 31,                         // Número siguiente
    nombre: "NOMBRE DEL PRODUCTO",  // Ej: "Vestido Elegante"
    descripcion: "Descripción detallada...",  // Explica bien
    precio: "$XX.00",               // Con el signo $
    categoria: "ropa",              // hogar, ferreteria, belleza, ropa, tecnologia, alimentos
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


// 📦 PRODUCTOS DE YELI (27 productos - IDs del 1 al 27)
const productos = [
    // ============================================
    // HOGAR (IDs 1-8) - 8 productos
    // ============================================
    {
        id: 1,
        nombre: "SET JARRA CON COLADOR + VASOS",
        descripcion: "PARA TUS BEBIDAS DIARIAS: Jarra de plástico de grado alimenticio (libre de BPA) con colador incorporado y vasos a juego. Perfecta para servir agua fresca, jugos naturales (el colador atrapa las semillas y pulpa), limonadas, té helado y más.\n\nPARA TU COCINA: ¿Sabías que puedes usar esta jarra para calentar líquidos en el microondas? Ideal para preparar leche caliente, caldos o infusiones. El colador también sirve para escurrir verduras pequeñas, enjuagar frutas o colar pastas.\n\nPARA TU DESPENSA: Úsala para almacenar granos, cereales o legumbres. Al ser de grado alimenticio, conserva tus alimentos sin contaminantes.\n\nPARA TUS REUNIONES: El set completo te permite servir bebidas a tus invitados con estilo y practicidad.\n\nUn solo set, infinitas posibilidades en tu hogar.",
        precio: "Consultar",
        foto: "jarra.png",
        tieneFoto: true,
        categoria: "hogar"
    },
    {
        id: 2,
        nombre: "TAPA DE INODORO UNIVERSAL HUIRD!",
        descripcion: "PARA TU HOGAR: ¿Necesitas reponer esa tapa vieja y desgastada? HUIRD! es la solución perfecta. Plástico resistente, fácil instalación y diseño universal que se adapta a la mayoría de las tazas sanitarias estándar.\n\nY PARA TUS VIAJES: ¿Sabías que también es PORTÁTIL? Llévala contigo a campings, autocaravanas, hoteles o baños públicos. Su diseño ligero permite guardarla en una mochila y tener SIEMPRE tu propia tapa higiénica donde quieras.\n\nDos necesidades, un solo producto. La comodidad de tu hogar te acompaña a todas partes.",
        precio: "Consultar",
        foto: "tapa.png",
        tieneFoto: true,
        categoria: "hogar"
    },
    {
        id: 3,
        nombre: "GAMUZA CLEAN CHAM - Paño de microfibra para limpieza",
        descripcion: "LA REINA DE LA LIMPIEZA. Clean Cham no es una gamuza cualquiera. Es tu aliada para dejar todo impecable, sin esfuerzo y sin rayas.\n\nPARA TU VEHICULO: Úsala para secar el carro después del lavado. Absorbe el agua al instante, no deja marcas ni pelusas, y deja la pintura brillante.\n\nPARA TODA LA CASA: Ventanas y espejos sin rayas, cocina seca encimeras y ollas, baño deja azulejos brillantes, mascotas seca a tu perro después del baño.\n\nSUPER ABSORCION: Puede absorber hasta 7 veces su peso en agua.\n\nClean Cham. Una gamuza, mil usos.",
        precio: "Consultar",
        foto: "gamuza.jpg",
        tieneFoto: true,
        categoria: "hogar"
    },
    {
        id: 4,
        nombre: "FREGADERO DE ACERO INOXIDABLE - Cocina",
        descripcion: "EL CORAZON DE TU COCINA. El fregadero es uno de los lugares que más se usan en el hogar. Por eso, mereces uno que dure toda la vida.\n\nDURABILIDAD GARANTIZADA. Fabricado en acero inoxidable de alta calidad. No se oxida, no se mancha, no se deforma.\n\nFACIL DE LIMPIAR. Con solo pasar un paño húmedo recupera su brillo original.\n\nRESISTENTE A TODO: Rayones superficiales, cambios de temperatura, productos de limpieza.\n\nINVERSION INTELIGENTE. En Cuba, donde conseguir productos duraderos es difícil, este fregadero es la compra que haces UNA VEZ y te acompaña por décadas.",
        precio: "Consultar",
        foto: "fregadero.png",
        tieneFoto: true,
        categoria: "hogar"
    },
    {
        id: 5,
        nombre: "CESTO PARA BASURA KEEP CLEAN PRINCFRARE",
        descripcion: "KEEP CLEAN. Mantén tu hogar limpio y organizado con este práctico cesto para basura.\n\nPRACTICO Y RESISTENTE. Diseñado para soportar el uso diario. Material duradero que no se deforma ni se rompe fácilmente.\n\nPARA TODA LA CASA: Baño (papeles, hisopos, algodones), Cocina (desperdicios de alimentos), Habitación (papeles pequeños).\n\nFACIL DE LIMPIAR. Superficie lisa que se lava rápidamente. No absorbe olores ni humedad.\n\nKeep Clean. Tu aliado para un hogar siempre limpio.",
        precio: "Consultar",
        foto: "cesto.jpg",
        tieneFoto: true,
        categoria: "hogar"
    },
    {
        id: 6,
        nombre: "ASIENTO DE INODORO HIDROTEK - Cierre Lento",
        descripcion: "HIDROTEK. La tapa que cierra sola, sin golpes, sin ruidos, sin molestias.\n\nCIERRE LENTO (SOFT CLOSE). La tapa y la taza bajan suavemente con solo empujarlas ligeramente. Adiós a los golpes fuertes, adiós a los dedos pillados.\n\nMATERIAL DE ALTA CALIDAD. Fabricado con materiales resistentes. No se mancha, no se deforma.\n\nFACIL INSTALACION. Diseño universal que se adapta a la mayoría de las tazas sanitarias estándar.\n\nHidrotek. Tu baño merece lo mejor.",
        precio: "Consultar",
        foto: "hidrotek.jpg",
        tieneFoto: true,
        categoria: "hogar"
    },
    
    // ============================================
    // TRANSPORTE (IDs 7-9) - 3 productos (Mishozuki)
    // ============================================
    {
        id: 7,
        nombre: "BICICLETA ELECTRICA MISHOZUKI (Modelo 1)",
        descripcion: "LA SOLUCION INTELIGENTE PARA MOVERTE EN CUBA. ¿Cansado de esperar guaguas llenas, pagar combustible caro o llegar agotado al trabajo? Mishozuki llegó para cambiarlo todo.\n\nCOMO FUNCIONA: Pedalea con normalidad y la asistencia eléctrica hace el resto. Sube cuestas sin esfuerzo, llega fresco a tu destino.\n\nBATERIA DE LARGA DURACION. Una sola carga te da para varios días de uso. La recargas en tu casa como un celular gigante.\n\nPARA TODOS. Personas mayores, quienes tienen condición física limitada, trabajadores que llegan agotados, estudiantes... Mishozuki es para cualquiera.\n\nTRES MODELOS DISPONIBLES. Visualmente diferentes, pero con la MISMA calidad y rendimiento.\n\nMishozuki. Porque tu tiempo y tu energía valen oro.",
        precio: "Consultar",
        foto: "bici.jpg",
        tieneFoto: true,
        categoria: "transporte"
    },
    {
        id: 8,
        nombre: "BICICLETA ELECTRICA MISHOZUKI (Modelo 2)",
        descripcion: "LA SOLUCION INTELIGENTE PARA MOVERTE EN CUBA. ¿Cansado de esperar guaguas llenas, pagar combustible caro o llegar agotado al trabajo? Mishozuki llegó para cambiarlo todo.\n\nCOMO FUNCIONA: Pedalea con normalidad y la asistencia eléctrica hace el resto. Sube cuestas sin esfuerzo, llega fresco a tu destino.\n\nBATERIA DE LARGA DURACION. Una sola carga te da para varios días de uso. La recargas en tu casa como un celular gigante.\n\nPARA TODOS. Personas mayores, quienes tienen condición física limitada, trabajadores que llegan agotados, estudiantes... Mishozuki es para cualquiera.\n\nTRES MODELOS DISPONIBLES. Visualmente diferentes, pero con la MISMA calidad y rendimiento.\n\nMishozuki. Porque tu tiempo y tu energía valen oro.",
        precio: "Consultar",
        foto: "bici1.jpg",
        tieneFoto: true,
        categoria: "transporte"
    },
    {
        id: 9,
        nombre: "BICICLETA ELECTRICA MISHOZUKI (Modelo 3)",
        descripcion: "LA SOLUCION INTELIGENTE PARA MOVERTE EN CUBA. ¿Cansado de esperar guaguas llenas, pagar combustible caro o llegar agotado al trabajo? Mishozuki llegó para cambiarlo todo.\n\nCOMO FUNCIONA: Pedalea con normalidad y la asistencia eléctrica hace el resto. Sube cuestas sin esfuerzo, llega fresco a tu destino.\n\nBATERIA DE LARGA DURACION. Una sola carga te da para varios días de uso. La recargas en tu casa como un celular gigante.\n\nPARA TODOS. Personas mayores, quienes tienen condición física limitada, trabajadores que llegan agotados, estudiantes... Mishozuki es para cualquiera.\n\nTRES MODELOS DISPONIBLES. Visualmente diferentes, pero con la MISMA calidad y rendimiento.\n\nMishozuki. Porque tu tiempo y tu energía valen oro.",
        precio: "Consultar",
        foto: "bici2.jpg",
        tieneFoto: true,
        categoria: "transporte"
    },
    
    // ============================================
    // TECNOLOGIA (IDs 10-14) - 5 productos
    // ============================================
    {
        id: 10,
        nombre: "PARLANTE INALAMBRICO PORTATIL G15-1346 - 3 pulgadas",
        descripcion: "SONIDO GRANDE, TAMAÑO COMPACTO. Este parlante inalámbrico demuestra que lo bueno sí viene en frasco pequeño.\n\nCALIDAD FANTASTICA. A pesar de su tamaño compacto, ofrece un sonido limpio y potente.\n\nINALAMBRICO. Conéctalo por Bluetooth a tu celular, tablet o cualquier dispositivo.\n\nPORTATIL. Diseñado para que lo lleves contigo. A la playa, al parque, de viaje.\n\nParlante G15-1346. Sonido grande donde vayas.",
        precio: "Consultar",
        foto: "speaker.jpg",
        tieneFoto: true,
        categoria: "tecnologia"
    },
    {
        id: 11,
        nombre: "PARLANTE INALAMBRICO PENTACLE - 6.5 pulgadas con LUZ",
        descripcion: "MUSICA Y LUZ EN UN SOLO EQUIPO. El parlante Pentacle no solo suena fuerte, también tiene luz incorporada.\n\nSONIDO POTENTE. Con 6.5 pulgadas de potencia, llena cualquier espacio de música.\n\nLUZ INCORPORADA. Ideal para crear ambiente en reuniones.\n\nINALAMBRICO. Conéctalo por Bluetooth.\n\nPORTATIL. Llévalo a donde quieras.\n\nPentacle. Música que se ve y se siente.",
        precio: "Consultar",
        foto: "bocina2.jpg",
        tieneFoto: true,
        categoria: "tecnologia"
    },
    {
        id: 12,
        nombre: "PARLANTE INALAMBRICO CON LUZ - 4 pulgadas",
        descripcion: "MUSICA Y LUZ EN TU BOLSILLO. Versión compacta del parlante Pentacle.\n\nSONIDO CLARO. Ofrece un sonido nítido para su tamaño.\n\nLUZ INCORPORADA. Útil para iluminar o darle un toque diferente.\n\nINALAMBRICO. Conexión Bluetooth rápida.\n\nSUPER PORTATIL. Cabe en cualquier mochila.\n\nParlante 4 pulgadas. Música y luz donde vayas.",
        precio: "Consultar",
        foto: "bocina.jpg",
        tieneFoto: true,
        categoria: "tecnologia"
    },
    {
        id: 13,
        nombre: "REGLETA ELECTRICA 6 TOMACORRIENTES - Protector de voltaje",
        descripcion: "MAS CONEXIONES, MAS SEGURIDAD. La regleta que necesitas para conectar todos tus dispositivos.\n\n6 TOMACORRIENTES. Conecta múltiples dispositivos a la vez.\n\nPROTECCION DE VOLTAJE. Ayuda a proteger tus equipos contra picos de corriente.\n\nDISEÑO SEGURO. Contactos firmes que evitan chispazos.\n\nRegleta. Donde necesites más, ahí estamos.",
        precio: "Consultar",
        foto: "extension.jpg",
        tieneFoto: true,
        categoria: "tecnologia"
    },
    
    // ============================================
    // BELLEZA (IDs 14-23) - 10 productos
    // ============================================
    {
        id: 14,
        nombre: "TRATAMIENTO CAPILAR ORIGEM NAZCA",
        descripcion: "PARA RIZOS PERFECTOS: ¿Tienes cabello rizado o encrespado? Origem Nazca es tu aliado ideal. Hidratación intensiva que define tus rizos.\n\nPARA TODA LA FAMILIA: Beneficia a TODO tipo de cabello: seco, maltratado, con frizz, teñido.\n\nUn tratamiento versátil para que toda la familia luzca un cabello saludable.",
        precio: "Consultar",
        foto: "origem.jpg",
        tieneFoto: true,
        categoria: "belleza"
    },
    {
        id: 15,
        nombre: "HISOPOS DE ALGODON - Paquete",
        descripcion: "MUCHO MAS QUE LIMPIEZA DE OIDOS. Los hisopos tienen MIL USOS.\n\nPARA HIGIENE PERSONAL: El uso clásico.\n\nPARA BELLEZA: Corrige errores de maquillaje, difumina sombras.\n\nPARA LIMPIEZA: Rincones difíciles, teclados, celulares.\n\nPARA MANUALIDADES: Aplicar pegamento, mezclar pinturas.\n\nHisopos. Un pequeño gran aliado en tu hogar.",
        precio: "Consultar",
        foto: "hisopo.jpg",
        tieneFoto: true,
        categoria: "belleza"
    },
    {
        id: 16,
        nombre: "SET DE PERFUME V.V. LOVE AMAZING PINK - Perfume + Crema",
        descripcion: "ELEGANCIA Y SEDUCCION EN UN SOLO SET. V.V. LOVE Amazing Pink para la mujer que quiere sentirse bella.\n\nAMAZING PINK: Fragancia femenina y cautivadora. Notas florales.\n\nSET COMPLETO: Eau de Toilette (35ml) + Body Lotion (12 Fl. Oz).\n\nREGALO PERFECTO: Para tu pareja, madre, amiga o para ti misma.\n\nV.V. LOVE Amazing Pink. La fragancia que no pasa desapercibida.",
        precio: "Consultar",
        foto: "perfume 3.png",
        tieneFoto: true,
        categoria: "belleza"
    },
    {
        id: 17,
        nombre: "SET DE PERFUME V.V. LOVE LA BELLA VIVA - Perfume + Crema",
        descripcion: "LA BELLA VIVA. Para la mujer que vive intensamente.\n\nLA BELLA VIVA: Fragancia vibrante y cautivadora.\n\nSET COMPLETO: Eau de Toilette (35ml) + Body Lotion (12 Fl. Oz).\n\nREGALO PERFECTO: Para tu pareja, madre, amiga.\n\nV.V. LOVE La Bella Viva. Vive intensamente. Huele inolvidable.",
        precio: "Consultar",
        foto: "perfume 2.png",
        tieneFoto: true,
        categoria: "belleza"
    },
    {
        id: 18,
        nombre: "PROTECTORES DIARIOS SUEÑOS COMODOS PLUS LARGE - 12 horas",
        descripcion: "SUEÑOS COMODOS. Tu tranquilidad y bienestar merecen la mejor protección.\n\nPLUS LARGE: Diseño más grande para mayor cobertura.\n\n12 HORAS DE PROTECCION: Control de olores de larga duración.\n\nCONTROL DE OLORES: Neutraliza los olores.\n\nCOMODOS Y DISCRETOS: Suaves al tacto.\n\nSueños Cómodos. Tu tranquilidad mientras vives, mientras duermes.",
        precio: "Consultar",
        foto: "diaria.png",
        tieneFoto: true,
        categoria: "belleza"
    },
    {
        id: 19,
        nombre: "SET DE PERFUME V.V. LOVE ENCHANTMENT - Perfume + Crema",
        descripcion: "ENCHANTMENT. La fragancia que encanta, que seduce.\n\nENCHANTMENT: Fragancia envolvente y misteriosa.\n\nSET COMPLETO: Eau de Toilette (35ml) + Body Lotion (12 Fl. Oz).\n\nREGALO PERFECTO: Para esa mujer especial.\n\nV.V. LOVE Enchantment. Hechiza con tu aroma.",
        precio: "Consultar",
        foto: "perfume1.jpg",
        tieneFoto: true,
        categoria: "belleza"
    },
    {
        id: 20,
        nombre: "SET DE PERFUME V.V. LOVE FOREVER EMOTION - Perfume + Crema",
        descripcion: "FOREVER EMOTION. Emociones que duran para siempre.\n\nFOREVER EMOTION: Fragancia que despierta sentimientos.\n\nSET COMPLETO: Eau de Toilette (35ml) + Body Lotion (12 Fl. Oz).\n\nREGALO PERFECTO: Para quien despierta emociones en ti.\n\nV.V. LOVE Forever Emotion. Emociones que duran para siempre.",
        precio: "Consultar",
        foto: "perfume.jpg",
        tieneFoto: true,
        categoria: "belleza"
    },
    {
        id: 21,
        nombre: "PASTA DENTAL BENDFRESH TOTAL + CEPILLO - Menta Fresca",
        descripcion: "BENDFRESH TOTAL. La pasta dental que cuida toda tu salud bucal.\n\nINCLUYE CEPILLO DENTAL. Todo lo que necesitas en un solo producto.\n\nTRES EFICACIAS EN UNA: Protección anticaries, Aliento fresco, Cuidado de encías.\n\nFRESCURA MENTA. Sabor intenso y refrescante.\n\nBendfresh Total. Tu sonrisa, nuestra prioridad.",
        precio: "Consultar",
        foto: "cepillo.jpg",
        tieneFoto: true,
        categoria: "belleza"
    },
    {
        id: 22,
        nombre: "PASTA DENTAL COIGORE ALMIGHTY - 100g - Menta Fresca",
        descripcion: "COIGORE ALMIGHTY. La pasta dental que lo puede todo.\n\nHOLD EFFECT 12 HORAS. Protección y frescura por 12 horas.\n\nFRESCURA MENTA. Combate el mal aliento.\n\nALMIGHTY: Combate caries, fortalece esmalte, cuida encías.\n\nCoigore Almighty. El poder que tu sonrisa merece.",
        precio: "Consultar",
        foto: "pasta.jpg",
        tieneFoto: true,
        categoria: "belleza"
    },
    
    // ============================================
    // FERRETERIA (IDs 23-26) - 4 productos
    // ============================================
    {
        id: 23,
        nombre: "PEGAMENTO MULTIUSOS EVERCHEM - 500g",
        descripcion: "EL ALIADO DE TODAS LAS REPARACIONES. Everchem es la solución para pegar, reparar, restaurar.\n\nINCREIBLEMENTE FUERTE. Adhesión en madera, cerámica, vidrio, metal, plástico.\n\nLIJABLE Y PINTABLE. Lija y pinta encima sin problema.\n\nSIN ESPUMA. No se expande.\n\n500g DE RENDIMIENTO. Tamaño familiar.\n\nEverchem. El pegamento que hace todo bien.",
        precio: "Consultar",
        foto: "pegamento.webp",
        tieneFoto: true,
        categoria: "ferreteria"
    },
    {
        id: 24,
        nombre: "RESISTENCIA PARA FOGON ELECTRICO - 4 vueltas (Modelo con círculo plateado)",
        descripcion: "LA PIEZA QUE HACE FUNCIONAR TU ESTUFA. Resistencia eléctrica de 4 vueltas para fogones de cocinas eléctricas.\n\nPARA FOGONES ELECTRICOS. Repuesto exacto si la hornilla de tu estufa dejó de calentar.\n\nCARACTERISTICA: Este modelo cuenta con un círculo plateado en el centro.\n\nMATERIAL RESISTENTE AL CALOR. Fabricada para soportar altas temperaturas.\n\nFACIL INSTALACION. Reemplaza la dañada en minutos.",
        precio: "Consultar",
        foto: "resistencia1.jpg",
        tieneFoto: true,
        categoria: "ferreteria"
    },
    {
        id: 25,
        nombre: "RESISTENCIA PARA FOGON ELECTRICO - 4 vueltas (Modelo clásico, sin círculo)",
        descripcion: "LA PIEZA QUE HACE FUNCIONAR TU ESTUFA. Resistencia eléctrica de 4 vueltas para fogones de cocinas eléctricas.\n\nPARA FOGONES ELECTRICOS. Repuesto exacto si la hornilla de tu estufa dejó de calentar.\n\nCARACTERISTICA: Este es el modelo clásico, sin círculo plateado.\n\nMATERIAL RESISTENTE AL CALOR. Fabricada para soportar altas temperaturas.\n\nFACIL INSTALACION. Reemplaza la dañada en minutos.",
        precio: "Consultar",
        foto: "resistencia.jpg",
        tieneFoto: true,
        categoria: "ferreteria"
    },
    {
        id: 26,
        nombre: "MASCARA PARA SOLDAR - Protección profesional",
        descripcion: "PROTEGE TUS OJOS Y TU CARA. Máscara para soldar, imprescindible para trabajos de soldadura.\n\nPROTECCION VISUAL. Filtro contra radiación UV e infrarroja.\n\nPROTECCION TERMICA. Resistente a chispas y salpicaduras.\n\nCOMODA DE USAR. Diseño ergonómico.\n\nMáscara para soldar. Tu seguridad no es un juego.",
        precio: "Consultar",
        foto: "careta.jpg",
        tieneFoto: true,
        categoria: "ferreteria"
    },
    
    // ============================================
    // DEPORTES (ID 27) - 1 producto
    // ============================================
    {
        id: 27,
        nombre: "PELOTA INFLABLE - Para juegos y diversión",
        descripcion: "DIVERSION ASEGURADA PARA TODAS LAS EDADES. Pelota inflable resistente.\n\nMULTIUSOS: Para niños, juegos en familia, playa, campo.\n\nRESISTENTE. Material duradero.\n\nFACIL DE INFLAR.\n\nVERSATIL: Fútbol casual, voleibol playero.\n\nPelota inflable. Porque la diversión no tiene edad.",
        precio: "Consultar",
        foto: "pelota.jpg",
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
   (sigue la secuencia: 31, 32, 33...)

5. El número de WhatsApp está protegido, no lo cambies
   a menos que sea necesario

¡ES MUY FÁCIL! 😊
===========================================================
*/