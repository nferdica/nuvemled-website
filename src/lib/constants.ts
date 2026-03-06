export const site = {
  name: "NuvemLED",
  tagline: "Iluminando Seus Espaços",
  description:
    "Somos mais do que uma empresa de Telas de LED. Somos arquitetos da luz, artistas da inovação.",
  cnpj: "33.907.401/0001-89",
  email: "contato@nuvemled.com.br",
  whatsapp: "5544988117615",
  whatsappMessage: "Gostaria de um projeto de painel de LED!",
} as const;

export function getWhatsAppUrl(message?: string) {
  const text = message ?? site.whatsappMessage;
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(text)}`;
}

export const navLinks = [
  { label: "Início", href: "/" },
  {
    label: "Serviços",
    href: "/services",
    children: [
      { label: "Igrejas", href: "/services/churches" },
      { label: "Comércio", href: "/services/commerce" },
      { label: "Totens de LED", href: "/services/totems" },
      { label: "Residencial", href: "/services/residential" },
      { label: "Outdoor", href: "/services/outdoor" },
      { label: "Show Business", href: "/services/show-business" },
    ],
  },
  { label: "Sobre", href: "/about" },
  { label: "Contato", href: "/contact" },
] as const;

export const services = [
  {
    slug: "churches",
    title: "Igrejas",
    description:
      "Painéis de LED que transformam espaços de adoração, combinando beleza e eficiência energética.",
    icon: "Church",
    longDescription:
      "Transforme o ambiente da sua igreja com painéis de LED de alta definição. Nossos sistemas são projetados para criar atmosferas imersivas durante cultos, transmitir letras de músicas, versículos e conteúdo ao vivo com nitidez excepcional — tudo com instalação discreta que respeita a arquitetura do templo.",
    benefits: [
      "Transmissão nítida de letras, versículos e vídeos",
      "Economia de até 70% em energia comparado a projetores",
      "Instalação adaptada à arquitetura do templo",
      "Suporte técnico especializado para eventos ao vivo",
    ],
    useCases: ["Cultos e celebrações", "Transmissões ao vivo", "Eventos especiais", "Decoração permanente"],
  },
  {
    slug: "commerce",
    title: "Comércio",
    description:
      "Soluções de LED para comércios que atraem clientes e destacam sua marca.",
    icon: "Store",
    longDescription:
      "Destaque sua marca com painéis de LED que capturam a atenção de quem passa. Nossas soluções para comércio são ideais para vitrines, fachadas e ambientes internos, oferecendo conteúdo dinâmico que aumenta o fluxo de clientes e fortalece a identidade visual do seu negócio.",
    benefits: [
      "Aumento comprovado no fluxo de clientes",
      "Conteúdo dinâmico e atualizado em tempo real",
      "Alta visibilidade mesmo sob luz solar direta",
      "Personalização completa de tamanho e formato",
    ],
    useCases: ["Vitrines interativas", "Fachadas luminosas", "Menu boards digitais", "Sinalização interna"],
  },
  {
    slug: "totems",
    title: "Totens de LED",
    description:
      "Totens de LED que oferecem comunicação visual impactante, adaptável a qualquer espaço.",
    icon: "Monitor",
    longDescription:
      "Totens de LED são a solução perfeita para comunicação visual de alto impacto em espaços públicos e comerciais. Com design moderno e modular, nossos totens podem ser instalados em shoppings, aeroportos, recepções e praças, exibindo conteúdo publicitário, informativo ou institucional com qualidade cinematográfica.",
    benefits: [
      "Design modular adaptável a qualquer espaço",
      "Gerenciamento remoto de conteúdo",
      "Alta durabilidade e resistência",
      "Opções indoor e outdoor disponíveis",
    ],
    useCases: ["Shoppings e centros comerciais", "Recepções corporativas", "Aeroportos e terminais", "Praças e espaços públicos"],
  },
  {
    slug: "residential",
    title: "Residencial",
    description:
      "Painéis de LED que trazem eficiência e personalização, transformando ambientes residenciais.",
    icon: "Home",
    longDescription:
      "Leve a sofisticação dos painéis de LED para sua residência. Nossas soluções residenciais são projetadas para criar ambientes únicos — desde home theaters com imersão total até painéis decorativos que transformam paredes em obras de arte viva. Tudo com controle inteligente via smartphone.",
    benefits: [
      "Ambientação personalizada por cômodo",
      "Controle via smartphone e automação residencial",
      "Baixo consumo de energia",
      "Instalação limpa e sem obras extensas",
    ],
    useCases: ["Home theaters imersivos", "Painéis decorativos", "Iluminação de jardins", "Espaços gourmet"],
  },
  {
    slug: "outdoor",
    title: "Outdoor",
    description:
      "Soluções de LED para ambientes externos com alta visibilidade e durabilidade.",
    icon: "Sun",
    longDescription:
      "Nossos painéis outdoor são projetados para resistir às intempéries e oferecer máxima visibilidade sob qualquer condição climática. Ideais para fachadas, postos de combustível, rodovias e eventos ao ar livre, com brilho intenso que garante leitura perfeita mesmo sob sol direto.",
    benefits: [
      "Resistência a chuva, vento e temperaturas extremas",
      "Alto brilho para visibilidade sob luz solar direta",
      "Certificação IP65 contra água e poeira",
      "Manutenção simplificada com módulos removíveis",
    ],
    useCases: ["Fachadas de edifícios", "Postos de combustível", "Painéis rodoviários", "Praças e parques"],
  },
  {
    slug: "show-business",
    title: "Show Business",
    description:
      "Painéis de LED para shows e eventos, criando experiências visuais inesquecíveis.",
    icon: "Music",
    longDescription:
      "Crie experiências visuais inesquecíveis com nossos painéis de LED para shows e eventos. Oferecemos soluções de montagem rápida, alta resolução e sincronização perfeita com som e iluminação. Do palco ao backdrop, entregamos o impacto visual que seu evento merece.",
    benefits: [
      "Montagem e desmontagem rápida para eventos",
      "Sincronização com sistemas de som e iluminação",
      "Resolução ultra-alta para close-ups de câmera",
      "Estruturas leves e modulares para turnês",
    ],
    useCases: ["Shows e festivais", "Eventos corporativos", "Congressos e feiras", "Casamentos e formaturas"],
  },
] as const;

export const address = {
  street: "Av. Melvin Jones, 510",
  city: "Maringá, PR",
  phone: "(44) 98811-7615",
} as const;

export const socialLinks = [
  { label: "Instagram", href: "https://instagram.com/nuvemled", icon: "Instagram" },
] as const;

export const values = [
  {
    icon: "Lightbulb",
    title: "Inovação",
    description: "Criamos soluções de iluminação que transcendem o convencional, sempre buscando novas tecnologias e abordagens.",
  },
  {
    icon: "Users",
    title: "Parceria",
    description: "Nossos clientes são parceiros. Trabalhamos juntos para entender necessidades e entregar valor excepcional.",
  },
  {
    icon: "Shield",
    title: "Qualidade",
    description: "Cada projeto é executado com excelência, garantindo durabilidade, eficiência e satisfação total.",
  },
] as const;

export const faqItems = [
  {
    question: "Quais tipos de painéis de LED vocês oferecem?",
    answer:
      "Oferecemos painéis de LED para diversos segmentos: igrejas, comércios, totens digitais, residências, outdoors e show business. Cada solução é personalizada de acordo com o espaço, necessidade e orçamento do cliente.",
  },
  {
    question: "Qual é o prazo de instalação?",
    answer:
      "O prazo varia conforme o tamanho e complexidade do projeto. Instalações menores podem ser concluídas em poucos dias, enquanto projetos maiores podem levar algumas semanas. Após a aprovação do orçamento, informamos o cronograma detalhado.",
  },
  {
    question: "Os painéis de LED consomem muita energia?",
    answer:
      "Não. Os painéis de LED são altamente eficientes em termos de consumo energético — até 70% mais econômicos que projetores tradicionais. Além disso, possuem vida útil superior a 100.000 horas de uso.",
  },
  {
    question: "Vocês atendem fora de Maringá?",
    answer:
      "Sim! Atendemos em todo o Paraná e também realizamos projetos em outros estados. Entre em contato para verificarmos a viabilidade para a sua região.",
  },
  {
    question: "Como funciona o suporte técnico?",
    answer:
      "Oferecemos suporte técnico completo, incluindo manutenção preventiva e corretiva. Nossa equipe está disponível para atendimento remoto e presencial, garantindo o funcionamento contínuo do seu painel.",
  },
  {
    question: "É possível atualizar o conteúdo do painel remotamente?",
    answer:
      "Sim. Nossos painéis contam com sistema de gerenciamento remoto, permitindo que você atualize imagens, vídeos e textos de qualquer lugar, a qualquer momento, através de um software intuitivo.",
  },
] as const;
