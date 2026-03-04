import type { Metadata } from "next";
import Link from "next/link";
import { Church, Store, Monitor, Home, Sun, Music, ArrowRight } from "lucide-react";
import { PageHero } from "@/components/ui/page-hero";
import { Section } from "@/components/ui/section";
import { AnimateOnScroll } from "@/components/ui/animate-on-scroll";
import { SERVICES } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Serviços",
  description:
    "Conheça nossas soluções em painéis de LED para igrejas, comércios, totens, residências, outdoor e show business.",
};

const iconMap = {
  Church,
  Store,
  Monitor,
  Home,
  Sun,
  Music,
} as const;

export default function ServicesPage() {
  return (
    <>
      <PageHero
        title="Serviços"
        subtitle="Soluções em painéis de LED para cada necessidade, com qualidade e inovação que transformam espaços."
      />

      <Section>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => {
            const Icon = iconMap[service.icon as keyof typeof iconMap];

            return (
              <AnimateOnScroll key={service.slug} delay={index * 0.1}>
                <Link
                  href={`/servicos/${service.slug}`}
                  className="group block rounded-2xl overflow-hidden border border-neutral-light hover:border-primary transition-colors duration-300 shadow-sm hover:shadow-md"
                >
                  <div className="aspect-video bg-neutral-light" />

                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-2 rounded-lg bg-primary/10 text-primary">
                        <Icon className="w-5 h-5" />
                      </div>
                      <h2 className="text-xl font-semibold text-neutral-dark">
                        {service.title}
                      </h2>
                    </div>

                    <p className="text-neutral-dark/70 text-sm mb-4 leading-relaxed">
                      {service.description}
                    </p>

                    <span className="inline-flex items-center gap-1.5 text-sm font-medium text-primary group-hover:gap-2.5 transition-all duration-200">
                      Ver detalhes
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </Link>
              </AnimateOnScroll>
            );
          })}
        </div>
      </Section>
    </>
  );
}
