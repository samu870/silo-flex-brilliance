import { useEffect, useState } from "react";
import { Menu, X, MessageCircle } from "lucide-react";
import logo from "@/assets/logo.jpg.asset.json";
import { NAV_LINKS, COMPANY } from "@/lib/siloflex";
import { WhatsAppButton } from "./WhatsAppButton";
import { cn } from "@/lib/utils";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-border/70 bg-background/95 backdrop-blur-md"
          : "bg-background/80 backdrop-blur-sm",
      )}
    >
      <div className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-3 lg:px-8">
        <a href="#top" className="flex min-w-0 items-center gap-3">
          <img
            src={logo.url}
            alt="Logo Silo Flex - Sacos para Silagem"
            className="h-12 w-12 shrink-0 rounded-xl object-cover shadow-[var(--shadow-soft)] sm:h-14 sm:w-14"
          />
          <span className="min-w-0">
            <span className="block font-display text-lg leading-none font-extrabold tracking-tight text-primary sm:text-xl">
              SILO FLEX
            </span>
            <span className="block truncate text-[0.62rem] font-semibold tracking-[0.22em] text-muted-foreground uppercase">
              Sacos para Silagem
            </span>
          </span>
        </a>

        <div className="flex items-center gap-6">
          <nav className="hidden items-center gap-7 lg:flex">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-semibold text-foreground/75 transition-colors hover:text-primary"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <WhatsAppButton
            className="hidden md:inline-flex"
            icon={<MessageCircle className="h-4 w-4" />}
          >
            Solicitar orçamento
          </WhatsAppButton>

          <button
            type="button"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            onClick={() => setOpen((v) => !v)}
            className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-border text-primary transition-colors hover:bg-secondary lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-border bg-background px-5 pt-3 pb-6 lg:hidden">
          <nav className="flex flex-col">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="border-b border-border/60 py-3.5 text-sm font-semibold text-foreground/80 transition-colors hover:text-primary"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <WhatsAppButton
            className="mt-5 w-full"
            icon={<MessageCircle className="h-4 w-4" />}
          >
            Solicitar orçamento
          </WhatsAppButton>
          <p className="mt-3 text-center text-xs text-muted-foreground">
            {COMPANY.hours}
          </p>
        </div>
      )}
    </header>
  );
}
