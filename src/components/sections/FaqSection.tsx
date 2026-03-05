import { Section } from "@/components/ui/Section";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { FaqAccordion } from "@/components/FaqAccordion";

export function FaqSection() {
  return (
    <Section>
      <div className="max-w-3xl mx-auto">
        <AnimateOnScroll>
          <h2 className="text-4xl sm:text-5xl font-bold text-neutral-dark mb-10 text-center">
            Perguntas Frequentes
          </h2>
        </AnimateOnScroll>
        <FaqAccordion />
      </div>
    </Section>
  );
}
