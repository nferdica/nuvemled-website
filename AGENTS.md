# AGENTS.md — Fonte de Verdade do Projeto

## Visão Geral

Site institucional da **NuvemLED** — empresa de painéis de LED sediada em Maringá/PR. O site apresenta os serviços (venda e aluguel), segmentos atendidos e canal de contato via WhatsApp.

**URL de produção:** https://nuvemled.com.br

## Stack

- **Framework:** Next.js 16.1.6 (App Router, SSG)
- **React:** 19.2.3
- **Linguagem:** TypeScript 5.x
- **Estilização:** Tailwind CSS 4.x
- **Animações:** Framer Motion 12.x
- **Ícones:** Lucide React (gerais) + SVGs inline (WhatsApp, Instagram)
- **Deploy:** Docker (standalone) → Easypanel via webhook
- **CI/CD:** GitHub Actions (lint + build + deploy)

## Convenções

### Git

- Branch principal: `main`
- Branch de desenvolvimento: `develop`
- Fluxo: `develop` → PR → `main` → deploy automático
- Commits seguem Conventional Commits (`feat:`, `fix:`, `perf:`, `docs:`, `refactor:`)

### Código

- Componentes em `src/components/` (PascalCase arquivo e export)
- Seções da homepage em `src/components/sections/`
- Componentes UI reutilizáveis em `src/components/ui/`
- Páginas seguem a convenção App Router do Next.js (`page.tsx`, `layout.tsx` — lowercase obrigatório)
- Constantes em camelCase (`site`, `services`, `navLinks`) — não usar UPPER_SNAKE_CASE
- Dados centralizados em `src/lib/constants.ts` — nunca hardcode no JSX
- Ícones de serviço centralizados em `src/lib/icons.tsx` via `serviceIconMap`
- URL do WhatsApp via helper `getWhatsAppUrl()` — nunca construir manualmente
- Imagens em `public/` no formato WebP (otimizadas via TinyPNG)
- Sem `console.log` no código — manter limpo

### Estilização

- Tailwind CSS utility classes direto no JSX
- Cores customizadas definidas em `globals.css`:
  - `--color-primary`: #14107E (azul)
  - `--color-primary-dark`: #0B0B31 (azul escuro)
  - `--color-accent-purple`: #430A7D (roxo)
  - `--color-accent-magenta`: #600088
  - `--color-accent-violet`: #8702A1
  - `--color-neutral-dark`: #1A1A1A
  - `--color-neutral-light`: #E1E1E1
- Seções dark usam `<Section dark>`, seções light usam `<Section>`
- Gradiente hero: `bg-linear-135 from-primary-dark via-primary to-accent-purple`

## Arquitetura de Dados

O array `services` em `constants.ts` é a fonte única de verdade para:
- Grid de serviços na homepage (`ServicesGridSection`)
- Páginas dinâmicas `/services/[slug]`
- Links do dropdown no header (derivados de `navLinks`)
- Sitemap XML
- Geração de rotas estáticas (`generateStaticParams`)

Cada serviço tem: `slug`, `title`, `description`, `icon`, `longDescription`, `benefits[]`, `useCases[]`.

Para adicionar um novo serviço:
1. Adicionar objeto no array `services` em `constants.ts`
2. Adicionar link em `navLinks` → children de "Serviços"
3. Se o ícone for novo, adicionar import e mapeamento em `serviceIconMap` (`icons.tsx`)

## Páginas

| Rota | Arquivo | Descrição |
|------|---------|-----------|
| `/` | `app/page.tsx` | Homepage (composição de 7 sections + mapa) |
| `/services` | `app/services/page.tsx` | Grid de todos os serviços |
| `/services/[slug]` | `app/services/[slug]/page.tsx` | Detalhe do serviço (SSG) |
| `/about` | `app/about/page.tsx` | Sobre a empresa e valores |
| `/contact` | `app/contact/page.tsx` | Contato via WhatsApp |
| `404` | `app/not-found.tsx` | Página não encontrada (identidade visual) |

