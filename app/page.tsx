import Image from "next/image";
import castle from "@/app/assets/images/castle.png";
import ThemeSection from "./components/Home/ThemeSection";
import BuyTheBook from "./components/Home/BuyTheBook";
import BuyButton from "./components/shared/BuyButton";
import { GOOGLE_ANALYTICS_ID } from "@/settings";

export default function Home() {
  console.log("LOG:", GOOGLE_ANALYTICS_ID[2]);

  return (
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
  );
}
