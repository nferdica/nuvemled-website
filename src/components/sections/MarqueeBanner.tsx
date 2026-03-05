export function MarqueeBanner() {
  return (
    <div className="bg-primary py-3 overflow-hidden">
      <div className="flex animate-marquee whitespace-nowrap">
        {Array.from({ length: 6 }).map((_, i) => (
          <span
            key={i}
            className="text-sm font-semibold text-white/80 uppercase tracking-widest mx-8"
          >
            NuvemLED &bull; Todo Espaço é Seu &bull;
          </span>
        ))}
      </div>
    </div>
  );
}
