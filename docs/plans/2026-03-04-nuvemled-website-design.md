# NuvemLED Website Design

## Overview

Clone do site azullight.com.br adaptado para a marca NuvemLED, usando a identidade visual do Figma (cores, logos). Todas as seções exceto e-commerce.

## Architecture

**Multi-Page** — cada seção principal como rota independente no Next.js App Router.

### Stack

- Next.js 14 (App Router)
- Tailwind CSS (design tokens customizados)
- Framer Motion (animações de scroll)
- TypeScript
- Lucide React (ícones)

## Pages

| Route | Page | Description |
|-------|------|-------------|
| `/` | Home | Hero + resumo serviços + filosofia + CTA |
| `/servicos` | Serviços | Grid das 6 categorias de LED |
| `/servicos/[slug]` | Detalhe | Página individual por categoria |
| `/portfolio` | Portfólio | Galeria de instalações |
| `/sobre` | Sobre Nós | Filosofia, atuação, valores |
| `/clientes` | Clientes | Logos de clientes |
| `/contato` | Contato | Formulário + WhatsApp + filiais |

### Service Categories (slugs)

1. `igrejas` — Igrejas
2. `comercio` — Comércio
3. `totens` — Totens de LED
4. `residencial` — Residencial
5. `outdoor` — Outdoor
6. `show-business` — Show Business

## Brand Identity (from Figma)

**Source:** https://www.figma.com/design/uL65CFWyEx4iECiIWBfoVX/Sem-titulo

### Logo

- Cloud icon + "nuvemled" text (rounded modern sans-serif)
- 3 variants: White (on dark bg), Blue (#14107E), Black

### Color Palette

| Token | Hex | Usage |
|-------|-----|-------|
| `primary` | `#14107E` | Buttons, links, highlights, logo |
| `primary-dark` | `#0B0B31` | Dark backgrounds, hero |
| `primary-medium` | `#000960` | Gradients, hover states |
| `accent-purple` | `#430A7D` | Gradients, accents |
| `accent-magenta` | `#600088` | Decorative details |
| `accent-violet` | `#8702A1` | Decorative details, gradients |
| `neutral-light` | `#E1E1E1` | Light backgrounds, borders |
| `neutral-white` | `#FFFFFF` | Text on dark bg, cards |
| `neutral-dark` | `#1A1A1A` | Body text |

## Layout Components

### Header (global, fixed)

- Logo NuvemLED (left)
- Nav: Home | Serviços (dropdown) | Portfólio | Sobre | Clientes | Contato
- CTA button: "Fale Conosco" (WhatsApp link)
- Blur/transparency on scroll

### Footer (global)

- Logo + CNPJ + email
- Nav links mirror
- Social: Instagram, YouTube, TikTok, Facebook
- Branch addresses with phones

### WhatsApp FAB (global)

- Floating bottom-right on all pages
- Pre-filled message

## Page Sections

### Home (`/`)

1. **Hero** — Dark bg (`primary-dark`) with gradient, headline, CTA, image/video
2. **Services Grid** — 3x2 grid with 6 categories (icon + title + link)
3. **Philosophy** — Impact statement + image
4. **Final CTA** — "Entre em contato" + WhatsApp button

### Services Index (`/servicos`)

- Grid of 6 category cards (image, title, description, link)

### Service Detail (`/servicos/[slug]`)

- Service description
- YouTube video embed
- Image gallery
- CTA to contact

### Portfolio (`/portfolio`)

- Image grid (masonry or regular)
- Lightbox for full-screen view

### About (`/sobre`)

- Company philosophy
- Coverage area (states/cities)
- Values/differentials

### Clients (`/clientes`)

- Logo grid of client brands
- Optional testimonials

### Contact (`/contato`)

- Contact form
- WhatsApp button
- Branch addresses with phones

## Content

All content uses placeholders for MVP. Real content to be substituted later.

## Responsive

- Mobile-first design
- Hamburger menu on mobile
- Stacked layouts on small screens
- Full grid layouts on desktop
