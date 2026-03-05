# Design — Seção Venda & Aluguel

## Objetivo

Destacar que a NuvemLED oferece **venda e aluguel** de painéis de LED. Atualmente o site só menciona venda implicitamente. A informação precisa de destaque visual com CTA direto para WhatsApp.

## Alterações

### 1. Homepage — Nova seção entre Marquee e Grid de Serviços

**Layout:** Duas colunas (desktop) / empilhado (mobile).

Cada card contém:
- Ícone (`ShoppingCart` para Venda, `CalendarClock` para Aluguel)
- Título ("Venda" / "Aluguel")
- Texto descritivo (1-2 frases)
- Botão "Faça seu Orçamento" → WhatsApp

**Visual:**
- Fundo com gradiente escuro (`gradient-hero`) para contraste
- Cards com `bg-white/5`, `border border-white/10`, `rounded-2xl`
- Botão branco com texto `text-primary`, estilo arredondado

**Textos:**
- **Venda:** "Adquira seu painel de LED com projeto personalizado, instalação profissional e suporte técnico completo."
- **Aluguel:** "Alugue painéis de LED para eventos, temporadas ou projetos de curta duração com montagem e suporte incluso."

### 2. Páginas de serviço (`/servicos/[slug]`) — CTA existente

Adicionar linha na seção CTA final: "Disponível para **venda** e **aluguel**."
O botão "Solicitar Orçamento" já existe e direciona ao WhatsApp — nenhuma alteração necessária no botão.

## Arquivos afetados

| Arquivo | Alteração |
|---------|-----------|
| `src/app/page.tsx` | Adicionar seção Venda & Aluguel após marquee |
| `src/app/servicos/[slug]/page.tsx` | Adicionar texto na seção CTA |

## Decisões

- Não criar página separada para aluguel
- Não adicionar como serviço no array SERVICES (serviços = locais de instalação)
- Seção é puramente visual na homepage, sem rota própria
