export const siteConfig = {
  name: "Luis Gabriel Petroni",
  title: "Lic. en Seguridad y Salud Ocupacional",
  description:
    "Servicios profesionales en Higiene, Seguridad y Medio Ambiente. Auditorías, mediciones, estudios y capacitaciones.",
  profileImage: "/profile.jpeg",

  summary: [
    "Licenciado en Seguridad y Salud Ocupacional — Matrícula 10.404",
    "Bombero Industrial",
    "Asesoramiento en Higiene, Seguridad y Medio Ambiente",
  ],

  contact: {
    whatsapp: {
      number: "+5493364574541",
      label: "Chatear por WhatsApp",
      url: "https://wa.me/5493364574541",
    },
    email: {
      address: "luisgabrielpetroni@gmail.com",
      label: "Correo electrónico",
      url: "mailto:luisgabrielpetroni@gmail.com",
    },
    phone: {
      number: "3364574541",
      label: "Llamada directa",
      url: "tel:+5493364574541",
    },
  },

  social: {
    linkedin: {
      url: "https://www.linkedin.com/in/gabriel-petroni-1b0785144/",
      label: "LinkedIn",
    },
  },

  services: [
    {
      title: "Auditoría en Protección contra Incendios",
      icon: "🔥",
      items: ["Sistemas de detección", "Sistemas de extinción"],
    },
    {
      title: "Mediciones",
      icon: "📏",
      items: [
        "Espacios confinados",
        "Carga térmica",
        "Protección radiológica",
        "Gases",
        "Vibraciones",
        "Luminicidad",
        "Condiciones atmosféricas",
      ],
    },
    {
      title: "Estudios",
      icon: "📋",
      items: [
        "Informes técnicos",
        "Cargas de Fuego",
        "Estudios Ergonómicos",
        "Manejo SIASSO",
      ],
    },
    {
      title: "Capacitaciones",
      icon: "🎓",
      items: [
        "Uso de Extintores",
        "Equipos de respiración autónoma (ERA)",
        "Planes de evacuación",
        "Uso de Equipos para Extinción de Incendios",
        "Trabajo y Rescate en Altura",
      ],
    },
  ],
} as const;

export type SiteConfig = typeof siteConfig;
