import Image from "next/image";
import gmail_logo from "@/app/assets/images/gmail_logo.png";

export default function Contact() {
  return (
    <div>
      <h1 className="font-normal">Contato</h1>
      <h3 className="flex min-w-0 items-center gap-2 break-all font-normal">
        <Image className="shrink-0" src={gmail_logo} alt="Tiktok" width={20} height={20} />{" "}
        daniel.machadofe@gmail.com
      </h3>
    </div>
  );
}
