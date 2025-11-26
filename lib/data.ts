import { Project } from '@/types';

export const personalInfo = {
    name: "Francisco Vignardel",
    title: "Desarrollador Web Full Stack",
    tagline: "Tu sitio web listo en 2-3 semanas",
    email: "vignardel.francisco@gmail.com",
    phone: "+54 9 11 3865-8887",
    whatsapp: "5491138658887", // Sin espacios ni guiones para el link
    location: "Buenos Aires, Argentina",
    github: "https://github.com/franvigna",
    linkedin: "https://www.linkedin.com/in/francisco-vignardel/",

    // MEJORADO: Más directo y con beneficio claro
    pitch: "Transformo negocios locales en negocios online. Tiendas, landing pages y sitios web que generan ventas reales, sin complicaciones técnicas.",

    // MEJORADO: Menos historia, más credibilidad
    bio: "Llevo 2+ años desarrollando sitios web para PyMEs y actualmente trabajo en YPF en proyectos corporativos. Creo sitios que son fáciles de usar y que realmente ayudan a vender.",

    // MEJORADO: Más específico y con íconos
    valueProps: [
        "💰 Precio fijo desde el inicio",
        "⚡ Entrega en 2-3 semanas",
        "📱 Soporte WhatsApp 30 días"
    ],

    cta: {
        primary: "Consultar ahora",
        secondary: "Ver trabajos"
    }
};

// PROYECTOS - MEJORADOS con resultados medibles
export const projects: Project[] = [
    {
        id: "casa-arnold",
        title: "Casa Arnold - Tienda Online",
        description: "Tienda online completa que aumentó las consultas en 60%. Los clientes ven el catálogo completo, agregan productos al carrito y hacen pedidos directos por WhatsApp. Sin complicaciones, sin comisiones mensuales.",
        image: "/projects/casa-arnold.jpg",
        tags: ["Ecommerce", "WhatsApp", "50+ Productos"],
        featured: true,
        demo: "https://casaarnold.netlify.app/",
        client: "Casa Arnold",
        projectType: "pyme",
        result: "+60% consultas desde el lanzamiento" // NUEVO: Resultado medible
    },
    {
        id: "hideaway-coffee",
        title: "HideAway Coffee - Landing Page",
        description: "Landing page profesional para cafetería boutique en Londres. Diseño enfocado en mostrar el ambiente, menú destacado y mapa para que los clientes encuentren fácil la ubicación. Perfecta para atraer turistas.",
        image: "/projects/hideaway.jpg",
        tags: ["Landing Page", "Restaurante", "Google Maps"],
        featured: true,
        demo: "https://hideawaycoffee.netlify.app/",
        client: "HideAway Coffee - Londres",
        projectType: "pyme"
    },
    {
        id: "magenta-agency",
        title: "Magenta Agency - Sitio Web",
        description: "Sitio web profesional para agencia creativa. Portfolio dinámico, página de servicios y formulario de contacto. Diseño moderno que destaca sus trabajos sin distracciones.",
        image: "/projects/magenta.jpg",
        tags: ["Sitio Web", "Portfolio", "Agencia"],
        demo: "https://magenta-agency.netlify.app/",
        client: "Magenta Agency",
        projectType: "pyme"
    },
    {
        id: "ypf-sharepoint",
        title: "YPF - Sistema Corporativo",
        description: "Sistema empresarial usado por cientos de empleados. Desarrollo de componentes React reutilizables en SharePoint para gestión documental. Trabajo en equipo ágil con entregas quincenales.",
        image: "/projects/ypf-sharepoint.jpg",
        tags: ["SharePoint", "React", "Enterprise"],
        featured: false,
        client: "YPF S.A.",
        projectType: "corporativo"
    }
];

