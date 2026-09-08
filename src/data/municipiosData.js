// Data for 64 municipalities of Nariño, organized by subregion
// Each municipality has: name, subregion, color, image, description, and 6-8 key facts

const municipiosData = {
  // ═══════════════════ SUBREGIÓN CENTRO ═══════════════════
  "PASTO": {
    name: "San Juan de Pasto",
    subregion: "Centro",
    color: "#4f9de8",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Parque_Narino_Pasto.JPG",
    description: "Capital de Nariño y centro cultural del suroccidente colombiano, Pasto se alza a 2.527 m.s.n.m. en el valle de Atríz, al pie del imponente volcán Galeras. Fundada en 1537 por Sebastián de Belalcázar, es una de las ciudades coloniales más antiguas de Colombia. Reconocida mundialmente por su Carnaval de Negros y Blancos, declarado Patrimonio Inmaterial de la Humanidad por la UNESCO en 2009. Es el principal epicentro educativo, administrativo y comercial del departamento.",
    facts: [
      "Capital del departamento de Nariño con aprox. 480.000 habitantes",
      "Carnaval de Negros y Blancos: Patrimonio Cultural Inmaterial de la UNESCO (2009)",
      "Sede de la Universidad de Nariño, principal institución educativa de la región",
      "Ubicación estratégica en la ruta Panamericana hacia Ecuador",
      "Producción agrícola: café, papa, caña de azúcar y frutales",
      "Punto de partida para explorar el Parque Nacional Natural Galeras",
      "Centro histórico con arquitectura colonial española del siglo XVI"
    ]
  },
  "Chachaguí": {
    name: "Chachagüí",
    subregion: "Centro",
    color: "#4f9de8",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Chachag%C3%BC%C3%AD%2C_villa_campestre.jpg",
    description: "Chachagüí es un municipio campestre del Valle de Atríz, situado a 1.950 m.s.n.m. y sede del Aeropuerto Internacional Antonio Nariño, principal puerta aérea del departamento. Su nombre proviene del quechua 'cha' (bueno) y 'bí' (agua), significando 'Buena Agua'. Fue fundado como corregimiento en 1586 sobre un antiguo asentamiento Quillasinga. Es conocido por su clima templado (18-22°C), sus festividades religiosas y su producción agrícola diversificada.",
    facts: [
      "Sede del Aeropuerto Antonio Nariño, terminal aérea principal de Nariño",
      "Ubicación estratégica sobre la Vía Panamericana",
      "Población aprox. 16.022 habitantes",
      "Nombre de origen quechua: 'Buena Agua'",
      "Principal producto: café, además de maíz, frijol, tomate de árbol y lulo",
      "Clima templado: 18-22°C promedio",
      "Ganadería familiar y avicultura como actividades económicas complementarias"
    ]
  },
  "La Florida": {
    name: "La Florida",
    subregion: "Centro",
    color: "#4f9de8",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/La_Florida.JPG",
    description: "La Florida es un municipio del Valle de Atríz a 2.240 m.s.n.m., conocido por el santuario del Divino Rostro, donde se reportó una apparición de Cristo en 1946 que atrae miles de peregrinos cada Semana Santa. Fundado en 1820 con el nombre de Mombuco ('valle pequeño'), su nombre actual honra los paisajes floridos de la región. Es un destino de peregrinación religiosa y turismo ecológico, con vistas al volcán Galeras y cascadas naturales.",
    facts: [
      "Santuario del Divino Rostro: sitio de peregrinación desde 1946",
      "Ubicado a 24.7 km de Pasto, a 2.240 m.s.n.m.",
      "Economía basada en café, caña de azúcar y frutales",
      "Seis corregimientos entre los que destaca El Rodeo",
      "Festividades de la Semana Santa con adoración al Divino Rostro",
      "Vistas panorámicas al volcán Galeras",
      "Producción de trucha arcoíris en aguas de montaña"
    ]
  },
  "Nariño": {
    name: "Nariño",
    subregion: "Centro",
    color: "#4f9de8",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Nari%C3%B1o_iglesia.jpg",
    description: "El municipio de Nariño, ubicado a 2.467 m.s.n.m. en las faldas del volcán Galeras, lleva el mismo nombre del departamento en honor al prócer de la independencia Antonio Nariño. Fue fundado en 1879 sobre un antiguo asentamiento Quillacinga liderado por el cacique Chaguarbambe. De pequeño territorio (25,74 km²), es predominantemente agrícola y mantiene vivas tradiciones indígenas y coloniales. Conectado por la vía circunvalar del Galeras.",
    facts: [
      "Nombre en honor a Antonio Nariño, prócer de la independencia colombiana",
      "Uno de los municipios más pequeños de Nariño (25,74 km²)",
      "Asentamiento prehispánico Quillacinga",
      "Economía basada en agricultura: maíz, papa, café y plátano",
      "Conectado por la vía circunvalar del volcán Galeras",
      "Clima frío de montaña con vista al Galeras",
      "Fue elevado a municipio el 29 de noviembre de 1999"
    ]
  },
  "Tangua": {
    name: "Tangua",
    subregion: "Centro",
    color: "#4f9de8",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Parque_tangua_a_noite_-_panoramio.jpg",
    description: "Tangua es un municipio andino ubicado a 2.403 m.s.n.m., a 30 km al suroccidente de Pasto. Su nombre posiblemente proviene de un término inca referido al cacique local 'Tangua', o de 'tantan agua' (mucha agua). Fue elevado a municipio en 1864. Destaca por su plaza central con monumento ecuestre a Simón Bolívar, la iglesia San Rafael Arcángel y los carnavales tradicionales de 'Negritos' y 'Blancos' que celebran la Epifanía el 5 y 6 de enero.",
    facts: [
      "Plaza central con monumento ecuestre a Simón Bolívar",
      "Iglesia San Rafael Arcángel como patrimonio religioso",
      "Carnavales de Negritos (5 ene) y Blancos (6 ene) en Epifanía",
      "Río Bobo como límite con Yacuanquer",
      "Producción agrícola de papa, café, maíz y fríjol",
      "Población aprox. 14.244 habitantes",
      "Seis corregimientos y Santander como centro poblado"
    ]
  },
  "Yacuanquer": {
    name: "Yacuanquer",
    subregion: "Centro",
    color: "#4f9de8",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Dibujo_de_las_monta%C3%B1as_de_Yacuanquer.jpg",
    description: "Yacuanquer, a 2.670 m.s.n.m., es uno de los municipios más antiguos de Nariño, fundado como Villaviciosa de Pasto el 10 de octubre de 1539 por Lorenzo de Aldana. Su nombre proviene del quechua 'Llano de los Ídolos' o 'Tumbas de los Dioses', reflejando su profundo origen indígena. Rodeado por el volcán Galeras, es conocido por la tradicional 'Danza de la Calavera' navideña desde 1942, la iglesia Santa María Magdalena de estilo neorrománico (1904-1945) y el parque con estatua de Pedro León Torres.",
    facts: [
      "Uno de los municipios más antiguos de Nariño (fundado 1539)",
      "Nombre quechua: 'Llano de los Ídolos' o 'Tumbas de los Dioses'",
      "Danza de la Calavera tradición navideña desde 1942",
      "Iglesia Santa María Magdalena neorrománica (1904-1945)",
      "Población aprox. 11.543 habitantes",
      "Economía: agricultura (papa, trigo, maíz) y turismo cultural",
      "Clima frío (11°C promedio), ubicado 25 km al sur de Pasto"
    ]
  },

  // ═══════════════════ SUBREGIÓN OBANDO ═══════════════════
  "Ipiales": {
    name: "Ipiales",
    subregion: "Obando",
    color: "#e85a6f",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Ipiales_-_Plaza_20_de_Julio.jpg",
    description: "Ipiales es la segunda ciudad más importante de Nariño, capital fronteriza con Ecuador a través del Puente de Rumichaca, a 2.898 m.s.n.m. Su joya arquitectónica es el Santuario de Las Lajas, majestuosa basílica gótica construida sobre el río Guáitara entre 1916 y 1949. Fundada en 1783, es centro comercial, religioso y cultural de la región sur. Su economía combina el comercio transfronterizo, la agricultura de clima frío y el turismo religioso internacional.",
    facts: [
      "Santuario de Las Lajas: basílica gótica sobre el río Guáitara (1916-1949)",
      "Puente de Rumichaca: principal paso fronterizo Colombia-Ecuador",
      "Segunda ciudad del departamento, población aprox. 150.000 hab.",
      "Altitud: 2.898 m.s.n.m., clima frío (9°C promedio)",
      "Centro comercial fronterizo de gran dinamismo",
      "Producción de papa, cebada y trigo de alta montaña"
    ]
  },
  "Aldana": {
    name: "Aldana",
    subregion: "Obando",
    color: "#e85a6f",
    image: "https://images.unsplash.com/photo-1596422846543-74c6fc0e6f62?q=80&w=800&auto=format&fit=crop",
    description: "Aldana es un municipio del altiplano nariñense a 2.820 m.s.n.m., con fuerte herencia indígena Pasto y tradiciones ancestrales preservadas por sus comunidades originarias. Es conocido por su producción agrícola de clima frío y su ubicación estratégica cerca de la frontera con Ecuador. El municipio mantiene prácticas culturales de la cultura Pasto, incluyendo la música, danzas y festividades religiosas tradicionales.",
    facts: [
      "Resguardo indígena de los Pastos con comunidades activas",
      "Altitud: 2.820 m.s.n.m., clima frío",
      "Economía: agricultura de papa, cebada y hortalizas",
      "Tradiciones culturales indígenas preservadas",
      "Ubicado cerca de la frontera con Ecuador",
      "Producción artesanal de textiles y figuras de barro",
      "Festividades patronales con danzas tradicionales"
    ]
  },
  "Contadero": {
    name: "Contadero",
    subregion: "Obando",
    color: "#e85a6f",
    image: "https://images.unsplash.com/photo-1596422846543-74c6fc0e6f62?q=80&w=800&auto=format&fit=crop",
    description: "Contadero es un municipio del altiplano de Túquerres-Ipiales a 3.020 m.s.n.m., con vocación agropecuaria y fuerte tradición campesina. Su economía se basa en la producción de papa, leche y hortalizas de clima frío, en un territorio donde la minifundia es la forma dominante de organización agrícola. El municipio forma parte de la meseta más alta de Nariño, con paisajes de páramo y andenes precolombinos.",
    facts: [
      "Altitud: 3.020 m.s.n.m., uno de los más altos de Nariño",
      "Economía: papa, leche y hortalizas de clima frío",
      "Meseta de Túquerres-Ipiales, sistema de andenes precolombinos",
      "Minifundio como forma dominante de agricultura",
      "Paisajes de páramo y alta montaña",
      "Comunidades campesinas con tradiciones ancestrales"
    ]
  },
  "Córdoba": {
    name: "Córdoba",
    subregion: "Obando",
    color: "#e85a6f",
    image: "https://images.unsplash.com/photo-1596422846543-74c6fc0e6f62?q=80&w=800&auto=format&fit=crop",
    description: "Córdoba es un municipio del altiplano nariñense con paisajes de páramo y laguna, situado a 2.950 m.s.n.m. En su territorio se encuentra la Laguna de La Bolsa, atractivo natural de aguas frías rodeado de frailejones. La economía se basa en la agroganadería de clima frío con producción de papa, trigo y leche. El municipio mantiene comunidades indígenas Pasto con sus tradiciones culturales y lengua.",
    facts: [
      "Laguna de La Bolsa: atractivo natural de páramo",
      "Altitud: 2.950 m.s.n.m., clima frío",
      "Economía agropecuaria: papa, trigo, cebada y leche",
      "Comunidades indígenas Pasto con tradiciones ancestrales",
      "Paisajes de páramo con frailejones y andenes",
      "Resguardos indígenas en su territorio"
    ]
  },
  "Cuaspud": {
    name: "Cuaspud (Carlosama)",
    subregion: "Obando",
    color: "#e85a6f",
    image: "https://images.unsplash.com/photo-1596422846543-74c6fc0e6f62?q=80&w=800&auto=format&fit=crop",
    description: "Cuaspud, también conocido como Carlosama, es un municipio fronterizo con Ecuador en la meseta de Túquerres-Ipiales a 2.900 m.s.n.m. Es territorio del pueblo indígena de los Pastos, con el resguardo de Carlosama como centro de su identidad cultural. Su economía se basa en la agricultura de papa y la ganadería de clima frío, manteniendo prácticas ancestrales de cultivo en andenes prehispánicos.",
    facts: [
      "Resguardo indígena Pasto de Carlosama",
      "Frontera directa con Ecuador",
      "Altitud: 2.900 m.s.n.m., clima frío",
      "Economía: papa y ganadería de clima frío",
      "Andenes prehispánicos en cultivo",
      "Comunidad indígena Pasto con lengua y tradiciones vivas"
    ]
  },
  "Cumbal": {
    name: "Cumbal",
    subregion: "Obando",
    color: "#e85a6f",
    image: "https://images.unsplash.com/photo-1596422846543-74c6fc0e6f62?q=80&w=800&auto=format&fit=crop",
    description: "Cumbal es un municipio dominado por el imponente volcán Cumbal (4.764 m), el segundo volcán más alto de Colombia, situado a 3.450 m.s.n.m. En su territorio se encuentran las sagradas lagunas de La Bolsa y Cumbal, sitios de peregrinación indígena. Es territorio ancestral del pueblo Pasto con fuerte identidad cultural. Su economía combina la agricultura de papa y cereales con el turismo volcánico y religioso.",
    facts: [
      "Volcán Cumbal (4.764 m): segundo volcán más alto de Colombia",
      "Lagunas sagradas de La Bolsa y Cumbal",
      "Altitud: 3.450 m.s.n.m., clima de páramo",
      "Territorio ancestral del pueblo indígena Pasto",
      "Economía: papa, lácteos y turismo volcánico",
      "Tradiciones religiosas y paganas indígenas"
    ]
  },
  "Funes": {
    name: "Funes",
    subregion: "Obando",
    color: "#e85a6f",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Funesnari%C3%B1o.jpg",
    description: "Funes es un municipio estratégicamente ubicado entre Pasto e Ipiales sobre la Vía Panamericana, a 2.720 m.s.n.m. Es una tierra agrícola de clima frío conocida por su producción de papa, hortalizas y leche. Su nombre significa 'lugar florido' en quechua. El pueblo ofrece vistas panorámicas de la meseta nariñense y es punto de paso obligado entre las dos ciudades más importantes del departamento.",
    facts: [
      "Ubicación estratégica sobre la Vía Panamericana entre Pasto e Ipiales",
      "Altitud: 2.720 m.s.n.m., clima frío",
      "Economía: papa, hortalizas y ganadería lechera",
      "Vistas panorámicas de la meseta nariñense",
      "Nombre de origen quechua: 'lugar florido'",
      "Población aprox. 12.000 habitantes"
    ]
  },
  "Guachucal": {
    name: "Guachucal",
    subregion: "Obando",
    color: "#e85a6f",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Parque_Nari%C3%B1o_Pasto.JPG",
    description: "Guachucal es el principal centro lechero de Nariño, situado a 2.880 m.s.n.m. en el altiplano de Túquerres-Ipiales. Es reconocido por su industria láctea que abastece gran parte del departamento, produciendo quesos y leche de alta calidad. El municipio tiene fuerte presencia del resguardo indígena Pasto y mantiene tradiciones culturales ancestrales. Su economía se complementa con la agricultura de papa y cebada.",
    facts: [
      "Principal zona lechera del departamento de Nariño",
      "Industria láctea: quesos y leche de alta calidad",
      "Altitud: 2.880 m.s.n.m., clima frío",
      "Resguardo indígena de los Pastos",
      "Economía: agricultura (papa, cebada) + ganadería lechera",
      "Tradiciones culturales indígenas preservadas"
    ]
  },
  "Gualmatán": {
    name: "Gualmatán",
    subregion: "Obando",
    color: "#e85a6f",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/SotM-Latam-2025_Cartograf%C3%ADaSentiresDelTerritorio1.jpg",
    description: "Gualmatán es uno de los municipios más pequeños de Nariño en extensión territorial, ubicado a 2.750 m.s.n.m. en el altiplano de Túquerres. Con economía basada en la agricultura de papa y hortalizas, mantiene tradiciones culturales de la cultura Pasto. Su pequeño territorio montañoso alberga comunidades campesinas e indígenas con una fuerte identidad regional.",
    facts: [
      "Uno de los municipios con menor extensión territorial de Nariño",
      "Altitud: 2.750 m.s.n.m., clima frío",
      "Economía: papa y hortalizas",
      "Altiplano de Túquerres-Ipiales",
      "Comunidades campesinas e indígenas",
      "Tradiciones culturales Pasto preservadas"
    ]
  },
  "Iles": {
    name: "Iles",
    subregion: "Obando",
    color: "#e85a6f",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/69_Iles_zona_urbana2.jpg",
    description: "Iles es un municipio del altiplano nariñense a 2.850 m.s.n.m., con vocación agropecuaria y paisajes de montaña. Su economía se basa en la producción de papa, trigo, cebada y ganadería lechera de pequeña escala. El municipio mantiene tradiciones culturales de la zona andina con festividades religiosas y eventos campesinos que reflejan su identidad altitudeña.",
    facts: [
      "Altitud: 2.850 m.s.n.m., clima frío",
      "Producción de papa, trigo, cebada y ganadería lechera",
      "Paisajes de montaña del altiplano nariñense",
      "Tradiciones culturales de la zona andina",
      "Economía de minifundio agropecuario",
      "Festividades religiosas y eventos campesinos tradicionales"
    ]
  },
  "Potosí": {
    name: "Potosí",
    subregion: "Obando",
    color: "#e85a6f",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Ipiales_-_Imagen_Satelital_-_20240126.png",
    description: "Potosí es un municipio fronterizo con Ecuador en la zona del volcán Chiles (4.748 m), situado a 3.350 m.s.n.m. En su territorio se encuentran las aguas termales de Chiles, atractivo turístico de aguas ricas en minerales. La economía combina la agricultura de clima frío con el turismo volcánico. Es uno de los municipios más altos de Nariño, con paisajes de alta montaña y comunidades indígenas Pasto.",
    facts: [
      "Volcán Chiles (4.748 m) en su territorio",
      "Aguas termales de Chiles: atractivo turístico",
      "Altitud: 3.350 m.s.n.m., clima de alta montaña",
      "Frontera con Ecuador por Chiles y Mayasquer",
      "Economía: agricultura de papa y turismo volcánico",
      "Comunidades indígenas Pasto con tradiciones ancestrales"
    ]
  },
  "Puerres": {
    name: "Puerres",
    subregion: "Obando",
    color: "#e85a6f",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Parquepuerres.jpg",
    description: "Puerres es un municipio agrícola ubicado entre Pasto e Ipiales en el Valle del Guáitara, a 2.400 m.s.n.m. Con valle fértil regado por el río Guáitara, es productor de papa, cebada y frutales. El municipio combina la agricultura de clima templado-frío con la ganadería, en un territorio de paisajes andinos y comunidades campesinas tradicionales.",
    facts: [
      "Valle del río Guáitara con tierras fértiles",
      "Altitud: 2.400 m.s.n.m., clima templado-frío",
      "Producción de papa, cebada y frutales",
      "Ubicado en la Vía Panamericana",
      "Economía agropecuaria diversificada",
      "Comunidades campesinas tradicionales"
    ]
  },
  "Pupiales": {
    name: "Pupiales",
    subregion: "Obando",
    color: "#e85a6f",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/MunsNarino_Pupiales.png",
    description: "Pupiales es un municipio del altiplano de Obando a 2.780 m.s.n.m., reconocido como centro agrícola de la subregión. Sus principales productos son la papa, los lácteos y las hortalizas. Las fiestas patronales de Pupiales son eventos culturales de gran tradición en la región, con procesiones, danzas y actividades típicas que reflejan la cultura altiplánica nariñense.",
    facts: [
      "Centro agrícola del altiplano de Obando",
      "Altitud: 2.780 m.s.n.m., clima frío",
      "Fiestas patronales de gran tradición regional",
      "Economía: papa, lácteos y hortalizas",
      "Paisajes del altiplano nariñense",
      "Comunidades campesinas con tradiciones andinas"
    ]
  },

  // ═══════════════════ SUBREGIÓN SABANA ═══════════════════
  "Túquerres": {
    name: "Túquerres",
    subregion: "Sabana",
    color: "#9b8ec7",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Tuq_pano.jpg",
    description: "Túquerres es el centro urbano principal de la subregión Sabana y uno de los mercados agrícolas más importantes del suroccidente colombiano. Ubicado a 2.700 m.s.n.m., es el mayor productor de papa de Nariño y un punto de acopio y comercio de productos agrícolas de toda la región. Su economía combina la agricultura de papa, cebada y trigo con la ganadería lechera y el comercio regional.",
    facts: [
      "Principal centro de acopio y comercio agrícola de Nariño",
      "Mayor productor de papa del departamento",
      "Altitud: 2.700 m.s.n.m., clima frío",
      "Ferias ganaderas de reconocimiento regional",
      "Economía: papa, cebada, trigo y lácteos",
      "Población aprox. 45.000 habitantes"
    ]
  },
  "Guaitarilla": {
    name: "Guaitarilla",
    subregion: "Sabana",
    color: "#9b8ec7",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/MunsNarino_Tuquerres.png",
    description: "Guaitarilla es un municipio agrícola del altiplano nariñense a 2.650 m.s.n.m., productor de papa y hortalizas. Su territorio incluye parte del cañón del río Guáitara, con paisajes de gran valor ecológico. Es conocido por su artesanía tradicional y sus festividades culturales que reflejan la identidad de la región Sabana de Nariño.",
    facts: [
      "Cañón del río Guáitara en sus límites",
      "Altitud: 2.650 m.s.n.m., clima frío-templado",
      "Importante productor de papa del departamento",
      "Tradición artesanal y cultural andina",
      "Economía: agricultura de papa, hortalizas y frutales",
      "Comunidades campesinas con tradiciones ancestrales"
    ]
  },
  "Imués": {
    name: "Imués",
    subregion: "Sabana",
    color: "#9b8ec7",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Volcan_Azufral.jpg",
    description: "Imués es un municipio de la meseta andina del altiplano nariñense a 2.750 m.s.n.m., con economía agrícola tradicional basada en el cultivo de papa, trigo y maíz. Sus paisajes de páramo y montaña ofrecen vistas panorámicas de la cordillera. El municipio mantiene tradiciones culturales indígenas y campesinas con festividades religiosas de gran arraigo.",
    facts: [
      "Altitud: 2.750 m.s.n.m., meseta andina",
      "Producción de papa, trigo y maíz",
      "Paisajes de páramo y montaña",
      "Tradiciones culturales indígenas y campesinas",
      "Clima frío con temperaturas promedio de 8-12°C",
      "Economía agropecuaria tradicional"
    ]
  },
  "Ospina": {
    name: "Ospina",
    subregion: "Sabana",
    color: "#9b8ec7",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Volcan_Azufral.jpg",
    description: "Ospina es un pequeño municipio del altiplano nariñense a 2.700 m.s.n.m., con vocación agropecuaria de clima frío. Su economía se basa en la agricultura de papa, cebada y trigo, complementada con la ganadería lechera. Ospina forma parte de la subregión Sabana y mantiene tradiciones campesinas ancestrales con un fuerte sentido de identidad regional.",
    facts: [
      "Altitud: 2.700 m.s.n.m., clima frío",
      "Economía: agricultura (papa, cebada) y ganadería lechera",
      "Paisajes del altiplano de Túquerres",
      "Comunidades campesinas tradicionales",
      "Ubicado en la meseta de Túquerres-Ipiales",
      "Producción artesanal de quesos y lácteos"
    ]
  },
  "Sapuyes": {
    name: "Sapuyes",
    subregion: "Sabana",
    color: "#9b8ec7",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Volcan_Azufral.jpg",
    description: "Sapuyes es un municipio del altiplano nariñense a 2.800 m.s.n.m., situado en la meseta de Túquerres. Tierra fría productora de papa y leche, su economía se basa en la agricultura de clima frío y la ganadería lechera. Sus paisajes de páramo y montaña albergan ecosistemas de alta montaña con comunidades campesinas e indígenas.",
    facts: [
      "Altitud: 2.800 m.s.n.m., clima frío",
      "Producción lechera y de papa",
      "Ubicado en la meseta de Túquerres-Ipiales",
      "Paisajes de páramo de alta montaña",
      "Economía agropecuaria de clima frío",
      "Comunidades campesinas e indígenas"
    ]
  },

  // ═══════════════════ SUBREGIÓN OCCIDENTE ═══════════════════
  "Sandoná": {
    name: "Sandoná",
    subregion: "Occidente",
    color: "#ff7b7b",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Sandon%C3%A1_-_Nari%C3%B1o_2888600484824800467_n.jpg",
    description: "Sandoná es la capital artesanal de Nariño, mundialmente famosa por sus sombreros de iraca (paja toquilla). Ubicado a 1.750 m.s.n.m. en la cordillera occidental, es el principal centro de producción de sombreros 'vueltiaos' y 'aguadeños' de Colombia. Su economía combina la artesanía, el café de alta calidad y la panela. Las Fiestas del Sombrero son el evento cultural emblemático del municipio.",
    facts: [
      "Capital artesanal de Nariño: sombreros de paja toquilla reconocidos mundialmente",
      "Altitud: 1.750 m.s.n.m., clima templado (18-24°C)",
      "Fiestas del Sombrero: evento cultural emblemático",
      "Producción de café de alta calidad y panela",
      "Principal centro de sombreros 'vueltiaos' de Colombia",
      "Economía artesanal, cafetera y panelera"
    ]
  },
  "Ancuyá": {
    name: "Ancuyá",
    subregion: "Occidente",
    color: "#ff7b7b",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Sandon%C3%A1_-_Nari%C3%B1o_2888600484824800467_n.jpg",
    description: "Ancuyá es un municipio de clima templado a cálido en la cordillera occidental de Nariño, situado a 1.800 m.s.n.m. Es productor de café de origen y caña de azúcar, con paisajes de laderas y cañones de gran belleza natural. La tradición campesina y artesanal es parte fundamental de la identidad de este municipio de la subregión Occidente.",
    facts: [
      "Altitud: 1.800 m.s.n.m., clima templado-cálido",
      "Café de origen y caña de azúcar: principales cultivos",
      "Paisajes de laderas y cañones de la cordillera occidental",
      "Tradición campesina y artesanal",
      "Producción de frutales tropicales",
      "Economía diversificada: café, caña y agricultura"
    ]
  },
  "Consacá": {
    name: "Consacá",
    subregion: "Occidente",
    color: "#ff7b7b",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Consaca.jpg",
    description: "Consacá es un municipio histórico al pie del volcán Galeras, a 1.900 m.s.n.m., escenario de la célebre Batalla de Bomboná (1822) que selló la independencia de Colombia. Sus aguas termales y paisajes volcanicos lo convierten en destino turístico. La economía combina la agricultura de café y frutales con el turismo histórico y termal, en un territorio de great valor cultural y natural.",
    facts: [
      "Batalla de Bomboná (1822): sitio histórico de la independencia",
      "Faldas del volcán Galeras con aguas termales",
      "Altitud: 1.900 m.s.n.m., clima templado",
      "Producción de café y frutales",
      "Turismo histórico y termal",
      "Población aprox. 12.000 habitantes"
    ]
  },
  "Linares": {
    name: "Linares",
    subregion: "Occidente",
    color: "#ff7b7b",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Linares_%28plaza_principal%29.png",
    description: "Linares es un municipio de clima templado a cálido en la cordillera occidental, situado a 1.650 m.s.n.m. Tierra de panela y café, limita con el cañón del río Guáitara. Su economía se basa en la producción artesanal de panela, el cultivo de café y frutales tropicales, con paisajes de laderas montañosas de gran valor ecológico.",
    facts: [
      "Altitud: 1.650 m.s.n.m., clima templado-cálido",
      "Producción de panela artesanal y café",
      "Cañón del río Guáitara en sus límites",
      "Cultivos de frutales tropicales",
      "Paisajes de laderas montañosas",
      "Economía: panela, café y agricultura diversificada"
    ]
  },

  // ═══════════════════ SUBREGIÓN ABADES ═══════════════════
  "Samaniego": {
    name: "Samaniego",
    subregion: "Abades",
    color: "#d4a017",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/GUACHAVES_PANORAMICA.jpg",
    description: "Samaniego, conocida como 'Ciudad Paisaje y Musical', es un importante centro cultural del suroccidente nariñense, situado a 1.600 m.s.n.m. en la cordillera occidental. Es reconocida por sus bandas musicales y compositores que han dado fama al municipio a nivel nacional. Su economía combina la producción de café, caña panelera y frutales, en un relieve montañoso con vistas panorámicas espectaculares.",
    facts: [
      "'Ciudad Paisaje y Musical' de Colombia",
      "Fuerte tradición de bandas musicales y compositores",
      "Altitud: 1.600 m.s.n.m., clima templado",
      "Producción de café, caña panelera y frutales",
      "Relieve montañoso con vistas panorámicas",
      "Población aprox. 35.000 habitantes"
    ]
  },
  "Providencia": {
    name: "Providencia",
    subregion: "Abades",
    color: "#d4a017",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Dibujo_de_las_monta%C3%B1as_de_Yacuanquer.jpg",
    description: "Providencia es un municipio de montaña en la subregión Abades, situado a 1.800 m.s.n.m. en la cordillera occidental. Su economía combina la minería artesanal de oro con la agricultura de café y caña panelera. Los terrenos quebrados de la cordillera occidental configuran un paisaje de gran belleza natural y挑战 técnico para la agricultura.",
    facts: [
      "Altitud: 1.800 m.s.n.m., cordillera occidental",
      "Minería artesanal de oro",
      "Producción de café y caña panelera",
      "Terrenos quebrados de montaña",
      "Paisajes de gran belleza natural",
      "Economía mixta: minería y agricultura"
    ]
  },
  "Santacruz": {
    name: "Santacruz (Guachavés)",
    subregion: "Abades",
    color: "#d4a017",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/GUACHAVES_PANORAMICA.jpg",
    description: "Santacruz, también conocido como Guachavés, es un municipio del piedemonte occidental de Nariño a 1.500 m.s.n.m. Es territorio del pueblo indígena Awá, con importantes resguardos indígenas de gran extensión. Su economía se basa en la agricultura de subsistencia, la minería artesanal y la explotación de recursos forestales, manteniendo vivas tradiciones ancestrales Awá.",
    facts: [
      "Territorio del pueblo indígena Awá",
      "Resguardos indígenas de gran extensión",
      "Altitud: 1.500 m.s.n.m., clima cálido",
      "Economía de subsistencia y minería artesanal",
      "Tradiciones culturales Awá preservadas",
      "Paisajes del piedemonte occidental"
    ]
  },

  // ═══════════════════ SUBREGIÓN GUAMBUYACO ═══════════════════
  "El Peñol": {
    name: "El Peñol",
    subregion: "Guambuyaco",
    color: "#e8d850",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Funesnari%C3%B1o.jpg",
    description: "El Peñol es un municipio de montaña en la subregión Guambuyaco, situado a 1.700 m.s.n.m. en la cordillera occidental. Su economía combina la agricultura de café y caña panelera con la minería artesanal de oro en pequeña escala. Los paisajes montañosos de la cordillera y las comunidades campesinas definen la identidad de este municipio nariñense.",
    facts: [
      "Altitud: 1.700 m.s.n.m., cordillera occidental",
      "Producción de café y caña panelera",
      "Minería artesanal de oro en pequeña escala",
      "Paisajes montañosos de la cordillera",
      "Comunidades campesinas tradicionales",
      "Economía mixta agricultura-minería"
    ]
  },
  "El Tambo": {
    name: "El Tambo",
    subregion: "Guambuyaco",
    color: "#e8d850",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/MunsNarino_Samaniego.png",
    description: "El Tambo es un municipio de clima templado a cálido en la subregión Guambuyaco, situado a 1.500 m.s.n.m. Es punto de tránsito hacia la costa pacífica nariñense. Su economía se basa en la producción de café, caña panelera y frutales, con una geografía que varía de montañosa a tropical baja.",
    facts: [
      "Altitud: 1.500 m.s.n.m., clima templado-cálido",
      "Producción de café, caña panelera y frutales",
      "Punto de tránsito hacia la costa pacífica",
      "Economía agrícola diversificada",
      "Geografía de montaña a valle tropical",
      "Comunidades campesinas y afrodescendientes"
    ]
  },
  "La Llanada": {
    name: "La Llanada",
    subregion: "Guambuyaco",
    color: "#e8d850",
    image: "https://images.unsplash.com/photo-1596422846543-74c6fc0e6f62?q=80&w=800&auto=format&fit=crop",
    description: "La Llanada es reconocido como el principal centro minero aurífero del departamento de Nariño, con una tradición minera que data de la época colonial. Situado a 1.400 m.s.n.m., su economía se basa en la extracción artesanal de oro, complementada con agricultura de café y caña. Es un municipio de gran importancia económica por su producción minera.",
    facts: [
      "Capital minera de Nariño: extracción artesanal de oro",
      "Tradición minera desde la época colonial",
      "Altitud: 1.400 m.s.n.m., clima cálido",
      "Importante fuente de empleo regional",
      "Economía: minería y agricultura",
      "Población aprox. 8.000 habitantes"
    ]
  },
  "Los Andes": {
    name: "Los Andes (Sotomayor)",
    subregion: "Guambuyaco",
    color: "#e8d850",
    image: "https://images.unsplash.com/photo-1596422846543-74c6fc0e6f62?q=80&w=800&auto=format&fit=crop",
    description: "Los Andes, también conocido como Sotomayor, es municipio de economía mixta agrícola-minera en la subregión Guambuyaco, a 1.500 m.s.n.m. en el cañón del Guáitara. Combina la producción de café con la minería artesanal de oro, en un territorio montañoso de gran valor ecológico y cultural.",
    facts: [
      "Históricamente conocido como Sotomayor",
      "Altitud: 1.500 m.s.n.m., cañón del Guáitara",
      "Producción de café y minería de oro",
      "Economía mixta agrícola-minera",
      "Terrenos montañosos del cañón",
      "Comunidades campesinas tradicionales"
    ]
  },

  // ═══════════════════ SUBREGIÓN JUANAMBÚ ═══════════════════
  "La Unión": {
    name: "La Unión",
    subregion: "Juanambú",
    color: "#8abf45",
    image: "https://images.unsplash.com/photo-1596422846543-74c6fc0e6f62?q=80&w=800&auto=format&fit=crop",
    description: "La Unión es reconocida como la capital cafetera de Nariño, con producción de café especial de alta calidad a 1.500 m.s.n.m. en el cañón del Juanambú. Es centro comercial de la subregión y principal mercado cafetero del departamento, con café de origen que cuenta con Denominación de Origen. Su clima templado es ideal para el cultivo de café especial.",
    facts: [
      "Capital cafetera de Nariño y principal mercado cafetero",
      "Café de origen con Denominación de Origen",
      "Altitud: 1.500 m.s.n.m., clima templado",
      "Centro comercial de la subregión Juanambú",
      "Cañón del río Juanambú",
      "Café especial de alta calidad y reconocimiento nacional"
    ]
  },
  "Arboleda": {
    name: "Arboleda (Berruecos)",
    subregion: "Juanambú",
    color: "#8abf45",
    image: "https://images.unsplash.com/photo-1596422846543-74c6fc0e6f62?q=80&w=800&auto=format&fit=crop",
    description: "Arboleda, también conocido como Berruecos, es un municipio histórico de Nariño a 1.600 m.s.n.m. donde fue asesinado el Mariscal Antonio José de Sucre el 4 de junio de 1830. El municipio honra este hecho histórico con monumentos y museos. Su economía combina la producción de café y frutales con el turismo histórico-cultural.",
    facts: [
      "Sitio histórico: asesinato del Mariscal Sucre (1830)",
      "Monumento y museo en honor a Sucre",
      "Altitud: 1.600 m.s.n.m., clima templado",
      "Producción de café y frutales",
      "Economía cafetera y turística",
      "Población aprox. 15.000 habitantes"
    ]
  },
  "Buesaco": {
    name: "Buesaco",
    subregion: "Juanambú",
    color: "#8abf45",
    image: "https://turismo.narino.gov.co/wp-content/uploads/2025/04/templo_buesaco-1024x683.jpg",
    description: "Buesaco es un municipio cafetero del cañón del Juanambú, situado a 1.700 m.s.n.m. con producción de café especial de alta calidad. Su territorio incluye el cañón del río Juanambú con paisajes de gran valor ecológico. El clima variado desde frío hasta templado permite una agricultura diversificada de café, frutales y hortalizas.",
    facts: [
      "Café especial de alta calidad y reconocimiento",
      "Cañón del río Juanambú en su territorio",
      "Altitud: 1.700 m.s.n.m., clima variado",
      "Producción diversificada: café, frutales, hortalizas",
      "Economía cafetera principal",
      "Paisajes del cañón con alta biodiversidad"
    ]
  },
  "San Lorenzo": {
    name: "San Lorenzo",
    subregion: "Juanambú",
    color: "#8abf45",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/MunsNarino_La_Llanada.png",
    description: "San Lorenzo es un municipio cafetero ubicado en el cañón del Juanambú a 1.600 m.s.n.m. Su economía se basa en la producción de café pergamino y la agricultura de ladera con frutales. Los paisajes del cañón del Juanambú ofrecen vistas panorámicas de gran valor turístico y ecológico.",
    facts: [
      "Producción de café pergamino de alta calidad",
      "Altitud: 1.600 m.s.n.m., cañón del Juanambú",
      "Agricultura de ladera con frutales",
      "Paisajes del cañón con valor turístico",
      "Economía cafetera principal",
      "Comunidades campesinas tradicionales"
    ]
  },
  "Cartago": {
    name: "San Pedro de Cartago",
    subregion: "Juanambú",
    color: "#8abf45",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Puente_Juanamb%C3%BA.jpg",
    description: "San Pedro de Cartago es un municipio del norte de Nariño a 1.400 m.s.n.m. con economía cafetera y agropecuaria. Ubicado en la vertiente del río Juanambú, tiene un clima templado favorable para la agricultura diversificada. Es un punto de conexión entre la cordillera y el piedemonte del departamento.",
    facts: [
      "Producción de café y ganadería",
      "Altitud: 1.400 m.s.n.m., clima templado",
      "Ubicado en la vertiente del río Juanambú",
      "Economía cafetera y agropecuaria",
      "Conexión entre cordillera y piedemonte",
      "Población aprox. 10.000 habitantes"
    ]
  },

  // ═══════════════════ SUBREGIÓN RÍO MAYO ═══════════════════
  "La Cruz": {
    name: "La Cruz",
    subregion: "Río Mayo",
    color: "#f0b060",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Nari%C3%B1o_iglesia.jpg",
    description: "La Cruz es el principal centro urbano de la subregión Río Mayo, situado a 1.300 m.s.n.m. en la vertiente norte del departamento. Punto de convergencia comercial del nororiente nariñense, su economía combina la producción de café, frutales y ganadería con el comercio regional. Es nudo de comunicaciones hacia el norte de Nariño y el Cauca.",
    facts: [
      "Centro comercial y de servicios del Río Mayo",
      "Altitud: 1.300 m.s.n.m., clima templado",
      "Producción de café, frutales y ganadería",
      "Nudo de comunicaciones hacia el norte de Nariño",
      "Población aprox. 20.000 habitantes",
      "Centro urbano principal de la subregión"
    ]
  },
  "Albán": {
    name: "Albán (San José)",
    subregion: "Río Mayo",
    color: "#f0b060",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Nari%C3%B1o_iglesia.jpg",
    description: "Albán, también conocido como San José de Albán, es municipio del nororiente nariñense a 1.400 m.s.n.m. con vocación agropecuaria. Su economía se basa en la producción de café y frutales de clima templado, en un territorio de montaña y valles con comunidades campesinas tradicionales.",
    facts: [
      "También conocido como San José de Albán",
      "Altitud: 1.400 m.s.n.m., clima templado",
      "Producción de café y frutales",
      "Paisajes de montaña y valles",
      "Economía agropecuaria",
      "Comunidades campesinas tradicionales"
    ]
  },
  "Belén": {
    name: "Belén",
    subregion: "Río Mayo",
    color: "#f0b060",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Nari%C3%B1o_iglesia.jpg",
    description: "Belén es un municipio de la cuenca del río Mayo a 1.200 m.s.n.m., con economía agrícola y ganadera. La cuenca del río Mayo proporciona tierras fértiles para el cultivo de caña panelera, café y frutales. Su clima templado-cálido y su ubicación en la vertiente oriental definen su vocación agropecuaria.",
    facts: [
      "Cuenca del río Mayo con tierras fértiles",
      "Altitud: 1.200 m.s.n.m., clima templado-cálido",
      "Producción de caña panelera y café",
      "Economía agrícola y ganadera",
      "Vertiente oriental de Nariño",
      "Comunidades campesinas"
    ]
  },
  "Colón": {
    name: "Colón (Génova)",
    subregion: "Río Mayo",
    color: "#f0b060",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Nari%C3%B1o_iglesia.jpg",
    description: "Colón, también conocido como Génova, es municipio de la cuenca del río Mayo a 1.300 m.s.n.m. con tradición agrícola. Su economía combina la producción de café y frutales con la ganadería, en un territorio de la vertiente oriental nariñense con clima templado-cálido.",
    facts: [
      "También conocido como Génova",
      "Altitud: 1.300 m.s.n.m., clima templado",
      "Producción de café y frutales",
      "Cuenca del río Mayo",
      "Economía agropecuaria",
      "Comunidades campesinas tradicionales"
    ]
  },
  "El Tablón": {
    name: "El Tablón de Gómez",
    subregion: "Río Mayo",
    color: "#f0b060",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Parque_tangua_a_noite_-_panoramio.jpg",
    description: "El Tablón de Gómez es un municipio con importante zona arqueológica y vestigios precolombinos en su territorio, situado a 1.800 m.s.n.m. Cerca del Parque Nacional Natural Doña Juana - Cascabel, combina la producción de café de alta montaña con el turismo cultural y ecológico. Los petroglifos y vestigios indígenas testimonian una ocupación ancestral.",
    facts: [
      "Zona arqueológica con petroglifos y vestigios indígenas",
      "Parque Nacional Natural Doña Juana - Cascabel",
      "Altitud: 1.800 m.s.n.m., café de alta montaña",
      "Turismo cultural y ecológico",
      "Economía: café y turismo",
      "Población aprox. 12.000 habitantes"
    ]
  },
  "San Bernardo": {
    name: "San Bernardo",
    subregion: "Río Mayo",
    color: "#f0b060",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Nari%C3%B1o_iglesia.jpg",
    description: "San Bernardo es un municipio del nororiente de Nariño, en las estribaciones del macizo colombiano a 1.500 m.s.n.m. Con importantes fuentes hídricas y clima templado, su economía se basa en la producción de café y frutales. Es parte de la cuenca alta del río Juanambú con paisajes de gran valor ecológico.",
    facts: [
      "Estribaciones del Macizo Colombiano",
      "Fuentes hídricas importantes",
      "Altitud: 1.500 m.s.n.m., clima templado",
      "Producción de café y frutales",
      "Cuenca alta del río Juanambú",
      "Alta biodiversidad y valor ecológico"
    ]
  },
  "San Pablo": {
    name: "San Pablo",
    subregion: "Río Mayo",
    color: "#f0b060",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Nari%C3%B1o_iglesia.jpg",
    description: "San Pablo es el municipio más septentrional de Nariño, zona de transición entre el departamento y el Cauca a 1.200 m.s.n.m. Su economía combina la producción de café y ganadería en un territorio de clima templado-cálido que marca la frontera norte del departamento.",
    facts: [
      "Límite norte del departamento de Nariño",
      "Zona de transición hacia el Cauca",
      "Altitud: 1.200 m.s.n.m., clima templado-cálido",
      "Producción de café y ganadería",
      "Población aprox. 15.000 habitantes",
      "Transición ecológica entre cordillera y valle"
    ]
  },

  // ═══════════════════ SUBREGIÓN CORDILLERA ═══════════════════
  "Policarpa": {
    name: "Policarpa",
    subregion: "Cordillera",
    color: "#e89548",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Cordillera_Occidental_Colombia.jpg",
    description: "Policarpa es un municipio del cañón del río Patía a 1.200 m.s.n.m., nombrado en honor a la heroína independentista Policarpa Salavarrieta 'La Pola'. Con clima cálido, su economía se basa en la producción de cacao, maní y frutales tropicales. El cañón del Patía ofrece paisajes de gran valor turístico y ecológico.",
    facts: [
      "Nombrado en honor a Policarpa Salavarrieta 'La Pola'",
      "Cañón del río Patía con clima cálido",
      "Producción de cacao, maní y frutales tropicales",
      "Altitud: 1.200 m.s.n.m.",
      "Paisajes del cañón del Patía",
      "Economía agrícola tropical"
    ]
  },
  "Cumbitara": {
    name: "Cumbitara",
    subregion: "Cordillera",
    color: "#e89548",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Cordillera_Occidental_Colombia.jpg",
    description: "Cumbitara es municipio de clima cálido en el cañón del Patía a 1.100 m.s.n.m., con vocación agrícola. Su economía combina la producción de maní, cacao y frutales tropicales con la minería artesanal de oro. Los paisajes del cañón del Patía configuran un territorio de gran diversidad ecológica.",
    facts: [
      "Valle del río Patía con climas cálidos",
      "Altitud: 1.100 m.s.n.m.",
      "Producción de maní, cacao y frutales",
      "Minería artesanal de oro",
      "Economía agrícola y minera",
      "Alta diversidad ecológica"
    ]
  },
  "El Rosario": {
    name: "El Rosario",
    subregion: "Cordillera",
    color: "#e89548",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdQloC3HChguGwtNLWLdR3uwi3Addr6UpQ5VanPoDOXC9W3KxXzHaUpqw&s=10",
    description: "El Rosario es municipio de la zona seca del Patía a 1.300 m.s.n.m., con producción de cacao y frutales. Su clima cálido y semiárido define una economía agrícola adaptada a las condiciones del cañón del Patía, con comunidades campesinas tradicionales.",
    facts: [
      "Zona semiárida del cañón del Patía",
      "Altitud: 1.300 m.s.n.m., clima cálido-semiárido",
      "Producción de cacao y frutales tropicales",
      "Economía agrícola adaptada al clima seco",
      "Comunidades campesinas tradicionales",
      "Paisajes del cañón del Patía"
    ]
  },
  "Leiva": {
    name: "Leiva",
    subregion: "Cordillera",
    color: "#e89548",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Leiva_(Nari%C3%B1o).jpg",
    description: "Leiva es municipio del cañón del Patía a 1.200 m.s.n.m. con economía basada en agricultura de clima cálido. Sus cultivos de maní, cacao y frutales tropicales definen una economía agrícola diversificada. Las comunidades campesinas mantienen tradiciones agrícolas de la zona del Patía.",
    facts: [
      "Cañón del río Patía",
      "Altitud: 1.200 m.s.n.m., clima cálido",
      "Cultivos: maní, cacao, frutales",
      "Comunidades campesinas de tradición agrícola",
      "Economía agrícola diversificada",
      "Paisajes del cañón del Patía"
    ]
  },
  "Taminango": {
    name: "Taminango",
    subregion: "Cordillera",
    color: "#e89548",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/TAMINANGO.jpg",
    description: "Taminango es municipio noroccidental de Nariño a 1.100 m.s.n.m., en la zona del Patía. Es el principal productor de maní del departamento, con una economía basada en la agricultura de clima cálido y la producción de frutales tropicales.",
    facts: [
      "Principal productor de maní del departamento",
      "Altitud: 1.100 m.s.n.m., clima cálido",
      "Cañón del Patía con paisajes semiáridos",
      "Producción de frutales tropicales",
      "Economía agrícola especializada",
      "Comunidades campesinas"
    ]
  },

  // ═══════════════════ SUBREGIÓN SANQUIANGA ═══════════════════
  "El Charco": {
    name: "El Charco",
    subregion: "Sanquianga",
    color: "#68c05e",
    image: "https://cloudfront-us-east-1.images.arcpublishing.com/elespectador/DLJJWKW3ENBJNNBG5HP3BT65TM.jpg",
    description: "El Charco es municipio costero de la región Sanquianga en la costa pacífica nariñense, a nivel del mar. Su economía se basa en la pesca artesanal y la recolección de piangua, además de la explotación forestal. Comunidades afrodescendientes con rica cultura habitan este territorio de manglares y biodiversidad costera.",
    facts: [
      "Ubicado en la costa pacífica nariñense",
      "Pesca artesanal y recolección de piangua",
      "Comunidades afrodescendientes con rica cultura",
      "Manglares y biodiversidad costera",
      "Economía: pesca, piangua y forestal",
      "Clima cálido húmedo tropical"
    ]
  },
  "La Tola": {
    name: "La Tola",
    subregion: "Sanquianga",
    color: "#68c05e",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQu5sSYjsCPFpJuqTvL35C9oxpdEDAmGPcDSvNb1ssdqEifN0SAyNKte6tj&s=10",
    description: "La Tola es municipio costero del Pacífico, puerta de entrada al Parque Nacional Natural Sanquianga. Sus extensos manglares y bosques de costa albergan una biodiversidad excepcional. La economía se basa en la pesca artesanal, la recolección de piangua y la madera, con comunidades afrodescendientes de fuerte identidad cultural.",
    facts: [
      "Acceso al Parque Nacional Natural Sanquianga",
      "Extensos manglares y bosques de costa",
      "Economía pesquera y maderera",
      "Comunidades afrodescendientes",
      "Alta biodiversidad costera",
      "Clima cálido húmedo tropical"
    ]
  },
  "Mosquera": {
    name: "Mosquera",
    subregion: "Sanquianga",
    color: "#68c05e",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Crep%C3%BAsculo_en_el_parque_Natural_Sanquianga.jpg",
    description: "Mosquera es municipio costero del Pacífico con abundantes recursos hídricos y manglares en la llanura pacífica nariñense. La economía combina la recolección de piangua, pesca artesanal y explotación de la selva húmeda tropical del Pacífico, con comunidades afrodescendientes de gran tradición cultural.",
    facts: [
      "Ríos y esteros de la llanura pacífica",
      "Recolección de piangua y pesca artesanal",
      "Selva húmeda tropical del Pacífico",
      "Comunidades afrodescendientes",
      "Economía: pesca, piangua y forestal",
      "Biodiversidad de selva húmeda tropical"
    ]
  },
  "Olaya Herrera": {
    name: "Olaya Herrera",
    subregion: "Sanquianga",
    color: "#68c05e",
    image: "https://cdn.municipios.com.co/fotos/786-2017-09-15-19-01-957-L.jpg",
    description: "Olaya Herrera, también conocido como Bocas de Satinga, es municipio de la costa pacífica a nivel del mar. La desembocadura del río Satinga define su geografía costera con manglares y ecosistemas acuáticos. La economía combina la pesca, la recolección de concha y la agricultura de subsistencia en un territorio de selva húmeda tropical.",
    facts: [
      "También llamado Bocas de Satinga",
      "Desembocadura del río Satinga",
      "Pesca, recolección de concha y agricultura",
      "Clima cálido húmedo tropical",
      "Manglares y ecosistemas costeros",
      "Comunidades afrodescendientes"
    ]
  },
  "Santa Bárbara": {
    name: "Santa Bárbara (Iscuandé)",
    subregion: "Sanquianga",
    color: "#68c05e",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6oKave4zsuuvnI16s8Sq0gNExnvjD3mHfgy7k0Tg9n4IrCBRWRErWKqA&s=10",
    description: "Santa Bárbara, también conocido como Iscuandé, es municipio costero con tradición pesquera y herencia cultural afrocolombiana. Su economía se basa en la pesca artesanal como principal actividad, con manglares y ecosistemas costeros de gran valor ecológico en la llanura pacífica.",
    facts: [
      "También conocido como Iscuandé",
      "Herencia cultural afrocolombiana",
      "Pesca artesanal como principal actividad",
      "Manglares y ecosistemas costeros",
      "Clima cálido húmedo tropical",
      "Economía: pesca y recolección de piangua"
    ]
  },

  // ═══════════════════ SUBREGIÓN PACÍFICO SUR ═══════════════════
  "Tumaco": {
    name: "San Andrés de Tumaco",
    subregion: "Pacífico Sur",
    color: "#e8c850",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Parquecol%C3%B3n.jpg",
    description: "Tumaco es el principal puerto marítimo de Nariño y segundo del Pacífico colombiano, conocido como 'La Perla del Pacífico'. Situado a nivel del mar, es la segunda ciudad del departamento con aproximadamente 230.000 habitantes. Su economía combina la industria pesquera, la palmicultura y el comercio. Playas turísticas como El Morro y Bocagrande atraen visitantes nacionales e internacionales.",
    facts: [
      "Puerto marítimo más importante del suroccidente colombiano",
      "'La Perla del Pacífico': segunda ciudad del departamento",
      "Playas turísticas: El Morro, Bocagrande",
      "Industria pesquera y palmicultora",
      "Población aprox. 230.000 habitantes",
      "Centro cultural afrocolombiano del Pacífico"
    ]
  },
  "Francisco Pizarro": {
    name: "Francisco Pizarro (Salahonda)",
    subregion: "Pacífico Sur",
    color: "#e8c850",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Parquecol%C3%B3n.jpg",
    description: "Francisco Pizarro, también conocido como Salahonda, es municipio costero del Pacífico a nivel del mar. Su economía se basa en la pesca artesanal y la recolección de moluscos, con comunidades afrodescendientes del Pacífico que mantienen vivas tradiciones culturales ancestrales.",
    facts: [
      "También conocido como Salahonda",
      "Pesca artesanal y recolección de moluscos",
      "Comunidades afrodescendientes del Pacífico",
      "Clima cálido húmedo tropical",
      "Costanera del Pacífico nariñense",
      "Economía pesquera y agrícola"
    ]
  },

  // ═══════════════════ SUBREGIÓN TELEMBÍ ═══════════════════
  "Barbacoas": {
    name: "Barbacoas",
    subregion: "Telembí",
    color: "#c08de0",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/R%C3%ADo_Telemb%C3%AD_-_Barbacoas,_noviembre_de_2024.jpg",
    description: "Barbacoas es la histórica ciudad minera del Pacífico nariñense, a orillas del río Telembí. Con una tradición minera aurífera que data de la época colonial, es uno de los centros mineros más antiguos de Colombia. Comunidades afrodescendientes e indígenas Awá habitan este territorio de selva húmeda tropical de alta pluviosidad.",
    facts: [
      "Histórico centro de minería aurífera desde la Colonia",
      "A orillas del río Telembí",
      "Comunidades afrodescendientes e indígenas Awá",
      "Selva húmeda tropical de alta pluviosidad",
      "Economía: minería, agricultura y pesca",
      "Población aprox. 30.000 habitantes"
    ]
  },
  "Maguí Payán": {
    name: "Magüí Payán",
    subregion: "Telembí",
    color: "#c08de0",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/R%C3%ADo_Telemb%C3%AD_-_Barbacoas,_noviembre_de_2024.jpg",
    description: "Magüí Payán es municipio selvático de la cuenca del Telembí, con minería artesanal de oro y agricultura de subsistencia. Sus paisajes de selva húmeda tropical del Pacífico albergan alta biodiversidad. Comunidades afrodescendientes mantienen tradiciones culturales ancestrales en este territorio de gran valor ecológico.",
    facts: [
      "Selva húmeda del Pacífico nariñense",
      "Minería artesanal de oro",
      "Comunidades afrodescendientes",
      "Cuenca del río Telembí",
      "Alta biodiversidad",
      "Economía: minería y agricultura de subsistencia"
    ]
  },
  "Roberto Payán": {
    name: "Roberto Payán",
    subregion: "Telembí",
    color: "#c08de0",
    image: "https://radionacional-v3.s3.amazonaws.com/s3fs-public/node/article/field_image/roberto%20payan.jpg",
    description: "Roberto Payán, también conocido como San José, es municipio selvático de la cuenca del Telembí con alta biodiversidad de selva húmeda tropical. Su economía combina la minería artesanal, la agricultura de subsistencia y la explotación forestal en un territorio de gran valor ecológico.",
    facts: [
      "También conocido como San José",
      "Alta biodiversidad de selva húmeda tropical",
      "Minería y agricultura de subsistencia",
      "Cuenca del río Telembí",
      "Comunidades afrodescendientes e indígenas",
      "Economía: minería, agricultura y forestal"
    ]
  },

  // ═══════════════════ SUBREGIÓN PIEDEMONTE COSTERO ═══════════════════
  "Mallama": {
    name: "Mallama (Piedrancha)",
    subregion: "Piedemonte Costero",
    color: "#b8d86a",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/R%C3%ADo_Telemb%C3%AD_-_Barbacoas,_noviembre_de_2024.jpg",
    description: "Mallama, también conocido como Piedrancha, es municipio de transición andina-costera y territorio del pueblo indígena Awá. Situado entre los Andes y el Pacífico, alberga alta biodiversidad y bosques de niebla de gran valor ecológico. Su economía combina la agricultura de subsistencia con la minería artesanal.",
    facts: [
      "También conocido como Piedrancha",
      "Territorio del pueblo indígena Awá",
      "Zona de transición entre los Andes y el Pacífico",
      "Alta biodiversidad y bosques de niebla",
      "Altitud variable: andina a costera",
      "Economía: agricultura de subsistencia y minería"
    ]
  },
  "Ricaurte": {
    name: "Ricaurte",
    subregion: "Piedemonte Costero",
    color: "#b8d86a",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Reserva_Natural_La_Planada.jpg",
    description: "Ricaurte es municipio del piedemonte costero que alberga la Reserva Natural La Planada, uno de los lugares con mayor biodiversidad de aves de Colombia. De gran extensión territorial, sus bosques de niebla y montañas albergan comunidades Awá y una fauna y flora de extraordinaria riqueza.",
    facts: [
      "Reserva Natural La Planada: biodiversidad de aves",
      "Gran extensión de bosque de niebla",
      "Territorio ancestral del pueblo Awá",
      "Uno de los municipios más extensos de Nariño",
      "Alta biodiversidad en bosques de niebla",
      "Economía: agricultura de subsistencia y ecoturismo"
    ]
  }
};

// Normalize municipality name for lookup (handle various SVG label formats)
const normalizeKey = (name) => {
  if (!name) return null;
  const trimmed = name.trim();

  // Direct match
  if (municipiosData[trimmed]) return trimmed;

  // Try case-insensitive match
  const keys = Object.keys(municipiosData);
  for (const key of keys) {
    if (key.toLowerCase() === trimmed.toLowerCase()) return key;
    // Also check against the display name
    if (municipiosData[key].name.toLowerCase() === trimmed.toLowerCase()) return key;
    // Check partial match (e.g. "El Tablón" matches "El Tablón de Gómez")
    if (key.toLowerCase().startsWith(trimmed.toLowerCase()) || trimmed.toLowerCase().startsWith(key.toLowerCase())) return key;
  }

  return null;
};

export const getMunicipioByName = (name) => {
  const key = normalizeKey(name);
  if (key) return municipiosData[key];
  return null;
};

export default municipiosData;