import type { Metadata } from "next";
import { HeroSection } from "@/components/sections/HeroSection";
import { MarqueeBanner } from "@/components/sections/MarqueeBanner";
import { VendaAluguelSection } from "@/components/sections/VendaAluguelSection";
import { ServicesGridSection } from "@/components/sections/ServicesGridSection";
import { PhilosophySection } from "@/components/sections/PhilosophySection";
import { FaqSection } from "@/components/sections/FaqSection";
import { CtaSection } from "@/components/sections/CtaSection";
import { GoogleMap } from "@/components/GoogleMap";

export const metadata: Metadata = {
  title: "NuvemLED — Iluminando Seus Espaços",
  description:
    "Soluções personalizadas de painéis de LED para igrejas, comércios, totens, residências, outdoor e show business. Transforme seu espaço com a NuvemLED.",
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <MarqueeBanner />
      <VendaAluguelSection />
      <ServicesGridSection />
      <PhilosophySection />
      <FaqSection />
      <CtaSection />
      <GoogleMap />
    </>
  );
}
