import { MessageCircle } from "lucide-react";
import { COMPANY } from "@/lib/siloflex";
import { WhatsAppButton } from "./WhatsAppButton";
import { Reveal } from "./Reveal";

export function CtaBand() {
  return (
    <section className="relative overflow-hidden bg-primary-deep py-20 text-primary-foreground lg:py-24">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-primary-foreground/15"
      />
      <Reveal className="relative mx-auto max-w-3xl px-5 text-center lg:px-8">
        <h2 className="font-display text-3xl leading-tight font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
          Precisa de sacos para silagem?
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-base text-primary-foreground/85 sm:text-lg">
          Fale diretamente com a Silo Flex e solicite seu orçamento.
        </p>
        <div className="mt-10 flex flex-col items-center gap-4">
          <WhatsAppButton
            variant="light"
            size="lg"
            className="w-full sm:w-auto"
            icon={<MessageCircle className="h-5 w-5" />}
          >
            Falar com a Silo Flex no WhatsApp
          </WhatsAppButton>
          <p className="text-sm text-primary-foreground/75">{COMPANY.hours}.</p>
        </div>
      </Reveal>
    </section>
  );
}
