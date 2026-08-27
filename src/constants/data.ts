export interface ServiceItem {
  id: string;
  category: 'Siembra' | 'Labranza';
  title: string;
  shortDesc: string;
  longDesc: string;
  features: string[];
  image: string;
}

export interface StatItem {
  id: string;
  value: number;
  suffix: string;
  label: string;
}

export interface ValueItem {
  id: string;
  title: string;
  desc: string;
}

export interface GalleryItem {
  id: string;
  category: 'siembra' | 'labranza';
  title: string;
  image: string;
}

export const COMPANY_INFO = {
  name: 'AEP Servicios Agropecuarios',
  phone: '5493534299807',
  phoneDisplay: '+54 9 3534 29-9807',
  email: 'aepaschetta@gmail.com',
  address: 'Silvio Pellico, Córdoba, Argentina',
  mapsUrl: 'https://www.google.com/maps/search/Silvio+Pellico+Cordoba+Argentina',
  mapsEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13547.462744319696!2d-62.923485749999995!3d-32.0620697!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95cc54564c781669%3A0xe54d909de6e6378e!2sSilvio%20Pellico%2C%20C%C3%B3rdoba!5e0!3m2!1ses!2sar!4v1700000000000!5m2!1ses!2sar',
  whatsappMessage: 'Hola, me gustaría solicitar información sobre los servicios agropecuarios.',
};

export const STATS: StatItem[] = [
  {
    id: 'experience',
    value: 15,
    suffix: '+',
    label: 'Años de experiencia',
  },
  {
    id: 'hectares',
    value: 50000,
    suffix: '+',
    label: 'Hectáreas trabajadas',
  },
  {
    id: 'clients',
    value: 300,
    suffix: '+',
    label: 'Clientes satisfechos',
  },
  {
    id: 'projects',
    value: 100,
    suffix: '+',
    label: 'Proyectos realizados',
  },
];

export const VALUES: ValueItem[] = [
  {
    id: 'technology',
    title: 'Tecnología de Punta',
    desc: 'Utilizamos maquinaria equipada con agricultura de precisión para optimizar cada hectárea.',
  },
  {
    id: 'efficiency',
    title: 'Eficiencia Operativa',
    desc: 'Maximizamos el rendimiento de tu lote mediante la aplicación dosificada y siembra controlada.',
  },
  {
    id: 'commitment',
    title: 'Compromiso y Calidad',
    desc: 'Acompañamos al productor en cada etapa de la campaña para garantizar los mejores resultados.',
  },
  {
    id: 'experience-val',
    title: 'Experiencia y Trayectoria',
    desc: 'Un equipo calificado con amplia experiencia en la realización de labores agrícolas de precisión.',
  },
];

