import { Recycle, Leaf, Sprout, MessageCircle } from "lucide-react";
import verde from "@/assets/embalagem-verde-clean.png.asset.json";
import { WhatsAppButton } from "./WhatsAppButton";
import { Reveal } from "./Reveal";

export function Sustainability() {
  return (
    <section
      id="sustentabilidade"
      className="relative overflow-hidden bg-primary-deep py-20 text-primary-foreground lg:py-28"
    >
      <Leaf
        aria-hidden
        className="pointer-events-none absolute -top-10 -left-10 h-56 w-56 text-primary-foreground/5"
      />
      <Recycle
        aria-hidden
        className="pointer-events-none absolute -right-16 bottom-0 h-80 w-80 text-primary-foreground/5"
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
        <Reveal className="order-2 flex justify-center lg:order-1">
          <img
            src={verde.url}
            alt="Saco para silagem verde com material 100% reciclável"
            loading="lazy"
            className="h-72 w-auto object-contain drop-shadow-2xl sm:h-96"
          />
        </Reveal>

        <Reveal delay={120} className="order-1 lg:order-2">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/20 px-4 py-2 text-xs font-bold tracking-[0.18em] uppercase">
            <Recycle className="h-3.5 w-3.5" />
            Sustentabilidade
          </span>
          <h2 className="mt-6 font-display text-3xl leading-tight font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
            Resistência que também pensa no futuro
          </h2>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-primary-foreground/85">
            A embalagem verde da Silo Flex é produzida com material 100%
            reciclável, unindo resistência, segurança e sustentabilidade no
            armazenamento da sua silagem.
          </p>

          <div className="mt-8 inline-flex items-center gap-4 rounded-2xl bg-primary-foreground/10 px-6 py-5 backdrop-blur-sm">
            <Sprout className="h-8 w-8 shrink-0" />
            <p className="font-display text-xl font-extrabold sm:text-2xl">
              Material 100% reciclável
            </p>
          </div>

          <div className="mt-10">
            <WhatsAppButton
              variant="light"
              size="lg"
              icon={<MessageCircle className="h-5 w-5" />}
            >
              Solicitar orçamento
            </WhatsAppButton>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
