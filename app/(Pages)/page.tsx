"use client";

import Image from "next/image";
import castle from "@/app/assets/images/castle.png";
import ThemeSection from "../components/Home/ThemeSection";
import BuyTheBook from "../components/Home/BuyTheBook";
import ReviewSection from "@/app/components/Home/ReviewSection";

export default function Home() {
  return (
    <main className="flex flex-col gap-8 w-screen">
      <section className="md:-mt-14">
        <Image src={castle} alt="Castle" />
      </section>
      <section className="min-h-80 p-8">
        <ThemeSection />
      </section>
      <section className="min-h-80 p-8">
        <ReviewSection />
      </section>
      <section className="min-h-80 p-8">
        <BuyTheBook />
      </section>
    </main>
  );
}
