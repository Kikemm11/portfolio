import piggy from '../assets/piggy/image_1.webp';
import piggyDetail from '../assets/piggy/image_2.webp';
import piggyPlayStore from '../assets/piggy/image_3.webp';
import pagoDirecto from '../assets/pago-directo/image_1.webp';
import pagoDirectoDetail from '../assets/pago-directo/image_2.webp';
import clippyHome from '../assets/clippy/image_1.webp';
import clippyBanner from '../assets/clippy/image_2.webp';
import clippyPlayStore from '../assets/clippy/image_3.webp';
import enlanadosMobileOrders from '../assets/enlanados-mobile/image_1.webp';
import enlanadosMobileStatistics from '../assets/enlanados-mobile/image_2.webp';
import enlanadosOrders from '../assets/enlanados-web/image_1.webp';
import enlanadosStatistics from '../assets/enlanados-web/image_2.webp';
import sentinelIndex from '../assets/sentinel-hawk/image_1.webp';
import sentinelCar from '../assets/sentinel-hawk/image_2.webp';
import gnuhealthClient from '../assets/gnuhealth/image_1.webp';
import gnuhealthParty from '../assets/gnuhealth/image_2.webp';
import limeApp from '../assets/lime-survey/image_1.webp';
import limeStatistics from '../assets/lime-survey/image_2.webp';

/**
 * All project content lives here so the sections stay presentational.
 * Text fields are bilingual and resolved by the language context.
 * `featured: true` renders the item as a full detail card.
 */
