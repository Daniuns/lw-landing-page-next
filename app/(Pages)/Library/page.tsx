import * as knowledgeImages from "@/app/assets/images/library";
import Image from "next/image";
import scroll_bg from "@/app/assets/images/scroll_bg.png";
import library from "@/app/assets/images/library.jpg";
import LibraryItem from "@/app/components/Library";
import { knowledgeData } from "@/app/services/library";

export default function Library() {
  return (
    <div className="min-h-screen flex items-center justify-center flex-col md:-mt-14">
      <section className="md:-mt-14 w-full h-auto">
        <Image className="w-full h-auto" src={library} alt="bestiary" />
      </section>
      <section
        className="p-8 text-gray-900 w-full"
        style={{
          backgroundImage: `url(${scroll_bg.src})`,
        }}
      >
        <h1 className="text-secondary">Biblioteca</h1>
        <h2 className="mb-12 font-normal text-secondary">
          Bem vindo a biblioteca. Espalhamos aqui um pouco de conhecimento sobre
          o sistema de magias, cidades, poções e etc...
        </h2>
        <div className="grid grid-cols-1 gap-32">
          {knowledgeData.map((knowledge, index) => {
            return (
              <LibraryItem
                key={index}
                data={{
                  name: knowledge.name,
                  description: knowledge.description,
                  src: knowledgeImages[
                    knowledge.src as keyof typeof knowledgeImages
                  ],
                  alt: knowledge.name,
                }}
              />
            );
          })}
        </div>
      </section>
    </div>
  );
}
