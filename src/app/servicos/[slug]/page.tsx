import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { services, getWhatsAppUrl } from "@/lib/constants";
import { serviceIconMap } from "@/lib/icons";

interface Props {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    return { title: "Serviço não encontrado" };
  }

  return {
    title: service.title,
    description: service.description,
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  const Icon = serviceIconMap[service.icon];
  const whatsappUrl = getWhatsAppUrl(`Olá! Gostaria de um orçamento para ${service.title}.`);

  return (
    <>
      <PageHero
        title={service.title}
        subtitle={service.description}
      />

      <Section>
        <div className="max-w-3xl">
          <AnimateOnScroll>
            <div className="flex items-center gap-3 mb-6">
              {Icon && (
                <Icon className="w-7 h-7 text-primary" />
              )}
              <h2 className="text-3xl font-bold text-neutral-dark">
                Sobre este serviço
              </h2>
            </div>
            <p className="text-lg text-neutral-dark/70 leading-relaxed">
              {service.longDescription}
            </p>
          </AnimateOnScroll>
        </div>
      </Section>

      <Section dark>
        <AnimateOnScroll>
          <h2 className="text-3xl font-bold text-white mb-10">
            Vantagens
          </h2>
        </AnimateOnScroll>

        <div className="grid sm:grid-cols-2 gap-6">
          {service.benefits.map((benefit, i) => (
            <AnimateOnScroll key={i} delay={i * 0.1}>
              <div className="flex gap-4 p-5 rounded-xl bg-white/5 border border-white/10">
                <CheckCircle2 className="w-5 h-5 text-white shrink-0 mt-0.5" />
                <p className="text-white/80 leading-relaxed">{benefit}</p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </Section>

      <Section>
        <AnimateOnScroll>
          <h2 className="text-3xl font-bold text-neutral-dark mb-10">
            Aplicações
          </h2>
        </AnimateOnScroll>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {service.useCases.map((useCase, i) => (
            <AnimateOnScroll key={i} delay={i * 0.1}>
              <div className="text-center p-6 rounded-xl border border-neutral-light hover:border-primary/30 hover:shadow-md transition-all">
                <span className="text-2xl font-bold text-primary">{String(i + 1).padStart(2, "0")}</span>
                <p className="text-sm font-medium text-neutral-dark mt-2">{useCase}</p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </Section>

      <Section>
        <AnimateOnScroll>
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-neutral-dark mb-4">
              Pronto para seu projeto de {service.title}?
            </h2>
            <p className="text-neutral-dark/70 mb-8">
              Entre em contato e receba um orçamento personalizado para a sua necessidade.
              <br />
              <span className="font-semibold text-neutral-dark">
                Disponível para venda e aluguel.
              </span>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-full bg-primary text-white font-semibold hover:bg-primary-dark transition-colors"
              >
                Solicitar Orçamento
                <ArrowRight className="w-4 h-4" />
              </a>
              <Link
                href="/servicos"
                className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-full border border-neutral-dark/20 text-neutral-dark font-medium hover:bg-neutral-light transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                Todos os Serviços
              </Link>
            </div>
          </div>
        </AnimateOnScroll>
      </Section>
    </>
  );
}
