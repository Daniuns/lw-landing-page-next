import Image from "next/image";
import authorPic from "@/app/assets/images/author.png";
import authorBg from "@/app/assets/images/author_bg.jpg";
import scrollBg from "@/app/assets/images/scroll_bg.png";

export default function About() {
  return (
    <main className="overflow-hidden bg-[#172228] pb-10 md:-mt-14">
      <section className="relative isolate min-h-[370px] overflow-hidden border-b-4 border-[#8e6031] md:min-h-[480px]">
        <Image
          src={authorBg}
          alt="Floresta iluminada pela lua, cenário do universo de Lewis Helderish"
          priority
          fill
          sizes="100vw"
          className="object-cover object-center opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#10181d]/25 via-[#10181d]/45 to-[#111a1e]" />
        <div className="relative mx-auto flex min-h-[370px] max-w-6xl flex-col justify-end px-6 pb-12 text-center md:min-h-[480px] md:pb-16">
          <p className="mb-3 font-serif text-xs font-bold uppercase tracking-[.32em] text-[#e6c991]">
            Por trás da história
          </p>
          <h1 className="mb-3 font-serif text-5xl leading-none text-[#f4dfb7] drop-shadow-[0_3px_2px_rgba(0,0,0,.7)] md:text-7xl">
            Sobre o Autor
          </h1>
          <div
            className="mx-auto flex items-center gap-3 text-[#d7ad6d]"
            aria-hidden="true"
          >
            <span className="h-px w-16 bg-current" />✦
            <span className="h-px w-16 bg-current" />
          </div>
          <p className="mx-auto mt-4 max-w-xl font-serif text-lg italic text-[#ead9b5] md:text-xl">
            Conheça a pessoa que deu vida ao mundo de Lewis Helderish.
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
        <div className="grid items-center gap-10 px-6 py-10 md:px-12 md:py-14 lg:grid-cols-[minmax(15rem,.72fr)_minmax(0,1.28fr)] lg:gap-16 lg:px-20 lg:py-20">
          <aside className="relative mx-auto w-full max-w-[22rem] lg:mx-0 lg:justify-self-end">
            <div
              className="absolute -inset-2 border border-[#70451f]/60"
              aria-hidden="true"
            />
            <div className="relative overflow-hidden border-[5px] border-[#3e2714] bg-[#3e2714] shadow-[7px_10px_16px_rgba(55,32,13,.3)]">
              <Image
                src={authorPic}
                alt="Daniel Machado Ferreira"
                sizes="(max-width: 1023px) 75vw, 350px"
                className="aspect-[3/4] w-full object-cover sepia-[.12]"
              />
            </div>
            <p className="mt-5 text-center font-serif text-sm italic text-[#65401f]">
              Daniel Machado Ferreira
            </p>
          </aside>

          <article className="relative">
            <p className="text-xs font-bold uppercase tracking-[.2em] text-[#78502b]">
              Notas do escritor · 01
            </p>
            <h2 className="mt-2 text-4xl leading-none text-[#33200e] md:text-5xl">
              Da imaginação às mãos dos leitores
            </h2>
            <div
              className="my-6 flex w-full max-w-xs items-center gap-3 text-[#71461f]"
              aria-hidden="true"
            >
              <span className="h-px flex-1 bg-current" />✦
              <span className="h-px flex-1 bg-current" />
            </div>
            <div className="space-y-5 font-serif text-lg leading-relaxed text-[#432b16] md:text-xl">
              <p>
                Daniel Machado Ferreira é engenheiro da computação e atua
                atualmente como <strong>Engenheiro de Software</strong>. Desde
                pequeno, sempre gostou de escrever histórias em seus cadernos.
              </p>
              <p>
                No ensino médio, teve a ideia de escrever um livro, mas o
                projeto acabou ficando apenas na imaginação. Durante a
                faculdade, a vontade de escrever ressurgiu, e ele começou a dar
                vida à história de Lewis Helderish. No entanto, com a rotina
                agitada de um universitário, a escrita acabou entrando em hiato.
              </p>
              <blockquote className="border-l-2 border-[#805126] py-1 pl-5 font-serif text-xl italic leading-relaxed text-[#5d381b] md:text-2xl">
                “Às vezes, tudo o que um texto precisa é de um tempo na gaveta
                para amadurecer.”
              </blockquote>
              <p>
                Em 2023, decidiu retomar a história e a mostrou para sua
                namorada — hoje esposa —, que o incentivou a continuar. Depois,
                compartilhou os capítulos com amigos do trabalho e da infância,
                que se interessaram e pediram por mais. Assim, pouco a pouco,
                Lewis Helderish tomou forma, até finalmente chegar às mãos dos
                leitores por todo o país.
              </p>
            </div>
          </article>
        </div>
        <footer className="border-t border-[#6a3d1b]/50 px-6 py-7 text-center font-serif text-sm italic text-[#63391c]">
          Toda grande jornada começa com uma história que alguém decidiu não
          deixar na gaveta.
        </footer>
      </section>
    </main>
  );
}
