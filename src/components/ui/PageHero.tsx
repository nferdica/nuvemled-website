import { AnimateOnScroll } from "./AnimateOnScroll";

interface PageHeroProps {
  title: string;
  subtitle?: string;
}

export function PageHero({ title, subtitle }: PageHeroProps) {
  return (
    <div className="gradient-hero pt-28 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <AnimateOnScroll>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-4 text-lg text-white/70 max-w-2xl">{subtitle}</p>
          )}
        </AnimateOnScroll>
      </div>
    </div>
  );
}
