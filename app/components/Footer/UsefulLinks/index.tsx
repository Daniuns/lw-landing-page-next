"use client";

import Image from "next/image";
import tiktok_logo from "@/app/assets/images/tiktok_logo.png";
import instagram_logo from "@/app/assets/images/instagram_logo.png";
import { useAnalytics } from "@/app/components/analytics/AnalyticsProvider";

export default function UsefulLinks() {
  const { trackEvent } = useAnalytics();

  return (
    <div>
      <h1 className="font-normal">Links úteis</h1>
      <h3 className="flex min-w-0 items-center gap-2 font-normal">
        <Image className="shrink-0" src={instagram_logo} alt="Tiktok" width={20} height={20} />{" "}
        <a
          href="https://www.instagram.com/dan_escritor/"
          target="_blank"
          rel="noopener noreferrer"
          onClick={() =>
            trackEvent("social_link_click", {
              social_network: "instagram",
              destination: "https://www.instagram.com/dan_escritor/",
              page_path: window.location.pathname,
            })
          }
        >
          <span>@dan_escritor</span>
        </a>
      </h3>
      <h3 className="flex min-w-0 items-center gap-2 font-normal">
        <Image className="shrink-0" src={tiktok_logo} alt="Tiktok" width={20} height={20} />
        <a
          href="https://www.tiktok.com/@dan_escritor?_t=ZM-8u80dCps1Li&_r=1"
          target="_blank"
          rel="noopener noreferrer"
          onClick={() =>
            trackEvent("social_link_click", {
              social_network: "tiktok",
              destination: "https://www.tiktok.com/@dan_escritor",
              page_path: window.location.pathname,
            })
          }
        >
          <span>@dan_escritor</span>
        </a>
      </h3>
    </div>
  );
}
