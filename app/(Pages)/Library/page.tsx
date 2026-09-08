import * as knowledgeImages from "@/app/assets/images/library";
import Image from "next/image";
import scrollBg from "@/app/assets/images/scroll_bg.png";
import libraryHero from "@/app/assets/images/library.jpg";
import LibraryItem from "@/app/components/Library";
import { knowledgeData } from "@/app/services/library";

export default function Library() {
  return (
    <main className="overflow-hidden bg-[#172228] pb-10 md:-mt-14">
      <section className="relative isolate min-h-[370px] overflow-hidden border-b-4 border-[#8e6031] md:min-h-[480px]">
        <Image
          src={libraryHero}
          alt="Interior da biblioteca"
          priority
          fill
          sizes="100vw"
          className="object-cover object-center opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#10181d]/25 via-[#10181d]/50 to-[#111a1e]" />
        <div className="relative mx-auto flex min-h-[370px] max-w-6xl flex-col justify-end px-6 pb-12 text-center md:min-h-[480px] md:pb-16">
          <p className="mb-3 font-serif text-xs font-bold uppercase tracking-[.32em] text-[#e6c991]">
            Arquivo de Lewis Helderish
          </p>
          <h1 className="mb-3 font-serif text-5xl leading-none text-[#f4dfb7] drop-shadow-[0_3px_2px_rgba(0,0,0,.7)] md:text-7xl">
            Biblioteca
          </h1>
          <div
            className="mx-auto flex items-center gap-3 text-[#d7ad6d]"
            aria-hidden="true"
          >
            <span className="h-px w-16 bg-current" />✦
            <span className="h-px w-16 bg-current" />
          </div>
          <p className="mx-auto mt-4 max-w-xl font-serif text-lg italic text-[#ead9b5] md:text-xl">
            Fragmentos de história, magia e saberes guardados entre estas
            páginas.
          </p>
        </div>
      </section>
      <section
        className="mx-auto w-[calc(100%-1.5rem)] max-w-6xl bg-[#e7c98f] shadow-[0_0_0_1px_rgba(78,43,16,.75),0_24px_60px_rgba(0,0,0,.38)] md:w-[calc(100%-3rem)]"
        style={{
          backgroundImage: `linear-gradient(to left, rgba(167,147,108,.87), rgba(231,201,143,.87)), url(${scrollBg.src})`,
          backgroundSize: "auto, 360px",
        }}
      >
        <header className="border-b border-[#6a3d1b]/50 px-6 py-10 text-center md:px-16 md:py-14">
          <p className="font-serif text-sm italic text-[#63391c]">
            Coleção de conhecimentos conhecidos
          </p>
          <h2 className="mx-auto mt-2 max-w-2xl text-3xl leading-tight text-[#3b210f] md:text-4xl">
            Acervo da Biblioteca
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-[#58351c] md:text-base">
            Cidades, feitiços e artefatos que ajudam a contar a história deste
            mundo.
          </p>
        </header>
        <div>
          {knowledgeData.map((knowledge, index) => (
            <LibraryItem
              key={knowledge.src}
              index={index}
              data={{
                name: knowledge.name,
                description: knowledge.description,
                src: knowledgeImages[
                  knowledge.src as keyof typeof knowledgeImages
                ],
                alt: `Ilustração de ${knowledge.name}`,
              }}
            />
          ))}
        </div>
        <footer className="border-t border-[#6a3d1b]/50 px-6 py-8 text-center font-serif text-sm italic text-[#63391c]">
          Fim do acervo atualmente catalogado · novos tomos serão adicionados.
        </footer>
      </section>
    </main>
  );
}
