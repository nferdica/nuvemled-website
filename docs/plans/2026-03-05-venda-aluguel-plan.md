# Venda & Aluguel Section — Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Add a prominent "Venda & Aluguel" section on the homepage and a rental mention on service detail pages, both with WhatsApp CTA.

**Architecture:** Add a new dark section in `page.tsx` between the marquee banner and the services grid. Two cards side-by-side (desktop) / stacked (mobile) with icons, text, and "Faça seu Orçamento" buttons. On service detail pages, add a line in the existing CTA section.

**Tech Stack:** Next.js, Tailwind CSS, lucide-react icons, AnimateOnScroll component

---

### Task 1: Add Venda & Aluguel section to homepage

**Files:**
- Modify: `src/app/page.tsx:4` (add icon imports)
- Modify: `src/app/page.tsx:90-102` (add section after marquee, before services grid)

**Step 1: Add icon imports**

In `src/app/page.tsx`, update the lucide-react import at line 4 to add `ShoppingCart` and `CalendarClock`:

```tsx
import { Church, Store, Monitor, Home, Sun, Music, ArrowRight, ShoppingCart, CalendarClock } from "lucide-react";
```

**Step 2: Add the Venda & Aluguel section**

In `src/app/page.tsx`, after the closing `</div>` of the Marquee Banner (line 102) and before the `{/* Services Grid Section */}` comment (line 104), add:

```tsx
      {/* Venda & Aluguel */}
      <Section dark>
        <AnimateOnScroll>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4 text-center">
            Venda & Aluguel
          </h2>
          <p className="text-lg text-white/70 text-center max-w-2xl mx-auto mb-12">
            Oferecemos painéis de LED para compra definitiva ou locação sob demanda — você escolhe o modelo ideal para o seu projeto.
          </p>
        </AnimateOnScroll>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <AnimateOnScroll delay={0.1}>
            <div className="rounded-2xl bg-white/5 border border-white/10 p-8 text-center">
              <div className="inline-flex h-14 w-14 items-center justify-center rounded-xl bg-white/10 mb-5">
                <ShoppingCart className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">Venda</h3>
              <p className="text-white/70 leading-relaxed mb-6">
                Adquira seu painel de LED com projeto personalizado, instalação profissional e suporte técnico completo.
              </p>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-3 text-sm font-bold text-primary uppercase tracking-wider hover:bg-neutral-light transition-colors"
              >
                Faça seu Orçamento
                <ArrowRight size={16} />
              </a>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll delay={0.2}>
            <div className="rounded-2xl bg-white/5 border border-white/10 p-8 text-center">
              <div className="inline-flex h-14 w-14 items-center justify-center rounded-xl bg-white/10 mb-5">
                <CalendarClock className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">Aluguel</h3>
              <p className="text-white/70 leading-relaxed mb-6">
                Alugue painéis de LED para eventos, temporadas ou projetos de curta duração com montagem e suporte incluso.
              </p>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-3 text-sm font-bold text-primary uppercase tracking-wider hover:bg-neutral-light transition-colors"
              >
                Faça seu Orçamento
                <ArrowRight size={16} />
              </a>
            </div>
          </AnimateOnScroll>
        </div>
      </Section>
```

**Step 3: Verify**

Run: `npm run lint && npm run build`
Expected: No errors.

**Step 4: Commit**

```bash
git add src/app/page.tsx
git commit -m "feat: add venda & aluguel section to homepage"
```

---

### Task 2: Add rental mention to service detail CTA

**Files:**
- Modify: `src/app/servicos/[slug]/page.tsx:123-125` (add text in CTA section)

**Step 1: Add availability text**

In `src/app/servicos/[slug]/page.tsx`, find the CTA paragraph (line 123-125):

```tsx
            <p className="text-neutral-dark/70 mb-8">
              Entre em contato e receba um orçamento personalizado para a sua necessidade.
            </p>
```

Replace with:

```tsx
            <p className="text-neutral-dark/70 mb-8">
              Entre em contato e receba um orçamento personalizado para a sua necessidade.
              <br />
              <span className="font-semibold text-neutral-dark">
                Disponível para venda e aluguel.
              </span>
            </p>
```

**Step 2: Verify**

Run: `npm run lint && npm run build`
Expected: No errors.

**Step 3: Commit**

```bash
git add src/app/servicos/[slug]/page.tsx
git commit -m "feat: add rental availability to service detail CTA"
```

---

### Task 3: Push, create PR and merge

**Step 1:** `git push origin develop`
**Step 2:** Create PR with `gh pr create --base main --head develop`
**Step 3:** Merge with `gh pr merge --merge`
