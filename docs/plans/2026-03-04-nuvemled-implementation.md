# NuvemLED Website Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Build a multi-page Next.js website for NuvemLED (LED panel company) inspired by azullight.com.br, using NuvemLED's brand identity from Figma.

**Architecture:** Next.js 14 App Router with Tailwind CSS. Each major section is a separate route. Shared layout with Header, Footer, and WhatsApp FAB. Placeholder content throughout, ready for real content substitution later.

**Tech Stack:** Next.js 14, TypeScript, Tailwind CSS, Framer Motion, Lucide React

---

## Task 1: Scaffold Next.js Project

**Files:**
- Create: `package.json`, `tsconfig.json`, `tailwind.config.ts`, `next.config.mjs`, `postcss.config.mjs`
- Create: `src/app/layout.tsx`, `src/app/page.tsx`, `src/app/globals.css`

**Step 1: Create Next.js project**

Run:
```bash
cd /home/nferdica/Projects/nuvemled-website
npx create-next-app@latest . --typescript --tailwind --eslint --app --src-dir --import-alias "@/*" --use-npm
```

Accept overwriting existing files if prompted. Select defaults for all prompts.

**Step 2: Install additional dependencies**

Run:
```bash
npm install framer-motion lucide-react
```

**Step 3: Verify project runs**

Run:
```bash
npm run dev &
sleep 5 && curl -s http://localhost:3000 | head -20
kill %1
```

Expected: HTML output from the default Next.js page.

**Step 4: Commit**

```bash
git add -A
git commit -m "chore: scaffold Next.js project with Tailwind, Framer Motion, Lucide"
```

---

## Task 2: Configure Brand Design Tokens

**Files:**
- Modify: `tailwind.config.ts`
- Modify: `src/app/globals.css`
- Create: `src/lib/constants.ts`

**Step 1: Configure Tailwind with NuvemLED brand colors**

Replace `tailwind.config.ts` with:

```ts
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#14107E",
          dark: "#0B0B31",
          medium: "#000960",
        },
        accent: {
          purple: "#430A7D",
          magenta: "#600088",
          violet: "#8702A1",
        },
        neutral: {
          light: "#E1E1E1",
          white: "#FFFFFF",
          dark: "#1A1A1A",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
```

**Step 2: Set up global CSS with brand gradients**

Replace `src/app/globals.css` with:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  body {
    @apply bg-neutral-white text-neutral-dark antialiased;
  }
}

