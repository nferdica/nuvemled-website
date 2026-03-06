"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown } from "lucide-react";
import { navLinks, services } from "@/lib/constants";
import { serviceIconMap } from "@/lib/icons";

export function Header() {
  const pathname = usePathname();
  return <HeaderInner key={pathname} />;
}

function HeaderInner() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const toggleMobileDropdown = (label: string) => {
    setOpenDropdown((prev) => (prev === label ? null : label));
  };

  const getIconForHref = (href: string) => {
    const slug = href.replace("/services/", "");
    const service = services.find((s) => s.slug === slug);
    return service ? serviceIconMap[service.icon] : undefined;
  };

  return (
    <header className="absolute top-0 left-0 right-0 z-50 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <Link href="/">
            <Image src="/logo-white.svg" alt="NuvemLED" width={160} height={22} priority />
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => {
              if ("children" in link) {
                return (
                  <div key={link.label} className="relative group">
                    <button
                      className="flex items-center gap-1 text-white/90 hover:text-white text-sm font-medium transition-colors"
                      aria-haspopup="true"
                      aria-expanded={false}
                    >
                      {link.label}
                      <ChevronDown
                        size={14}
                        className="transition-transform duration-200 group-hover:rotate-180"
                      />
                    </button>
                    <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 translate-y-2 group-hover:translate-y-0">
                      <div className="bg-primary-dark/95 backdrop-blur-xl rounded-2xl shadow-2xl shadow-black/30 border border-white/10 p-2 min-w-[220px]" role="menu">
                        {link.children.map((child) => {
                          const Icon = getIconForHref(child.href);
                          return (
                            <Link
                              key={child.href}
                              href={child.href}
                              role="menuitem"
                              className="flex items-center gap-3 px-4 py-2.5 text-sm text-white/70 hover:text-white hover:bg-white/10 rounded-xl transition-colors"
                            >
                              {Icon && <Icon size={16} className="text-white shrink-0" />}
                              {child.label}
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                );
              }

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-white/90 hover:text-white text-sm font-medium transition-colors"
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <button
            className="lg:hidden text-white p-2 rounded-md hover:bg-white/10 transition-colors"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label={mobileOpen ? "Fechar menu" : "Abrir menu"}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <div
        className={`lg:hidden transition-all duration-300 overflow-hidden ${
          mobileOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="bg-primary-dark/95 backdrop-blur-md border-t border-white/10 px-4 py-4 flex flex-col gap-1">
          {navLinks.map((link) => {
            if ("children" in link) {
              const isOpen = openDropdown === link.label;
              return (
                <div key={link.label}>
                  <button
                    className="flex items-center justify-between w-full px-3 py-2.5 text-white/90 hover:text-white hover:bg-white/10 rounded-md text-sm font-medium transition-colors"
                    onClick={() => toggleMobileDropdown(link.label)}
                    aria-expanded={isOpen}
                  >
                    {link.label}
                    <ChevronDown
                      size={16}
                      className={`transition-transform duration-200 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-200 ${
                      isOpen ? "max-h-96" : "max-h-0"
                    }`}
                  >
                    <div className="pl-2 py-1 flex flex-col gap-1">
                      {link.children.map((child) => {
                        const Icon = getIconForHref(child.href);
                        return (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="flex items-center gap-3 px-3 py-2 text-sm text-white/70 hover:text-white hover:bg-white/10 rounded-md transition-colors"
                          >
                            {Icon && <Icon size={15} className="text-white shrink-0" />}
                            {child.label}
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                </div>
              );
            }

            return (
              <Link
                key={link.href}
                href={link.href}
                className="block px-3 py-2.5 text-white/90 hover:text-white hover:bg-white/10 rounded-md text-sm font-medium transition-colors"
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
