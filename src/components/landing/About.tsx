import dono from "@/assets/proprietario.jpg.asset.json";
import { Reveal } from "./Reveal";

export function About() {
  return (
    <section id="sobre" className="bg-background py-20 lg:py-28">
      <div className="mx-auto grid max-w-[86rem] items-center gap-14 px-5 lg:grid-cols-2 lg:gap-20 lg:px-10">
        <Reveal className="order-2 lg:order-1">
          <div className="overflow-hidden rounded-[1.5rem]">
            <img
              src={dono.url}
              alt="Proprietário da Silo Flex ao lado do estoque de sacos para silagem"
              loading="lazy"
              className="aspect-[4/5] w-full object-cover"
              width={720}
              height={960}
            />
          </div>
        </Reveal>

        <Reveal delay={120} className="order-1 lg:order-2">
          <p className="font-display text-[0.68rem] font-bold tracking-[0.28em] text-primary uppercase">
            Sobre nós
          </p>
          <h2 className="mt-6 font-display text-3xl leading-[1.08] font-extrabold tracking-tight text-foreground sm:text-4xl lg:text-[3rem]">
            Qualidade que acompanha a produção
          </h2>
          <div className="mt-8 space-y-6 text-base leading-relaxed text-muted-foreground">
            <p>
              A Silo Flex é especializada em sacos para silagem. Trabalhamos com
              embalagens preparadas para a rotina do campo, com foco em
              resistência, segurança e qualidade no armazenamento da produção.
            </p>
            <p>
              Nossas linhas verde e branca estão disponíveis em 180 e 200 micra,
              permitindo que cada produtor escolha a solução ideal para a sua
              operação. O atendimento é direto, feito por quem conhece o produto
              e entende a necessidade de quem trabalha com silagem todos os dias.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