export const projects = [
  {
    id: 'piggy',
    title: 'PIGGY',
    category: { en: 'Mobile', es: 'Móvil' },
    featured: true,
    tags: ['Flutter', 'Dart', 'BLoC', 'SQLite'],
    summary: {
      en: 'Smart personal finance planner for tracking income and expenses, with live USD exchange rates tailored to Venezuelan users.',
      es: 'Planificador financiero personal inteligente para registrar ingresos y gastos, con tasas de cambio del dólar en vivo pensado para usuarios venezolanos.',
    },
    details: {
      en: 'Built with Flutter using BLoC for state management and SQLite for offline persistence. Financial movements are organized into concepts and categories so users can turn raw transactions into clear, actionable insights. Published on Google Play.',
      es: 'Construido con Flutter usando BLoC para la gestión de estado y SQLite para persistencia offline. Los movimientos financieros se organizan en conceptos y categorías para convertir las transacciones en información clara y accionable. Publicado en Google Play.',
    },
    highlights: {
      en: [
        'Dual-currency tracking with live USD rates',
        'Concept and category-based financial insights',
        'Available on Google Play',
      ],
      es: [
        'Seguimiento de dos monedas con tasas del dólar en vivo',
        'Informes financieros por conceptos y categorías',
        'Disponible en Google Play',
      ],
    },
    images: [
      { src: piggy, alt: 'PIGGY app home screen' },
      { src: piggyDetail, alt: 'PIGGY app expense detail screen' },
      { src: piggyPlayStore, alt: 'PIGGY app from PlayStore' },

    ],
  },
  {
    id: 'pago-directo',
    title: 'PagoDirecto',
    category: { en: 'Mobile', es: 'Móvil' },
    featured: true,
    tags: ['Flutter', 'BLoC', 'Provider', 'MongoDB'],
    summary: {
      en: 'Venezuelan payments app where I build and maintained scalable modules as part of a distributed product team.',
      es: 'Aplicación venezolana de pagos en la que desarrollé y mantuve módulos escalables como parte de un equipo de producto distribuido.',
    },
    details: {
      en: 'Implemented UX/UI designs and integrated MongoDB-backed data served by the backend, using BLoC and Provider for state management. Ongoing work on a large production codebase with a focus on performance and consistency across evolving features. Published on Google Play.',
      es: 'Implementé diseños UX/UI e integré datos de MongoDB proporcionados por el backend, usando BLoC y Provider para la gestión de estado. Trabajo continuo sobre una base de código grande en producción, con foco en el rendimiento y la consistencia. Publicada en Google Play.',
    },
    highlights: {
      en: [
        'Scalable feature modules for a production app',
        'MongoDB-backed backend data integration',
        'BLoC and Provider state management',
      ],
      es: [
        'Módulos escalables para una aplicación en producción',
        'Integración de datos del backend desde MongoDB',
        'Gestión de estado con BLoC y Provider',
      ],
    },
    images: [
      { src: pagoDirecto, alt: 'PagoDirecto app home screen' },
      { src: pagoDirectoDetail, alt: 'PagoDirecto app payment detail screen' },
    ],
  },
  {
    id: 'clippy',
    title: 'Clippy',
    category: { en: 'Cross-platform', es: 'Multiplataforma' },
    featured: true,
    tags: ['React Native', 'TCP/UDP', 'Firebase'],
    summary: {
      en: 'Cross-device clipboard and file sharing that moves text, images and documents directly over the local network.',
      es: 'Aplicación multiplataforma para compartir portapapeles y archivos entre dispositivos directamente en la red local.',
    },
    details: {
      en: 'Built with React Native using TCP and UDP peer-to-peer transfers, so data travels straight between devices without passing through external servers. Firebase handles accounts and sign-in, while in-app purchases unlock larger transfers and extra perks.',
      es: 'Construida con React Native usando transferencias TCP y UDP entre pares, de modo que los datos viajan directamente entre dispositivos sin pasar por servidores externos. Firebase gestiona cuentas e inicio de sesión, y las compras integradas permiten transferencias más grandes.',
    },
    highlights: {
      en: [
        'Local device-to-device TCP/UDP transfer',
        'Firebase authentication and accounts',
        'In-app purchases for larger transfers',
      ],
      es: [
        'Transferencia local dispositivo a dispositivo por TCP/UDP',
        'Autenticación y cuentas con Firebase',
        'Compras integradas para transferencias mayores',
      ],
    },
    images: [
      { src: clippyHome, alt: 'Clippy app home screen' },
      { src: clippyBanner, alt: 'Clippy cross-device sharing overview' },
      { src: clippyPlayStore, alt: 'Clippy PlayStore' },
    ],
  },
  {
    id: 'enlanados-mobile',
    title: 'EnlanadosApp Mobile',
    category: { en: 'Mobile', es: 'Móvil' },
    featured: false,
    tags: ['Flutter', 'Dart', 'SQLite'],
    summary: {
      en: 'Android app for managing orders, products, stock and business statistics.',
      es: 'Aplicación Android para gestionar pedidos, productos, inventario y estadísticas del negocio.',
    },
    details: {
      en: 'A Flutter and Dart mobile app, backed by SQLite. Added multi-product orders, flexible inventory structures, personalized notifications and dynamic updates for a more interactive experience.',
      es: 'Una aplicación móvil desarrollada con Flutter y Dart, respaldada por SQLite. Añadí pedidos con múltiples productos, estructuras de inventario flexibles, notificaciones personalizadas y actualizaciones dinámicas para una experiencia más interactiva.',
    },
    highlights: {
      en: [
        'Multi-product orders and stock tracking',
        'Flexible inventory structures',
        'Personalized notifications and dynamic updates',
      ],
      es: [
        'Pedidos con múltiples productos y control de stock',
        'Estructuras de inventario flexibles',
        'Notificaciones personalizadas y actualizaciones dinámicas',
      ],
    },
    images: [
      { src: enlanadosMobileOrders, alt: 'Enlanados mobile orders screen' },
      { src: enlanadosMobileStatistics, alt: 'Enlanados mobile statistics screen' },
    ],
  },
  {
    id: 'enlanados-web',
    title: 'EnlanadosApp Web',
    category: { en: 'Backend', es: 'Backend' },
    featured: false,
    tags: ['Flask', 'Python', 'Data analysis'],
    summary: {
      en: 'Flask dashboard for the orders, inventory and operations of a crochet e-commerce business.',
      es: 'Panel Flask para gestionar pedidos, inventario y operaciones de un negocio de e-commerce de crochet.',
    },
    details: {
      en: 'Digitized order tracking and wool inventory, automated previously manual processes and added data analysis for trends, customer behaviour and inventory needs. Built around the specific workflows of the business owners.',
      es: 'Digitalicé el seguimiento de pedidos y del inventario de lana, automaticé procesos manuales y añadí análisis de datos de tendencias, comportamiento de clientes y necesidades de inventario. Construido según los flujos de trabajo específicos de los dueños del negocio.',
    },
    highlights: {
      en: [
        'Order and wool inventory tracking',
        'Automated previously manual processes',
        'Data analysis for trends and inventory needs',
      ],
      es: [
        'Seguimiento de pedidos e inventario de lana',
        'Automatización de procesos manuales',
        'Análisis de tendencias y necesidades de inventario',
      ],
    },
    images: [
      { src: enlanadosOrders, alt: 'Enlanados web orders dashboard' },
      { src: enlanadosStatistics, alt: 'Enlanados web statistics dashboard' },
    ],
  },
  {
    id: 'sentinel-hawk',
    title: 'Sentinel Hawk',
    category: { en: 'Backend', es: 'Backend' },
    featured: false,
    tags: ['Flask', 'Python', 'Computer Vision'],
    summary: {
      en: 'Flask system that automates parking-lot tickets with AI vehicle recognition.',
      es: 'Sistema Flask que automatiza los tickets de un estacionamiento con reconocimiento de vehículos mediante IA.',
    },
    details: {
      en: 'Recognizes vehicles and generates tickets with type, charge and status. Employee and admin roles cover payments, cancellations, system settings and on-demand revenue reporting.',
      es: 'Reconoce vehículos y genera tickets con tipo, tarifa y estado. Los roles de empleado y administrador cubren pagos, cancelaciones, configuración del sistema e informes de ingresos bajo demanda.',
    },
    highlights: {
      en: [
        'AI vehicle recognition and automatic tickets',
        'Employee and admin roles',
        'On-demand revenue and operations reporting',
      ],
      es: [
        'Reconocimiento de vehículos con IA y tickets automáticos',
        'Roles de empleado y administrador',
        'Informes de ingresos y operaciones bajo demanda',
      ],
    },
    images: [
      { src: sentinelIndex, alt: 'Sentinel Hawk parking dashboard' },
      { src: sentinelCar, alt: 'Sentinel Hawk vehicle recognition view' },
    ],
  },
  {
    id: 'gnuhealth',
    title: 'GNU Health Implementation',
    category: { en: 'ERP', es: 'ERP' },
    featured: false,
    tags: ['Tryton', 'ERP', 'Backend', 'Databases'],
    summary: {
      en: 'GNU Health modules deployed on Tryton ERP for hospitals and care centers.',
      es: 'Módulos de GNU Health implementados sobre Tryton ERP para hospitales y centros de salud.',
    },
    details: {
      en: 'Contributed to implementations for several healthcare providers, working across backend development, database structure and performance, and workflow modeling to automate administrative and healthcare processes.',
      es: 'Participé en implementaciones para varios proveedores de salud, trabajando en desarrollo backend, estructura y rendimiento de bases de datos y modelado de flujos para automatizar procesos administrativos y asistenciales.',
    },
    highlights: {
      en: [
        'Tryton ERP module implementations',
        'Database structure and performance work',
        'Workflow modeling for healthcare providers',
      ],
      es: [
        'Implementación de módulos en Tryton ERP',
        'Estructura y rendimiento de bases de datos',
        'Modelado de flujos para proveedores de salud',
      ],
    },
    images: [
      { src: gnuhealthClient, alt: 'GNU Health client record view' },
      { src: gnuhealthParty, alt: 'GNU Health party management view' },
    ],
  },
  {
    id: 'lime-survey',
    title: 'LimeSurvey Data Manager',
    category: { en: 'Tools', es: 'Herramientas' },
    featured: false,
    tags: ['Python', 'Pandas', 'Desktop'],
    summary: {
      en: 'Desktop tool that turns LimeSurvey responses into clean, readable reports.',
      es: 'Herramienta de escritorio que convierte las respuestas de LimeSurvey en informes claros y legibles.',
    },
    details: {
      en: 'Uses Pandas to transform survey data from LimeSurvey and OfflineSurveysApp into preformatted CSV files and richer HTML reports with dynamic tables, charts and optional image or location previews.',
      es: 'Usa Pandas para transformar datos de LimeSurvey y OfflineSurveysApp en archivos CSV preformateados e informes HTML más completos con tablas dinámicas, gráficos y vistas previas de imágenes o ubicaciones.',
    },
    highlights: {
      en: [
        'Pandas-based survey data processing',
        'Preformatted CSV exports',
        'HTML reports with charts and previews',
      ],
      es: [
        'Procesamiento de encuestas con Pandas',
        'Exportación de CSV preformateados',
        'Informes HTML con gráficos y vistas previas',
      ],
    },
    images: [
      { src: limeApp, alt: 'LimeSurvey Data Manager application' },
      { src: limeStatistics, alt: 'LimeSurvey Data Manager generated report' },
    ],
  },
];

export const featuredProjects = projects.filter((project) => project.featured);
export const otherProjects = projects.filter((project) => !project.featured);
