import { Project } from './interfaces/projects.interfaces';

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: 'Agenda Virtual',
    subtitle: 'Sistema de gestión de turnos',
    description: 'Aplicación web para administrar clientes y turnos utilizando FullCalendar.',
    challenge: [
      'Evitar la superposición de turnos y mantener la consistencia de la agenda.',
      'Vincular clientes con sus turnos de manera eficiente y segura.',
      'Implementar nuevas librerías (FullCalendar) y frameworks (Spring Boot) para implementar la solución.'
    ],
    solution:
      'Implementé reglas de negocio en Spring Boot para validar disponibilidad y gestionar relaciones entre clientes y turnos.',
    image: 'assets/proyectos/agenda.avif',
    image_carrusel: ['assets/carrusel/agenda/agenda_1.jpeg', 'assets/carrusel/agenda/agenda_2.jpeg', 'assets/carrusel/agenda/agenda_3.jpeg','assets/carrusel/agenda/agenda_4.jpeg','assets/carrusel/agenda/agenda_5.jpeg','assets/carrusel/agenda/agenda_6.jpeg','assets/carrusel/agenda/agenda_7.jpeg','assets/carrusel/agenda/agenda_8.jpeg'],
    technologies: ['Angular','TypeScript','Java' ,'Spring Boot', 'JWT', 'MySQL', 'Docker', 'FullCalendar','Postman'],
    github: '',
    featured: true,
    demo: 'https://healthestetica.com/auth/login'
  },
  {
    id: 2,
    title: 'Paranormal Social Network',
    subtitle: 'Comunidad de eventos y mitos urbanos',
    description:
      'Red social interactiva dedicada a la discusión, reporte y mapeo de fenómenos paranormales y leyendas urbanas.',
    challenge:[
      'Mantener una navegación fluida y reactiva al cargar hilos de discusión densos.',
      'Configuracion de Permisos para usuarios y moderadores, asegurand o la integridad de la comunidad.',
      'Panel Administrativo para gestionar reportes, usuarios y contenido de manera eficiente.',
      'Lograr una experiencia de usuario inmersiva y atractiva, con un diseño visual que refleje la temática paranormal.',
    ],
    solution:
      'Implementé una arquitectura basada en componentes reactivos de Angular, utilizando estados optimizados y un diseño visual con efectos neón y animaciones sutiles para sumergir al usuario en la temática.',
    image: 'assets/proyectos/alien.jpg',
    image_carrusel: ['assets/carrusel/paranormal/paranormal_1.png', 'assets/carrusel/paranormal/paranormal_2.png', 'assets/carrusel/paranormal/paranormal_3.png', 'assets/carrusel/paranormal/paranormal_4.png', 'assets/carrusel/paranormal/paranormal_5.png', 'assets/carrusel/paranormal/paranormal_6.png','assets/carrusel/paranormal/paranormal_7.png', 'assets/carrusel/paranormal/paranormal_8.png'],
    technologies: ['Angular', 'TypeScript', 'Nest.js','JWT', 'MongoDB', "TailwindCSS",'Postman','Mongoose','PWA'],
    github: 'https://github.com/EzequielSineriz/Ezequiel-Si-eriz-TP2-PROG4-2026-C1',
    featured: true,
    demo: 'https://red-social-front-swart.vercel.app/auth/login',
  },
  {
    id: 3,
    title: 'DualPlay',
    subtitle: 'E-commerce de videojuegos y mesa',
    description:
      'Plataforma integral para la preventa y venta de videojuegos digitales y juegos de mesa físicos con catálogo dinámico.',
    challenge:[
      'Estructurar un modelo de datos flexible para productos con características totalmente distintas (licencias digitales vs. stock físico).'
    ],
    solution:
      'Diseñé e implementé un sistema de gestión minorista con persistencia relacional con sqlite, modelando eficientemente las entidades de Productos, Clientes y Ventas.',
    image: 'assets/proyectos/dualplay.webp',
    image_carrusel: [ 'assets/carrusel/dualplay/dualplay_2.png', 'assets/carrusel/dualplay/dualplay_4.png', 'assets/carrusel/dualplay/dualplay_5.png', 'assets/carrusel/dualplay/dualplay_6.png'],
    technologies: ['Angular', 'TypeScript', 'Node.js', 'SQLite', 'Express','EJS', 'TailwindCSS', 'Bcrypt', 'Zod'],
    github: 'https://github.com/EzequielSineriz/DualPlayTP',
    featured: true,
  },
  {
    id: 4,
    title: 'TUAPP Web',
    subtitle: 'Landing Page Corporativa',
    description:
      'Sitio web corporativo e institucional enfocado en la conversión y presentación de servicios de desarrollo de software.',
    challenge:[
      'Lograr una excelente velocidad de carga, posicionamiento SEO óptimo y una interfaz moderna de alto impacto visual.',
    ],
    solution:
      'Desarrollé una interfaz altamente optimizada implementando componentes modulares en Angular, estilos personalizados con estética glassmorphic y despliegue exitoso mediante configuraciones de servidor .htaccess.',
    image: 'assets/proyectos/tuapp.jpg',
    image_carrusel: ['assets/carrusel/tuapp/tuapp_1.png', 'assets/carrusel/tuapp/tuapp_2.png', 'assets/carrusel/tuapp/tuapp_3.png', 'assets/carrusel/tuapp/tuapp_4.png', 'assets/carrusel/tuapp/tuapp_5.png'],
    technologies: ['Angular', 'Javascript', 'CSS3', 'TailwindCSS', 'Hostinger', 'Responsive Design', 'SEO'],
    github: '',
    featured: true,
    demo: 'https://tuappweb.com/',
  },
  {
    id: 5,
    title: "Health Estética",
    subtitle: "Landing Page & Conversión",
    description:
      "Sitio web corporativo y de captura de leads desarrollado para una clínica de estética y bienestar, enfocado en destacar tratamientos y optimizar el agendamiento de consultas.",
    challenge:[
      "Diseñar una interfaz de alta gama, limpia y minimalista que transmita confianza y profesionalismo, garantizando una carga ultra rápida y adaptabilidad móvil total.",
    ],
    solution:
      "Desarrollé la landing page implementando una arquitectura modular, optimizando los recursos visuales para mejorar la velocidad de carga y asegurando un diseño completamente responsive e intuitivo para los pacientes.",
    image: "assets/proyectos/estetica.jpg",
    image_carrusel: ["assets/carrusel/health/health_1.jpeg", "assets/carrusel/health/health_2.jpeg", "assets/carrusel/health/health_3.jpeg"],
    technologies: [
      "Angular",
      "Javascript",
      "CSS3",
      "TailwindCSS",
      "Responsive Design",
      "SEO"
    ],
    github: "", // Podés dejarlo vacío o linkear al repositorio
    featured: true,
    demo: 'https://healthestetica.com/home'
  },
   {
    id: 6,
    title: 'Space Odyssey GAMES',
    subtitle: 'Sistema de mensajeria en tiempo real para comunidad gamer, y 4 juegos interactivos',
    description:
      'Plataforma y red social temática para la comunidad gamer con interacciones y mensajería en tiempo real.',
    challenge:[
      'Gestionar la sincronización instantánea de datos y estados de la comunidad sin sobrecargar el servidor.',
    ],
    solution:
      'Implementé un servicio de chat e interacciones en vivo utilizando los canales en tiempo real de Supabase (Realtime Subscriptions).',
    image: 'assets/carrusel/space/portada_1.jpg',
    image_carrusel: ['assets/carrusel/space/space_1.png', 'assets/carrusel/space/space_2.png', 'assets/carrusel/space/space_3.png', 'assets/carrusel/space/space_4.png', 'assets/carrusel/space/space_5.png', 'assets/carrusel/space/space_6.png'],
    technologies: ['Angular', 'Supabase', 'TypeScript', 'WebSockets', 'CSS Animations'],
    github: 'https://github.com/EzequielSineriz/EzequielSineriz-TP1-PROG4-2026-C1',
    featured: true,
  },
];
