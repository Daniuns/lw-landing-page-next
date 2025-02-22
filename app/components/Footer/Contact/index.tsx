import Image from "next/image";
import gmail_logo from "@/app/assets/images/gmail_logo.png";

export default function Contact() {
  return (
    <div>
      <h1 className="font-normal">Contato</h1>
      <h3 className="font-normal flex items-center gap-2">
        <Image src={gmail_logo} alt="Tiktok" width={20} height={20} />{" "}
        daniel.machadofe@gmail.com
      </h3>
    </div>
  );
}
