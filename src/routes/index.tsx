import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/landing/Header";
import { Hero } from "@/components/landing/Hero";
import { About } from "@/components/landing/About";
import { Products } from "@/components/landing/Products";
import { Pillars } from "@/components/landing/Pillars";
import { InUse } from "@/components/landing/InUse";
import { Sustainability } from "@/components/landing/Sustainability";
import { Micras } from "@/components/landing/Micras";
import { CtaBand } from "@/components/landing/CtaBand";
import { Contact } from "@/components/landing/Contact";
import { Footer } from "@/components/landing/Footer";
import { FloatingWhatsApp } from "@/components/landing/FloatingWhatsApp";

const title = "Silo Flex | Sacos para Silagem Resistentes e Seguros";
const description =
  "Sacos para silagem Silo Flex nas opções verde 100% reciclável e branca, em 180 e 200 micra. Solicite seu orçamento pelo WhatsApp.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background font-sans antialiased">
      <Header />
      <main>
        <Hero />
        <About />
        <Products />
        <Pillars />
        <InUse />
        <Sustainability />
        <Micras />
        <CtaBand />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
