import { Project, Skill } from '@/types';

export const personalInfo = {
  name: "Francisco Vignardel",
  title: "Desarrollador Full Stack | Especialista en SharePoint & React",
  tagline: "Transformo necesidades empresariales en soluciones digitales escalables",
  email: "vignardel.francisco@gmail.com", 
  phone: "+54 9 11 3865-8887", // Opcional
  location: "Buenos Aires, Argentina",
  github: "https://github.com/franvigna", 
  linkedin: "https://www.linkedin.com/in/francisco-vignardel/",
  
  // Bio comercial (primera impresión)
  pitch: "Desarrollo soluciones digitales para empresas que buscan automatizar procesos, mejorar su presencia online o crear aplicaciones a medida. Actualmente trabajo en Circo Studio desarrollando para YPF, y ofrezco servicios freelance para proyectos de desarrollo web, SharePoint y aplicaciones full stack.",
  
  // Sobre mí (más personal pero profesional)
  bio: "Siempre me gustó entender cómo funcionan las cosas. Esa curiosidad me llevó a estudiar Ingeniería en Informática y a apasionarme por la tecnología. Mientras avanzo en la carrera, me formo constantemente en desarrollo web, combinando teoría académica con proyectos reales. Actualmente colaboro en soluciones empresariales para YPF utilizando SharePoint Framework, React y TypeScript.",
  
  // Propuesta de valor clara
  valueProps: [
    "✅ Experiencia en proyectos corporativos (YPF)",
    "✅ Stack moderno: React, TypeScript, Next.js, Django",
    "✅ Especialización en SharePoint Framework",
    "✅ Disponibilidad para proyectos freelance"
  ],
  
  cta: {
    primary: "Conversemos sobre tu proyecto",
    secondary: "Ver mis trabajos"
  }
};

// Servicios que ofreces
export const services = [
  {
    title: "Desarrollo Web Corporativo",
    description: "Sitios web profesionales, landing pages optimizadas y aplicaciones web escalables con React, Next.js y TypeScript.",
    icon: "💻",
    benefits: ["Diseño responsive", "SEO optimizado", "Performance alto", "Código mantenible"],
    ideal: "Ideal para: empresas que necesitan presencia web profesional o renovar su sitio actual"
  },
  {
    title: "Soluciones SharePoint & Microsoft 365",
    description: "Desarrollo de webparts personalizados, automatización de flujos y dashboards interactivos con SharePoint Framework.",
    icon: "🏢",
    benefits: ["Integración M365", "Automatización de procesos", "Dashboards personalizados", "Soporte enterprise"],
    ideal: "Ideal para: empresas que usan Microsoft 365 y necesitan personalizar SharePoint"
  },
  {
    title: "Aplicaciones Full Stack",
    description: "Desarrollo completo de aplicaciones: frontend (React), backend (Django/Node.js) y base de datos (SQL/PostgreSQL).",
    icon: "⚙️",
    benefits: ["Arquitectura escalable", "APIs REST seguras", "Panel de administración", "Base de datos optimizada"],
    ideal: "Ideal para: startups, PYMEs que necesitan software a medida (CRM, ERP, gestión interna)"
  },
  {
    title: "E-Commerce & Landing Pages",
    description: "Tiendas online funcionales y páginas de conversión optimizadas para captar clientes.",
    icon: "🛒",
    benefits: ["Integración pasarelas de pago", "UX/UI optimizado", "Alta conversión", "Analytics integrado"],
    ideal: "Ideal para: emprendedores y negocios que quieren vender online"
  }
];

