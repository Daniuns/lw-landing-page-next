import * as creatures from "@/app/assets/images/bestiary";
import Image from "next/image";
import scroll_bg from "@/app/assets/images/scroll_bg.png";
import bestiary_bg_2 from "@/app/assets/images/bestiary_bg_2.jpg";
import Monster from "@/app/components/Bestiary/Monster";
import { monstersData } from "@/app/services/monsters";

export default function Bestiary() {
  return (
    <div className="min-h-screen flex items-center justify-center flex-col md:-mt-14">
      <section className="md:-mt-14 w-full h-auto">
        <Image className="w-full h-auto" src={bestiary_bg_2} alt="bestiary" />
      </section>
      <section
        className="p-8 text-gray-900 w-full"
        style={{
          backgroundImage: `url(${scroll_bg.src})`,
        }}
      >
        <h1>Bestiário</h1>
        <h2 className="mb-12 font-normal">
          Aqui encontramos documentos de algumas criaturas citadas... até o
          momento.
        </h2>
        <div className="grid grid-cols-1 gap-32">
          {monstersData.map((monster, index) => {
            return (
              <Monster
                key={index}
                data={{
                  name: monster.name,
                  description: monster.description,
                  src: creatures[monster.src as keyof typeof creatures],
                  alt: monster.name,
                }}
              />
            );
          })}
        </div>
      </section>
    </div>
  );
}
