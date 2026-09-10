import { WhatsAppButton } from "./WhatsAppButton";
import { Reveal } from "./Reveal";

const VIDEO_ID = "G7DpToumyII";

export function Hero() {
  return (
    <section id="inicio" className="bg-background pt-28 pb-16 lg:pt-40 lg:pb-28">
      <div className="mx-auto grid max-w-[86rem] items-center gap-14 px-5 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20 lg:px-10">
        <Reveal>
          <p className="font-display text-[0.68rem] font-bold tracking-[0.28em] text-primary uppercase">
            Silo Flex — Sacos para Silagem
          </p>
          <h1 className="mt-7 font-display text-[2.4rem] leading-[1.04] font-extrabold tracking-tight text-foreground sm:text-5xl lg:text-[4rem]">
            Sacos para Silagem com{" "}
            <span className="text-primary">Resistência</span>,{" "}
            <span className="text-primary">Segurança</span> e{" "}
            <span className="text-primary">Qualidade</span>
          </h1>
          <p className="mt-8 max-w-xl text-base leading-relaxed text-muted-foreground lg:text-lg">
            Soluções em embalagens para silagem desenvolvidas para proteger seu
            produto e oferecer segurança durante o armazenamento.
          </p>
          <div className="mt-10">
            <WhatsAppButton size="lg">Quero meu orçamento</WhatsAppButton>
          </div>

          <div className="mt-14 flex max-w-lg items-stretch gap-8 border-t border-border pt-8">
            {[
              ["180 / 200", "micra disponíveis"],
              ["100%", "reciclável (linha verde)"],
              ["50%", "material virgem (linha branca)"],
            ].map(([value, label]) => (
              <div key={label}>
                <p className="font-display text-xl font-extrabold text-primary lg:text-2xl">
                  {value}
                </p>
                <p className="mt-1 text-[0.72rem] leading-snug text-muted-foreground">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={140}>
          <div className="overflow-hidden rounded-[1.5rem] border border-border shadow-[var(--shadow-soft)]">
            <div className="relative aspect-video w-full bg-black">
              <iframe
                className="absolute inset-0 h-full w-full"
                src={`https://www.youtube.com/embed/${VIDEO_ID}?rel=0&modestbranding=1`}
                title="Vídeo introdutório Silo Flex - Sacos para Silagem"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                referrerPolicy="strict-origin-when-cross-origin"
              />
            </div>
          </div>
        </Reveal>

      </div>
    </section>
  );
}