// SERVICIOS PYMES - MEJORADOS con información más clara
export const servicesPymes = [
    {
        title: "Tienda Online",
        description: "Vende tus productos online sin pagar comisiones mensuales. Tus clientes ven el catálogo, agregan al carrito y te hacen el pedido directo por WhatsApp.",
        icon: "🛒",
        benefits: [
            "Catálogo ilimitado de productos con fotos",
            "Carrito de compras y pedidos por WhatsApp",
            "Funciona perfecto en celular y computadora",
            "Panel simple para actualizar precios"
        ],
        includes: [ // NUEVO: Qué incluye exactamente
            "Diseño personalizado",
            "Hasta 50 productos",
            "Integración WhatsApp",
            "Hosting 1 año gratis"
        ],
        ideal: "Negocios que venden productos físicos: ropa, deco, alimentos, artículos para el hogar.",
        price: "$800 USD",
        priceNote: "Precio final, sin sorpresas", // NUEVO
        delivery: "3-4 semanas",
        popular: true // NUEVO: Marcar el más vendido
    },
    {
        title: "Landing Page",
        description: "Una página diseñada 100% para convertir visitantes en clientes. Perfecta para recibir tráfico de redes sociales o Google Ads.",
        icon: "🎯",
        benefits: [
            "Diseño profesional enfocado en conversión",
            "Aparece en Google (SEO básico)",
            "Formulario que va directo a tu email/WhatsApp",
            "Integración con Google Maps si tenés local"
        ],
        includes: [
            "1 página optimizada",
            "Formulario de contacto",
            "Integración Google Maps",
            "Hosting 1 año gratis"
        ],
        ideal: "Profesionales, servicios locales, eventos, lanzamiento de productos.",
        price: "$300 USD",
        priceNote: "Ideal para empezar",
        delivery: "1-2 semanas",
        popular: false
    },
    {
        title: "Sitio Web Completo",
        description: "Tu carta de presentación digital. Sitio institucional con todas las secciones: inicio, servicios, sobre nosotros, portfolio, blog y contacto.",
        icon: "💼",
        benefits: [
            "Diseño 100% personalizado a tu marca",
            "Múltiples páginas (Inicio, Servicios, Contacto, etc)",
            "Blog opcional para aparecer en Google",
            "Formularios de contacto y cotización"
        ],
        includes: [
            "5 páginas incluidas",
            "Blog (opcional)",
            "Formularios personalizados",
            "Hosting 1 año gratis"
        ],
        ideal: "Empresas, estudios profesionales, consultoras que buscan presencia online sólida.",
        price: "$500 USD",
        priceNote: "+ $80 USD por página extra",
        delivery: "2-3 semanas",
        popular: false
    }
];

// SERVICIO CORPORATIVO - MEJORADO
export const servicesCorporativo = {
    title: "Proyectos Corporativos & Enterprise",
    description: "Experiencia trabajando en proyectos de escala empresarial con equipos de desarrollo y metodologías ágiles.",
    icon: "🏢",
    capabilities: [
        "Desarrollo SharePoint Framework (SPFx) y Microsoft 365",
        "Componentes React escalables para miles de usuarios",
        "Integración en equipos Scrum/Kanban existentes",
        "Experiencia real en YPF: sistema usado por 1000+ empleados",
        "Código limpio, documentado y mantenible"
    ],
    technologies: ["SharePoint", "React", "TypeScript", "Microsoft 365", "Azure"],
    availability: "Disponible para colaboraciones full-time o part-time",
    contact: "Contactame para coordinar una llamada y discutir alcance del proyecto."
};

// EXPERIENCIA - MEJORADA con logros específicos
export const experience = [
    {
        company: "Circo Studio (Cliente: YPF)",
        client: "YPF S.A.",
        position: "Desarrollador SharePoint",
        period: "Mayo 2024 - Actualidad",
        location: "Híbrido, Buenos Aires",
        description: "Desarrollo soluciones empresariales con SharePoint Framework para una de las empresas más grandes de Argentina.",
        achievements: [
            "Sistema documental usado por 1000+ empleados corporativos",
            "Componentes React reutilizables que aceleraron desarrollo 40%",
            "Trabajo en Scrum con sprints de 2 semanas y daily meetings"
        ],
        technologies: ["SharePoint Framework", "React", "TypeScript", "Microsoft 365"],
        type: "corporativo"
    },
    {
        company: "Freelance",
        position: "Desarrollador Web",
        period: "Enero 2023 - Actualidad",
        location: "Remoto",
        description: "Desarrollo sitios web para PyMEs y emprendimientos: tiendas online, landing pages y sitios institucionales.",
        achievements: [
            "Tienda online que aumentó consultas 60% (Casa Arnold)",
            "8+ sitios web para clientes locales e internacionales",
            "100% de proyectos entregados a tiempo y clientes satisfechos"
        ],
        technologies: ["React", "Next.js", "Tailwind CSS", "Netlify"],
        type: "pyme"
    },
    {
        company: "Datalyst Argentina",
        position: "Desarrollador Front-End (Pasantía)",
        period: "Marzo 2022 - Noviembre 2022",
        location: "Buenos Aires",
        description: "Primera experiencia profesional en consultora tecnológica.",
        achievements: [
            "Dashboards internos con React para visualización de datos",
            "Aprendizaje de trabajo en equipo con metodologías ágiles",
            "Consultas a bases de datos MySQL para reportes"
        ],
        technologies: ["React.js", "QlikView", "MySQL"],
        type: "corporativo"
    }
];

