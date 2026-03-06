import { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { Lightbulb, Users, Shield } from "lucide-react";
import { GoogleMap } from "@/components/GoogleMap";
import { values } from "@/lib/constants";

const iconMap: Record<string, React.ElementType> = { Lightbulb, Users, Shield };

export const metadata: Metadata = {
  title: "Sobre",
};

export default function AboutPage() {

  return (
    <>
      <PageHero
        title="Sobre"
        subtitle="Arquitetos da luz, artistas da inovação."
      />

      {/* Philosophy Section */}
      <Section id="philosophy">
        <div className="max-w-3xl mx-auto text-center">
          <AnimateOnScroll>
            <h2 className="text-3xl sm:text-4xl font-bold text-neutral-dark mb-6">
              Nossa Filosofia
            </h2>
            <p className="text-lg text-neutral-dark/80 mb-4 leading-relaxed">
              A NuvemLED nasceu da visão de transformar espaços através da luz. Acreditamos que iluminação não é apenas funcional – é transformadora. Cada projeto é uma oportunidade de criar ambientes que inspiram, confortam e elevam a experiência de quem os habita.
            </p>
            <p className="text-lg text-neutral-dark/80 leading-relaxed">
              Nosso compromisso vai além de instalar luminárias. Somos arquitetos da luz, designers de experiências, e parceiros no sucesso de cada cliente. Combinamos expertise técnica com criatividade artística para entregar soluções que iluminam vidas.
            </p>
          </AnimateOnScroll>
        </div>
      </Section>

      {/* Values Section */}
      <Section dark id="values">
        <div className="text-center mb-16">
          <AnimateOnScroll>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Nossos Valores
            </h2>
          </AnimateOnScroll>
        </div>

        <div className="grid sm:grid-cols-3 gap-8">
          {values.map((value, index) => {
            const Icon = iconMap[value.icon];
            return (
              <AnimateOnScroll key={value.title} delay={index * 0.1}>
                <div className="text-center">
                  <Icon className="h-12 w-12 text-white mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-white mb-3">
                    {value.title}
                  </h3>
                  <p className="text-white/70 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </AnimateOnScroll>
            );
          })}
        </div>
      </Section>

      {/* Google Maps */}
      <GoogleMap />
    </>
  );
}
