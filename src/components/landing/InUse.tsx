import campo from "@/assets/campo-silo.jpg.asset.json";
import carregamento from "@/assets/carregamento.jpg.asset.json";
import estoque from "@/assets/estoque.jpg.asset.json";
import { Reveal } from "./Reveal";

export function InUse() {
  return (
    <section className="bg-surface py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal className="max-w-3xl">
          <span className="text-xs font-bold tracking-[0.2em] text-primary uppercase">
            Produto em uso
          </span>
          <h2 className="mt-4 font-display text-3xl leading-tight font-extrabold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Da produção ao armazenamento, conte com a Silo Flex
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground">
            Nossas embalagens estão no dia a dia real do campo, do carregamento
            até a formação do silo na propriedade.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          <Reveal className="group relative overflow-hidden rounded-[2rem] border border-border shadow-[var(--shadow-soft)] lg:col-span-2">
            <img
              src={campo.url}
              alt="Sacos para silagem verdes empilhados na formação do silo em propriedade rural"
              loading="lazy"
              className="h-72 w-full object-cover transition-transform duration-700 group-hover:scale-105 sm:h-96 lg:h-[30rem]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary-deep/85 via-primary-deep/15 to-transparent" />
            <div className="absolute bottom-0 p-7 sm:p-9">
              <p className="font-display text-xl font-extrabold text-primary-foreground sm:text-2xl">
                Silo formado com sacos Silo Flex
              </p>
              <p className="mt-2 max-w-md text-sm text-primary-foreground/85">
                Aplicação real em propriedade rural, com o produto armazenado e
                protegido.
              </p>
            </div>
          </Reveal>

          <div className="grid gap-6">
            {[
              {
                src: carregamento.url,
                alt: "Trabalhadores carregando sacos para silagem no caminhão",
                title: "Logística no campo",
                text: "Manuseio prático do carregamento à propriedade.",
              },
              {
                src: estoque.url,
                alt: "Estoque de fardos de sacos para silagem da Silo Flex",
                title: "Estoque pronto para entrega",
                text: "Embalagens organizadas e disponíveis para orçamento.",
              },
            ].map((item, index) => (
              <Reveal
                key={item.title}
                delay={120 + index * 120}
                className="group relative overflow-hidden rounded-[2rem] border border-border shadow-[var(--shadow-soft)]"
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  loading="lazy"
                  className="h-56 w-full object-cover transition-transform duration-700 group-hover:scale-105 lg:h-[14.25rem]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-deep/85 via-primary-deep/10 to-transparent" />
                <div className="absolute bottom-0 p-6">
                  <p className="font-display text-base font-extrabold text-primary-foreground">
                    {item.title}
                  </p>
                  <p className="mt-1 text-xs text-primary-foreground/85">
                    {item.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
