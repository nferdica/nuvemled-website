import { ShoppingCart, CalendarClock, ArrowRight } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { getWhatsAppUrl } from "@/lib/constants";

export function VendaAluguelSection() {
  const whatsappUrl = getWhatsAppUrl();

  return (
    <Section dark>
      <div className="grid md:grid-cols-2 max-w-4xl mx-auto">
        <AnimateOnScroll delay={0.1}>
          <div className="p-8 text-center md:border-r md:border-white/10">
            <ShoppingCart className="w-8 h-8 text-white mx-auto mb-5" />
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
              Compre Já
              <ArrowRight size={16} />
            </a>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll delay={0.2}>
          <div className="p-8 text-center border-t border-white/10 md:border-t-0">
            <CalendarClock className="w-8 h-8 text-white mx-auto mb-5" />
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
              Alugue Já
              <ArrowRight size={16} />
            </a>
          </div>
        </AnimateOnScroll>
      </div>
    </Section>
  );
}
