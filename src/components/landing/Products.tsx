import { Check, MessageCircle, Recycle, Package } from "lucide-react";
import verde from "@/assets/embalagem-verde-clean.png.asset.json";
import branca from "@/assets/embalagem-branca-clean.png.asset.json";
import { WhatsAppButton } from "./WhatsAppButton";
import { Reveal } from "./Reveal";

const products = [
  {
    name: "Saco para Silagem Verde",
    image: verde.url,
    alt: "Saco para silagem verde da Silo Flex",
    highlight: "Material 100% reciclável",
    icon: Recycle,
    features: [
      "Material 100% reciclável",
      "Resistência",
      "Segurança",
      "Sustentabilidade",
      "Opções de 180 micra e 200 micra",
    ],
    tone: "green" as const,
  },
  {
    name: "Saco para Silagem Branco",
    image: branca.url,
    alt: "Saco para silagem branco da Silo Flex",
    highlight: "50% de material virgem",
    icon: Package,
    features: [
      "Material com 50% de material virgem",
      "Resistência",
      "Segurança",
      "Sustentabilidade",
      "Opções de 180 micra e 200 micra",
    ],
    tone: "light" as const,
  },
];

export function Products() {
  return (
    <section id="embalagens" className="bg-surface py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal className="max-w-2xl">
          <span className="text-xs font-bold tracking-[0.2em] text-primary uppercase">
            Nossas embalagens
          </span>
          <h2 className="mt-4 font-display text-3xl leading-tight font-extrabold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Escolha a embalagem ideal para a sua silagem
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground">
            Duas linhas de sacos para silagem, disponíveis em 180 e 200 micra.
            Solicite seu orçamento pelo WhatsApp e fale diretamente com a Silo Flex.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          {products.map((product, index) => (
            <Reveal
              key={product.name}
              delay={index * 120}
              className="flex h-full flex-col overflow-hidden rounded-[2rem] border border-border bg-background shadow-[var(--shadow-soft)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-elevated)]"
            >
              <div
                className={
                  product.tone === "green"
                    ? "flex items-center justify-center bg-gradient-to-br from-primary to-primary-deep px-8 py-10"
                    : "flex items-center justify-center bg-gradient-to-br from-secondary to-accent/40 px-8 py-10"
                }
              >
                <img
                  src={product.image}
                  alt={product.alt}
                  loading="lazy"
                  className="h-64 w-auto object-contain drop-shadow-2xl sm:h-72"
                />
              </div>

              <div className="flex flex-1 flex-col p-7 sm:p-9">
                <div className="flex items-center gap-2 text-primary">
                  <product.icon className="h-5 w-5 shrink-0" />
                  <span className="text-xs font-bold tracking-[0.16em] uppercase">
                    {product.highlight}
                  </span>
                </div>
                <h3 className="mt-3 font-display text-2xl font-extrabold tracking-tight text-foreground">
                  {product.name}
                </h3>
                <ul className="mt-6 space-y-3">
                  {product.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-3 text-sm font-medium text-foreground/80"
                    >
                      <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-secondary text-primary">
                        <Check className="h-3 w-3" />
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <WhatsAppButton
                  className="mt-8 w-full"
                  icon={<MessageCircle className="h-4 w-4" />}
                >
                  Quero fazer um orçamento
                </WhatsAppButton>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
