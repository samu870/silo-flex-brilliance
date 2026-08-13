import verde from "@/assets/embalagem-verde-clean.png.asset.json";
import { Reveal } from "./Reveal";

export function Sustainability() {
  return (
    <section className="bg-primary-deep py-20 text-primary-foreground lg:py-28">
      <div className="mx-auto grid max-w-[86rem] items-center gap-14 px-5 lg:grid-cols-[1fr_0.85fr] lg:gap-20 lg:px-10">
        <Reveal>
          <p className="font-display text-[0.68rem] font-bold tracking-[0.28em] uppercase opacity-70">
            Sustentabilidade
          </p>
          <h2 className="mt-6 font-display text-3xl leading-[1.08] font-extrabold tracking-tight sm:text-4xl lg:text-[3rem]">
            Resistência que também pensa no futuro
          </h2>
          <p className="mt-8 max-w-xl text-base leading-relaxed opacity-85 lg:text-lg">
            A linha verde da Silo Flex é produzida com material 100% reciclável,
            unindo o desempenho exigido no campo a uma escolha mais responsável
            para a sua propriedade.
          </p>
          <p className="mt-10 font-display text-2xl font-extrabold tracking-tight lg:text-3xl">
            Material 100% reciclável
          </p>
        </Reveal>

        <Reveal delay={130} className="flex justify-center">
          <img
            src={verde.url}
            alt="Saco para silagem verde 100% reciclável da Silo Flex"
            loading="lazy"
            className="h-72 w-auto object-contain lg:h-[26rem]"
          />
        </Reveal>
      </div>
    </section>
  );
}
