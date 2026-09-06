// Data for 64 municipalities of Nariño, organized by subregion
// Each municipality has: name, subregion, description, and key facts

const municipiosData = {
  // ═══════════════════ SUBREGIÓN CENTRO ═══════════════════
  "PASTO": {
    name: "San Juan de Pasto",
    subregion: "Centro",
    color: "#4f9de8",
    description: "Capital del departamento de Nariño, ubicada a 2.527 m.s.n.m. al pie del volcán Galeras.",
    facts: [
      "Capital del departamento y centro político-administrativo",
      "Sede del Carnaval de Negros y Blancos (Patrimonio Inmaterial de la Humanidad - UNESCO)",
      "Principal centro universitario y cultural del suroccidente colombiano",
      "Población aprox. 480.000 habitantes"
    ]
  },
  "Chachaguí": {
    name: "Chachagüí",
    subregion: "Centro",
    color: "#4f9de8",
    description: "Municipio cercano a Pasto, donde se ubica el aeropuerto Antonio Nariño.",
    facts: [
      "Sede del Aeropuerto Antonio Nariño, principal terminal aérea del departamento",
      "Clima templado agradable (18-22°C)",
      "Conocido por su gastronomía y turismo de fin de semana"
    ]
  },
  "La Florida": {
    name: "La Florida",
    subregion: "Centro",
    color: "#4f9de8",
    description: "Municipio del valle de Atríz con vocación agrícola, rodeado de paisajes andinos.",
    facts: [
      "Producción agrícola diversificada: café, caña, frutales",
      "Importante producción de trucha arcoíris",
      "Paisajes de montaña y cascadas naturales"
    ]
  },
  "Nariño": {
    name: "Nariño",
    subregion: "Centro",
    color: "#4f9de8",
    description: "Pequeño municipio homónimo del departamento, enclavado en la cordillera andina.",
    facts: [
      "Lleva el mismo nombre del departamento en honor a Antonio Nariño",
      "Economía basada en la agricultura tradicional",
      "Paisajes montañosos con clima frío"
    ]
  },
  "Tangua": {
    name: "Tangua",
    subregion: "Centro",
    color: "#4f9de8",
    description: "Municipio agrícola ubicado al oriente de Pasto, tierra de cultivos andinos.",
    facts: [
      "Principal productor de papa en la zona",
      "Ubicado cerca de la Laguna de La Cocha",
      "Economía basada en agricultura y ganadería de clima frío"
    ]
  },
  "Yacuanquer": {
    name: "Yacuanquer",
    subregion: "Centro",
    color: "#4f9de8",
    description: "Municipio andino al sur de Pasto, con tradiciones agrícolas ancestrales.",
    facts: [
      "Nombre de origen quechua",
      "Producción de papa, trigo y cebada",
      "Vista privilegiada al volcán Galeras"
    ]
  },

  // ═══════════════════ SUBREGIÓN OBANDO ═══════════════════
  "Ipiales": {
    name: "Ipiales",
    subregion: "Obando",
    color: "#e85a6f",
    description: "Ciudad fronteriza con Ecuador, segunda ciudad más importante de Nariño y sede del Santuario de Las Lajas.",
    facts: [
      "Principal punto fronterizo Colombia-Ecuador (Puente de Rumichaca)",
      "Santuario de Las Lajas, maravilla arquitectónica mundial",
      "Centro comercial fronterizo de gran dinamismo",
      "Población aprox. 150.000 habitantes"
    ]
  },
  "Aldana": {
    name: "Aldana",
    subregion: "Obando",
    color: "#e85a6f",
    description: "Pequeño municipio del altiplano nariñense con fuerte herencia indígena Pasto.",
    facts: [
      "Resguardo indígena de los Pastos",
      "Economía basada en agricultura de clima frío",
      "Tradiciones culturales ancestrales"
    ]
  },
  "Contadero": {
    name: "Contadero",
    subregion: "Obando",
    color: "#e85a6f",
    description: "Municipio del altiplano nariñense, tierra fría con vocación agropecuaria.",
    facts: [
      "Producción de papa, leche y hortalizas",
      "Ubicado en la meseta de Túquerres-Ipiales",
      "Tradición agrícola de minifundio"
    ]
  },
  "Córdoba": {
    name: "Córdoba",
    subregion: "Obando",
    color: "#e85a6f",
    description: "Municipio andino del sur de Nariño, con paisajes de páramo y laguna.",
    facts: [
      "Laguna de La Bolsa, atractivo natural",
      "Economía agropecuaria de clima frío",
      "Comunidades indígenas de los Pastos"
    ]
  },
  "Cuaspud": {
    name: "Cuaspud (Carlosama)",
    subregion: "Obando",
    color: "#e85a6f",
    description: "Municipio fronterizo con Ecuador, territorio del pueblo indígena de los Pastos.",
    facts: [
      "Resguardo indígena Pasto de Carlosama",
      "Frontera con Ecuador",
      "Producción de papa y ganadería de clima frío"
    ]
  },
  "Cumbal": {
    name: "Cumbal",
    subregion: "Obando",
    color: "#e85a6f",
    description: "Municipio dominado por el volcán Cumbal (4.764 m), con páramos y lagunas sagradas.",
    facts: [
      "Volcán Cumbal, segundo volcán más alto de Colombia",
      "Lagunas sagradas de La Bolsa y Cumbal",
      "Territorio ancestral del pueblo indígena Pasto",
      "Producción de papa y lácteos"
    ]
  },
  "Funes": {
    name: "Funes",
    subregion: "Obando",
    color: "#e85a6f",
    description: "Municipio entre Pasto e Ipiales, tierra agrícola de clima frío.",
    facts: [
      "Ubicado estratégicamente en la vía Panamericana",
      "Producción de papa, hortalizas y leche",
      "Clima frío de altiplano andino"
    ]
  },
  "Guachucal": {
    name: "Guachucal",
    subregion: "Obando",
    color: "#e85a6f",
    description: "Municipio del altiplano, importante centro lechero y sede de la industria láctea de Nariño.",
    facts: [
      "Principal zona lechera del departamento",
      "Industria de lácteos y quesos reconocidos",
      "Resguardo indígena de los Pastos"
    ]
  },
  "Gualmatán": {
    name: "Gualmatán",
    subregion: "Obando",
    color: "#e85a6f",
    description: "Uno de los municipios más pequeños de Nariño, con tradición agrícola.",
    facts: [
      "Municipio con menor extensión territorial del departamento",
      "Producción agrícola de papa y hortalizas",
      "Clima frío del altiplano nariñense"
    ]
  },
  "Iles": {
    name: "Iles",
    subregion: "Obando",
    color: "#e85a6f",
    description: "Municipio del altiplano con vocación agropecuaria y paisajes de montaña.",
    facts: [
      "Producción de papa, trigo y cebada",
      "Ganadería lechera de pequeña escala",
      "Tradiciones culturales de la zona andina"
    ]
  },
  "Potosí": {
    name: "Potosí",
    subregion: "Obando",
    color: "#e85a6f",
    description: "Municipio fronterizo con Ecuador en la zona del volcán Chiles.",
    facts: [
      "Volcán Chiles (4.748 m) en su territorio",
      "Frontera con Ecuador por Chiles y Mayasquer",
      "Aguas termales y páramos de alta montaña"
    ]
  },
  "Puerres": {
    name: "Puerres",
    subregion: "Obando",
    color: "#e85a6f",
    description: "Municipio agrícola ubicado entre Pasto e Ipiales, con valle fértil.",
    facts: [
      "Producción de papa y cereales",
      "Valle del río Guáitara",
      "Ubicado en la vía Panamericana"
    ]
  },
  "Pupiales": {
    name: "Pupiales",
    subregion: "Obando",
    color: "#e85a6f",
    description: "Municipio del altiplano, reconocido por su producción agrícola y cultura campesina.",
    facts: [
      "Centro agrícola del altiplano de Obando",
      "Fiestas patronales de gran tradición",
      "Economía basada en papa, leche y hortalizas"
    ]
  },

  // ═══════════════════ SUBREGIÓN SABANA ═══════════════════
  "Túquerres": {
    name: "Túquerres",
    subregion: "Sabana",
    color: "#9b8ec7",
    description: "Centro urbano principal de la subregión Sabana, importante mercado agrícola del suroccidente.",
    facts: [
      "Principal centro de acopio y comercio de la subregión",
      "Gran producción de papa y cebada",
      "Ferias ganaderas de reconocimiento regional",
      "Población aprox. 45.000 habitantes"
    ]
  },
  "Guaitarilla": {
    name: "Guaitarilla",
    subregion: "Sabana",
    color: "#9b8ec7",
    description: "Municipio agrícola del altiplano nariñense, productor de papa y hortalizas.",
    facts: [
      "Importante productor de papa del departamento",
      "Cañón del río Guáitara en sus límites",
      "Tradición artesanal y cultural andina"
    ]
  },
  "Imués": {
    name: "Imués",
    subregion: "Sabana",
    color: "#9b8ec7",
    description: "Municipio de la meseta andina con economía agrícola tradicional.",
    facts: [
      "Producción de papa, trigo y maíz",
      "Clima frío del altiplano",
      "Paisajes de páramo y montaña"
    ]
  },
  "Ospina": {
    name: "Ospina",
    subregion: "Sabana",
    color: "#9b8ec7",
    description: "Pequeño municipio del altiplano nariñense con vocación agropecuaria.",
    facts: [
      "Economía de agricultura y ganadería de clima frío",
      "Comunidades campesinas tradicionales",
      "Paisajes del altiplano de Túquerres"
    ]
  },
  "Sapuyes": {
    name: "Sapuyes",
    subregion: "Sabana",
    color: "#9b8ec7",
    description: "Municipio del altiplano nariñense, tierra fría productora de papa y leche.",
    facts: [
      "Producción lechera y de papa",
      "Ubicado en la meseta de Túquerres",
      "Clima frío con paisajes de páramo"
    ]
  },

  // ═══════════════════ SUBREGIÓN OCCIDENTE ═══════════════════
  "Sandoná": {
    name: "Sandoná",
    subregion: "Occidente",
    color: "#ff7b7b",
    description: "Capital artesanal de Nariño, famosa mundialmente por sus sombreros de iraca (paja toquilla).",
    facts: [
      "Sombreros de paja toquilla reconocidos internacionalmente",
      "Producción de café de alta calidad y panela",
      "Fiestas del Sombrero, evento cultural emblemático",
      "Clima templado ideal (18-24°C)"
    ]
  },
  "Ancuyá": {
    name: "Ancuyá",
    subregion: "Occidente",
    color: "#ff7b7b",
    description: "Municipio de clima templado, productor de café y caña panelera.",
    facts: [
      "Café de origen y caña de azúcar como principales cultivos",
      "Paisajes de laderas y cañones",
      "Tradición campesina y artesanal"
    ]
  },
  "Consacá": {
    name: "Consacá",
    subregion: "Occidente",
    color: "#ff7b7b",
    description: "Municipio histórico al pie del volcán Galeras, escenario de la Batalla de Bomboná.",
    facts: [
      "Sitio histórico de la Batalla de Bomboná (Independencia)",
      "Faldas del volcán Galeras con aguas termales",
      "Producción de café y frutales de clima templado"
    ]
  },
  "Linares": {
    name: "Linares",
    subregion: "Occidente",
    color: "#ff7b7b",
    description: "Municipio de clima templado a cálido, tierra de panela y café.",
    facts: [
      "Producción de panela artesanal",
      "Cultivos de café y frutales",
      "Cañón del río Guáitara en sus límites"
    ]
  },

  // ═══════════════════ SUBREGIÓN ABADES ═══════════════════
  "Samaniego": {
    name: "Samaniego",
    subregion: "Abades",
    color: "#d4a017",
    description: "Conocida como 'Ciudad Paisaje y Musical', importante centro cultural del suroccidente nariñense.",
    facts: [
      "Ciudad Paisaje y Musical de Colombia",
      "Fuerte tradición de bandas musicales y compositores",
      "Producción de café, caña panelera y frutales",
      "Relieve montañoso con vistas panorámicas"
    ]
  },
  "Providencia": {
    name: "Providencia",
    subregion: "Abades",
    color: "#d4a017",
    description: "Municipio de montaña en la subregión Abades, con economía agrícola y minera.",
    facts: [
      "Minería artesanal de oro",
      "Producción de café y caña panelera",
      "Terrenos quebrados de la cordillera occidental"
    ]
  },
  "Santacruz": {
    name: "Santacruz (Guachavés)",
    subregion: "Abades",
    color: "#d4a017",
    description: "Municipio conocido también como Guachavés, territorio indígena Awá.",
    facts: [
      "Territorio del pueblo indígena Awá",
      "Resguardos indígenas de gran extensión",
      "Economía de subsistencia y minería artesanal"
    ]
  },

  // ═══════════════════ SUBREGIÓN GUAMBUYACO ═══════════════════
  "El Peñol": {
    name: "El Peñol",
    subregion: "Guambuyaco",
    color: "#e8d850",
    description: "Municipio de montaña con economía basada en agricultura y minería artesanal.",
    facts: [
      "Producción de café y caña panelera",
      "Minería artesanal de oro en pequeña escala",
      "Paisajes montañosos de la cordillera"
    ]
  },
  "El Tambo": {
    name: "El Tambo",
    subregion: "Guambuyaco",
    color: "#e8d850",
    description: "Municipio de clima templado con producción agrícola diversificada.",
    facts: [
      "Producción de café, caña panelera y frutales",
      "Punto de tránsito hacia la costa pacífica",
      "Clima templado a cálido"
    ]
  },
  "La Llanada": {
    name: "La Llanada",
    subregion: "Guambuyaco",
    color: "#e8d850",
    description: "Principal centro minero aurífero del departamento de Nariño.",
    facts: [
      "Capital minera de Nariño: extracción de oro",
      "Tradición de minería que data de la época colonial",
      "Importante fuente de empleo para la región"
    ]
  },
  "Los Andes": {
    name: "Los Andes (Sotomayor)",
    subregion: "Guambuyaco",
    color: "#e8d850",
    description: "Municipio también conocido como Sotomayor, con economía mixta agrícola-minera.",
    facts: [
      "Producción de café y minería de oro",
      "Conocido históricamente como Sotomayor",
      "Terrenos montañosos del cañón del Guáitara"
    ]
  },

  // ═══════════════════ SUBREGIÓN JUANAMBÚ ═══════════════════
  "La Unión": {
    name: "La Unión",
    subregion: "Juanambú",
    color: "#8abf45",
    description: "Capital cafetera de Nariño, reconocida a nivel nacional por su café de alta calidad.",
    facts: [
      "Capital cafetera de Nariño y principal mercado cafetero",
      "Café de origen con Denominación de Origen",
      "Centro comercial de la subregión Juanambú",
      "Clima templado ideal para el café especial"
    ]
  },
  "Arboleda": {
    name: "Arboleda (Berruecos)",
    subregion: "Juanambú",
    color: "#8abf45",
    description: "Municipio histórico donde fue asesinado el Mariscal Antonio José de Sucre.",
    facts: [
      "Sitio histórico: asesinato del Mariscal Sucre (1830)",
      "Monumento y museo en honor a Sucre",
      "Producción de café y frutales"
    ]
  },
  "Buesaco": {
    name: "Buesaco",
    subregion: "Juanambú",
    color: "#8abf45",
    description: "Municipio cafetero del cañón del Juanambú, con producción de café especial.",
    facts: [
      "Café especial de alta calidad y reconocimiento",
      "Cañón del río Juanambú en su territorio",
      "Clima variado desde frío hasta templado"
    ]
  },
  "San Lorenzo": {
    name: "San Lorenzo",
    subregion: "Juanambú",
    color: "#8abf45",
    description: "Municipio cafetero ubicado en el cañón del Juanambú.",
    facts: [
      "Producción de café pergamino",
      "Agricultura de ladera con frutales",
      "Paisajes del cañón del Juanambú"
    ]
  },
  "Cartago": {
    name: "San Pedro de Cartago",
    subregion: "Juanambú",
    color: "#8abf45",
    description: "Municipio del norte de Nariño con economía cafetera y agropecuaria.",
    facts: [
      "Producción de café y ganadería",
      "Ubicado en la vertiente del Juanambú",
      "Clima templado favorable para la agricultura"
    ]
  },

  // ═══════════════════ SUBREGIÓN RÍO MAYO ═══════════════════
  "La Cruz": {
    name: "La Cruz",
    subregion: "Río Mayo",
    color: "#f0b060",
    description: "Principal centro urbano de la subregión Río Mayo, punto de convergencia comercial del nororiente nariñense.",
    facts: [
      "Centro comercial y de servicios del Río Mayo",
      "Producción de café, frutales y ganadería",
      "Nudo de comunicaciones hacia el norte de Nariño",
      "Población aprox. 20.000 habitantes"
    ]
  },
  "Albán": {
    name: "Albán (San José)",
    subregion: "Río Mayo",
    color: "#f0b060",
    description: "Municipio del nororiente nariñense con vocación agropecuaria.",
    facts: [
      "Producción de café y frutales de clima templado",
      "También conocido como San José de Albán",
      "Paisajes de montaña y valles"
    ]
  },
  "Belén": {
    name: "Belén",
    subregion: "Río Mayo",
    color: "#f0b060",
    description: "Municipio de la cuenca del río Mayo, con economía agrícola y ganadera.",
    facts: [
      "Cuenca del río Mayo",
      "Producción de caña panelera y café",
      "Clima templado a cálido"
    ]
  },
  "Colón": {
    name: "Colón (Génova)",
    subregion: "Río Mayo",
    color: "#f0b060",
    description: "Municipio del Río Mayo, también conocido como Génova, con tradición agrícola.",
    facts: [
      "También conocido como Génova",
      "Producción de café y frutales",
      "Ubicado en la cuenca del río Mayo"
    ]
  },
  "El Tablón": {
    name: "El Tablón de Gómez",
    subregion: "Río Mayo",
    color: "#f0b060",
    description: "Municipio con importante zona arqueológica y vestigios precolombinos.",
    facts: [
      "Zona arqueológica con petroglifos y vestigios indígenas",
      "Parque Nacional Natural Doña Juana - Cascabel",
      "Producción de café de alta montaña"
    ]
  },
  "San Bernardo": {
    name: "San Bernardo",
    subregion: "Río Mayo",
    color: "#f0b060",
    description: "Municipio del nororiente de Nariño, en las estribaciones del macizo colombiano.",
    facts: [
      "Ubicado en las estribaciones del Macizo Colombiano",
      "Fuentes hídricas importantes",
      "Producción de café y frutales"
    ]
  },
  "San Pablo": {
    name: "San Pablo",
    subregion: "Río Mayo",
    color: "#f0b060",
    description: "Municipio del norte de Nariño, zona de transición entre el departamento y el Cauca.",
    facts: [
      "Límite norte del departamento de Nariño",
      "Zona de transición hacia el Cauca",
      "Producción de café y ganadería"
    ]
  },

  // ═══════════════════ SUBREGIÓN CORDILLERA ═══════════════════
  "Policarpa": {
    name: "Policarpa",
    subregion: "Cordillera",
    color: "#e89548",
    description: "Municipio del cañón del río Patía, con clima cálido y producción de cacao y frutales.",
    facts: [
      "Nombrado en honor a Policarpa Salavarrieta",
      "Cañón del río Patía con clima cálido",
      "Producción de cacao, maní y frutales tropicales"
    ]
  },
  "Cumbitara": {
    name: "Cumbitara",
    subregion: "Cordillera",
    color: "#e89548",
    description: "Municipio de clima cálido en el cañón del Patía, con vocación agrícola.",
    facts: [
      "Valle del río Patía con climas cálidos",
      "Producción de maní, cacao y frutales",
      "Minería artesanal de oro"
    ]
  },
  "El Rosario": {
    name: "El Rosario",
    subregion: "Cordillera",
    color: "#e89548",
    description: "Municipio de la zona seca del Patía, con producción de cacao y frutales.",
    facts: [
      "Zona semiárida del cañón del Patía",
      "Producción de cacao y frutales tropicales",
      "Clima cálido seco"
    ]
  },
  "Leiva": {
    name: "Leiva",
    subregion: "Cordillera",
    color: "#e89548",
    description: "Municipio del cañón del Patía con economía basada en agricultura de clima cálido.",
    facts: [
      "Cultivos de clima cálido: maní, cacao, frutales",
      "Cañón del río Patía",
      "Comunidades campesinas de tradición agrícola"
    ]
  },
  "Taminango": {
    name: "Taminango",
    subregion: "Cordillera",
    color: "#e89548",
    description: "Municipio noroccidental de Nariño, tierra de maní y frutales del Patía.",
    facts: [
      "Principal productor de maní del departamento",
      "Cañón del Patía con paisajes semiáridos",
      "Producción de frutales tropicales"
    ]
  },

  // ═══════════════════ SUBREGIÓN SANQUIANGA ═══════════════════
  "El Charco": {
    name: "El Charco",
    subregion: "Sanquianga",
    color: "#68c05e",
    description: "Municipio costero de la región Sanquianga, con economía pesquera y forestal.",
    facts: [
      "Ubicado en la costa pacífica nariñense",
      "Pesca artesanal y recolección de piangua",
      "Comunidades afrodescendientes con rica cultura",
      "Manglares y biodiversidad costera"
    ]
  },
  "La Tola": {
    name: "La Tola",
    subregion: "Sanquianga",
    color: "#68c05e",
    description: "Municipio costero del Pacífico, puerta de entrada al Parque Nacional Natural Sanquianga.",
    facts: [
      "Acceso al Parque Nacional Natural Sanquianga",
      "Extensos manglares y bosques de costa",
      "Economía pesquera y maderera"
    ]
  },
  "Mosquera": {
    name: "Mosquera",
    subregion: "Sanquianga",
    color: "#68c05e",
    description: "Municipio costero del Pacífico con abundantes recursos hídricos y manglares.",
    facts: [
      "Ríos y esteros de la llanura pacífica",
      "Recolección de piangua y pesca artesanal",
      "Selva húmeda tropical del Pacífico"
    ]
  },
  "Olaya Herrera": {
    name: "Olaya Herrera",
    subregion: "Sanquianga",
    color: "#68c05e",
    description: "Municipio de la costa pacífica también conocido como Bocas de Satinga.",
    facts: [
      "También llamado Bocas de Satinga",
      "Desembocadura del río Satinga",
      "Pesca, recolección de concha y agricultura"
    ]
  },
  "Santa Bárbara": {
    name: "Santa Bárbara (Iscuandé)",
    subregion: "Sanquianga",
    color: "#68c05e",
    description: "Municipio costero con tradición pesquera y herencia cultural afrocolombiana.",
    facts: [
      "Herencia cultural afrocolombiana",
      "Pesca artesanal como principal actividad económica",
      "Manglares y ecosistemas costeros"
    ]
  },

  // ═══════════════════ SUBREGIÓN PACÍFICO SUR ═══════════════════
  "Tumaco": {
    name: "San Andrés de Tumaco",
    subregion: "Pacífico Sur",
    color: "#e8c850",
    description: "Principal puerto marítimo de Nariño y segundo del Pacífico colombiano. 'La Perla del Pacífico'.",
    facts: [
      "Puerto marítimo más importante del suroccidente colombiano",
      "Conocido como 'La Perla del Pacífico'",
      "Playas turísticas: El Morro, Bocagrande",
      "Segunda ciudad del departamento (aprox. 230.000 hab.)",
      "Centro de la industria pesquera y palmicultora"
    ]
  },
  "Francisco Pizarro": {
    name: "Francisco Pizarro (Salahonda)",
    subregion: "Pacífico Sur",
    color: "#e8c850",
    description: "Municipio costero del Pacífico, también conocido como Salahonda.",
    facts: [
      "Conocido localmente como Salahonda",
      "Pesca artesanal y recolección de moluscos",
      "Comunidades afrodescendientes del Pacífico"
    ]
  },

  // ═══════════════════ SUBREGIÓN TELEMBÍ ═══════════════════
  "Barbacoas": {
    name: "Barbacoas",
    subregion: "Telembí",
    color: "#c08de0",
    description: "Histórica ciudad minera del Pacífico nariñense, a orillas del río Telembí.",
    facts: [
      "Histórico centro de minería aurífera desde la Colonia",
      "A orillas del río Telembí",
      "Comunidades afrodescendientes e indígenas Awá",
      "Selva húmeda tropical de alta pluviosidad"
    ]
  },
  "Maguí Payán": {
    name: "Magüí Payán",
    subregion: "Telembí",
    color: "#c08de0",
    description: "Municipio selvático de la cuenca del Telembí, con minería artesanal y agricultura.",
    facts: [
      "Selva húmeda del Pacífico nariñense",
      "Minería artesanal de oro",
      "Comunidades afrodescendientes"
    ]
  },
  "Roberto Payán": {
    name: "Roberto Payán",
    subregion: "Telembí",
    color: "#c08de0",
    description: "Municipio selvático también conocido como San José, en la cuenca del Telembí.",
    facts: [
      "Conocido también como San José",
      "Alta biodiversidad de selva húmeda tropical",
      "Minería y agricultura de subsistencia"
    ]
  },

  // ═══════════════════ SUBREGIÓN PIEDEMONTE COSTERO ═══════════════════
  "Mallama": {
    name: "Mallama (Piedrancha)",
    subregion: "Piedemonte Costero",
    color: "#b8d86a",
    description: "Municipio de transición andina-costera, territorio del pueblo indígena Awá.",
    facts: [
      "También conocido como Piedrancha",
      "Territorio del pueblo indígena Awá",
      "Zona de transición entre los Andes y el Pacífico",
      "Alta biodiversidad y bosques de niebla"
    ]
  },
  "Ricaurte": {
    name: "Ricaurte",
    subregion: "Piedemonte Costero",
    color: "#b8d86a",
    description: "Municipio del piedemonte costero, sede de la Reserva Natural La Planada.",
    facts: [
      "Reserva Natural La Planada (biodiversidad de aves)",
      "Gran extensión de bosque de niebla",
      "Territorio ancestral del pueblo Awá",
      "Uno de los municipios más extensos de Nariño"
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
