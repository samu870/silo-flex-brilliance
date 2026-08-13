import { MessageCircle } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/siloflex";

export function FloatingWhatsApp() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar com a Silo Flex no WhatsApp"
      className="fixed right-4 bottom-4 z-50 inline-flex items-center gap-3 rounded-full bg-primary px-5 py-4 font-semibold text-primary-foreground shadow-[var(--shadow-cta)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary/90 sm:right-6 sm:bottom-6"
    >
      <MessageCircle className="h-6 w-6 shrink-0" />
      <span className="hidden text-sm sm:inline">Orçamento no WhatsApp</span>
    </a>
  );
}
