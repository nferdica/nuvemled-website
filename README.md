<p align="center">
  <img src="public/og-image.png" alt="NuvemLED" width="480" />
</p>

<p align="center">
  <strong>Site institucional da NuvemLED — soluções em painéis de LED para venda e aluguel.</strong>
</p>

<p align="center">
  <a href="https://nuvemled.com.br">nuvemled.com.br</a>
</p>

---

## Sobre

A **NuvemLED** é uma empresa especializada em painéis de LED, atendendo igrejas, comércios, totens digitais, residências, espaços outdoor e show business. Este repositório contém o site institucional da empresa, construído com foco em performance, SEO e experiência do usuário.

## Tech Stack

| Tecnologia | Versão | Uso |
|-----------|--------|-----|
| [Next.js](https://nextjs.org) | 16.1.6 | Framework React com SSG |
| [React](https://react.dev) | 19.2.3 | UI Library |
| [TypeScript](https://typescriptlang.org) | 5.x | Tipagem estática |
| [Tailwind CSS](https://tailwindcss.com) | 4.x | Estilização utility-first |
| [Framer Motion](https://motion.dev) | 12.x | Animações de scroll |
| [Lucide React](https://lucide.dev) | 0.577 | Ícones |

## Estrutura do Projeto

```
src/
├── app/
│   ├── page.tsx                  # Homepage (composição de sections)
│   ├── layout.tsx                # Root layout (metadata, SEO, structured data)
│   ├── not-found.tsx             # Página 404 customizada
│   ├── globals.css               # Estilos globais e tema de cores
│   ├── robots.ts                 # Configuração robots.txt
│   ├── sitemap.ts                # Sitemap XML dinâmico
│   ├── contato/page.tsx          # Página de contato
│   ├── sobre/page.tsx            # Página sobre
│   └── servicos/
│       ├── page.tsx              # Listagem de serviços
│       └── [slug]/page.tsx       # Página dinâmica de cada serviço
├── components/
│   ├── Header.tsx                # Navegação com dropdown e menu mobile
│   ├── Footer.tsx                # Footer com links e informações
│   ├── WhatsAppFAB.tsx           # Botão flutuante do WhatsApp
│   ├── GoogleMap.tsx             # Mapa do Google embeddado
│   ├── FaqAccordion.tsx          # Accordion de perguntas frequentes
│   ├── sections/
│   │   ├── HeroSection.tsx       # Hero principal com imagem de fundo
│   │   ├── MarqueeBanner.tsx     # Banner animado com marquee
│   │   ├── VendaAluguelSection.tsx # Seção de venda e aluguel
│   │   ├── ServicesGridSection.tsx  # Grid de serviços
│   │   ├── PhilosophySection.tsx # Seção de filosofia da empresa
│   │   ├── FaqSection.tsx        # Seção de perguntas frequentes
│   │   └── CtaSection.tsx        # Call-to-action final
│   └── ui/
│       ├── Section.tsx           # Wrapper de seção (light/dark)
│       ├── PageHero.tsx          # Hero reutilizável para subpáginas
│       ├── AnimateOnScroll.tsx   # Animação de entrada no scroll
│       └── LedGridPattern.tsx    # Pattern SVG decorativo
└── lib/
    ├── constants.ts              # Dados centralizados (serviços, FAQ, nav, contato)
    └── icons.tsx                 # Mapeamento de ícones e SVGs de marca (WhatsApp, Instagram)
```

## Começando

### Pré-requisitos

- Node.js 22+
- npm

### Instalação

```bash
git clone https://github.com/nferdica/nuvemled-website.git
cd nuvemled-website
npm install
```

### Desenvolvimento

```bash
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000).

### Build

```bash
npm run build
```

### Lint

```bash
npm run lint
```

## Deploy

O projeto usa **CI/CD com GitHub Actions** + **Easypanel**:

```
Push/PR → main  →  lint + build  →  validação
Push → main     →  lint + build  →  webhook POST  →  Easypanel rebuild
```

### Docker

O projeto inclui um `Dockerfile` multi-stage otimizado:

```bash
docker build -t nuvemled .
docker run -p 3000:3000 nuvemled
```

A imagem final usa `output: "standalone"` do Next.js (~330MB vs ~1GB com node_modules completo).

### Variáveis de ambiente

| Secret | Onde configurar | Descrição |
|--------|----------------|-----------|
| `EASYPANEL_WEBHOOK` | GitHub Secrets | URL do webhook de deploy do Easypanel |

## Arquitetura

### Data-Driven

Todo o conteúdo de serviços, FAQ, navegação e informações de contato vem de `src/lib/constants.ts`. Para adicionar um novo serviço, basta inserir um item no array `services` e o link em `navLinks` — a página dinâmica `[slug]`, o sitemap, o grid e a navegação se atualizam automaticamente.

### Componentização

A homepage é composta por seções independentes em `src/components/sections/`, cada uma responsável por uma parte da página. Ícones de serviço são centralizados em `src/lib/icons.tsx` via `serviceIconMap`, e a URL do WhatsApp é gerada pelo helper `getWhatsAppUrl()` em `constants.ts`.

### SEO

- Meta tags Open Graph com imagem customizada
- Structured Data (JSON-LD) para LocalBusiness
- Sitemap XML gerado dinamicamente
- robots.txt configurado
- Página 404 customizada com identidade visual
- Security headers (X-Content-Type-Options, X-Frame-Options, X-XSS-Protection, Referrer-Policy)

### Performance

- Imagens hero em WebP com versões desktop/mobile responsivas
- Imagens comprimidas via TinyPNG
- Next.js standalone output para Docker
- Font optimization com `next/font`

## Licença

Propriedade da NuvemLED. Todos os direitos reservados.
