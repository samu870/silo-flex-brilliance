import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/landing/Header";
import { Hero } from "@/components/landing/Hero";
import { Products } from "@/components/landing/Products";
import { About } from "@/components/landing/About";
import { Differentials } from "@/components/landing/Differentials";
import { Sustainability } from "@/components/landing/Sustainability";
import { Application } from "@/components/landing/Application";
import { Footer } from "@/components/landing/Footer";
import { FloatingWhatsApp } from "@/components/landing/FloatingWhatsApp";

const title = "Silo Flex | Sacos para Silagem Resistentes e Seguros";
const description =
  "Sacos para silagem Silo Flex: linha verde 100% reciclável e linha branca com 50% de material virgem, em 180 e 200 micra. Solicite seu orçamento pelo WhatsApp.";

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
        <VideoHero />
        <Hero />
        <Products />
        <About />
        <Differentials />
        <Sustainability />
        <Application />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