## Componentes

### Layout

| Componente | Arquivo | Descrição |
|-----------|---------|-----------|
| `Header` | `components/Header.tsx` | Nav com dropdown desktop + menu mobile. Usa `key={pathname}` para reset de estado (React 19) |
| `Footer` | `components/Footer.tsx` | Links, contato, redes sociais |

### Seções da Homepage

| Componente | Arquivo | Descrição |
|-----------|---------|-----------|
| `HeroSection` | `components/sections/HeroSection.tsx` | Hero com imagens WebP (desktop/mobile) |
| `MarqueeBanner` | `components/sections/MarqueeBanner.tsx` | Banner animado com marquee CSS |
| `SalesRentalSection` | `components/sections/SalesRentalSection.tsx` | Venda e aluguel com CTAs WhatsApp |
| `ServicesGridSection` | `components/sections/ServicesGridSection.tsx` | Grid de serviços data-driven |
| `PhilosophySection` | `components/sections/PhilosophySection.tsx` | Filosofia da empresa |
| `FaqSection` | `components/sections/FaqSection.tsx` | Wrapper da seção de FAQ |
| `CtaSection` | `components/sections/CtaSection.tsx` | Call-to-action final |

### UI Reutilizáveis

| Componente | Arquivo | Descrição |
|-----------|---------|-----------|
| `Section` | `components/ui/Section.tsx` | Wrapper de seção com prop `dark` |
| `AnimateOnScroll` | `components/ui/AnimateOnScroll.tsx` | Framer Motion fade-up on viewport |
| `PageHero` | `components/ui/PageHero.tsx` | Hero com gradiente para subpáginas |
| `LedGridPattern` | `components/ui/LedGridPattern.tsx` | Pattern SVG decorativo |

### Outros

| Componente | Arquivo | Descrição |
|-----------|---------|-----------|
| `FaqAccordion` | `components/FaqAccordion.tsx` | Accordion com dados do `faqItems` |
| `WhatsAppFAB` | `components/WhatsAppFAB.tsx` | Botão flutuante fixo no canto inferior |
| `GoogleMap` | `components/GoogleMap.tsx` | iframe do Google Maps |

### Utilitários

| Export | Arquivo | Descrição |
|--------|---------|-----------|
| `serviceIconMap` | `lib/icons.tsx` | Mapeamento de ícones Lucide por nome do serviço |
| `WhatsAppIcon` | `lib/icons.tsx` | SVG inline do WhatsApp |
| `InstagramIcon` | `lib/icons.tsx` | SVG inline do Instagram |
| `getWhatsAppUrl()` | `lib/constants.ts` | Gera URL do WhatsApp com mensagem customizável |

## SEO

- `metadataBase`: https://nuvemled.com.br
- Open Graph image: `public/og-image.png` (2455x1288)
- Structured Data: JSON-LD `LocalBusiness` no `layout.tsx`
- Sitemap: gerado dinamicamente a partir de `services`
- robots.txt: index/follow habilitado
- Página 404 customizada
- Security headers configurados em `next.config.ts`

## Deploy

### CI/CD

O workflow `.github/workflows/ci-cd.yml` executa:
1. **build** (todo push/PR para main): checkout → Node 22 → npm ci → lint → build
2. **deploy** (apenas push na main): POST para `EASYPANEL_WEBHOOK`

### Docker

Dockerfile multi-stage (4 etapas):
1. `base`: node:22-alpine + libc6-compat
2. `deps`: npm ci
3. `builder`: npm run build
4. `runner`: standalone output, user `nextjs`, porta 3000

### Secret necessário

`EASYPANEL_WEBHOOK` — configurado em GitHub → Settings → Secrets → Actions

## Contato da Empresa

- **WhatsApp:** 5544988117615
- **Email:** contato@nuvemled.com.br
- **Endereço:** Av. Melvin Jones, 510 — Maringá, PR
- **CNPJ:** 33.907.401/0001-89
- **Instagram:** @nuvemled
