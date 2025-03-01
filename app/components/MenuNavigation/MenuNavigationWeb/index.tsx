import { IMenuItem } from "@/app/interfaces/menu";
import { DynamicIcon } from "lucide-react/dynamic";
import Link from "next/link";
import BuyButton from "@/app/components/shared/BuyButton";

export default function MenuNavigationWeb({
  menuItems,
  selectedRoute,
}: {
  readonly menuItems: IMenuItem[];
  readonly selectedRoute: string;
}) {
  const mountMenu = () => {
    console.log("selectedRoute", selectedRoute);

    if (menuItems?.length === 0) return null;
    return menuItems?.map((item, index) => {
      const isActive = selectedRoute === item.route;

      return (
        <Link href={item.route} key={index} className="flex items-center gap-4">
          <div className="flex items-center flex-col">
            {/* <span
              className={`flex gap-4 text-secondary ${
                isActive ? "font-bold" : "font-light"
              }`}
            >
              <DynamicIcon name={item.icon} size={18} />
            </span> */}
            <span
              className={`text-sm  ${
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
    <div className="flex justify-center items-center bg-goldenGradient px-3 py-1 text-secondary w-[70%] rounded-3xl shadow-lg">
      <div className="flex justify-between items-center w-full ">
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center gap-6">{mountMenu()}</div>
          <div className="w-auto h-8">
            <BuyButton variant="dark" />
          </div>
        </div>
      </div>
    </div>
  );
}
