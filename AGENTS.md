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
- **Ícones:** Lucide React + React Icons (Instagram)
- **Deploy:** Docker (standalone) → Easypanel via webhook
- **CI/CD:** GitHub Actions (lint + build + deploy)

## Convenções

### Git

- Branch principal: `main`
- Branch de desenvolvimento: `develop`
- Fluxo: `develop` → PR → `main` → deploy automático
- Commits seguem Conventional Commits (`feat:`, `fix:`, `perf:`, `docs:`)

### Código

- Componentes em `src/components/` (PascalCase export, kebab-case arquivo)
- Componentes UI reutilizáveis em `src/components/ui/`
- Páginas seguem a convenção App Router do Next.js
- Dados centralizados em `src/lib/constants.ts` — nunca hardcode no JSX
- Imagens em `public/` no formato WebP (otimizadas via TinyPNG)
- Sem `console.log` no código — manter limpo

### Estilização

- Tailwind CSS utility classes direto no JSX
- Cores customizadas definidas em `globals.css`:
  - `--color-primary`: #14107E (azul)
  - `--color-primary-dark`: #0B0B31 (azul escuro)
  - `--color-accent-purple`: #430A7D (roxo)
  - `--color-neutral-dark`: #1A1A2E
  - `--color-neutral-light`: #F0F0F5
- Seções dark usam `<Section dark>`, seções light usam `<Section>`
- Gradiente hero: `bg-linear-135 from-primary-dark via-primary to-accent-purple`

## Arquitetura de Dados

O array `SERVICES` em `constants.ts` é a fonte única de verdade para:
- Grid de serviços na homepage
- Páginas dinâmicas `/servicos/[slug]`
- Links do dropdown no header
- Sitemap XML
- Geração de rotas estáticas (`generateStaticParams`)

Cada serviço tem: `slug`, `title`, `description`, `icon`, `longDescription`, `benefits[]`, `useCases[]`.

Para adicionar um novo serviço:
1. Adicionar objeto no array `SERVICES`
2. Adicionar link em `NAV_LINKS` → children de "Serviços"
3. Adicionar mapeamento de ícone em `serviceIconMap` (header.tsx) e `iconMap` (page.tsx, servicos/page.tsx, servicos/[slug]/page.tsx)

## Páginas

| Rota | Arquivo | Descrição |
|------|---------|-----------|
| `/` | `app/page.tsx` | Homepage (hero, venda/aluguel, serviços, filosofia, FAQ, CTA, mapa) |
| `/servicos` | `app/servicos/page.tsx` | Grid de todos os serviços |
| `/servicos/[slug]` | `app/servicos/[slug]/page.tsx` | Detalhe do serviço (SSG) |
| `/sobre` | `app/sobre/page.tsx` | Sobre a empresa e valores |
| `/contato` | `app/contato/page.tsx` | Contato via WhatsApp |

## Componentes Principais

| Componente | Arquivo | Descrição |
|-----------|---------|-----------|
| `Header` | `components/header.tsx` | Nav com dropdown desktop + menu mobile. Usa `key={pathname}` para reset de estado |
| `Footer` | `components/footer.tsx` | Links, contato, redes sociais |
| `Logo` | `components/logo.tsx` | SVG inline com variantes de cor (white/blue/black) |
| `Section` | `components/ui/section.tsx` | Wrapper de seção com prop `dark` |
| `AnimateOnScroll` | `components/ui/animate-on-scroll.tsx` | Framer Motion fade-up on viewport |
| `PageHero` | `components/ui/page-hero.tsx` | Hero com gradiente para subpáginas |
| `FaqAccordion` | `components/faq-accordion.tsx` | Accordion com dados do `FAQ_ITEMS` |
| `WhatsAppFAB` | `components/whatsapp-fab.tsx` | Botão flutuante fixo no canto inferior |
| `GoogleMap` | `components/google-map.tsx` | iframe do Google Maps |

## SEO

- `metadataBase`: https://nuvemled.com.br
- Open Graph image: `public/og-image.png` (2455x1288)
- Structured Data: JSON-LD `LocalBusiness` no `layout.tsx`
- Sitemap: gerado dinamicamente a partir de `SERVICES`
- robots.txt: index/follow habilitado
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
