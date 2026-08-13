import { Instagram, Facebook, MessageCircle, MapPin, Clock } from "lucide-react";
import logo from "@/assets/logo-white.png.asset.json";
import { COMPANY, WHATSAPP_URL, NAV_LINKS } from "@/lib/siloflex";
import { WhatsAppButton } from "./WhatsAppButton";

export function Footer() {
  return (
    <footer id="contato" className="bg-primary-deep text-primary-foreground">
      <div className="mx-auto max-w-[86rem] px-5 py-20 lg:px-10 lg:py-24">
        <div className="grid gap-14 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <img
              src={logo.url}
              alt="Silo Flex - Sacos para Silagem"
              loading="lazy"
              className="h-14 w-auto lg:h-16"
            />
            <h2 className="mt-8 max-w-lg font-display text-3xl leading-[1.1] font-extrabold tracking-tight lg:text-4xl">
              Solicite seu orçamento pelo WhatsApp
            </h2>
            <p className="mt-5 max-w-md text-sm leading-relaxed opacity-80">
              Atendimento direto e especializado com quem entende de silagem.
            </p>
            <WhatsAppButton
              variant="light"
              size="lg"
              className="mt-9"
              icon={<MessageCircle className="h-4 w-4" />}
            >
              Quero meu orçamento
            </WhatsAppButton>
          </div>

          <div className="grid gap-10 sm:grid-cols-2">
            <div>
              <p className="font-display text-[0.68rem] font-bold tracking-[0.24em] uppercase opacity-60">
                Contato
              </p>
              <ul className="mt-6 space-y-4 text-sm">
                <li>
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 font-semibold transition-opacity hover:opacity-70"
                  >
                    <MessageCircle className="h-4 w-4 shrink-0" />
                    {COMPANY.whatsappDisplay}
                  </a>
                </li>
                <li className="flex items-start gap-2 opacity-80">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
                  <span>
                    {COMPANY.addressLines.map((line) => (
                      <span key={line} className="block">
                        {line}
                      </span>
                    ))}
                  </span>
                </li>
                <li className="flex items-start gap-2 opacity-80">
                  <Clock className="mt-0.5 h-4 w-4 shrink-0" />
                  <span>{COMPANY.hours}</span>
                </li>
              </ul>
            </div>

            <div>
              <p className="font-display text-[0.68rem] font-bold tracking-[0.24em] uppercase opacity-60">
                Navegação
              </p>
              <ul className="mt-6 space-y-3 text-sm">
                {NAV_LINKS.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="opacity-80 transition-opacity hover:opacity-100"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>

              <p className="mt-10 font-display text-[0.68rem] font-bold tracking-[0.24em] uppercase opacity-60">
                Redes sociais
              </p>
              <div className="mt-5 flex gap-3">
                <a
                  href={COMPANY.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Instagram ${COMPANY.instagram}`}
                  className="grid h-10 w-10 place-items-center rounded-full border border-primary-foreground/25 transition-colors hover:bg-primary-foreground/10"
                >
                  <Instagram className="h-4 w-4" />
                </a>
                <a
                  href={COMPANY.facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Facebook ${COMPANY.facebook}`}
                  className="grid h-10 w-10 place-items-center rounded-full border border-primary-foreground/25 transition-colors hover:bg-primary-foreground/10"
                >
                  <Facebook className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-2 border-t border-primary-foreground/15 pt-8 text-xs opacity-70 sm:flex-row sm:items-center sm:justify-between">
          <p>
            {COMPANY.fullName} — CNPJ {COMPANY.cnpj}
          </p>
          <p>Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
