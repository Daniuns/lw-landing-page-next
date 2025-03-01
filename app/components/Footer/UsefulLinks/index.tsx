import Image from "next/image";
import tiktok_logo from "@/app/assets/images/tiktok_logo.png";
import instagram_logo from "@/app/assets/images/instagram_logo.png";

export default function UsefulLinks() {
  return (
    <div>
      <h1 className="font-normal">Links úteis</h1>
      <h3 className="font-normal flex gap-2 items-center">
        <Image src={instagram_logo} alt="Tiktok" width={20} height={20} />{" "}
        <a
          href="https://www.instagram.com/dan_escritor/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>https://www.instagram.com/dan_escritor/</span>
        </a>
      </h3>
      <h3 className="font-normal flex gap-2 items-center">
        <Image src={tiktok_logo} alt="Tiktok" width={20} height={20} />
        <a
          href="https://www.tiktok.com/@dan_escritor?_t=ZM-8u80dCps1Li&_r=1"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>https://www.tiktok.com/@dan_escritor</span>
        </a>
      </h3>
    </div>
  );
}
