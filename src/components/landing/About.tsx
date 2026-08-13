import { Handshake, Target } from "lucide-react";
import dono from "@/assets/proprietario.jpg.asset.json";
import { Reveal } from "./Reveal";

export function About() {
  return (
    <section id="empresa" className="bg-background py-20 lg:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 lg:grid-cols-2 lg:gap-20 lg:px-8">
        <Reveal className="relative order-2 lg:order-1">
          <div className="overflow-hidden rounded-[2rem] border border-border shadow-[var(--shadow-elevated)]">
            <img
              src={dono.url}
              alt="Proprietário da Silo Flex ao lado do estoque de sacos para silagem"
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="absolute -right-2 -bottom-6 max-w-[15rem] rounded-2xl border border-border bg-background p-5 shadow-[var(--shadow-elevated)] sm:right-6">
            <Handshake className="h-6 w-6 text-primary" />
            <p className="mt-3 text-sm leading-snug font-semibold text-foreground">
              Atendimento direto com quem cuida da produção todos os dias.
            </p>
          </div>
        </Reveal>

        <Reveal delay={120} className="order-1 lg:order-2">
          <span className="text-xs font-bold tracking-[0.2em] text-primary uppercase">
            Quem é a Silo Flex
          </span>
          <h2 className="mt-4 font-display text-3xl leading-tight font-extrabold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Soluções para quem leva a produção a sério
          </h2>
          <div className="mt-6 space-y-5 text-base leading-relaxed text-muted-foreground">
            <p>
              A Silo Flex é especializada em sacos para silagem. Nosso trabalho é
              simples e direto: entregar embalagens preparadas para o dia a dia do
              campo, com foco em resistência, segurança e qualidade no
              armazenamento.
            </p>
            <p>
              Trabalhamos com as embalagens verde e branca, nas opções de 180 e 200
              micra, para que cada produtor escolha a solução que melhor atende à
              sua operação. O atendimento é direto, sem intermediários, com quem
              conhece o produto e a rotina da propriedade.
            </p>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {[
              {
                title: "Especialização",
                text: "Foco exclusivo em embalagens para silagem.",
              },
              {
                title: "Compromisso",
                text: "Qualidade, resistência e segurança em cada entrega.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-border bg-surface p-5"
              >
                <Target className="h-5 w-5 text-primary" />
                <p className="mt-3 font-display text-base font-bold text-foreground">
                  {item.title}
                </p>
                <p className="mt-1 text-sm text-muted-foreground">{item.text}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
