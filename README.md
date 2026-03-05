<p align="center">
  <img src="public/logo-dark.svg" alt="NuvemLED" width="320" />
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
│   ├── page.tsx                  # Homepage
│   ├── layout.tsx                # Root layout (metadata, SEO, structured data)
│   ├── globals.css               # Estilos globais e tema de cores
│   ├── robots.ts                 # Configuração robots.txt
│   ├── sitemap.ts                # Sitemap XML dinâmico
│   ├── contato/page.tsx          # Página de contato
│   ├── sobre/page.tsx            # Página sobre
│   └── servicos/
│       ├── page.tsx              # Listagem de serviços
│       └── [slug]/page.tsx       # Página dinâmica de cada serviço
├── components/
│   ├── header.tsx                # Navegação com dropdown e menu mobile
│   ├── footer.tsx                # Footer com links e informações
│   ├── logo.tsx                  # Logo SVG (variantes white/blue/black)
│   ├── whatsapp-fab.tsx          # Botão flutuante do WhatsApp
│   ├── google-map.tsx            # Mapa do Google embeddado
│   ├── faq-accordion.tsx         # Accordion de perguntas frequentes
│   └── ui/
│       ├── section.tsx           # Wrapper de seção (light/dark)
│       ├── page-hero.tsx         # Hero reutilizável para subpáginas
│       ├── animate-on-scroll.tsx # Animação de entrada no scroll
│       └── led-grid-pattern.tsx  # Pattern SVG decorativo
└── lib/
    └── constants.ts              # Dados centralizados (serviços, FAQ, nav, contato)
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
Push/PR → main  →  lint + build  →  ✅ validação
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

Todo o conteúdo de serviços, FAQ, navegação e informações de contato vem de `src/lib/constants.ts`. Para adicionar um novo serviço, basta inserir um item no array `SERVICES` — a página dinâmica `[slug]`, o sitemap e a navegação se atualizam automaticamente.

### SEO

- Meta tags Open Graph com imagem customizada
- Structured Data (JSON-LD) para LocalBusiness
- Sitemap XML gerado dinamicamente
- robots.txt configurado
- Security headers (X-Content-Type-Options, X-Frame-Options, X-XSS-Protection, Referrer-Policy)

### Performance

- Imagens hero em WebP com versões desktop/mobile responsivas
- Imagens comprimidas via TinyPNG
- Next.js standalone output para Docker
- Font optimization com `next/font`

## Licença

Propriedade da NuvemLED. Todos os direitos reservados.
