import * as creatures from "@/app/assets/images/bestiary";
import Image from "next/image";
import scrollBg from "@/app/assets/images/scroll_bg.png";
import bestiaryBg from "@/app/assets/images/bestiary_bg_3.jpg";
import Monster from "@/app/components/Bestiary";
import { monstersData } from "@/app/services/monsters";

export default function Bestiary() {
  return (
    <main className="overflow-hidden bg-[#172228] pb-10 md:-mt-14">
      <section className="relative isolate min-h-[370px] overflow-hidden border-b-4 border-[#8e6031] md:min-h-[480px]">
        <Image
          src={bestiaryBg}
          alt=""
          priority
          fill
          sizes="100vw"
          className="object-cover object-center opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#10181d]/30 via-[#10181d]/45 to-[#111a1e]" />
        <div className="relative mx-auto flex min-h-[370px] max-w-6xl flex-col justify-end px-6 pb-12 text-center md:min-h-[480px] md:pb-16">
          <h1 className="mb-3 font-serif text-5xl leading-none text-[#f4dfb7] drop-shadow-[0_3px_2px_rgba(0,0,0,.7)] md:text-7xl">
            Bestiário
          </h1>
          <div
            className="mx-auto flex items-center gap-3 text-[#d7ad6d]"
            aria-hidden="true"
          >
            <span className="h-px w-16 bg-current" />✦
            <span className="h-px w-16 bg-current" />
          </div>
          <p className="mx-auto mt-4 max-w-xl font-serif text-lg italic text-[#ead9b5] md:text-xl">
            Anotações, relatos e ilustrações das criaturas que habitam este
            mundo.
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
            Compêndio de criaturas conhecidas
          </p>
          <h2 className="mx-auto mt-2 max-w-2xl text-3xl leading-tight text-[#3b210f] md:text-4xl">
            Registros reunidos ao longo da jornada
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-[#58351c] md:text-base">
            Cada página preserva os poucos relatos que sobreviveram aos
            encontros com estas criaturas. Leia com atenção.
          </p>
        </header>
        <div>
          {monstersData.map((monster, index) => (
            <Monster
              key={monster.src}
              index={index}
              data={{
                name: monster.name,
                description: monster.description,
                src: creatures[monster.src as keyof typeof creatures],
                alt: `Ilustração de ${monster.name}`,
              }}
            />
          ))}
        </div>
        <footer className="border-t border-[#6a3d1b]/50 px-6 py-8 text-center font-serif text-sm italic text-[#63391c]">
          Fim dos registros atualmente disponíveis · novos relatos serão
          adicionados.
        </footer>
      </section>
    </main>
  );
}
