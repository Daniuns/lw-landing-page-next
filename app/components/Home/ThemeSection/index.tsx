import ThemeSectionItem from "./ThemeSectionItem";
import { Flame, Sparkles, Sword } from "lucide-react";

export default function ThemeSection() {
  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-3 place-items-center">
      <ThemeSectionItem
        title="Aventura"
        subTitle="Uma jornada épica"
        description="Um caçador inexperiente, um reino em risco e uma guerra que não permite erros."
        icon={<Sword />}
      />
      <ThemeSectionItem
        title="Magias"
        subTitle="Magia inspirada em RPGs"
        description="Magias elementais, poderes sagrados e segredos que é melhor descobrir lendo."
        icon={<Sparkles />}
      />
      <ThemeSectionItem
        title="Monstros"
        subTitle="Criaturas e mitologias"
        description="Enfrente criaturas de lendas conhecidas e monstros originais deste universo."
        icon={<Flame />}
      />
    </div>
  );
}
