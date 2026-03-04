"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Menu, X, ChevronDown, MessageCircle } from "lucide-react";
import { Logo } from "@/components/logo";
import { NAV_LINKS, SITE } from "@/lib/constants";

const whatsappUrl = `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(SITE.whatsappMessage)}`;

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setOpenDropdown(null);
  }, [pathname]);

  const toggleMobileDropdown = (label: string) => {
    setOpenDropdown((prev) => (prev === label ? null : label));
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-primary-dark/90 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Logo variant="white" />

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map((link) => {
              if ("children" in link) {
                return (
                  <div key={link.label} className="relative group">
                    <button
                      className="flex items-center gap-1 text-white/90 hover:text-white text-sm font-medium transition-colors"
                      aria-haspopup="true"
                    >
                      {link.label}
                      <ChevronDown
                        size={14}
                        className="transition-transform duration-200 group-hover:rotate-180"
                      />
                    </button>
                    {/* Dropdown */}
                    <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                      <div className="bg-primary-dark/95 backdrop-blur-md rounded-lg shadow-xl border border-white/10 py-2 min-w-[180px]">
                        {link.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="block px-4 py-2 text-sm text-white/80 hover:text-white hover:bg-white/10 transition-colors"
                          >
                            {child.label}
                          </Link>
                        ))}
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

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-accent-violet hover:bg-accent-magenta text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-colors duration-200"
            >
              <MessageCircle size={16} />
              Fale Conosco
            </a>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="lg:hidden text-white p-2 rounded-md hover:bg-white/10 transition-colors"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label={mobileOpen ? "Fechar menu" : "Abrir menu"}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`lg:hidden transition-all duration-300 overflow-hidden ${
          mobileOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="bg-primary-dark/95 backdrop-blur-md border-t border-white/10 px-4 py-4 flex flex-col gap-1">
          {NAV_LINKS.map((link) => {
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
                    <div className="pl-4 py-1 flex flex-col gap-1">
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block px-3 py-2 text-sm text-white/70 hover:text-white hover:bg-white/10 rounded-md transition-colors"
                        >
                          {child.label}
                        </Link>
                      ))}
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

          {/* Mobile CTA */}
          <div className="pt-3 mt-2 border-t border-white/10">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-accent-violet hover:bg-accent-magenta text-white text-sm font-semibold px-5 py-3 rounded-full transition-colors duration-200 w-full"
            >
              <MessageCircle size={16} />
              Fale Conosco
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
