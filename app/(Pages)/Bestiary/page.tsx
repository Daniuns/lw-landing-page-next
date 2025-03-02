import * as creatures from "@/app/assets/images/bestiary";
import Image from "next/image";
import scroll_bg from "@/app/assets/images/scroll_bg.png";
import castle from "@/app/assets/images/castle.png";
import Monster from "@/app/components/Bestiary/Monster";
import { monstersData } from "@/app/services/monsters";
export default function Bestiary() {
  console.log("creatures", Object.keys(creatures));
  return (
    <div className="min-h-screen flex items-center justify-center flex-col md:-mt-14">
      <section>
        <section className="md:-mt-14">
          <Image src={castle} alt="Castle" />
        </section>
      </section>
      <section
        className="p-8"
        style={{
          backgroundImage: `url(${scroll_bg.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="grid grid-cols-1 gap-44">
          {monstersData.map((monster, index) => {
            return (
              <Monster
                key={index}
                data={{
                  name: monster.name,
                  description: monster.description,
                  src: creatures[monster.src],
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
