import { Reveal } from "./Reveal";

const VIDEO_ID = "kOqCEvdbxRE";

export function VideoHero() {
  return (
    <section id="video" className="bg-background pt-28 pb-10 lg:pt-36 lg:pb-16">
      <div className="mx-auto max-w-3xl px-5 text-center">
        <Reveal>
          <p className="font-display text-[0.68rem] font-bold tracking-[0.28em] text-primary uppercase">
            Silo Flex em ação
          </p>
          <h2 className="mt-4 font-display text-2xl font-extrabold tracking-tight text-foreground sm:text-3xl">
            Veja a qualidade dos nossos sacos no campo
          </h2>
        </Reveal>

        <Reveal delay={120}>
          <div className="mt-8 overflow-hidden rounded-[1.5rem] border border-border shadow-[var(--shadow-soft)]">
            <div className="relative mx-auto h-[60vh] w-full max-w-[22rem] bg-black md:h-[70vh] md:max-w-[24rem]">
              <iframe
                className="absolute inset-0 h-full w-full"
                src={`https://www.youtube.com/embed/${VIDEO_ID}?rel=0&modestbranding=1`}
                title="Silo Flex - Sacos para Silagem"
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
