export const SITE = {
  name: "NuvemLED",
  tagline: "Iluminando Seus Espaços",
  description:
    "Somos mais do que uma empresa de Telas de LED. Somos arquitetos da luz, artistas da inovação.",
  cnpj: "00.000.000/0001-00",
  email: "contato@nuvemled.com.br",
  whatsapp: "5500000000000",
  whatsappMessage: "Gostaria de um projeto de painel de LED!",
} as const;

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  {
    label: "Serviços",
    href: "/servicos",
    children: [
      { label: "Igrejas", href: "/servicos/igrejas" },
      { label: "Comércio", href: "/servicos/comercio" },
      { label: "Totens de LED", href: "/servicos/totens" },
      { label: "Residencial", href: "/servicos/residencial" },
      { label: "Outdoor", href: "/servicos/outdoor" },
      { label: "Show Business", href: "/servicos/show-business" },
    ],
  },
  { label: "Portfólio", href: "/portfolio" },
  { label: "Sobre", href: "/sobre" },
  { label: "Clientes", href: "/clientes" },
  { label: "Contato", href: "/contato" },
] as const;

export const SERVICES = [
  {
    slug: "igrejas",
    title: "Igrejas",
    description:
      "Painéis de LED que transformam espaços de adoração, combinando beleza e eficiência energética.",
    icon: "Church",
    video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    slug: "comercio",
    title: "Comércio",
    description:
      "Soluções de LED para comércios que atraem clientes e destacam sua marca.",
    icon: "Store",
    video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    slug: "totens",
    title: "Totens de LED",
    description:
      "Totens de LED que oferecem comunicação visual impactante, adaptável a qualquer espaço.",
    icon: "Monitor",
    video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    slug: "residencial",
    title: "Residencial",
    description:
      "Painéis de LED que trazem eficiência e personalização, transformando ambientes residenciais.",
    icon: "Home",
    video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    slug: "outdoor",
    title: "Outdoor",
    description:
      "Soluções de LED para ambientes externos com alta visibilidade e durabilidade.",
    icon: "Sun",
    video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    slug: "show-business",
    title: "Show Business",
    description:
      "Painéis de LED para shows e eventos, criando experiências visuais inesquecíveis.",
    icon: "Music",
    video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
] as const;

export const BRANCHES = [
  {
    state: "Paraná",
    city: "Maringá PR",
    phone: "44 3031-5492",
    address: "Av. Exemplo, 1000",
  },
  {
    state: "Goiás",
    city: "Goiânia GO",
    phone: "62 3637-6778",
    address: "Av. Exemplo, 2000",
  },
  {
    state: "Santa Catarina",
    city: "Balneário Camboriú SC",
    phone: "47 3056-3200",
    address: "Av. Exemplo, 3000",
  },
] as const;

export const SOCIAL_LINKS = [
  { label: "Instagram", href: "https://instagram.com/nuvemled", icon: "Instagram" },
  { label: "YouTube", href: "https://youtube.com/@nuvemled", icon: "Youtube" },
  { label: "TikTok", href: "https://tiktok.com/@nuvemled", icon: "Music2" },
  { label: "Facebook", href: "https://facebook.com/nuvemled", icon: "Facebook" },
] as const;
