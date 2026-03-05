import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="gradient-hero min-h-screen flex items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-8xl sm:text-9xl font-bold text-white/20">404</h1>
        <h2 className="text-2xl sm:text-3xl font-bold text-white mt-4">
          Página não encontrada
        </h2>
        <p className="text-white/70 mt-4 max-w-md mx-auto">
          A página que você procura não existe ou foi movida.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 mt-8 rounded-full bg-white px-8 py-3 text-sm font-bold text-primary uppercase tracking-wider hover:bg-neutral-light transition-colors"
        >
          <ArrowLeft size={16} />
          Voltar ao Início
        </Link>
      </div>
    </div>
  );
}
