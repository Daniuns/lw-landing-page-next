import ThemeSectionItem from "./ThemeSectionItem";

export default function ThemeSection() {
  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-3 place-items-center">
      <ThemeSectionItem
        title="Aventura"
        subTitle="Uma aventura épica"
        description="Em uma terra desolada pela destruição, Lewis Helderish busca encontrar uma forma de entender o que aconteceu com seu mundo"
      />
      <ThemeSectionItem
        title="Magias"
        subTitle="Sistema de magias único inspirado em RPGs"
        description="Magias elementais e magias sagradas. E talvez... algo a mais (No Spoilers)"
      />
      <ThemeSectionItem
        title="Monstros"
        subTitle="Criaturas de diversas mitologias"
        description="Monstros de diversas mitologias, como também criaturas originais"
      />
    </div>
  );
}
