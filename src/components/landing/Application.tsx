import campo from "@/assets/campo-silo.jpg.asset.json";
import { WhatsAppButton } from "./WhatsAppButton";
import { Reveal } from "./Reveal";

export function Application() {
  return (
    <section className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-[86rem] px-5 lg:px-10">
        <Reveal className="max-w-3xl">
          <p className="font-display text-[0.68rem] font-bold tracking-[0.28em] text-primary uppercase">
            Aplicação real
          </p>
          <h2 className="mt-6 font-display text-3xl leading-[1.08] font-extrabold tracking-tight text-foreground sm:text-4xl lg:text-[3rem]">
            Da produção ao armazenamento
          </h2>
        </Reveal>

        <Reveal delay={110} className="mt-12 overflow-hidden rounded-[1.75rem]">
          <img
            src={campo.url}
            alt="Sacos para silagem Silo Flex armazenados em propriedade rural"
            loading="lazy"
            className="aspect-[16/9] w-full object-cover"
            width={719}
            height={514}
          />
        </Reveal>

        <Reveal
          delay={160}
          className="mt-16 flex flex-col items-start gap-8 border-t border-border pt-12 lg:flex-row lg:items-center lg:justify-between"
        >
          <p className="max-w-2xl font-display text-2xl leading-snug font-extrabold tracking-tight text-foreground lg:text-3xl">
            Precisa de sacos para silagem? Fale diretamente com a Silo Flex.
          </p>
          <WhatsAppButton size="lg" className="shrink-0">
            Falar no WhatsApp
          </WhatsAppButton>
        </Reveal>
      </div>
    </section>
  );
}