// Experiencia laboral actualizada
export const experience = [
  {
    company: "Circo Studio",
    client: "YPF",
    position: "Desarrollador SharePoint Framework (Becario Tecnológico)",
    period: "Mayo 2024 - Actualidad",
    location: "Híbrido, Buenos Aires",
    description: "Desarrollo de soluciones empresariales dentro del ecosistema Microsoft Power Platform para YPF, una de las empresas energéticas más importantes de Argentina.",
    achievements: [
      "Desarrollo de webparts personalizados con SharePoint Framework (SPFx)",
      "Programación de interfaces con React y TypeScript para entornos corporativos",
      "Colaboración en equipo ágil para entregas continuas",
      "Integración con Microsoft 365 y Power Platform"
    ],
    technologies: ["SharePoint Framework", "React", "TypeScript", "Microsoft 365", "Power Platform"],
    logo: "/companies/circo-studio.png"
  },
  {
    company: "Web Solutions",
    position: "Front-End Developer (Freelance)",
    period: "Noviembre 2022 - Mayo 2025",
    location: "Remoto, Buenos Aires",
    description: "Desarrollo de soluciones web para diversos clientes, desde landing pages hasta aplicaciones completas.",
    achievements: [
      "Desarrollo de interfaces web para CRM con React y Django",
      "Creación de landing pages de alta conversión",
      "Implementación de REST APIs y componentes interactivos",
      "Diseño UX/UI responsive"
    ],
    technologies: ["React", "Django", "JavaScript", "CSS", "REST API"],
    logo: "/companies/web-solutions.png"
  },
  {
    company: "Datalyst Argentina",
    position: "Desarrollador Front-End & Asistente BI (Pasantía)",
    period: "Marzo 2022 - Noviembre 2022",
    location: "Buenos Aires",
    description: "Desarrollo de interfaces internas y análisis de datos empresariales.",
    achievements: [
      "Desarrollo de interfaces responsive con React.js",
      "Generación de reportes con QlikView",
      "Procesamiento y análisis de datos (CSV, Excel, MySQL)",
      "Dashboards interactivos para toma de decisiones"
    ],
    technologies: ["React.js", "QlikView", "MySQL", "Data Analysis"],
    logo: "/companies/datalyst.png"
  },
  {
    company: "Freelancer.com",
    position: "Desarrollador Front-End (Freelance)",
    period: "2021 - 2022",
    location: "Remoto",
    description: "Diseño y creación de interfaces para e-commerce.",
    achievements: [
      "Desarrollo de UI para tiendas online",
      "Integración de pasarelas de pago",
      "Optimización de experiencia de usuario"
    ],
    technologies: ["JavaScript", "Node.js", "HTML", "CSS"],
    logo: "/companies/freelancer.png"
  }
];

// Skills organizadas
export const skills: Skill[] = [
  // Enterprise & SharePoint
  { name: "SharePoint Framework (SPFx)", category: "tools", level: "advanced" },
  { name: "Microsoft 365", category: "tools", level: "advanced" },
  { name: "Power Platform", category: "tools", level: "intermediate" },
  
  // Frontend
  { name: "React.js", category: "frontend", level: "expert" },
  { name: "Next.js", category: "frontend", level: "advanced" },
  { name: "TypeScript", category: "languages", level: "advanced" },
  { name: "JavaScript", category: "languages", level: "expert" },
  { name: "HTML/CSS", category: "frontend", level: "expert" },
  { name: "Tailwind CSS", category: "frontend", level: "advanced" },
  
  // Backend
  { name: "Node.js", category: "backend", level: "intermediate" },
  { name: "Django", category: "backend", level: "advanced" },
  { name: "REST APIs", category: "backend", level: "advanced" },
  { name: "Python", category: "languages", level: "advanced" },
  
  // Databases
  { name: "SQL", category: "backend", level: "advanced" },
  { name: "MySQL", category: "backend", level: "intermediate" },
  { name: "PostgreSQL", category: "backend", level: "intermediate" },
  
  // Other Languages
  { name: "Java", category: "languages", level: "intermediate" },
  { name: "C", category: "languages", level: "intermediate" },
  
  // Tools & Methodologies
  { name: "Git & GitHub", category: "tools", level: "advanced" },
  { name: "SCRUM", category: "tools", level: "intermediate" },
  { name: "VS Code", category: "tools", level: "expert" },
];

// Educación
export const education = [
  {
    institution: "Universidad Nacional de La Matanza",
    degree: "Ingeniería en Informática",
    period: "Agosto 2022 - Actualidad",
    progress: "28 de 63 materias aprobadas (44%)",
    activities: ["Pair Programming", "Proyectos colaborativos"]
  },
  {
    institution: "Colegio Monseñor Tomás Juan Solari",
    degree: "Técnico en Informática",
    period: "Marzo 2016 - Noviembre 2022",
    completed: true
  }
];

// Certificaciones
export const certifications = [
  {
    title: "Introducción al Desarrollo Web I",
    issuer: "Google",
    date: "Abril 2022",
    hours: 40,
    credential: "5WQ QF7 5PC"
  },
  {
    title: "Introducción al Desarrollo Web II",
    issuer: "Google",
    date: "Abril 2022",
    hours: 40,
    credential: "RT8 YU3 HVH"
  }
];