export const SERVICES: ServiceItem[] = [
  {
    id: 'crucianelli-gringa',
    category: 'Siembra',
    title: 'Sembradora Neumática Crucianelli Gringa 24/52',
    shortDesc: 'Sembradora de alta precisión para grano grueso con tecnología de dosis variable.',
    longDesc: 'Sembradora neumática de alta precisión, equipada con doble fertilización y dosificador de precisión Planting. Cuenta con corte por surco y tecnología de dosis variable en siembra y fertilización, permitiendo optimizar el uso de insumos y mejorar la eficiencia de implantación.',
    features: [
      '24 surcos a 52 cm',
      'Doble fertilización',
      'Dosificador de precisión Planting',
      'Corte por surco',
      'Dosis variable en siembra y fertilización',
    ],
    image: '/crucianelli-gringa.png',
  },
  {
    id: 'pierobon-turboplanter',
    category: 'Siembra',
    title: 'Sembradora Neumática Pierobon Turboplanter 30/42',
    shortDesc: 'Equipo neumático con corte por sección y dosificador MaterMacc.',
    longDesc: 'Sembradora neumática equipada con sistema de fertilización simple y dosificador MaterMacc. Incorpora corte por sección y tecnología de dosis variable en siembra y fertilización, permitiendo optimizar el uso de insumos y mejorar la eficiencia de implantación.',
    features: [
      '30 surcos a 42 cm',
      'Fertilización simple',
      'Dosificador MaterMacc',
      'Corte por sección',
      'Dosis variable en siembra y fertilización',
    ],
    image: '/turboplanter-1.png',
  },
  {
    id: 'pierobon-turbosem',
    category: 'Siembra',
    title: 'Sembradora de Grano Fino Pierobon Turbosem MD 54/21 AirDrill',
    shortDesc: 'Siembra de grano fino y pasturas con sistema de distribución de aire.',
    longDesc: 'Sembradora de grano fino Pierobon Turbosem MD 54/21 AirDrill, diseñada para la implantación de pasturas, verdeos y soja. Equipada con cuerpo monodisco DINSI, es apta para siembra directa y convencional, con sistema de fertilización.',
    features: [
      '54 líneas a 21 cm',
      'Sistema AirDrill',
      'Cuerpo monodisco DINSI',
      'Apta para siembra de pasturas y soja',
      'Siembra directa y convencional',
      'Con fertilización',
    ],
    image: '/turbosem.jpg',
  },
  {
    id: 'ombu-rop',
    category: 'Labranza',
    title: 'Rastra de Discos OMBÚ ROP 5900',
    shortDesc: 'Rastra articulada pesada para preparación y nivelación de suelos.',
    longDesc: 'Rastra de discos articulada OMBÚ ROP 5900, diseñada para realizar labores de preparación y acondicionamiento del suelo de manera eficiente. Equipada con 60 platos dentados, ofrece un adecuado trabajo de corte y disgregación del suelo.',
    features: [
      'Rastra de discos articulada',
      '60 platos dentados',
      'Peso por disco: 104 kg',
    ],
    image: '/ombu-rop-user.jpg',
  },
  {
    id: 'culminador-fabrinor',
    category: 'Labranza',
    title: 'Culminador Fabrinor',
    shortDesc: 'Implemento para la finalización de camas de siembra y nivelación.',
    longDesc: 'Implemento de labranza destinado a la preparación y terminación del suelo, combinando diferentes elementos de trabajo para lograr una superficie uniforme y correctamente acondicionada para la siembra.',
    features: [
      'Rolo desterronador: permite aplastar y disgregar los terrones, favoreciendo la nivelación y el afinado del suelo.',
      'Rabasto: Planchuela niveladora, ubicada en la parte delantera, con regulación de altura y sistema de copiado mediante resortes.',
      'Peine: conjunto de hileras de dientes',
    ],
    image: '/culminador-fabrinor.jpg',
  },
  {
    id: 'paratil-11-51',
    category: 'Labranza',
    title: 'Paratil 11/51',
    shortDesc: 'Subsolador para descompactación profunda sin inversión de perfil.',
    longDesc: 'Implemento agrícola de labranza vertical, equipado con 11 púas a 51 cm, diseñado para trabajar en profundidad, descompactando y resquebrajando capas endurecidas del suelo. Permite mejorar las condiciones físicas del perfil sin invertir los horizontes ni remover significativamente el rastrojo presente en superficie.',
    features: [
      '11 púas',
      'Distancia entre púas: 51 cm',
      'Labranza vertical',
      'Trabajo en profundidad',
      'Descompactación del suelo',
      'Conservación del rastrojo superficial',
    ],
    image: '/paratil-11-51.jpg',
  },
  {
    id: 'carpidor-agroindustrial',
    category: 'Labranza',
    title: 'Carpidor Agroindustrial 13/70',
    shortDesc: 'Cultivador entre hileras para control mecánico de malezas.',
    longDesc: 'Implemento agrícola diseñado para realizar el control mecánico de malezas y labores de escarda entre hileras. Permite mantener el cultivo libre de malezas y realizar una labor superficial del suelo, favoreciendo el manejo eficiente del lote sin afectar la cobertura vegetal.',
    features: [
      '13 cuerpos',
      'Distancia entre líneas: 70 cm',
      'Control mecánico de malezas',
      'Trabajo entre hileras',
      'Labranza superficial',
      'Apto para sistemas de producción con conservación de cobertura',
    ],
    image: '/carpidor-agroindustrial.jpg',
  },
  {
    id: 'rolo-triturador',
    category: 'Labranza',
    title: 'Rolo Triturador',
    shortDesc: 'Acondicionamiento y trituración de rastrojos de alta capacidad.',
    longDesc: 'Implemento agrícola diseñado para el manejo y trituración de rastrojos, permitiendo reducir el tamaño de los residuos vegetales y favorecer su rápida descomposición. Su ancho de trabajo de 8 metros permite una cobertura eficiente de grandes superficies, optimizando los tiempos de labor.',
    features: [
      'Ancho de trabajo: 8 m',
      'Trituración y manejo de rastrojos',
      'Favorece la descomposición de residuos vegetales',
      'Alta capacidad de trabajo',
      'Ideal para el manejo de cobertura vegetal',
    ],
    image: '/rolo-triturador.jpg',
  },
];

export const GALLERY: GalleryItem[] = [
  {
    id: 'gal-1',
    category: 'siembra',
    title: 'Siembra neumática y fertilización variable y Corte por sección',
    image: '/fgs-monitor.png',
  },
  {
    id: 'gal-2',
    category: 'siembra',
    title: 'Siembra de precisión con John Deere',
    image: '/siembra-tractor-jd.png',
  },
  {
    id: 'gal-3',
    category: 'labranza',
    title: 'Labor de acondicionamiento de suelo en lote',
    image: '/labranza-cabina.png',
  },
  {
    id: 'gal-4',
    category: 'siembra',
    title: 'Implantación directa de precisión - Pierobon Turboplanter',
    image: '/turboplanter-2.png',
  },
  {
    id: 'gal-5',
    category: 'siembra',
    title: 'Siembra de grano grueso - Crucianelli Gringa',
    image: '/gringa-working.jpg',
  },
  {
    id: 'gal-6',
    category: 'labranza',
    title: 'Descompactación profunda con Paratil',
    image: '/paratil-working.jpg',
  },
];



