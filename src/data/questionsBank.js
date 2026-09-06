// Bank of 50 questions about Nariño
// Some have 1 correct answer, some have 2 correct answers.
// Format: 
// { 
//   id: 1, 
//   text: "Question?", 
//   options: ["A", "B", "C", "D"], 
//   correct: [0] // array of indices of correct options (0-3)
// }

export const questionsBank = [
  {
    id: 1,
    text: "¿Cuál de las siguientes subregiones se ubica en la costa pacífica y es famosa por su puerto marítimo?",
    options: ["Subregión Centro", "Subregión Pacífico Sur", "Subregión Sabana", "Subregión Juanambú"],
    correct: [1]
  },
  {
    id: 2,
    text: "La Subregión Centro se caracteriza por tener como municipio principal a:",
    options: ["Ipiales", "Tumaco", "Pasto", "Sandoná"],
    correct: [2]
  },
  {
    id: 3,
    text: "Selecciona las DOS subregiones que limitan con el Océano Pacífico:",
    options: ["Sanquianga", "Obando", "Pacífico Sur", "Cordillera"],
    correct: [0, 2]
  },
  {
    id: 4,
    text: "¿Qué subregión andina fronteriza con Ecuador destaca por el Santuario de Las Lajas?",
    options: ["Subregión Obando", "Subregión Sabana", "Subregión Occidente", "Subregión Río Mayo"],
    correct: [0]
  },
  {
    id: 5,
    text: "¿Cuáles son DOS características principales de la Subregión Telembí?",
    options: ["Alta actividad comercial fronteriza", "Densa selva húmeda tropical", "Tradición minera aurífera (oro)", "Producción intensiva de papa"],
    correct: [1, 2]
  },
  {
    id: 6,
    text: "¿En qué subregión se ubican los municipios de Túquerres y Guaitarilla?",
    options: ["Subregión Centro", "Subregión Sabana", "Subregión Abades", "Subregión Guambuyaco"],
    correct: [1]
  },
  {
    id: 7,
    text: "Selecciona los DOS municipios que pertenecen a la Subregión Piedemonte Costero:",
    options: ["Mallama", "Ricaurte", "Barbacoas", "Tumaco"],
    correct: [0, 1]
  },
  {
    id: 8,
    text: "¿Qué subregión es conocida por tener un clima templado y ser famosa por sus artesanías en paja toquilla (sombreros)?",
    options: ["Subregión Occidente", "Subregión Juanambú", "Subregión Río Mayo", "Subregión Telembí"],
    correct: [0]
  },
  {
    id: 9,
    text: "¿Cuáles son DOS municipios de la Subregión Occidente?",
    options: ["Sandoná", "Pasto", "Consacá", "Ipiales"],
    correct: [0, 2]
  },
  {
    id: 10,
    text: "La Subregión Juanambú es famosa principalmente por su producción de:",
    options: ["Oro y plata", "Café pergamino especial", "Papa y hortalizas", "Pesca artesanal"],
    correct: [1]
  },
  {
    id: 11,
    text: "Selecciona DOS subregiones que se caracterizan por una fuerte tradición minera (especialmente oro):",
    options: ["Subregión Sabana", "Subregión Telembí", "Subregión Guambuyaco", "Subregión Centro"],
    correct: [1, 2]
  },
  {
    id: 12,
    text: "¿Qué municipio NO pertenece a la Subregión Centro?",
    options: ["Pasto", "Chachagüí", "Ipiales", "Tangua"],
    correct: [2]
  },
  {
    id: 13,
    text: "Identifica DOS características de la Subregión Río Mayo:",
    options: ["Suelos fértiles para café y frutales", "Presencia de manglares", "Complejo Volcánico Doña Juana-Cascabel", "Frontera con Ecuador"],
    correct: [0, 2]
  },
  {
    id: 14,
    text: "¿En qué subregión se realiza principalmente el Carnaval de Negros y Blancos?",
    options: ["Subregión Obando", "Subregión Centro", "Subregión Pacífico Sur", "Subregión Abades"],
    correct: [1]
  },
  {
    id: 15,
    text: "Selecciona DOS municipios de la Subregión Obando:",
    options: ["Ipiales", "Túquerres", "Cumbal", "Samaniego"],
    correct: [0, 2]
  },
  {
    id: 16,
    text: "La Reserva Natural La Planada se ubica en la subregión de:",
    options: ["Sanquianga", "Piedemonte Costero", "Cordillera", "Río Mayo"],
    correct: [1]
  },
  {
    id: 17,
    text: "¿Cuáles de los siguientes son DOS ecosistemas presentes en Nariño?",
    options: ["Desierto árido", "Páramos andinos", "Manglares del Pacífico", "Selva amazónica profunda"],
    correct: [1, 2]
  },
  {
    id: 18,
    text: "¿Cuál es el municipio conocido como la 'capital cafetera de Nariño' en la subregión Juanambú?",
    options: ["La Unión", "Buesaco", "Arboleda", "San Lorenzo"],
    correct: [0]
  },
  {
    id: 19,
    text: "Selecciona las DOS subregiones por las que atraviesa o tiene influencia el río Patía:",
    options: ["Subregión Cordillera", "Subregión Centro", "Subregión Abades", "Subregión Sanquianga"],
    correct: [0, 2] // Actually Cordillera and Abades/Guambuyaco. Let's use 0 and 2.
  },
  {
    id: 20,
    text: "¿Qué subregión es conocida por Samaniego, llamada 'ciudad paisaje y musical'?",
    options: ["Subregión Abades", "Subregión Occidente", "Subregión Sabana", "Subregión Centro"],
    correct: [0]
  },
  // Continuing to 50...
  {
    id: 21,
    text: "¿Cuántas subregiones administrativas tiene el departamento de Nariño?",
    options: ["10", "13", "15", "64"],
    correct: [1]
  },
  {
    id: 22,
    text: "Selecciona DOS municipios pertenecientes a la Subregión Sanquianga:",
    options: ["El Charco", "Tumaco", "Mosquera", "Barbacoas"],
    correct: [0, 2]
  },
  {
    id: 23,
    text: "La Subregión Sabana es conocida principalmente como:",
    options: ["Centro minero", "Despensa agrícola y lechera", "Puerto pesquero", "Zona selvática"],
    correct: [1]
  },
  {
    id: 24,
    text: "Identifica DOS volcanes importantes ubicados en Nariño:",
    options: ["Volcán Galeras", "Nevado del Ruiz", "Volcán Cumbal", "Pico Cristóbal Colón"],
    correct: [0, 2]
  },
  {
    id: 25,
    text: "¿Qué municipio de la subregión Pacífico Sur es el principal puerto marítimo de Nariño?",
    options: ["Francisco Pizarro", "Tumaco", "Barbacoas", "El Charco"],
    correct: [1]
  },
  {
    id: 26,
    text: "Selecciona DOS características del clima en la Subregión Telembí:",
    options: ["Clima frío de páramo", "Alta pluviosidad (lluvias)", "Humedad de selva tropical", "Clima desértico"],
    correct: [1, 2]
  },
  {
    id: 27,
    text: "¿En qué subregión se encuentra el municipio de Cumbitara?",
    options: ["Subregión Cordillera", "Subregión Abades", "Subregión Guambuyaco", "Subregión Occidente"],
    correct: [0]
  },
  {
    id: 28,
    text: "¿Cuáles DOS municipios hacen parte de la Subregión Guambuyaco?",
    options: ["El Peñol", "La Llanada", "Sandoná", "Yacuanquer"],
    correct: [0, 1]
  },
  {
    id: 29,
    text: "La comunidad indígena Awá habita principalmente en la subregión de:",
    options: ["Sabana", "Obando", "Piedemonte Costero", "Centro"],
    correct: [2]
  },
  {
    id: 30,
    text: "Selecciona DOS de las principales fuentes de economía en la Subregión Occidente:",
    options: ["Pesca industrial", "Artesanías (paja toquilla)", "Producción de café", "Turismo de nieve"],
    correct: [1, 2]
  },
  {
    id: 31,
    text: "El Santuario de Flora y Fauna Galeras se encuentra principalmente en la subregión:",
    options: ["Subregión Obando", "Subregión Centro", "Subregión Sabana", "Subregión Río Mayo"],
    correct: [1]
  },
  {
    id: 32,
    text: "Selecciona DOS municipios fronterizos con Ecuador en Nariño:",
    options: ["Ipiales", "Pasto", "Cumbal", "Buesaco"],
    correct: [0, 2]
  },
  {
    id: 33,
    text: "¿En qué subregión se encuentra el municipio de Chachagüí, donde se ubica el aeropuerto principal?",
    options: ["Subregión Centro", "Subregión Juanambú", "Subregión Occidente", "Subregión Cordillera"],
    correct: [0]
  },
  {
    id: 34,
    text: "Señala DOS características de la Subregión Sanquianga:",
    options: ["Grandes manglares", "Cultivo intenso de papa", "Economía pesquera", "Capital departamental"],
    correct: [0, 2]
  },
  {
    id: 35,
    text: "¿Cuál es la capital del departamento de Nariño?",
    options: ["Ipiales", "Tumaco", "San Juan de Pasto", "Túquerres"],
    correct: [2]
  },
  {
    id: 36,
    text: "Selecciona DOS municipios de la Subregión Río Mayo:",
    options: ["La Cruz", "Belén", "Contadero", "Potosí"],
    correct: [0, 1]
  },
  {
    id: 37,
    text: "¿Qué departamento limita al norte con Nariño?",
    options: ["Putumayo", "Cauca", "Valle del Cauca", "Chocó"],
    correct: [1]
  },
  {
    id: 38,
    text: "Identifica DOS océanos o países que limitan con el departamento de Nariño:",
    options: ["Océano Atlántico", "Ecuador", "Océano Pacífico", "Perú"],
    correct: [1, 2]
  },
  {
    id: 39,
    text: "El municipio de Barbacoas pertenece a la subregión:",
    options: ["Pacífico Sur", "Telembí", "Sanquianga", "Piedemonte Costero"],
    correct: [1]
  },
  {
    id: 40,
    text: "Selecciona DOS municipios de la Subregión Abades:",
    options: ["Samaniego", "Providencia", "Taminango", "Policarpa"],
    correct: [0, 1]
  },
  {
    id: 41,
    text: "¿Qué río forma un importante cañón en la Subregión Juanambú?",
    options: ["Río Mira", "Río Juanambú", "Río Telembí", "Río Patía"],
    correct: [1]
  },
  {
    id: 42,
    text: "Selecciona DOS productos agrícolas fundamentales en la Subregión Sabana:",
    options: ["Papa", "Lácteos (ganadería lechera)", "Cacao", "Algodón"],
    correct: [0, 1]
  },
  {
    id: 43,
    text: "¿En qué subregión se encuentra la ciudad de Ipiales?",
    options: ["Subregión Obando", "Subregión Sabana", "Subregión Centro", "Subregión Occidente"],
    correct: [0]
  },
  {
    id: 44,
    text: "Selecciona DOS municipios que son considerados puertos o zonas costeras:",
    options: ["Tumaco", "Pasto", "Francisco Pizarro", "Ricaurte"],
    correct: [0, 2]
  },
  {
    id: 45,
    text: "La Subregión Guambuyaco es atravesada por el río:",
    options: ["Guáitara", "Amazonas", "Cauca", "Magdalena"],
    correct: [0]
  },
  {
    id: 46,
    text: "Selecciona DOS características culturales de Nariño:",
    options: ["Carnaval de Negros y Blancos", "Feria de las Flores", "Artesanía en Barniz de Pasto", "Festival Vallenato"],
    correct: [0, 2]
  },
  {
    id: 47,
    text: "¿A qué subregión pertenece el municipio de San Pedro de Cartago?",
    options: ["Subregión Juanambú", "Subregión Cordillera", "Subregión Río Mayo", "Subregión Centro"],
    correct: [0]
  },
  {
    id: 48,
    text: "Selecciona DOS municipios de la Subregión Cordillera:",
    options: ["Policarpa", "El Rosario", "Aldana", "Funes"],
    correct: [0, 1]
  },
  {
    id: 49,
    text: "¿Qué maravilla arquitectónica se encuentra en el municipio de Ipiales?",
    options: ["Catedral de Sal", "Santuario de Las Lajas", "Castillo San Felipe", "Santuario de Monserrate"],
    correct: [1]
  },
  {
    id: 50,
    text: "Identifica DOS zonas de alta producción cafetera en Nariño:",
    options: ["Subregión Juanambú", "Subregión Occidente", "Subregión Sanquianga", "Subregión Sabana"],
    correct: [0, 1]
  }
];

export const getRandomQuestions = (count = 10) => {
  const shuffled = [...questionsBank].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};
