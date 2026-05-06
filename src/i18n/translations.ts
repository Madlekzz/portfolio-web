export type Lang = "es" | "en";

export const translations = {
  es: {
    nav: {
      inicio: "Inicio",
      proyectos: "Proyectos",
      tecnologias: "Tecnologías",
      experiencia: "Experiencia",
      contacto: "Contacto",
    },
    hero: {
      hola: "> hola_mundo",
      nombre: "Soy Italo Apruzzese",
      titulo: "Ingeniero en Informática",
      descripcion:
        "Ingeniero en Informática con experiencia en el desarrollo de aplicaciones web y automatizaciones modernas. Me especializo en construir soluciones escalables y enfocadas en la experiencia del usuario.",
      descargarCV: "Descargar CV",
      verProyectos: "Ver Proyectos",
      github: "GitHub",
      linkedin: "LinkedIn",
    },
    experiencia: {
      category: "experiencia",
      titulo: "Experiencia Laboral",
      subtitle: "Mi trayectoria profesional",
      actualidad: "Actualidad",
      items: [
        {
          cargo: "Pasante de IT",
          ubicacion: "Presencial",
          periodo: "Diciembre 2025 - Abril 2026",
          descripcion:
            "Encargado del desarrollo y mantenimiento de automatizaciones y aplicaciones web complejas.",
        },
        {
          cargo: "Desarrollador Frontend",
          ubicacion: "Remoto",
          periodo: "Enero 2025 - Abril 2025",
          descripcion:
            "Desarrollo frontend para el sistema tributario Sitrive.",
        },
      ],
    },
    proyectos: {
      titulo: "Proyectos destacados",
      verMas: "Ver Proyecto",
      codigo: "Código",
      descripciones: [
        "Sistema de gestión clínica para la unidad de pleura de la policlínica Maracaibo.",
        "Aplicación de uso interno para la gestión de emprendimientos y alianzas de la empresa Freelance Latin America.",
      ],
    },
    tecnologias: {
      titulo: "Tecnologías",
      subtitle: "stack_tecnológico",
      categorias: ["Frontend", "Backend", "Herramientas"],
    },
    footer: {
      titulo: "¿Te interesa trabajar juntos?",
      github: "GitHub",
      linkedin: "LinkedIn",
      email: "Email",
    },
  },
  en: {
    nav: {
      inicio: "Home",
      proyectos: "Projects",
      tecnologias: "Technologies",
      experiencia: "Experience",
      contacto: "Contact",
    },
    hero: {
      hola: "> hello_world",
      nombre: "I'm Italo Apruzzese",
      titulo: "Informatics Engineer",
      descripcion:
        "Informatics Engineer with experience in creating web applications and process automations. I specialize in building scalable and user experience focused solutions.",
      descargarCV: "Download CV",
      verProyectos: "View Projects",
      github: "GitHub",
      linkedin: "LinkedIn",
    },
    experiencia: {
      category: "experience",
      titulo: "Work Experience",
      subtitle: "My professional journey",
      actualidad: "Currently",
      items: [
        {
          cargo: "IT Intern",
          ubicacion: "On-site",
          periodo: "December 2025 - April 2026",
          descripcion:
            "Responsible for the development and maintenance of complex automations and web applications.",
        },
        {
          cargo: "Frontend Developer",
          ubicacion: "Remote",
          periodo: "January 2025 - April 2025",
          descripcion: "Frontend development for the tax system Sitrive.",
        },
      ],
    },
    proyectos: {
      titulo: "Featured Projects",
      verMas: "View Project",
      codigo: "Code",
      descripciones: [
        "Clinical management system for the pleural unit of the Maracaibo polyclinic.",
        "Internal application for managing enterprises and alliances for Freelance Latin America.",
      ],
    },
    tecnologias: {
      titulo: "Technologies",
      subtitle: "tech_stack",
      categorias: ["Frontend", "Backend", "Tools"],
    },
    footer: {
      titulo: "Interested in working together?",
      github: "GitHub",
      linkedin: "LinkedIn",
      email: "Email",
    },
  },
} as const;

export type Translations = typeof translations;
