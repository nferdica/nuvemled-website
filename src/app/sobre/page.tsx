import { Metadata } from "next";
import { PageHero } from "@/components/ui/page-hero";
import { Section } from "@/components/ui/section";
import { AnimateOnScroll } from "@/components/ui/animate-on-scroll";
import { Lightbulb, Users, Shield, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "Sobre Nós",
};

export default function AboutPage() {
  const values = [
    {
      icon: Lightbulb,
      title: "Inovação",
      description: "Criamos soluções de iluminação que transcendem o convencional, sempre buscando novas tecnologias e abordagens.",
    },
    {
      icon: Users,
      title: "Parceria",
      description: "Nossos clientes são parceiros. Trabalhamos juntos para entender necessidades e entregar valor excepcional.",
    },
    {
      icon: Shield,
      title: "Qualidade",
      description: "Cada projeto é executado com excelência, garantindo durabilidade, eficiência e satisfação total.",
    },
  ];

  const states = ["Paraná", "São Paulo", "Goiás", "Santa Catarina"];

  return (
    <>
      <PageHero
        title="Sobre Nós"
        subtitle="Arquitetos da luz, artistas da inovação."
      />

      {/* Philosophy Section */}
      <Section id="philosophy">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <AnimateOnScroll>
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-neutral-dark mb-6">
                Nossa Filosofia
              </h2>
              <p className="text-lg text-neutral-dark/80 mb-4 leading-relaxed">
                A NuvemLED nasceu da visão de transformar espaços através da luz. Acreditamos que iluminação não é apenas funcional – é transformadora. Cada projeto é uma oportunidade de criar ambientes que inspiram, confortam e elevam a experiência de quem os habita.
              </p>
              <p className="text-lg text-neutral-dark/80 leading-relaxed">
                Nosso compromisso vai além de instalar luminárias. Somos arquitetos da luz, designers de experiências, e parceiros no sucesso de cada cliente. Combinamos expertise técnica com criatividade artística para entregar soluções que iluminam vidas.
              </p>
            </div>
          </AnimateOnScroll>

          {/* Right Placeholder */}
          <AnimateOnScroll delay={0.2}>
            <div className="aspect-video rounded-2xl bg-neutral-light" />
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
            const Icon = value.icon;
            return (
              <AnimateOnScroll key={value.title} delay={index * 0.1}>
                <div className="text-center">
                  <Icon className="h-12 w-12 text-accent-violet mx-auto mb-4" />
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

      {/* Coverage Section */}
      <Section id="coverage">
        <div className="text-center mb-16">
          <AnimateOnScroll>
            <h2 className="text-3xl sm:text-4xl font-bold text-neutral-dark mb-4">
              Área de Atuação
            </h2>
          </AnimateOnScroll>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
          {states.map((state, index) => (
            <AnimateOnScroll
              key={state}
              delay={index * 0.1}
            >
              <div className="flex items-center gap-3 rounded-xl border border-neutral-light p-6 hover:border-accent-violet hover:bg-accent-violet/5 transition-all">
                <MapPin className="h-6 w-6 text-accent-violet flex-shrink-0" />
                <span className="font-semibold text-neutral-dark">{state}</span>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </Section>
    </>
  );
}
