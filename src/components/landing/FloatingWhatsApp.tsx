import { MessageCircle } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/siloflex";

export function FloatingWhatsApp() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar com a Silo Flex no WhatsApp"
      className="fixed right-5 bottom-5 z-50 grid h-12 w-12 place-items-center rounded-full bg-primary text-primary-foreground shadow-[var(--shadow-soft)] transition-colors duration-200 hover:bg-primary-deep sm:right-7 sm:bottom-7"
    >
      <MessageCircle className="h-5 w-5" />
    </a>
  );
}
