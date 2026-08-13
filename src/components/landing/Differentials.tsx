import { Reveal } from "./Reveal";

const items = [
  {
    number: "01",
    title: "Resistência",
    text: "Embalagens preparadas para suportar o manuseio, o transporte e o armazenamento da silagem.",
  },
  {
    number: "02",
    title: "Segurança",
    text: "Proteção da produção durante todo o período de armazenamento, do enchimento ao consumo.",
  },
  {
    number: "03",
    title: "Qualidade",
    text: "Padrão consistente em todas as entregas, com atendimento direto e especializado.",
  },
];

export function Differentials() {
  return (
    <section id="diferenciais" className="bg-surface py-20 lg:py-28">
      <div className="mx-auto max-w-[86rem] px-5 lg:px-10">
        <Reveal className="max-w-3xl">
          <p className="font-display text-[0.68rem] font-bold tracking-[0.28em] text-primary uppercase">
            Por que escolher a Silo Flex
          </p>
          <h2 className="mt-6 font-display text-3xl leading-[1.08] font-extrabold tracking-tight text-foreground sm:text-4xl lg:text-[3rem]">
            Mais segurança para a sua silagem
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-px overflow-hidden rounded-[1.75rem] border border-border bg-border lg:grid-cols-3">
          {items.map((item, i) => (
            <Reveal
              key={item.number}
              delay={i * 110}
              className="bg-background px-8 py-12 lg:px-12 lg:py-16"
            >
              <p className="font-display text-5xl leading-none font-extrabold text-primary lg:text-6xl">
                {item.number}
              </p>
              <h3 className="mt-8 font-display text-2xl font-extrabold tracking-tight text-foreground">
                {item.title}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                {item.text}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
