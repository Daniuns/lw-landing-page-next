import Image from "next/image";
import castle from "@/app/assets/images/castle.png";
import ThemeSection from "./components/Home/ThemeSection";
import BuyTheBook from "./components/Home/BuyTheBook";
import BuyButton from "./components/shared";
export default function Home() {
  return (
    <div>
      <main className="flex flex-col gap-8 ">
        <section>
          <Image src={castle} alt="Castle" />
          <div className="absolute top-2 left-1/2 -translate-x-1/2">
            <BuyButton />
          </div>
        </section>
        <section className="min-h-80 p-8">
          <ThemeSection />
        </section>

        <section className="min-h-80 p-8">
          <BuyTheBook />
        </section>
      </main>
    </div>
  );
}

export const metadata = {
  title: "Lewis Helderish A batalha pelo pergaminho",
  description: "Livro de ação, aventura, fantasia",
  keywords:
    "Lewis Helderish, Livro, Aventura, Magia, Monstros, Daniel Machado Ferreira",
  openGraph: {
    title: "Lewis Helderish A batalha pelo pergaminho",
    description: "Livro de ação, aventura e fantasia",
    url: "https://www.meusite.com",
    siteName: "Minha Landing",
    images: [
      {
        url: "https://www.meusite.com/imagem.jpg",
        width: 1200,
        height: 630,
        alt: "Imagem da landing page",
      },
    ],
    type: "website",
  },
};
