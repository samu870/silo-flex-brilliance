import { ShieldCheck, Lock, Recycle, Award } from "lucide-react";
import { Reveal } from "./Reveal";

const pillars = [
  {
    icon: ShieldCheck,
    title: "Resistência",
    text: "Embalagens desenvolvidas para suportar as exigências do armazenamento de silagem.",
  },
  {
    icon: Lock,
    title: "Segurança",
    text: "Uma solução pensada para proteger o material armazenado.",
  },
  {
    icon: Recycle,
    title: "Sustentabilidade",
    text: "Destaque para a opção de embalagem verde com material 100% reciclável.",
  },
  {
    icon: Award,
    title: "Qualidade",
    text: "Produtos apresentados com foco em desempenho, segurança e confiabilidade.",
  },
];

export function Pillars() {
  return (
    <section id="diferenciais" className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal className="max-w-2xl">
          <span className="text-xs font-bold tracking-[0.2em] text-primary uppercase">
            Por que escolher a Silo Flex
          </span>
          <h2 className="mt-4 font-display text-3xl leading-tight font-extrabold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Mais segurança para sua silagem
          </h2>
        </Reveal>

        <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((pillar, index) => (
            <Reveal
              as="li"
              key={pillar.title}
              delay={index * 90}
              className="group rounded-[1.75rem] border border-border bg-surface p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/25 hover:bg-background hover:shadow-[var(--shadow-elevated)]"
            >
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-primary text-primary-foreground transition-transform duration-300 group-hover:scale-105">
                <pillar.icon className="h-6 w-6" />
              </span>
              <h3 className="mt-6 font-display text-lg font-extrabold tracking-wide text-foreground uppercase">
                {pillar.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {pillar.text}
              </p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
