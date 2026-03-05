import { ArrowRight } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { getWhatsAppUrl } from "@/lib/constants";

export function CtaSection() {
  const whatsappUrl = getWhatsAppUrl();

  return (
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
  );
}
