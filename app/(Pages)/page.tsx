"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowDown, Star } from "lucide-react";
import castle from "@/app/assets/images/castle.png";
import bookCover from "@/app/assets/images/new-book-cover.png";
import author from "@/app/assets/images/author.png";
import ThemeSection from "../components/Home/ThemeSection";
import BuyTheBook from "../components/Home/BuyTheBook";
import ReviewSection from "@/app/components/Home/ReviewSection";
import BuyButton from "@/app/components/shared/BuyButton";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <section
        className="relative isolate flex min-h-[700px] items-center overflow-hidden md:-mt-14 md:min-h-[760px]"
        aria-labelledby="hero-title"
      >
        <Image
          src={castle}
          alt="Castelo do reino de Mondy, cenário de Lewis Helderish"
          fill
          priority
          sizes="100vw"
          className="-z-20 object-cover object-center"
        />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(10,20,25,.96)_0%,rgba(10,20,25,.82)_40%,rgba(10,20,25,.3)_70%,rgba(10,20,25,.5)_100%)]" />
        <div className="mx-auto grid w-full max-w-7xl items-center gap-10 px-6 pb-16 pt-28 md:grid-cols-[1.1fr_.9fr] md:px-10 md:pt-32">
          <div className="max-w-2xl">
            <p className="mb-4 text-sm font-bold uppercase tracking-[.2em] text-lightGolden">
              Fantasia brasileira • Aventura • Magia
            </p>
            <h1
              id="hero-title"
              className="mb-5 max-w-xl text-4xl leading-[.95] text-white sm:text-5xl md:text-6xl"
            >
              Lewis Helderish{" "}
              <span className="mt-3 block text-2xl font-normal text-lightGolden sm:text-3xl">
                A batalha pelo pergaminho
              </span>
            </h1>
            <p className="max-w-xl text-lg leading-relaxed text-slate-100 md:text-xl">
              Um jovem caçador, um pergaminho perdido e uma guerra capaz de
              extinguir a humanidade.
            </p>
            <p className="mt-3 max-w-xl text-base leading-relaxed text-slate-300">
              Para quem vive por aventuras, monstros e sistemas de magia
              inspirados em RPG.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
              <BuyButton source="hero" className="sm:min-w-52" />
              <a
                href="#sinopse"
                className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-lightGolden/60 px-5 py-2.5 font-semibold text-lightGolden transition hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lightGolden"
              >
                Conheça a história <ArrowDown size={17} />
              </a>
            </div>
            <div
              className="mt-6 flex items-center gap-3 text-sm text-slate-100"
              aria-label="Cinco avaliações de cinco estrelas na Amazon"
            >
              <span className="flex text-amber-300">
                {Array.from({ length: 5 }, (_, index) => (
                  <Star key={index} size={18} fill="currentColor" />
                ))}
              </span>
              <span>
                <strong>avaliações 5 estrelas</strong> na Amazon
              </span>
            </div>
          </div>
          <div className="relative mx-auto hidden w-[min(100%,350px)] rotate-[4deg] drop-shadow-2xl md:block">
            <Image
              src={bookCover}
              alt="Capa do livro Lewis Helderish: A batalha pelo pergaminho"
              priority
              sizes="350px"
              className="rounded-sm"
            />
          </div>
        </div>
      </section>
      <section
        className="mx-auto w-full max-w-7xl px-6 py-20 md:px-10"
        aria-labelledby="motivos-title"
      >
        <div className="mb-10 max-w-2xl">
          <p className="section-kicker">Uma jornada para mergulhar</p>
          <h2 id="motivos-title">Tudo o que uma grande aventura precisa</h2>
        </div>
        <ThemeSection />
      </section>
      <section
        className="border-y border-white/10 bg-[#101a20] py-20"
        aria-labelledby="reviews-title"
      >
        <div className="mx-auto w-full max-w-7xl px-6 md:px-10">
          <ReviewSection />
        </div>
      </section>
      <section
        id="sinopse"
        className="mx-auto w-full max-w-7xl px-6 py-20 md:px-10"
      >
        <BuyTheBook />
      </section>
      <section className="bg-goldenGradient py-16 text-secondary">
        <div className="mx-auto grid max-w-5xl items-center gap-8 px-6 md:grid-cols-[180px_1fr_auto] md:px-10">
          <Image
            src={author}
            alt="Daniel Ferreira, autor de Lewis Helderish"
            className="mx-auto h-36 w-36 rounded-full object-cover object-bottom shadow-lg"
          />
          <div>
            <p className="">Conheça o autor</p>
            <h2 className="mb-2">Uma história criada por Daniel Ferreira</h2>
            <p className="font-sans text-base leading-relaxed">
              Conheça o escritor por trás de Lewis Helderish e os bastidores
              deste universo de magia e monstros.
            </p>
          </div>
          <Link
            href="/About"
            className="rounded-full border border-secondary px-5 py-2.5 text-center font-semibold transition hover:bg-secondary hover:text-lightGolden"
          >
            Sobre o autor
          </Link>
        </div>
      </section>
      <section className="mx-auto flex max-w-4xl flex-col items-center px-6 py-20 text-center md:px-10">
        <p className="section-kicker">Sua próxima aventura começa agora</p>
        <h2 className="max-w-2xl text-3xl md:text-4xl">
          Lewis Helderish está esperando por você.
        </h2>
        <p className="mt-1 max-w-xl text-slate-300">
          Embarque na jornada de Lewis antes que o necromante alcance as últimas
          forças da humanidade.
        </p>
        <BuyButton source="final_cta" className="mt-7 min-w-56" />
      </section>
    </main>
  );
}
