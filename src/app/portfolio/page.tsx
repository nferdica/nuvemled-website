import type { Metadata } from "next";
import { PageHero } from "@/components/ui/page-hero";
import { Section } from "@/components/ui/section";
import { AnimateOnScroll } from "@/components/ui/animate-on-scroll";

export const metadata: Metadata = {
  title: "Portfólio",
  description:
    "Conheça nossos projetos de iluminação LED para shows, igrejas, comércios, residências e muito mais.",
};

const PORTFOLIO_ITEMS = [
  { title: "Show Sertanejo", category: "Show Business" },
  { title: "Igreja Central", category: "Igrejas" },
  { title: "Shopping Center", category: "Comércio" },
  { title: "Evento Corporativo", category: "Show Business" },
  { title: "Posto de Combustível", category: "Outdoor" },
  { title: "Residência Premium", category: "Residencial" },
  { title: "Totem Shopping", category: "Totens" },
  { title: "Fachada Loja", category: "Comércio" },
];

export default function PortfolioPage() {
  return (
    <>
      <PageHero
        title="Portfólio"
        subtitle="Conheça os projetos de iluminação LED que transformaram espaços e eventos"
      />

      <Section>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PORTFOLIO_ITEMS.map((item, index) => (
            <AnimateOnScroll key={index} delay={index * 0.1}>
              <div className="group relative aspect-[4/3] rounded-2xl overflow-hidden bg-neutral-200 cursor-pointer">
                {/* Placeholder image */}
                <div className="absolute inset-0 flex items-center justify-center bg-neutral-300">
                  <span className="text-neutral-600">Foto Placeholder</span>
                </div>

                {/* Overlay gradient - hidden by default, shown on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Bottom text - hidden by default, shown on hover */}
                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <p className="text-xs text-white/60 uppercase tracking-wider">
                    {item.category}
                  </p>
                  <h3 className="text-lg font-bold text-white mt-2">
                    {item.title}
                  </h3>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </Section>
    </>
  );
}
