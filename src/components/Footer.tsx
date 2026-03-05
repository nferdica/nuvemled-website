import Link from "next/link";
import Image from "next/image";
import { Phone, MapPin } from "lucide-react";
import { site, navLinks, address, socialLinks } from "@/lib/constants";
import { InstagramIcon } from "@/lib/icons";

const iconMap: Record<string, React.ElementType> = {
  Instagram: InstagramIcon,
};

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary-dark text-white">
      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          <div className="flex flex-col gap-4">
            <Link href="/">
              <Image src="/logo-white.svg" alt="NuvemLED" width={160} height={22} />
            </Link>
            <p className="text-sm text-white/60">CNPJ: {site.cnpj}</p>
            <div className="flex flex-col gap-1.5 mt-2">
              <span className="flex items-center gap-1.5 text-sm text-white/80">
                <MapPin className="w-3.5 h-3.5 shrink-0" />
                {address.street} — {address.city}
              </span>
              <span className="flex items-center gap-1.5 text-sm text-white/80">
                <Phone className="w-3.5 h-3.5 shrink-0" />
                {address.phone}
              </span>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white/60">
              Navegação
            </h3>
            <ul className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/80 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white/60">
              Nossas Redes
            </h3>
            <div className="flex flex-row flex-wrap gap-3">
              {socialLinks.map((social) => {
                const Icon = iconMap[social.icon];
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="flex items-center justify-center w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                  >
                    {Icon && <Icon className="w-5 h-5" />}
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <p className="text-center text-sm text-white/50">
            &copy; {currentYear} {site.name}. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
