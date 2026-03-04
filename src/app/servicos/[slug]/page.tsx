import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { PageHero } from "@/components/ui/page-hero";
import { Section } from "@/components/ui/section";
import { AnimateOnScroll } from "@/components/ui/animate-on-scroll";
import { SERVICES, SITE } from "@/lib/constants";

interface Props {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);

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
  const service = SERVICES.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  const whatsappUrl = `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(
    `Olá! Gostaria de um orçamento para ${service.title}.`
  )}`;

  return (
    <>
      <PageHero
        title={service.title}
        subtitle={service.description}
      />

      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <AnimateOnScroll>
            <h2 className="text-3xl font-bold text-neutral-dark mb-4">
              Sobre este serviço
            </h2>

            <p className="text-neutral-dark/70 leading-relaxed mb-3">
              {service.description}
            </p>
            <p className="text-neutral-dark/70 leading-relaxed mb-8">
              Na {SITE.name}, entregamos soluções de alta performance em painéis de LED, com tecnologia de ponta e suporte especializado para garantir o melhor resultado para o seu projeto.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-primary text-white font-medium hover:bg-primary-medium transition-colors duration-200"
              >
                Solicitar Orçamento
                <ArrowRight className="w-4 h-4" />
              </a>

              <Link
                href="/servicos"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full border border-neutral-light text-neutral-dark font-medium hover:bg-neutral-light transition-colors duration-200"
              >
                <ArrowLeft className="w-4 h-4" />
                Todos os Serviços
              </Link>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll delay={0.15}>
            <div className="aspect-video w-full rounded-2xl overflow-hidden shadow-lg">
              <iframe
                src={service.video}
                title={service.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
          </AnimateOnScroll>
        </div>
      </Section>

      <Section dark>
        <AnimateOnScroll>
          <h2 className="text-3xl font-bold text-white mb-8">Galeria</h2>
        </AnimateOnScroll>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {[0, 1, 2, 3].map((i) => (
            <AnimateOnScroll key={i} delay={i * 0.1}>
              <div className="aspect-square rounded-xl bg-white/10" />
            </AnimateOnScroll>
          ))}
        </div>
      </Section>
    </>
  );
}