@layer components {
  .gradient-hero {
    background: linear-gradient(135deg, #0B0B31 0%, #14107E 50%, #430A7D 100%);
  }
  .gradient-accent {
    background: linear-gradient(135deg, #14107E 0%, #600088 50%, #8702A1 100%);
  }
  .gradient-dark {
    background: linear-gradient(180deg, #0B0B31 0%, #000960 100%);
  }
}
```

**Step 3: Create constants file with site data**

Create `src/lib/constants.ts`:

```ts
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
```

**Step 4: Commit**

```bash
git add tailwind.config.ts src/app/globals.css src/lib/constants.ts
git commit -m "feat: configure brand design tokens, colors, and site constants"
```

---

## Task 3: Create Logo SVG Component

**Files:**
- Create: `src/components/logo.tsx`

**Step 1: Create the NuvemLED logo component**

The logo is a cloud icon + "nuvemled" text. Create `src/components/logo.tsx`:

```tsx
import Link from "next/link";

type LogoVariant = "white" | "blue" | "black";

interface LogoProps {
  variant?: LogoVariant;
  className?: string;
  showText?: boolean;
}

const variantColors: Record<LogoVariant, string> = {
  white: "#FFFFFF",
  blue: "#14107E",
  black: "#000000",
};

export function Logo({ variant = "white", className = "", showText = true }: LogoProps) {
  const color = variantColors[variant];

  return (
    <Link href="/" className={`inline-flex items-center gap-2 ${className}`}>
      {/* Cloud Icon */}
      <svg
        width="40"
        height="28"
        viewBox="0 0 40 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M32.5 10.5C32.5 10.5 32 5 27 3C22 1 18.5 4 18.5 4C18.5 4 16 0 11 1C6 2 5 7 5 7C5 7 0 8 0 13.5C0 19 4.5 21 4.5 21H33C33 21 40 20 40 14C40 8 32.5 10.5 32.5 10.5Z"
          fill={color}
        />
      </svg>
      {showText && (
        <span
          className="text-xl font-bold tracking-tight"
          style={{ color }}
        >
          nuvemled
        </span>
      )}
    </Link>
  );
}
```

**Step 2: Commit**

```bash
git add src/components/logo.tsx
git commit -m "feat: add NuvemLED logo SVG component with variants"
```

---

## Task 4: Build Header Component

**Files:**
- Create: `src/components/header.tsx`

**Step 1: Create responsive header with navigation**

Create `src/components/header.tsx`:

```tsx
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, MessageCircle } from "lucide-react";
import { Logo } from "./logo";
import { NAV_LINKS, SITE } from "@/lib/constants";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setOpenDropdown(null);
  }, [pathname]);

  const whatsappUrl = `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(SITE.whatsappMessage)}`;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-primary-dark/90 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <Logo variant="white" />

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <div
                key={link.label}
                className="relative"
                onMouseEnter={() =>
                  "children" in link ? setOpenDropdown(link.label) : undefined
                }
                onMouseLeave={() => setOpenDropdown(null)}
              >
                {"children" in link ? (
                  <>
                    <button className="flex items-center gap-1 text-sm font-medium text-white/80 hover:text-white transition-colors">
                      {link.label}
                      <ChevronDown className="h-4 w-4" />
                    </button>
                    {openDropdown === link.label && (
                      <div className="absolute top-full left-0 mt-2 w-48 rounded-lg bg-white shadow-xl py-2">
                        {link.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="block px-4 py-2 text-sm text-neutral-dark hover:bg-primary/5 hover:text-primary transition-colors"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={link.href}
                    className={`text-sm font-medium transition-colors ${
                      pathname === link.href
                        ? "text-white"
                        : "text-white/80 hover:text-white"
                    }`}
                  >
                    {link.label}
                  </Link>
                )}
              </div>
            ))}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-primary hover:bg-neutral-light transition-colors"
            >
              <MessageCircle className="h-4 w-4" />
              Fale Conosco
            </a>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-white p-2"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Nav */}
        {isOpen && (
          <nav className="lg:hidden pb-6 space-y-2">
            {NAV_LINKS.map((link) => (
              <div key={link.label}>
                {"children" in link ? (
                  <>
                    <button
                      onClick={() =>
                        setOpenDropdown(
                          openDropdown === link.label ? null : link.label
                        )
                      }
                      className="flex w-full items-center justify-between py-2 text-white/80"
                    >
                      {link.label}
                      <ChevronDown
                        className={`h-4 w-4 transition-transform ${
                          openDropdown === link.label ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {openDropdown === link.label && (
                      <div className="pl-4 space-y-1">
                        {link.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="block py-1.5 text-sm text-white/60 hover:text-white"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={link.href}
                    className="block py-2 text-white/80 hover:text-white"
                  >
                    {link.label}
                  </Link>
                )}
              </div>
            ))}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-primary mt-4"
            >
              <MessageCircle className="h-4 w-4" />
              Fale Conosco
            </a>
          </nav>
        )}
      </div>
    </header>
  );
}
```

**Step 2: Commit**

```bash
git add src/components/header.tsx
git commit -m "feat: add responsive header with navigation and mobile menu"
```

---

## Task 5: Build Footer Component

**Files:**
- Create: `src/components/footer.tsx`

**Step 1: Create footer with branches, socials, and nav**

Create `src/components/footer.tsx`:

```tsx
import Link from "next/link";
import { Logo } from "./logo";
import { NAV_LINKS, SITE, BRANCHES, SOCIAL_LINKS } from "@/lib/constants";
import {
  Instagram,
  Youtube,
  Music2,
  Facebook,
  Phone,
  MapPin,
} from "lucide-react";

const iconMap: Record<string, React.ElementType> = {
  Instagram,
  Youtube,
  Music2,
  Facebook,
};

export function Footer() {
  return (
    <footer className="bg-primary-dark text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <Logo variant="white" />
            <p className="text-sm text-white/60">{SITE.cnpj}</p>
            <a
              href={`mailto:${SITE.email}`}
              className="text-sm text-white/60 hover:text-white transition-colors"
            >
              {SITE.email}
            </a>
          </div>

          {/* Nav */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">
              Navegação
            </h3>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Branches */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">
              Filiais
            </h3>
            <div className="space-y-4">
              {BRANCHES.map((branch) => (
                <div key={branch.city} className="space-y-1">
                  <p className="text-sm font-semibold">{branch.city}</p>
                  <p className="text-xs text-white/60 flex items-center gap-1">
                    <Phone className="h-3 w-3" />
                    {branch.phone}
                  </p>
                  <p className="text-xs text-white/60 flex items-center gap-1">
                    <MapPin className="h-3 w-3" />
                    {branch.address}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">
              Nossas Redes
            </h3>
            <div className="flex gap-3">
              {SOCIAL_LINKS.map((social) => {
                const Icon = iconMap[social.icon];
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                    aria-label={social.label}
                  >
                    {Icon && <Icon className="h-5 w-5" />}
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 text-center">
          <p className="text-xs text-white/40">
            &copy; {new Date().getFullYear()} {SITE.name} &mdash; Todos os direitos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
```

**Step 2: Commit**

```bash
git add src/components/footer.tsx
git commit -m "feat: add footer with branches, social links, and navigation"
```

---

## Task 6: Build WhatsApp FAB and Root Layout

**Files:**
- Create: `src/components/whatsapp-fab.tsx`
- Modify: `src/app/layout.tsx`

**Step 1: Create WhatsApp floating action button**

Create `src/components/whatsapp-fab.tsx`:

```tsx
"use client";

import { MessageCircle } from "lucide-react";
import { SITE } from "@/lib/constants";

export function WhatsAppFAB() {
  const url = `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(SITE.whatsappMessage)}`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-lg hover:bg-green-600 hover:scale-110 transition-all duration-200"
      aria-label="Contato via WhatsApp"
    >
      <MessageCircle className="h-7 w-7" />
    </a>
  );
}
```

**Step 2: Update root layout with Header, Footer, WhatsApp FAB**

Replace `src/app/layout.tsx`:

```tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { WhatsAppFAB } from "@/components/whatsapp-fab";
import { SITE } from "@/lib/constants";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: `${SITE.name} — ${SITE.tagline}`,
    template: `%s | ${SITE.name}`,
  },
  description: SITE.description,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={inter.variable}>
      <body className="font-sans">
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <WhatsAppFAB />
      </body>
    </html>
  );
}
```

**Step 3: Verify dev server compiles without errors**

Run: `npm run dev` — check for compile errors in terminal.

**Step 4: Commit**

```bash
git add src/components/whatsapp-fab.tsx src/app/layout.tsx
git commit -m "feat: add WhatsApp FAB and wire up root layout with Header/Footer"
```

---

## Task 7: Create Shared UI Components

**Files:**
- Create: `src/components/ui/section.tsx`
- Create: `src/components/ui/animate-on-scroll.tsx`
- Create: `src/components/ui/page-hero.tsx`

**Step 1: Create reusable Section wrapper**

Create `src/components/ui/section.tsx`:

```tsx
interface SectionProps {
  children: React.ReactNode;
  className?: string;
  dark?: boolean;
  id?: string;
}

export function Section({ children, className = "", dark, id }: SectionProps) {
  return (
    <section
      id={id}
      className={`py-20 px-4 sm:px-6 lg:px-8 ${
        dark ? "bg-primary-dark text-white" : "bg-white text-neutral-dark"
      } ${className}`}
    >
      <div className="mx-auto max-w-7xl">{children}</div>
    </section>
  );
}
```

**Step 2: Create scroll animation wrapper**

Create `src/components/ui/animate-on-scroll.tsx`:

```tsx
"use client";

import { motion } from "framer-motion";

interface AnimateOnScrollProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export function AnimateOnScroll({
  children,
  className = "",
  delay = 0,
}: AnimateOnScrollProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
```

**Step 3: Create reusable page hero**

Create `src/components/ui/page-hero.tsx`:

```tsx
import { AnimateOnScroll } from "./animate-on-scroll";

interface PageHeroProps {
  title: string;
  subtitle?: string;
}

export function PageHero({ title, subtitle }: PageHeroProps) {
  return (
    <div className="gradient-hero pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <AnimateOnScroll>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-4 text-lg text-white/70 max-w-2xl">{subtitle}</p>
          )}
        </AnimateOnScroll>
      </div>
    </div>
  );
}
```

**Step 4: Commit**

```bash
git add src/components/ui/
git commit -m "feat: add shared UI components (Section, AnimateOnScroll, PageHero)"
```

---

## Task 8: Build Home Page

**Files:**
- Modify: `src/app/page.tsx`

**Step 1: Build homepage with Hero, Services Grid, Philosophy, and CTA**

Replace `src/app/page.tsx`:

```tsx
import Link from "next/link";
import { ArrowRight, Church, Store, Monitor, Home, Sun, Music } from "lucide-react";
import { Section } from "@/components/ui/section";
import { AnimateOnScroll } from "@/components/ui/animate-on-scroll";
import { SITE, SERVICES } from "@/lib/constants";

const iconMap: Record<string, React.ElementType> = {
  Church,
  Store,
  Monitor,
  Home,
  Sun,
  Music,
};

export default function HomePage() {
  const whatsappUrl = `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(SITE.whatsappMessage)}`;

  return (
    <>
      {/* Hero */}
      <section className="relative gradient-hero min-h-screen flex items-center">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-32">
          <AnimateOnScroll>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight">
              AQUI, TODO
              <br />
              ESPAÇO É SEU
            </h1>
          </AnimateOnScroll>
          <AnimateOnScroll delay={0.2}>
            <p className="mt-6 text-lg sm:text-xl text-white/70 max-w-xl">
              Não acreditamos em fronteiras ou limitações. Quando olhamos para
              o céu não pensamos que ele seja o limite, mas sim o começo!
            </p>
          </AnimateOnScroll>
          <AnimateOnScroll delay={0.4}>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/servicos"
                className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-3 text-sm font-semibold text-primary hover:bg-neutral-light transition-colors"
              >
                CONHEÇA
                <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border-2 border-white/30 px-8 py-3 text-sm font-semibold text-white hover:bg-white/10 transition-colors"
              >
                Fale Conosco
              </a>
            </div>
          </AnimateOnScroll>
        </div>

        {/* Decorative video/image placeholder */}
        <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* Marquee banner */}
      <div className="bg-primary py-3 overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap">
          {Array.from({ length: 6 }).map((_, i) => (
            <span
              key={i}
              className="mx-8 text-sm font-semibold text-white/80 uppercase tracking-widest"
            >
              NuvemLED &bull; Todo Espaço é Seu &bull;
            </span>
          ))}
        </div>
      </div>

      {/* Services Grid */}
      <Section>
        <AnimateOnScroll>
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
            Seu LED
          </h2>
          <p className="text-center text-neutral-dark/60 max-w-2xl mx-auto mb-12">
            Soluções completas em painéis de LED para todos os segmentos.
          </p>
        </AnimateOnScroll>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, i) => {
            const Icon = iconMap[service.icon];
            return (
              <AnimateOnScroll key={service.slug} delay={i * 0.1}>
                <Link
                  href={`/servicos/${service.slug}`}
                  className="group block rounded-2xl border border-neutral-light p-8 hover:border-primary/30 hover:shadow-xl transition-all duration-300"
                >
                  {Icon && (
                    <Icon className="h-10 w-10 text-primary mb-4 group-hover:scale-110 transition-transform" />
                  )}
                  <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                  <p className="text-sm text-neutral-dark/60">
                    {service.description}
                  </p>
                  <span className="inline-flex items-center gap-1 mt-4 text-sm font-semibold text-primary">
                    Saiba mais
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              </AnimateOnScroll>
            );
          })}
        </div>
      </Section>

      {/* Philosophy */}
      <Section dark>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <AnimateOnScroll>
            <h2 className="text-3xl sm:text-4xl font-bold leading-tight">
              Somos mais do que uma empresa de Telas de LED.
            </h2>
            <p className="mt-4 text-white/70 text-lg">
              Somos arquitetos da luz, artistas da inovação, impulsionados pela
              visão de um futuro mais vibrante. Transformamos espaços comuns em
              experiências extraordinárias.
            </p>
          </AnimateOnScroll>
          <AnimateOnScroll delay={0.2}>
            <div className="aspect-video rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center">
              <span className="text-white/30 text-sm">
                Imagem / Vídeo Placeholder
              </span>
            </div>
          </AnimateOnScroll>
        </div>
      </Section>

      {/* CTA */}
      <Section className="text-center">
        <AnimateOnScroll>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Entre em contato e descubra como podemos fazer a diferença!
          </h2>
          <p className="text-neutral-dark/60 max-w-xl mx-auto mb-8">
            Transforme seus espaços com a tecnologia LED mais avançada do
            mercado.
          </p>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-white font-semibold hover:bg-primary-medium transition-colors"
          >
            Chame no WhatsApp
            <ArrowRight className="h-4 w-4" />
          </a>
        </AnimateOnScroll>
      </Section>
    </>
  );
}
```

**Step 2: Add marquee animation to Tailwind config**

Add to `tailwind.config.ts` inside `theme.extend`:

```ts
animation: {
  marquee: "marquee 20s linear infinite",
},
keyframes: {
  marquee: {
    "0%": { transform: "translateX(0%)" },
    "100%": { transform: "translateX(-50%)" },
  },
},
```

**Step 3: Verify homepage renders**

Run: `npm run dev` and check `http://localhost:3000` in browser.

**Step 4: Commit**

```bash
git add src/app/page.tsx tailwind.config.ts
git commit -m "feat: build homepage with hero, services grid, philosophy, and CTA"
```

---

## Task 9: Build Services Pages

**Files:**
- Create: `src/app/servicos/page.tsx`
- Create: `src/app/servicos/[slug]/page.tsx`

**Step 1: Create services index page**

Create `src/app/servicos/page.tsx`:

```tsx
import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight, Church, Store, Monitor, Home, Sun, Music } from "lucide-react";
import { PageHero } from "@/components/ui/page-hero";
import { Section } from "@/components/ui/section";
import { AnimateOnScroll } from "@/components/ui/animate-on-scroll";
import { SERVICES } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Serviços",
  description: "Soluções completas em painéis de LED para todos os segmentos.",
};

const iconMap: Record<string, React.ElementType> = {
  Church, Store, Monitor, Home, Sun, Music,
};

export default function ServicosPage() {
  return (
    <>
      <PageHero title="Serviços" subtitle="Soluções completas em painéis de LED para todos os segmentos." />
      <Section>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, i) => {
            const Icon = iconMap[service.icon];
            return (
              <AnimateOnScroll key={service.slug} delay={i * 0.1}>
                <Link
                  href={`/servicos/${service.slug}`}
                  className="group block rounded-2xl overflow-hidden border border-neutral-light hover:shadow-xl transition-all"
                >
                  <div className="aspect-video bg-neutral-light flex items-center justify-center">
                    <span className="text-neutral-dark/30 text-sm">Imagem Placeholder</span>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      {Icon && <Icon className="h-6 w-6 text-primary" />}
                      <h3 className="text-xl font-bold">{service.title}</h3>
                    </div>
                    <p className="text-sm text-neutral-dark/60 mb-4">{service.description}</p>
                    <span className="inline-flex items-center gap-1 text-sm font-semibold text-primary">
                      Ver detalhes <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </Link>
              </AnimateOnScroll>
            );
          })}
        </div>
      </Section>
    </>
  );
}
```

**Step 2: Create dynamic service detail page**

Create `src/app/servicos/[slug]/page.tsx`:

```tsx
import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { PageHero } from "@/components/ui/page-hero";
import { Section } from "@/components/ui/section";
import { AnimateOnScroll } from "@/components/ui/animate-on-scroll";
import { SERVICES, SITE } from "@/lib/constants";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);
  if (!service) return {};
  return { title: service.title, description: service.description };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);
  if (!service) notFound();

  const whatsappUrl = `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(`Gostaria de saber mais sobre ${service.title}!`)}`;

  return (
    <>
      <PageHero title={service.title} subtitle={service.description} />

      <Section>
        <div className="grid lg:grid-cols-2 gap-12">
          <AnimateOnScroll>
            <div className="space-y-6">
              <h2 className="text-2xl font-bold">Sobre este serviço</h2>
              <p className="text-neutral-dark/70 leading-relaxed">
                {service.description} Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris.
              </p>
              <p className="text-neutral-dark/70 leading-relaxed">
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-white font-semibold hover:bg-primary-medium transition-colors"
                >
                  Solicitar Orçamento
                  <ArrowRight className="h-4 w-4" />
                </a>
                <Link
                  href="/servicos"
                  className="inline-flex items-center gap-2 rounded-full border border-neutral-light px-6 py-3 text-neutral-dark font-semibold hover:bg-neutral-light/50 transition-colors"
                >
                  <ArrowLeft className="h-4 w-4" />
                  Todos os Serviços
                </Link>
              </div>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll delay={0.2}>
            <div className="aspect-video rounded-2xl overflow-hidden bg-neutral-dark">
              <iframe
                src={service.video}
                title={`Vídeo ${service.title}`}
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </AnimateOnScroll>
        </div>
      </Section>

      {/* Gallery placeholder */}
      <Section dark>
        <AnimateOnScroll>
          <h2 className="text-2xl font-bold text-center mb-8">Galeria</h2>
        </AnimateOnScroll>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {Array.from({ length: 4 }).map((_, i) => (
            <AnimateOnScroll key={i} delay={i * 0.1}>
              <div className="aspect-square rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                <span className="text-white/30 text-xs">Foto {i + 1}</span>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </Section>
    </>
  );
}
```

**Step 3: Commit**

```bash
git add src/app/servicos/
git commit -m "feat: add services index and dynamic detail pages"
```

---

## Task 10: Build Portfolio Page

**Files:**
- Create: `src/app/portfolio/page.tsx`

**Step 1: Create portfolio page with image grid**

Create `src/app/portfolio/page.tsx`:

```tsx
import type { Metadata } from "next";
import { PageHero } from "@/components/ui/page-hero";
import { Section } from "@/components/ui/section";
import { AnimateOnScroll } from "@/components/ui/animate-on-scroll";

export const metadata: Metadata = {
  title: "Portfólio",
  description: "Conheça nossos projetos de painéis de LED.",
};

const PORTFOLIO_ITEMS = [
  { title: "Show Sertanejo", category: "Show Business" },
  { title: "Igreja Central", category: "Igrejas" },
  { title: "Shopping Center", category: "Comércio" },
  { title: "Evento Corporativo", category: "Show Business" },
  { title: "Posto de Combustível", category: "Outdoor" },
  { title: "Residência Premium", category: "Residencial" },
  { title: "Totem Shopping", category: "Totens" },
  { title: "Fachada Loja", category: "Comércio" },
];

export default function PortfolioPage() {
  return (
    <>
      <PageHero title="Portfólio" subtitle="Conheça nossos projetos e instalações." />
      <Section>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {PORTFOLIO_ITEMS.map((item, i) => (
            <AnimateOnScroll key={i} delay={i * 0.05}>
              <div className="group relative aspect-[4/3] rounded-2xl overflow-hidden bg-neutral-light cursor-pointer">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-neutral-dark/30 text-sm">Foto Placeholder</span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <p className="text-xs text-white/60 uppercase tracking-wider">{item.category}</p>
                  <h3 className="text-lg font-bold text-white">{item.title}</h3>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </Section>
    </>
  );
}
```

**Step 2: Commit**

```bash
git add src/app/portfolio/page.tsx
git commit -m "feat: add portfolio page with image grid and hover effects"
```

---

## Task 11: Build About Page

**Files:**
- Create: `src/app/sobre/page.tsx`

**Step 1: Create about page with philosophy, coverage, and values**

Create `src/app/sobre/page.tsx`:

```tsx
import type { Metadata } from "next";
import { MapPin, Lightbulb, Users, Shield } from "lucide-react";
import { PageHero } from "@/components/ui/page-hero";
import { Section } from "@/components/ui/section";
import { AnimateOnScroll } from "@/components/ui/animate-on-scroll";

export const metadata: Metadata = {
  title: "Sobre Nós",
  description: "Conheça a NuvemLED, arquitetos da luz e artistas da inovação.",
};

const VALUES = [
  { icon: Lightbulb, title: "Inovação", description: "Buscamos constantemente as melhores tecnologias LED do mercado." },
  { icon: Users, title: "Parceria", description: "Trabalhamos lado a lado com nossos clientes em cada projeto." },
  { icon: Shield, title: "Qualidade", description: "Garantimos produtos e instalações de altíssima qualidade." },
];

const COVERAGE = ["Paraná", "São Paulo", "Goiás", "Santa Catarina"];

export default function SobrePage() {
  return (
    <>
      <PageHero title="Sobre Nós" subtitle="Arquitetos da luz, artistas da inovação." />

      {/* Philosophy */}
      <Section>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <AnimateOnScroll>
            <h2 className="text-3xl font-bold mb-6">Nossa Filosofia</h2>
            <p className="text-neutral-dark/70 leading-relaxed mb-4">
              Somos mais do que uma empresa de Telas de LED. Somos arquitetos da
              luz, artistas da inovação, impulsionados pela visão de um futuro
              mais vibrante.
            </p>
            <p className="text-neutral-dark/70 leading-relaxed">
              Cada projeto é uma oportunidade de transformar espaços comuns em
              experiências extraordinárias, combinando tecnologia de ponta com
              design criativo.
            </p>
          </AnimateOnScroll>
          <AnimateOnScroll delay={0.2}>
            <div className="aspect-video rounded-2xl bg-neutral-light flex items-center justify-center">
              <span className="text-neutral-dark/30 text-sm">Imagem Placeholder</span>
            </div>
          </AnimateOnScroll>
        </div>
      </Section>

      {/* Values */}
      <Section dark>
        <AnimateOnScroll>
          <h2 className="text-3xl font-bold text-center mb-12">Nossos Valores</h2>
        </AnimateOnScroll>
        <div className="grid sm:grid-cols-3 gap-8">
          {VALUES.map((value, i) => (
            <AnimateOnScroll key={value.title} delay={i * 0.1}>
              <div className="text-center">
                <value.icon className="h-12 w-12 text-accent-violet mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                <p className="text-white/60 text-sm">{value.description}</p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </Section>

      {/* Coverage */}
      <Section>
        <AnimateOnScroll>
          <h2 className="text-3xl font-bold text-center mb-12">Área de Atuação</h2>
        </AnimateOnScroll>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
          {COVERAGE.map((state, i) => (
            <AnimateOnScroll key={state} delay={i * 0.1}>
              <div className="flex items-center gap-3 rounded-xl border border-neutral-light p-6">
                <MapPin className="h-5 w-5 text-primary shrink-0" />
                <span className="font-semibold">{state}</span>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </Section>
    </>
  );
}
```

**Step 2: Commit**

```bash
git add src/app/sobre/page.tsx
git commit -m "feat: add about page with philosophy, values, and coverage"
```

---

## Task 12: Build Clients Page

**Files:**
- Create: `src/app/clientes/page.tsx`

**Step 1: Create clients page with logo grid**

Create `src/app/clientes/page.tsx`:

```tsx
import type { Metadata } from "next";
import { PageHero } from "@/components/ui/page-hero";
import { Section } from "@/components/ui/section";
import { AnimateOnScroll } from "@/components/ui/animate-on-scroll";

export const metadata: Metadata = {
  title: "Clientes",
  description: "Empresas e artistas que confiam na NuvemLED.",
};

const CLIENTS = [
  "Cliente 1", "Cliente 2", "Cliente 3", "Cliente 4",
  "Cliente 5", "Cliente 6", "Cliente 7", "Cliente 8",
  "Cliente 9", "Cliente 10", "Cliente 11", "Cliente 12",
];

export default function ClientesPage() {
  return (
    <>
      <PageHero title="Nossos Clientes" subtitle="Empresas e artistas que confiam na NuvemLED." />
      <Section>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
          {CLIENTS.map((client, i) => (
            <AnimateOnScroll key={i} delay={i * 0.05}>
              <div className="flex items-center justify-center aspect-[3/2] rounded-xl border border-neutral-light bg-white p-6 hover:shadow-lg transition-shadow">
                <span className="text-neutral-dark/30 text-sm font-medium">{client}</span>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </Section>
    </>
  );
}
```

**Step 2: Commit**

```bash
git add src/app/clientes/page.tsx
git commit -m "feat: add clients page with logo grid"
```

---

## Task 13: Build Contact Page

**Files:**
- Create: `src/app/contato/page.tsx`

**Step 1: Create contact page with form, WhatsApp, and branches**

Create `src/app/contato/page.tsx`:

```tsx
import type { Metadata } from "next";
import { Phone, MapPin, Mail, ArrowRight } from "lucide-react";
import { PageHero } from "@/components/ui/page-hero";
import { Section } from "@/components/ui/section";
import { AnimateOnScroll } from "@/components/ui/animate-on-scroll";
import { SITE, BRANCHES } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contato",
  description: "Entre em contato com a NuvemLED.",
};

export default function ContatoPage() {
  const whatsappUrl = `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(SITE.whatsappMessage)}`;

  return (
    <>
      <PageHero
        title="Contato"
        subtitle="Entre em contato e descubra como podemos fazer a diferença!"
      />

      <Section>
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Form */}
          <AnimateOnScroll>
            <div className="space-y-6">
              <h2 className="text-2xl font-bold">Envie uma mensagem</h2>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-1">
                    Nome
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full rounded-lg border border-neutral-light px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
                    placeholder="Seu nome"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-1">
                    E-mail
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full rounded-lg border border-neutral-light px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
                    placeholder="seu@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-1">
                    Telefone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full rounded-lg border border-neutral-light px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
                    placeholder="(00) 00000-0000"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-1">
                    Mensagem
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full rounded-lg border border-neutral-light px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary resize-none"
                    placeholder="Descreva seu projeto..."
                  />
                </div>
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3 text-white font-semibold hover:bg-primary-medium transition-colors"
                >
                  Enviar Mensagem
                  <ArrowRight className="h-4 w-4" />
                </button>
              </form>
            </div>
          </AnimateOnScroll>

          {/* Contact info */}
          <AnimateOnScroll delay={0.2}>
            <div className="space-y-8">
              {/* WhatsApp CTA */}
              <div className="rounded-2xl gradient-hero p-8 text-white">
                <h3 className="text-xl font-bold mb-2">Prefere WhatsApp?</h3>
                <p className="text-white/70 text-sm mb-4">
                  Fale diretamente com nossa equipe comercial.
                </p>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-primary font-semibold hover:bg-neutral-light transition-colors"
                >
                  Chame no WhatsApp
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>

              {/* Email */}
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-neutral-dark/60">E-mail</p>
                  <a href={`mailto:${SITE.email}`} className="font-medium hover:text-primary">
                    {SITE.email}
                  </a>
                </div>
              </div>

              {/* Branches */}
              <div>
                <h3 className="text-lg font-bold mb-4">Filiais</h3>
                <div className="space-y-4">
                  {BRANCHES.map((branch) => (
                    <div
                      key={branch.city}
                      className="rounded-xl border border-neutral-light p-4"
                    >
                      <p className="font-semibold">{branch.city}</p>
                      <p className="text-sm text-neutral-dark/60 flex items-center gap-1 mt-1">
                        <Phone className="h-3 w-3" /> {branch.phone}
                      </p>
                      <p className="text-sm text-neutral-dark/60 flex items-center gap-1">
                        <MapPin className="h-3 w-3" /> {branch.address}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </Section>
    </>
  );
}
```

**Step 2: Commit**

```bash
git add src/app/contato/page.tsx
git commit -m "feat: add contact page with form, WhatsApp CTA, and branches"
```

---

## Task 14: Final Build Verification and Cleanup

**Files:**
- Potentially modify any files with build errors

**Step 1: Run production build**

Run:
```bash
npm run build
```

Expected: Build completes successfully with no errors.

**Step 2: Fix any build errors**

If there are TypeScript or build errors, fix them.

**Step 3: Clean up temporary files**

Run:
```bash
rm -f figma-*.png azullight-*.png
```

**Step 4: Final commit**

```bash
git add -A
git commit -m "chore: clean up temp files and verify production build"
```

---

## Summary

| Task | Description | Est. Steps |
|------|-------------|-----------|
| 1 | Scaffold Next.js project | 4 |
| 2 | Configure brand design tokens | 4 |
| 3 | Create Logo SVG component | 2 |
| 4 | Build Header component | 2 |
| 5 | Build Footer component | 2 |
| 6 | Build WhatsApp FAB + Root Layout | 4 |
| 7 | Create shared UI components | 4 |
| 8 | Build Home page | 4 |
| 9 | Build Services pages (index + detail) | 3 |
| 10 | Build Portfolio page | 2 |
| 11 | Build About page | 2 |
| 12 | Build Clients page | 2 |
| 13 | Build Contact page | 2 |
| 14 | Final build verification + cleanup | 4 |
| **Total** | | **41 steps** |
