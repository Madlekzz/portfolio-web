export const navItems = [
  { labelKey: "inicio", href: "#hero" },
  { labelKey: "proyectos", href: "#proyectos" },
  { labelKey: "tecnologias", href: "#tecnologias" },
  { labelKey: "experiencia", href: "#experiencia" },
  { labelKey: "contacto", href: "#contacto" },
] as const;

export const experienciaItems = [
  {
    id: 1,
    cargo: "IT Intern",
    empresa: "Freelance Latin america",
    ubicacion: "Presencial",
    periodo: "2025 - Actualidad",
    descripcion:
      "Colaboración en el desarrollo de soluciones tecnológicas internas, incluyendo el mantenimiento y mejora de aplicaciones web existentes.",
  },
  {
    id: 2,
    cargo: "Frontend Developer",
    empresa: "Sitrive",
    ubicacion: "Remoto",
    periodo: "2025 - 2025",
    descripcion:
      "Desarrollo de interfaces de usuario responsivas y optimización del rendimiento de aplicaciones web existentes.",
  },
] as const;

export const proyectos = [
  {
    titulo: "MedDev",
    descripcion:
      "Sistema de gestión clínica para la unidad de pleura de la policlínica Maracaibo",
    tecnologias: [
      "React",
      "Tailwindcss",
      "Node.js",
      "PostgreSQL",
      "Express",
      "Render",
      "Supabase",
    ] as const,
    imagen: "/meddev.png",
    enlace: "https://www.meddev.lat/",
    repo: "https://github.com/ariannagutirrzz/med-dev",
  },
  {
    titulo: "Freelance Entrepreneurships",
    descripcion:
      "Aplicación de uso interno para la gestión de emprendimientos y alianzas de la empresa Freelance Latin America.",
    tecnologias: [
      "Vite",
      "TypeScript",
      "React",
      "Tailwindcss",
      "Node.js",
      "Express",
      "Supabase",
      "Render",
    ] as const,
    imagen: "/freelance.png",
    enlace: "https://freelance-entrepreneurships-fronten.vercel.app/",
    repo: "https://github.com/Madlekzz/Freelance-entrepreneurships",
  },
] as const;

export const categorias = [
  {
    tituloKey: "frontend" as const,
    tecnologias: [
      { nombre: "React", slug: "react" },
      { nombre: "Next.js", slug: "nextdotjs" },
      { nombre: "Vite", slug: "vite" },
      { nombre: "Astro", slug: "astro" },
      { nombre: "Tailwind CSS", slug: "tailwindcss" },
      { nombre: "TypeScript", slug: "typescript" },
    ],
  },
  {
    tituloKey: "backend" as const,
    tecnologias: [
      { nombre: "Node.js", slug: "nodedotjs" },
      { nombre: "PostgreSQL", slug: "postgresql" },
      { nombre: "MongoDB", slug: "mongodb" },
      { nombre: "Express", slug: "express" },
    ],
  },
  {
    tituloKey: "herramientas" as const,
    tecnologias: [
      { nombre: "Git", slug: "git" },
      { nombre: "Vercel", slug: "vercel" },
      { nombre: "Supabase", slug: "supabase" },
      { nombre: "Render", slug: "render" },
    ],
  },
] as const;

export const cvLink = (() => {
  const cv_id = import.meta.env.PUBLIC_CV_DRIVE_ID || "";
  return cv_id
    ? `https://drive.google.com/uc?export=download&id=${cv_id}`
    : "#";
})();

export const socialLinks = {
  github: "https://github.com/Madlekzz",
  linkedin: "https://www.linkedin.com/in/alessandroapru-dev",
  email: "mailto:alessandro.aapruzzese@gmail.com",
} as const;
