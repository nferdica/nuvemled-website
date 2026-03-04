import type { Metadata } from "next";
import { PageHero } from "@/components/ui/page-hero";
import { Section } from "@/components/ui/section";
import { AnimateOnScroll } from "@/components/ui/animate-on-scroll";

export const metadata: Metadata = {
  title: "Clientes",
  description: "Conheça as empresas e artistas que confiam na NuvemLED.",
};

const CLIENTS = [
  "Cliente 1",
  "Cliente 2",
  "Cliente 3",
  "Cliente 4",
  "Cliente 5",
  "Cliente 6",
  "Cliente 7",
  "Cliente 8",
  "Cliente 9",
  "Cliente 10",
  "Cliente 11",
  "Cliente 12",
];

export default function ClientesPage() {
  return (
    <>
      <PageHero
        title="Nossos Clientes"
        subtitle="Empresas e artistas que confiam na NuvemLED."
      />

      <Section>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
          {CLIENTS.map((client, index) => (
            <AnimateOnScroll key={index} delay={index * 0.05}>
              <div className="flex items-center justify-center aspect-[3/2] rounded-xl border border-neutral-light bg-white p-6 hover:shadow-lg transition-shadow">
                <span className="text-neutral-dark/30 text-sm font-medium">
                  {client}
                </span>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </Section>
    </>
  );
}
