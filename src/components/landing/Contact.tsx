import {
  MessageCircle,
  MapPin,
  Clock,
  Instagram,
  Facebook,
  FileText,
  Phone,
} from "lucide-react";
import { COMPANY } from "@/lib/siloflex";
import { WhatsAppButton } from "./WhatsAppButton";
import { Reveal } from "./Reveal";

export function Contact() {
  const items = [
    {
      icon: Phone,
      label: "WhatsApp",
      value: COMPANY.whatsappDisplay,
    },
    { icon: MapPin, label: "Endereço", value: COMPANY.address },
    { icon: Clock, label: "Atendimento", value: COMPANY.hours },
    {
      icon: Instagram,
      label: "Instagram",
      value: COMPANY.instagram,
      href: COMPANY.instagramUrl,
    },
    {
      icon: Facebook,
      label: "Facebook",
      value: COMPANY.facebook,
      href: COMPANY.facebookUrl,
    },
    { icon: FileText, label: "CNPJ", value: COMPANY.cnpj },
  ];

  return (
    <section id="contato" className="bg-surface py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal className="max-w-2xl">
          <span className="text-xs font-bold tracking-[0.2em] text-primary uppercase">
            Contato
          </span>
          <h2 className="mt-4 font-display text-3xl leading-tight font-extrabold tracking-tight text-foreground sm:text-4xl">
            {COMPANY.fullName}
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground">
            Entre em contato pelo WhatsApp e receba o orçamento das embalagens
            para silagem.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <Reveal className="grid gap-4 sm:grid-cols-2">
            {items.map((item) => (
              <div
                key={item.label}
                className="flex items-start gap-4 rounded-2xl border border-border bg-background p-5"
              >
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-secondary text-primary">
                  <item.icon className="h-5 w-5" />
                </span>
                <div className="min-w-0">
                  <p className="text-xs font-bold tracking-[0.14em] text-muted-foreground uppercase">
                    {item.label}
                  </p>
                  {item.href ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-1 block text-sm font-semibold text-foreground transition-colors hover:text-primary"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="mt-1 text-sm font-semibold text-foreground">
                      {item.value}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </Reveal>

          <Reveal
            delay={120}
            className="flex flex-col justify-center rounded-[2rem] bg-primary p-8 text-primary-foreground shadow-[var(--shadow-elevated)]"
          >
            <h3 className="font-display text-2xl leading-tight font-extrabold">
              Solicite seu orçamento agora
            </h3>
            <p className="mt-3 text-sm text-primary-foreground/85">
              Atendimento direto e especializado em sacos para silagem.
            </p>
            <WhatsAppButton
              variant="light"
              className="mt-7 w-full"
              icon={<MessageCircle className="h-5 w-5" />}
            >
              Falar no WhatsApp
            </WhatsAppButton>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
