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
      title: "Sobre",
      route: "/About",
      icon: "info",
    },
    // {
    //   title: "Capítulos",
    //   route: "/capitulos",
    // },
    // {
    //   title: "Personagens",
    //   route: "/personagens",
    // },
    // {
    //   title: "Contato",
    //   route: "/contato",
    // }
  ];
  return (
    <div>
      <div className="fixed bottom-0 w-full md:hidden">
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
