import verde from "@/assets/embalagem-verde-clean.png.asset.json";
import branca from "@/assets/embalagem-branca-clean.png.asset.json";
import { WhatsAppButton } from "./WhatsAppButton";
import { Reveal } from "./Reveal";

const products = [
  {
    index: "Linha Verde",
    name: "Saco para Silagem Verde",
    image: verde.url,
    alt: "Saco para silagem verde da Silo Flex",
    lead: "Produzido com material 100% reciclável, une desempenho no campo e responsabilidade ambiental.",
    features: [
      "Material 100% reciclável",
      "Alta resistência no manuseio",
      "Segurança no armazenamento",
      "Disponível em 180 e 200 micra",
    ],
    dark: true,
  },
  {
    index: "Linha Branca",
    name: "Saco para Silagem Branco",
    image: branca.url,
    alt: "Saco para silagem branco da Silo Flex",
    lead: "Composição com 50% de material virgem, garantindo estrutura reforçada para a silagem.",
    features: [
      "50% de material virgem",
      "Alta resistência no manuseio",
      "Segurança no armazenamento",
      "Disponível em 180 e 200 micra",
    ],
    dark: false,
  },
];

export function Products() {
  return (
    <section id="produtos" className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-[86rem] px-5 lg:px-10">
        <Reveal className="max-w-3xl">
          <p className="font-display text-[0.68rem] font-bold tracking-[0.28em] text-primary uppercase">
            Nossos produtos
          </p>
          <h2 className="mt-6 font-display text-3xl leading-[1.08] font-extrabold tracking-tight text-foreground sm:text-4xl lg:text-[3rem]">
            Duas linhas, a mesma exigência de qualidade
          </h2>
        </Reveal>

        <div className="mt-16 space-y-8">
          {products.map((product, i) => (
            <Reveal
              key={product.name}
              delay={i * 100}
              className="grid overflow-hidden rounded-[1.75rem] border border-border lg:grid-cols-2"
            >
              <div
                className={
                  product.dark
                    ? "flex items-center justify-center bg-primary-deep px-8 py-14 lg:py-20"
                    : "flex items-center justify-center bg-secondary px-8 py-14 lg:py-20"
                }
              >
                <img
                  src={product.image}
                  alt={product.alt}
                  loading="lazy"
                  className="h-64 w-auto object-contain lg:h-80"
                />
              </div>

              <div className="flex flex-col justify-center px-7 py-10 sm:px-12 lg:px-16 lg:py-16">
                <p className="font-display text-[0.68rem] font-bold tracking-[0.24em] text-primary uppercase">
                  {product.index}
                </p>
                <h3 className="mt-4 font-display text-2xl font-extrabold tracking-tight text-foreground lg:text-4xl">
                  {product.name}
                </h3>
                <p className="mt-5 text-base leading-relaxed text-muted-foreground">
                  {product.lead}
                </p>
                <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                  {product.features.map((feature) => (
                    <li
                      key={feature}
                      className="border-t border-border pt-3 text-sm font-medium text-foreground/80"
                    >
                      {feature}
                    </li>
                  ))}
                </ul>
                <WhatsAppButton className="mt-10 self-start" size="md">
                  Solicitar orçamento
                </WhatsAppButton>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
