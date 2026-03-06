import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { site, getWhatsAppUrl } from "@/lib/constants";

export function HeroSection() {
  const whatsappUrl = getWhatsAppUrl();

  return (
    <section className="min-h-screen flex items-center relative px-4 sm:px-6 lg:px-8 overflow-hidden">
      <Image
        src="/nuvemled-hero-mobile.webp"
        alt="Painel de LED NuvemLED iluminando ambiente"
        fill
        priority
        sizes="100vw"
        className="object-cover md:hidden"
      />
      <Image
        src="/nuvemled-hero.webp"
        alt="Painel de LED NuvemLED iluminando ambiente"
        fill
        priority
        sizes="100vw"
        className="object-cover hidden md:block"
      />
      <div className="absolute inset-0 bg-primary-dark/30" />

      <div className="relative mx-auto max-w-7xl w-full py-24">
        <AnimateOnScroll>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight whitespace-pre-line">
            {"AQUI, TODO\nESPAÇO É SEU"}
          </h1>
        </AnimateOnScroll>

        <AnimateOnScroll delay={0.2}>
          <p className="mt-6 max-w-xl text-lg sm:text-xl text-white/80 leading-relaxed">
            {site.description}
          </p>
        </AnimateOnScroll>

        <AnimateOnScroll delay={0.4}>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/services"
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
  );
}
