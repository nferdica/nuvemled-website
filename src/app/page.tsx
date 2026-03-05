import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Church, Store, Monitor, Home, Sun, Music, ArrowRight, ShoppingCart, CalendarClock } from "lucide-react";
import { Section } from "@/components/ui/section";
import { AnimateOnScroll } from "@/components/ui/animate-on-scroll";
import { FaqAccordion } from "@/components/faq-accordion";
import { GoogleMap } from "@/components/google-map";
import { SITE, SERVICES } from "@/lib/constants";

export const metadata: Metadata = {
  title: "NuvemLED — Iluminando Seus Espaços",
  description:
    "Soluções personalizadas de painéis de LED para igrejas, comércios, totens, residências, outdoor e show business. Transforme seu espaço com a NuvemLED.",
};

const iconMap = {
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
      {/* Hero Section */}
      <section className="min-h-screen flex items-center relative px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background image — mobile */}
        <Image
          src="/nuvemled-hero-mobile.webp"
          alt="Painel de LED NuvemLED iluminando ambiente"
          fill
          priority
          sizes="100vw"
          className="object-cover md:hidden"
        />
        {/* Background image — desktop */}
        <Image
          src="/nuvemled-hero.webp"
          alt="Painel de LED NuvemLED iluminando ambiente"
          fill
          priority
          sizes="100vw"
          className="object-cover hidden md:block"
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-primary-dark/30" />

        <div className="relative mx-auto max-w-7xl w-full py-24">
          <AnimateOnScroll>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight whitespace-pre-line">
              {"AQUI, TODO\nESPAÇO É SEU"}
            </h1>
          </AnimateOnScroll>

          <AnimateOnScroll delay={0.2}>
            <p className="mt-6 max-w-xl text-lg sm:text-xl text-white/80 leading-relaxed">
              {SITE.description}
            </p>
          </AnimateOnScroll>

          <AnimateOnScroll delay={0.4}>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/servicos"
                className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-3 text-sm font-bold text-primary uppercase tracking-wider hover:bg-neutral-light transition-colors"
              >
                CONHEÇA
                <ArrowRight size={16} />
              </Link>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border-2 border-white/30 px-8 py-3 text-sm font-bold text-white uppercase tracking-wider hover:bg-white/10 transition-colors"
              >
                Fale Conosco
              </a>
            </div>
          </AnimateOnScroll>
        </div>

      </section>

      {/* Marquee Banner */}
      <div className="bg-primary py-3 overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap">
          {Array.from({ length: 6 }).map((_, i) => (
            <span
              key={i}
              className="text-sm font-semibold text-white/80 uppercase tracking-widest mx-8"
            >
              NuvemLED • Todo Espaço é Seu •
            </span>
          ))}
        </div>
      </div>

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

      {/* Services Grid Section */}
      <Section>
        <AnimateOnScroll>
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-bold text-neutral-dark mb-4">
              Seu LED
            </h2>
            <p className="text-lg text-neutral-dark/70 max-w-2xl mx-auto">
              Soluções personalizadas de painéis de LED para cada tipo de espaço e necessidade.
            </p>
          </div>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service, index) => {
            const Icon = iconMap[service.icon as keyof typeof iconMap];
            return (
              <AnimateOnScroll key={service.slug} delay={index * 0.1}>
                <Link
                  href={`/servicos/${service.slug}`}
                  className="group block rounded-2xl border border-neutral-light p-8 hover:shadow-xl transition-all duration-300 hover:border-primary/30"
                >
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                    {Icon && <Icon size={24} />}
                  </div>
                  <h3 className="text-xl font-bold text-neutral-dark mb-2">
                    {service.title}
                  </h3>
                  <p className="text-neutral-dark/70 text-sm leading-relaxed mb-4">
                    {service.description}
                  </p>
                  <span className="inline-flex items-center gap-1 text-sm font-semibold text-primary group-hover:gap-2 transition-all">
                    Saiba mais
                    <ArrowRight size={14} />
                  </span>
                </Link>
              </AnimateOnScroll>
            );
          })}
        </div>
      </Section>

      {/* Philosophy Section */}
      <Section dark>
        <div className="max-w-3xl mx-auto text-center">
          <AnimateOnScroll>
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Iluminando mais do que espaços
            </h2>
            <p className="text-lg text-white/70 leading-relaxed">
              Na NuvemLED, acreditamos que cada espaço conta uma história. Somos mais do que
              uma empresa de Telas de LED — somos arquitetos da luz, artistas da inovação.
              Nossa missão é transformar ambientes comuns em experiências extraordinárias,
              combinando tecnologia de ponta com design inteligente para criar impacto visual
              duradouro onde quer que você esteja.
            </p>
          </AnimateOnScroll>
        </div>
      </Section>

      {/* FAQ Section */}
      <Section>
        <div className="max-w-3xl mx-auto">
          <AnimateOnScroll>
            <h2 className="text-4xl sm:text-5xl font-bold text-neutral-dark mb-10 text-center">
              Perguntas Frequentes
            </h2>
          </AnimateOnScroll>
          <FaqAccordion />
        </div>
      </Section>

      {/* CTA Section */}
      <Section>
        <AnimateOnScroll>
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl sm:text-5xl font-bold text-neutral-dark mb-4">
              Pronto para transformar seu espaço?
            </h2>
            <p className="text-lg text-neutral-dark/70 mb-10">
              Entre em contato conosco e descubra como a NuvemLED pode criar a solução perfeita
              de LED para o seu projeto.
            </p>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-10 py-4 text-sm font-bold text-white uppercase tracking-wider hover:bg-primary-dark transition-colors shadow-lg shadow-primary/30"
            >
              Fale Conosco no WhatsApp
              <ArrowRight size={16} />
            </a>
          </div>
        </AnimateOnScroll>
      </Section>

      {/* Google Maps */}
      <GoogleMap />
    </>
  );
}
