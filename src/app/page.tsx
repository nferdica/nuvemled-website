import Link from "next/link";
import { Church, Store, Monitor, Home, Sun, Music, ArrowRight } from "lucide-react";
import { Section } from "@/components/ui/section";
import { AnimateOnScroll } from "@/components/ui/animate-on-scroll";
import { SITE, SERVICES } from "@/lib/constants";

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
      <section className="gradient-hero min-h-screen flex items-center relative px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl w-full py-24">
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

        {/* Bottom gradient overlay */}
        <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-white to-transparent" />
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <AnimateOnScroll>
            <div>
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
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll delay={0.2}>
            <div className="aspect-video rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center">
              <span className="text-white/40 text-sm font-medium">Vídeo institucional</span>
            </div>
          </AnimateOnScroll>
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
    </>
  );
}
