import newBookCover from "@/app/assets/images/new-book-cover.png";
import Image from "next/image";
import BuyButton from "@/app/components/shared/BuyButton";

export default function BuyTheBook() {
  return (
    <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-20">
      <div className="w-[min(100%,360px)] justify-self-center rounded-sm shadow-2xl lg:justify-self-end">
        <Image
          className="rounded-sm"
          src={newBookCover}
          alt="Capa do livro Lewis Helderish: A batalha pelo pergaminho"
          sizes="(min-width: 1024px) 360px, 80vw"
        />
      </div>
      <div className="max-w-2xl">
        <p className="section-kicker">Sobre o livro</p>
        <h2>Uma batalha que pode mudar o destino da humanidade</h2>
        <p className="font-sans text-lg leading-relaxed text-slate-200">
          Em um mundo onde monstros se tornaram parte do cotidiano, Lewis
          treinou a vida inteira para caçá-los. Mas uma missão o coloca diante
          de um pergaminho perdido, segredos sobre magia e uma ameaça que marcha
          rumo as últimas forças da humanidade.
        </p>
        <details className="group mt-5 rounded-lg border border-white/15 bg-white/5 p-4">
          <summary className="cursor-pointer font-semibold text-lightGolden marker:text-lightGolden">
            Ler a sinopse completa
          </summary>
          <p className="mt-4 font-sans leading-relaxed text-slate-300">
            Quem diria que ano após ano, se tornaria cada vez mais comum
            encontrar restos de monstros expostos nos mercados da cidade. Seja
            para o consumo da carne de uma cobra nokai, para utilização da
            concha de um splavos ou até mesmo para ostentar a cabeça de um pyke
            na sala de um nobre. Desde que o mundo foi tomado por monstros, não
            são muitos que se aventuram fora das proteções do reino de Mondy
            para caçar tais criaturas. Mas Lewis Helderish sente que nasceu para
            isso. Treinou a vida toda ao lado de Joshua, seu melhor amigo, para
            abater monstros, conquistar riquezas e desbravar o desconhecido. O
            que ele não imaginava é que o desconhecido lhe reservava uma amarga
            surpresa. Mesmo muito novo, o peso e a responsabilidade de mudar o
            curso de uma guerra lhe é jogado nas mãos. Correndo contra o tempo,
            Lewis precisa superar suas ignorâncias quanto à magia e recuperar o
            pergaminho perdido. Mas o tempo urge: o necromante marcha trazendo a
            morte consigo para pôr fim às últimas forças da humanidade.
          </p>
        </details>
        <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
          <BuyButton source="synopsis" />
          <span className="text-sm text-slate-400">Disponível na Amazon</span>
        </div>
      </div>
    </div>
  );
}
