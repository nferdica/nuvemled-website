import { Section } from "@/components/ui/Section";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";

export function PhilosophySection() {
  return (
    <Section dark>
      <div className="max-w-3xl mx-auto text-center">
        <AnimateOnScroll>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Iluminando mais do que espaços
          </h2>
          <p className="text-lg text-white/70 leading-relaxed">
            Na NuvemLED, acreditamos que cada espaço conta uma história. Somos mais do que
            uma empresa de Telas de LED — somos arquitetos da luz, artistas da inovação.
            Nossa missão é transformar ambientes comuns em experiências extraordinárias,
            combinando tecnologia de ponta com design inteligente para criar impacto visual
            duradouro onde quer que você esteja.
          </p>
        </AnimateOnScroll>
      </div>
    </Section>
  );
}
