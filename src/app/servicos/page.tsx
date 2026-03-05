import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { LedGridPattern } from "@/components/ui/LedGridPattern";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { services } from "@/lib/constants";
import { serviceIconMap } from "@/lib/icons";

export const metadata: Metadata = {
  title: "Serviços",
  description:
    "Conheça nossas soluções em painéis de LED para igrejas, comércios, totens, residências, outdoor e show business.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        title="Serviços"
        subtitle="Soluções em painéis de LED para cada necessidade, com qualidade e inovação que transformam espaços."
      />

      <Section>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = serviceIconMap[service.icon];

            return (
              <AnimateOnScroll key={service.slug} delay={index * 0.1}>
                <Link
                  href={`/servicos/${service.slug}`}
                  className="group block rounded-2xl overflow-hidden border border-neutral-light hover:border-primary transition-colors duration-300 shadow-sm hover:shadow-md"
                >
                  <div className={`relative aspect-video overflow-hidden ${
                    index % 3 === 0 ? "gradient-hero" : index % 3 === 1 ? "gradient-accent" : "gradient-dark"
                  }`}>
                    <LedGridPattern variant="dark" />
                    {Icon && <Icon className="absolute inset-0 m-auto w-16 h-16 text-white/15" />}
                    <div className="absolute top-3 right-3 w-6 h-6 rounded-full border border-white/10" />
                    <div className="absolute bottom-3 left-3 w-8 h-3 rounded-sm bg-white/5" />
                  </div>

                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-2 rounded-lg bg-primary/10 text-primary">
                        {Icon && <Icon className="w-5 h-5" />}
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
