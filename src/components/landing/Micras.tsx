import { Layers, MessageCircle } from "lucide-react";
import { WhatsAppButton } from "./WhatsAppButton";
import { Reveal } from "./Reveal";

const options = ["180 micra", "200 micra"];

export function Micras() {
  return (
    <section className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-5xl px-5 text-center lg:px-8">
        <Reveal>
          <span className="text-xs font-bold tracking-[0.2em] text-primary uppercase">
            Conheça o produto
          </span>
          <h2 className="mt-4 font-display text-3xl leading-tight font-extrabold tracking-tight text-foreground sm:text-4xl">
            Disponível em duas espessuras
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-muted-foreground">
            As embalagens verde e branca estão disponíveis em duas opções de
            micragem. Consulte a disponibilidade e receba seu orçamento pelo
            WhatsApp.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {options.map((option, index) => (
            <Reveal
              key={option}
              delay={index * 120}
              className="rounded-[1.75rem] border border-border bg-surface p-8 transition-all duration-300 hover:-translate-y-1 hover:border-primary/25 hover:shadow-[var(--shadow-elevated)]"
            >
              <span className="mx-auto grid h-12 w-12 place-items-center rounded-2xl bg-secondary text-primary">
                <Layers className="h-6 w-6" />
              </span>
              <p className="mt-5 font-display text-3xl font-extrabold tracking-tight text-foreground">
                {option}
              </p>
              <p className="mt-2 text-sm text-muted-foreground">
                Embalagem verde ou branca
              </p>
              <WhatsAppButton
                className="mt-7 w-full text-xs"
                variant="outline"
                icon={<MessageCircle className="h-4 w-4" />}
              >
                Consultar disponibilidade e orçamento
              </WhatsAppButton>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
