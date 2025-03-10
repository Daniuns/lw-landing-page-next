import newBookCover from "@/app/assets/images/new-book-cover.png";
import Image from "next/image";
import BuyButton from "@/app/components/shared/BuyButton";

export default function BuyTheBook() {
  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 2xl:gap-32 ">
      <div className="min-w-40 max-w-sm lg:max-w-md h-auto rounded-xl justify-self-center lg:justify-self-end self-start">
        <Image className="rounded-xl" src={newBookCover} alt="Book" />
      </div>
      <div className="self-start w-full xl:w-[80%]">
        <h2>Sinopse</h2>
        <h4 className="text-gray-400 text-justify">
          Quem diria que ano após ano, se tornaria cada vez mais comum encontrar
          restos de monstros expostos nos mercados da cidade. Seja para o
          consumo da carne de uma cobra nokai, para utilização da concha de um
          splavos ou até mesmo para ostentar a cabeça de um pyke na sala de um
          nobre. Desde que o mundo foi tomado por monstros, não são muitos que
          se aventuram fora das proteções do reino de Mondy para caçar tais
          criaturas. Mas Lewis Helderish sente que nasceu para isso. Treinou a
          vida toda ao lado de Joshua, seu melhor amigo, para abater monstros,
          conquistar riquezas e desbravar o desconhecido. O que ele não
          imaginava, é que o desconhecido lhe reservava uma amarga surpresa.
          Mesmo muito novo, o peso e a responsabilidade de mudar o curso de uma
          guerra lhe é jogado nas mãos. Correndo contra o tempo, Lewis precisa
          superar suas ignorâncias quanto à magia e recuperar o pergaminho
          perdido. Mas o tempo urge, o necromante marcha trazendo a morte
          consigo para pôr fim às últimas forças da humanidade.
        </h4>
        <BuyButton />
      </div>
    </div>
  );
}
