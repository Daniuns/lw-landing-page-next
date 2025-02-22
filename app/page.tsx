import Image from "next/image";
import castle from "@/app/assets/images/castle.png";
import ThemeSection from "./components/Home/ThemeSection";
import BuyTheBook from "./components/Home/BuyTheBook";
export default function Home() {
  return (
    <div className="">
      <main className="flex flex-col gap-8 ">
        <section className="">
          <Image src={castle} alt="Castle" />
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
