"use client";

import { FaWhatsapp } from "react-icons/fa";
import { SITE } from "@/lib/constants";

export function WhatsAppFAB() {
  const url = `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(SITE.whatsappMessage)}`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-lg hover:bg-green-600 hover:scale-110 transition-all duration-200"
      aria-label="Contato via WhatsApp"
    >
      <FaWhatsapp size={28} />
    </a>
  );
}
