import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { services } from "@/lib/constants";
import { serviceIconMap } from "@/lib/icons";

export function ServicesGridSection() {
  return (
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
        {services.map((service, index) => {
          const Icon = serviceIconMap[service.icon];
          return (
            <AnimateOnScroll key={service.slug} delay={index * 0.1}>
              <Link
                href={`/services/${service.slug}`}
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
  );
}
