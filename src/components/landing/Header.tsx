import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo-green.png.asset.json";
import { NAV_LINKS } from "@/lib/siloflex";
import { WhatsAppButton } from "./WhatsAppButton";
import { cn } from "@/lib/utils";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 bg-background transition-shadow duration-300",
        scrolled ? "shadow-[var(--shadow-soft)]" : "",
      )}
    >
      <div className="mx-auto flex max-w-[86rem] items-center justify-between px-5 py-4 lg:px-10">
        <a href="#inicio" aria-label="Silo Flex - início">
          <img
            src={logo.url}
            alt="Silo Flex - Sacos para Silagem"
            className="h-11 w-auto lg:h-14"
            width={552}
            height={358}
          />
        </a>

        <div className="flex items-center gap-8">
          <nav className="hidden items-center gap-8 lg:flex">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[0.82rem] font-semibold tracking-wide text-foreground/70 transition-colors hover:text-primary"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <WhatsAppButton className="hidden sm:inline-flex" size="sm">
            Quero meu orçamento
          </WhatsAppButton>

          <button
            type="button"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            onClick={() => setOpen((v) => !v)}
            className="grid h-10 w-10 place-items-center text-primary lg:hidden"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-border bg-background px-5 pb-6 lg:hidden">
          <nav className="flex flex-col">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="border-b border-border/60 py-4 text-sm font-semibold text-foreground/80 transition-colors hover:text-primary"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <WhatsAppButton className="mt-5 w-full" size="md">
            Quero meu orçamento
          </WhatsAppButton>
        </div>
      )}
    </header>
  );
}
