import { MessageCircle, ShieldCheck, Leaf, Headset } from "lucide-react";
import sacoBranco from "@/assets/saco-branco.jpg.asset.json";
import { WhatsAppButton } from "./WhatsAppButton";
import { Reveal } from "./Reveal";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-surface pt-32 pb-16 lg:pt-40 lg:pb-24">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 -right-32 h-[32rem] w-[32rem] rounded-full bg-accent/25 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute top-1/2 -left-40 h-96 w-96 rounded-full bg-primary/5 blur-3xl"
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:px-8">
        <Reveal>
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/15 bg-background px-4 py-2 text-xs font-bold tracking-[0.16em] text-primary uppercase shadow-[var(--shadow-soft)]">
            <Leaf className="h-3.5 w-3.5" />
            Especialistas em sacos para silagem
          </span>

          <h1 className="mt-6 font-display text-4xl leading-[1.05] font-extrabold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Sacos para Silagem com{" "}
            <span className="text-primary">Resistência, Segurança</span> e
            Qualidade
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Soluções em embalagens para silagem desenvolvidas para proteger seu
            produto e oferecer mais segurança durante o armazenamento.
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
            <WhatsAppButton size="lg" icon={<MessageCircle className="h-5 w-5" />}>
              Solicitar orçamento
            </WhatsAppButton>
            <div className="flex items-center gap-3 rounded-xl border border-border bg-background px-4 py-3">
              <Headset className="h-5 w-5 shrink-0 text-primary" />
              <p className="text-sm leading-snug font-semibold text-foreground">
                Atendimento direto e especializado
                <span className="block text-xs font-normal text-muted-foreground">
                  Fale com quem entende de silagem
                </span>
              </p>
            </div>
          </div>

          <ul className="mt-10 grid gap-3 sm:grid-cols-3">
            {[
              "Opções de 180 e 200 micra",
              "Embalagem verde 100% reciclável",
              "Foco em resistência e segurança",
            ].map((item) => (
              <li
                key={item}
                className="flex items-start gap-2 text-sm font-medium text-foreground/80"
              >
                <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                {item}
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={150} className="relative">
          <div className="absolute -inset-4 -z-10 rounded-[2.5rem] bg-gradient-to-br from-primary/10 via-accent/20 to-transparent" />
          <div className="overflow-hidden rounded-[2rem] border border-border bg-background p-4 shadow-[var(--shadow-elevated)]">
            <img
              src={sacoBranco.url}
              alt="Saco para silagem Silo Flex preenchido com silagem"
              className="w-full rounded-2xl object-cover"
              width={1024}
              height={860}
            />
          </div>
          <div className="absolute -bottom-5 left-6 rounded-2xl bg-primary px-5 py-4 text-primary-foreground shadow-[var(--shadow-cta)] sm:left-10">
            <p className="font-display text-lg leading-none font-extrabold">
              180 & 200 micra
            </p>
            <p className="mt-1 text-xs tracking-wide opacity-90">
              Embalagens verde e branca
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