// Proyectos destacados (actualizar con tus proyectos reales)
export const projects: Project[] = [
  {
    id: "ypf-sharepoint",
    title: "Soluciones SharePoint para YPF",
    description: "Desarrollo de webparts personalizados para automatización de procesos internos en una empresa energética líder. Proyecto confidencial bajo NDA.",
    image: "/projects/ypf-sharepoint.jpg",
    tags: ["SharePoint Framework", "React", "TypeScript", "Microsoft 365"],
    featured: true,
    client: "YPF (vía Circo Studio)"
  },
  {
    id: "crm-custom",
    title: "CRM Personalizado para PYME",
    description: "Sistema completo de gestión de clientes y ventas con dashboard de métricas, seguimiento de leads y automatización de emails.",
    image: "/projects/crm.jpg",
    tags: ["React", "Django", "PostgreSQL", "REST API"],
    github: "https://github.com/crm-demo",
    demo: "https://crm-demo.vercel.app" // 🔴 Cambiar si existe
  },
  {
    id: "ecommerce-ui",
    title: "E-Commerce Responsive",
    description: "Interfaz completa para tienda online con carrito de compras, integración de pagos y panel de administración.",
    image: "/projects/ecommerce.jpg",
    tags: ["React", "Node.js", "Stripe", "Tailwind CSS"],
    demo: "https://ecommerce-demo.vercel.app" // 🔴 Cambiar si existe
  },
  {
    id: "landing-conversion",
    title: "Landing Page Alta Conversión",
    description: "Página de aterrizaje optimizada con animaciones, formularios de contacto y integración con CRM.",
    image: "/projects/landing.jpg",
    tags: ["Next.js", "Tailwind CSS", "Framer Motion", "Resend"],
    demo: "https://landing-demo.vercel.app" // 🔴 Cambiar si existe
  }
];

// Proceso de trabajo
export const workProcess = [
  {
    step: 1,
    title: "Consulta Gratuita",
    description: "Conversamos sobre tu proyecto, necesidades y objetivos. Sin compromiso.",
    duration: "30-60 min"
  },
  {
    step: 2,
    title: "Propuesta & Presupuesto",
    description: "Te envío una propuesta detallada con alcance, tiempos y costos claros.",
    duration: "2-3 días"
  },
  {
    step: 3,
    title: "Desarrollo Iterativo",
    description: "Trabajo en sprints semanales. Ves el progreso constantemente y das feedback.",
    duration: "Variable según proyecto"
  },
  {
    step: 4,
    title: "Entrega & Capacitación",
    description: "Deploy a producción, documentación completa y capacitación para tu equipo.",
    duration: "1 semana"
  },
  {
    step: 5,
    title: "Soporte Continuo",
    description: "30 días de soporte gratuito. Planes de mantenimiento disponibles.",
    duration: "Opcional"
  }
];

// FAQs orientadas a clientes
export const faqs = [
  {
    question: "¿Cuánto cuesta desarrollar un sitio web / aplicación?",
    answer: "Depende del alcance. Un sitio web corporativo desde $XXX USD. Una aplicación completa desde $XXX USD. En la consulta inicial te doy un presupuesto preciso."
  },
  {
    question: "¿Cuánto tiempo lleva?",
    answer: "Un sitio web: 2-4 semanas. Landing page: 1-2 semanas. Aplicación completa: 2-3 meses. Te doy cronograma detallado en la propuesta."
  },
  {
    question: "¿Trabajas con empresas de mi sector?",
    answer: "Sí. He trabajado con energía (YPF), retail, servicios, tecnología. Mi experiencia en SharePoint me permite atender especialmente empresas corporativas."
  },
  {
    question: "¿Puedo ver tu trabajo anterior?",
    answer: "Por supuesto. Algunos proyectos son confidenciales (NDA con YPF), pero tengo portfolio público que puedo mostrarte."
  },
  {
    question: "¿Ofreces mantenimiento después?",
    answer: "Sí. Incluyo 30 días de soporte gratuito post-lanzamiento. Luego ofrezco planes mensuales de mantenimiento."
  },
  {
    question: "¿Trabajas solo o con un equipo?",
    answer: "Trabajo como freelancer, pero tengo red de colaboradores para proyectos grandes (diseñadores, otros devs, etc.)."
  }
];

// Stats para generar credibilidad
export const stats = [
  {
    number: "2+",
    label: "Años de Experiencia",
    icon: "📅"
  },
  {
    number: "15+",
    label: "Proyectos Completados",
    icon: "✅"
  },
  {
    number: "100%",
    label: "Clientes Satisfechos",
    icon: "⭐"
  },
  {
    number: "7",
    label: "Tecnologías Dominadas",
    icon: "🚀"
  }
];