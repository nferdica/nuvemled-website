"use client";

import { getWhatsAppUrl } from "@/lib/constants";
import { WhatsAppIcon } from "@/lib/icons";

export function WhatsAppFAB() {
  return (
    <a
      href={getWhatsAppUrl()}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-lg hover:bg-green-600 hover:scale-110 transition-all duration-200"
      aria-label="Contato via WhatsApp"
    >
      <WhatsAppIcon className="w-7 h-7" />
    </a>
  );
}