// STATS - Más impactantes
export const statsPymes = [
    {
        number: "8+",
        label: "Proyectos Entregados",
        icon: "🚀"
    },
    {
        number: "100%",
        label: "Clientes Satisfechos",
        icon: "⭐"
    },
    {
        number: "2-4",
        label: "Semanas Entrega",
        icon: "⚡"
    },
    {
        number: "30 días",
        label: "Soporte Incluido",
        icon: "💬"
    }
];

export const statsCorporativo = [
    {
        number: "1000+",
        label: "Usuarios Corporativos",
        icon: "👥"
    },
    {
        number: "YPF",
        label: "Cliente Enterprise",
        icon: "🏢"
    },
    {
        number: "Scrum",
        label: "Metodología Ágil",
        icon: "🔄"
    },
    {
        number: "2+",
        label: "Años Experiencia",
        icon: "📅"
    }
];

export const stats = statsPymes;

// EDUCACIÓN
export const education = [
    {
        institution: "Universidad Nacional de La Matanza",
        degree: "Ingeniería en Informática",
        period: "2022 - Actualidad",
        progress: "55% completado",
        activities: ["Pair Programming", "Proyectos colaborativos"]
    },
    {
        institution: "Colegio Monseñor Tomás Juan Solari",
        degree: "Técnico en Informática",
        period: "2016 - 2022",
        completed: true
    }
];

// CERTIFICACIONES
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

// PROCESO DE TRABAJO - MEJORADO
export const workProcess = [
    {
        step: 1,
        title: "Charlamos 30 min",
        description: "Me contás qué necesitás y te explico cómo puedo ayudarte. Sin compromiso, gratis.",
        duration: "30 min",
        icon: "💬"
    },
    {
        step: 2,
        title: "Presupuesto claro",
        description: "Te envío propuesta con precio fijo, qué incluye exactamente y tiempo de entrega.",
        duration: "24-48hs",
        icon: "💰"
    },
    {
        step: 3,
        title: "Desarrollo",
        description: "Trabajo en tu proyecto y te muestro avances cada semana por WhatsApp.",
        duration: "2-4 semanas",
        icon: "⚡"
    },
    {
        step: 4,
        title: "Lanzamiento + Soporte",
        description: "Publico tu sitio y te enseño a usarlo. Incluye 30 días de soporte gratis.",
        duration: "1 día",
        icon: "🚀"
    }
];

// FAQs - MEJORADOS con respuestas más directas
export const faqs = [
    {
        question: "¿Cuánto cuesta?",
        answer: "Landing page: $300 USD. Sitio web completo: $500 USD. Tienda online: $800 USD. Te doy precio exacto en la primera charla según lo que necesites. Sin costos ocultos."
    },
    {
        question: "¿Cuánto tiempo tarda?",
        answer: "Landing page: 1-2 semanas. Sitio completo: 2-3 semanas. Tienda: 3-4 semanas. Te muestro avances cada semana para que veas cómo va todo."
    },
    {
        question: "¿Qué pasa después del lanzamiento?",
        answer: "Tenés 30 días de soporte gratis. Si necesitás cambiar algo o tenés dudas, te ayudo por WhatsApp sin costo. Después podés contratar mantenimiento mensual ($50 USD/mes) si querés."
    },
    {
        question: "¿Funciona en celular?",
        answer: "Sí, 100%. Todos mis sitios se adaptan perfecto a celular, tablet y computadora. Hoy el 70% de la gente navega desde el celu, así que es fundamental."
    },
    {
        question: "¿Puedo actualizar el contenido yo mismo?",
        answer: "Depende. Puedo dejarte un panel simple para que cambies textos y fotos, o puedo encargarme yo de las actualizaciones. Lo decidimos según lo que prefieras y tu nivel técnico."
    },
    {
        question: "¿Necesito comprar hosting y dominio?",
        answer: "El primer año de hosting va GRATIS incluido. El dominio (.com, .ar) lo comprás vos (aprox $10-20 USD/año) y yo me encargo de toda la configuración técnica."
    },
    {
        question: "¿Trabajás con empresas grandes?",
        answer: "Sí, actualmente trabajo en YPF en sistemas corporativos. Para proyectos enterprise puedo integrarme a equipos de desarrollo o trabajar con SharePoint/Microsoft 365."
    }
];

// CTA CORPORATIVO
export const corporateCTA = {
    title: "¿Buscás desarrollador para tu equipo?",
    description: "Experiencia en proyectos enterprise con SharePoint, React y metodologías ágiles. Disponible full-time o part-time.",
    cta: "Coordinemos una llamada",
    capabilities: [
        "Integración rápida en equipos ágiles existentes",
        "Experiencia con 1000+ usuarios corporativos (YPF)",
        "SharePoint Framework (SPFx) y Microsoft 365",
        "Código limpio, documentado y testeado"
    ]
};

// Mantener compatibilidad
export const services = servicesPymes;