import Image from "next/image";
import authorPic from "@/app/assets/images/author.png";
import author_bg from "@/app/assets/images/author_bg.jpg";

export default function About() {
  return (
    <div>
      <section className="md:-mt-14 w-full h-auto">
        <Image className="w-full h-auto" src={author_bg} alt="bestiary" />
      </section>
      <div className="flex flex-col items-center justify-center min-h-[100vh] p-8">
        <section className="min-h-80">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 2xl:gap-32">
            <div className="min-w-40 max-w-sm lg:max-w-md h-auto rounded-xl justify-self-center lg:justify-self-end self-start">
              <Image className="rounded-xl" src={authorPic} alt="author" />
            </div>
            <div className="self-start w-full xl:w-[80%]">
              <h2 className="font-bold">Sobre o Autor</h2>
              <p className="text-gray-400 mt-4 text-justify">
                Daniel Machado Ferreira é engenheiro da computação e atua
                atualmente como <b>Engenheiro de Software</b>. Desde pequeno,
                sempre gostou de escrever histórias em seus cadernos. No ensino
                médio, teve a ideia de escrever um livro, mas o projeto acabou
                ficando apenas na imaginação. Durante a faculdade, a vontade de
                escrever ressurgiu, e ele começou a dar vida à história de Lewis
                Helderish. No entanto, com a rotina agitada de um universitário
                que também trabalhava, a escrita acabou sendo pausada. Mas, às
                vezes, tudo o que um texto precisa é de um tempo na gaveta para
                amadurecer, não é mesmo? Em 2023, decidiu retomar a história e a
                mostrou para sua namorada (hoje esposa), que o incentivou a
                continuar. Depois, compartilhou os capítulos com amigos do
                trabalho e da infância, que se interessaram e pediram por mais.
                Assim, pouco a pouco, Lewis Helderish tomou forma, até
                finalmente chegar às mãos dos leitores por todo o país.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
