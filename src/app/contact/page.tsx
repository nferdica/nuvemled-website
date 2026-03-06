import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { getWhatsAppUrl } from "@/lib/constants";
import { WhatsAppIcon } from "@/lib/icons";

export const metadata: Metadata = {
  title: "Contato",
  description:
    "Entre em contato com a NuvemLED e descubra como podemos fazer a diferença!",
};

export default function ContatoPage() {
  return (
    <>
      <PageHero
        title="Contato"
        subtitle="Entre em contato e descubra como podemos fazer a diferença!"
      />

      <Section>
        <div className="max-w-2xl mx-auto text-center">
          <AnimateOnScroll>
            <div className="mb-8">
              <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-green-500/10 mb-6">
                <WhatsAppIcon className="h-8 w-8 text-green-500" />
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-neutral-dark mb-4">
                Fale conosco pelo WhatsApp
              </h2>
              <p className="text-lg text-neutral-dark/70 leading-relaxed mb-8">
                Nosso atendimento é feito exclusivamente pelo WhatsApp. Clique no
                botão abaixo para iniciar uma conversa e receba um atendimento
                rápido e personalizado para o seu projeto de LED.
              </p>
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-green-500 px-10 py-4 text-sm font-bold text-white uppercase tracking-wider hover:bg-green-600 transition-colors shadow-lg shadow-green-500/30"
              >
                Chamar no WhatsApp
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </AnimateOnScroll>
        </div>
      </Section>
    </>
  );
}
