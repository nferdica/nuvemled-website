import type { Metadata } from "next";
import { Phone, MapPin, Mail, ArrowRight } from "lucide-react";
import { PageHero } from "@/components/ui/page-hero";
import { Section } from "@/components/ui/section";
import { AnimateOnScroll } from "@/components/ui/animate-on-scroll";
import { SITE, BRANCHES } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contato",
  description:
    "Entre em contato com a NuvemLED e descubra como podemos fazer a diferença!",
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left column: contact form */}
          <AnimateOnScroll>
            <h2 className="text-3xl font-bold text-neutral-dark mb-8">
              Envie uma mensagem
            </h2>

            <form className="space-y-5">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-neutral-dark mb-1.5"
                >
                  Nome
                </label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  placeholder="Seu nome completo"
                  className="w-full rounded-lg border border-neutral-light px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-neutral-dark mb-1.5"
                >
                  E-mail
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="seu@email.com"
                  className="w-full rounded-lg border border-neutral-light px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-neutral-dark mb-1.5"
                >
                  Telefone
                </label>
                <input
                  id="phone"
                  type="tel"
                  name="phone"
                  placeholder="(00) 00000-0000"
                  className="w-full rounded-lg border border-neutral-light px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-neutral-dark mb-1.5"
                >
                  Mensagem
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder="Descreva seu projeto ou dúvida..."
                  className="w-full rounded-lg border border-neutral-light px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary resize-none"
                />
              </div>

              <button
                type="submit"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3 text-sm font-semibold text-white hover:opacity-90 transition-opacity"
              >
                Enviar mensagem
                <ArrowRight className="h-4 w-4" />
              </button>
            </form>
          </AnimateOnScroll>

          {/* Right column: WhatsApp CTA, email, branches */}
          <AnimateOnScroll delay={0.2}>
            {/* WhatsApp CTA card */}
            <div className="gradient-hero rounded-2xl p-8 text-white mb-8">
              <h3 className="text-2xl font-bold mb-3">Prefere WhatsApp?</h3>
              <p className="text-white/80 mb-6">
                Fale diretamente com nossa equipe pelo WhatsApp e receba um
                atendimento rápido e personalizado para o seu projeto de LED.
              </p>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-primary hover:bg-white/90 transition-colors"
              >
                Chamar no WhatsApp
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>

            {/* Email info */}
            <div className="flex items-center gap-4 mb-8">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10">
                <Mail className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="text-sm font-medium text-neutral-dark/60 mb-0.5">
                  E-mail
                </p>
                <a
                  href={`mailto:${SITE.email}`}
                  className="text-sm font-semibold text-neutral-dark hover:text-primary transition-colors"
                >
                  {SITE.email}
                </a>
              </div>
            </div>

            {/* Branches */}
            <div>
              <h3 className="text-xl font-bold text-neutral-dark mb-4">
                Filiais
              </h3>
              <div className="space-y-3">
                {BRANCHES.map((branch) => (
                  <div
                    key={branch.city}
                    className="rounded-xl border border-neutral-light p-4"
                  >
                    <p className="font-bold text-neutral-dark mb-2">
                      {branch.city}
                    </p>
                    <div className="flex items-center gap-2 text-sm text-neutral-dark/70 mb-1">
                      <Phone className="h-3.5 w-3.5 shrink-0 text-primary" />
                      <span>{branch.phone}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-neutral-dark/70">
                      <MapPin className="h-3.5 w-3.5 shrink-0 text-primary" />
                      <span>{branch.address}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </Section>
    </>
  );
}
