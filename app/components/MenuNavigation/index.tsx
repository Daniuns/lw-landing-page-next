"use client";

import MenuNavigationMobile from "./MenuNavigationMobile";
import MenuNavigationWeb from "./MenuNavigationWeb";
import { usePathname } from "next/navigation";

export default function MenuNavigation() {
  const selectedRoute = usePathname();

  const menuItems = [
    {
      title: "Home",
      route: "/",
      icon: "house",
    },
    {
      title: "Bestiário",
      route: "/Bestiary",
      customIcon: "monster",
    },
    {
      title: "Biblioteca",
      route: "/Library",
      icon: "square-library",
    },
    {
      title: "Sobre",
      route: "/About",
      icon: "info",
    },
  ];
  return (
    <div>
      <div className="fixed bottom-0 w-full md:hidden z-10">
        <MenuNavigationMobile
          menuItems={menuItems}
          selectedRoute={selectedRoute}
        />
      </div>

      <div className="absolute top-4 justify-center hidden md:flex w-full">
        <MenuNavigationWeb
          menuItems={menuItems}
          selectedRoute={selectedRoute}
        />
      </div>
    </div>
  );
}
