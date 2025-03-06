import { IMenuItem } from "@/app/interfaces/menu";
import { DynamicIcon } from "lucide-react/dynamic";
import Link from "next/link";
import BuyButton from "@/app/components/shared/BuyButton";
import Image, { StaticImageData } from "next/image";
import bestiaryIcon from "@/app/assets/svgs/bestiary_icon.svg";
import minotaurIcon from "@/app/assets/svgs/minotaur.svg";

export default function MenuNavigationMobile({
  menuItems,
  selectedRoute,
}: {
  readonly menuItems: IMenuItem[];
  readonly selectedRoute: string;
}) {
  const selectIcon = (item: IMenuItem) => {
    if (item.customIcon) {
      const srcIcon: { [key: string]: StaticImageData } = {
        monster: bestiaryIcon,
        minotaur: minotaurIcon,
      };
      return (
        <Image
          src={srcIcon[item?.customIcon]}
          alt={item.title}
          width={18}
          height={18}
          unoptimized
        />
      );
    }
    return <DynamicIcon name={item.icon} size={18} />;
  };
  const mountMenu = () => {
    if (menuItems?.length === 0) return null;
    return menuItems?.map((item, index) => {
      const isActive = selectedRoute === item.route;

      return (
        <Link href={item.route} key={index} className="flex items-center gap-4">
          <div className="flex items-center flex-col">
            <span
              className={`flex gap-4 ${
                isActive ? "font-bold text-secondary" : "text-[#A9895D]"
              }`}
            >
              {selectIcon(item)}
            </span>
            <span
              className={`text-sm ${
                isActive ? "font-bold text-secondary" : "text-[#A9895D]"
              }`}
            >
              {item.title}
            </span>
          </div>

          <div className="border-r border-lightGolden h-6" />
        </Link>
      );
    });
  };
  return (
    <div className="flex justify-center items-center bg-goldenGradient px-3 py-1 text-secondary shadow-[0_-10px_15px_-3px_rgba(0,0,0,0.1)] overflow-auto">
      <div className="flex justify-between items-center w-full ">
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center gap-2">{mountMenu()}</div>
          <div className="w-auto">
            <BuyButton variant="dark" />
          </div>
        </div>
      </div>
    </div>
  );
}
