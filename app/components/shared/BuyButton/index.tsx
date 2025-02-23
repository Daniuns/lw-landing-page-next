"use client";

import Image from "next/image";
import bookIcon from "@/app/assets/images/book_icon.svg";
import { sendGAEvent, sendGTMEvent } from "@next/third-parties/google";

export default function BuyButton() {
  const sendEvents = () => {
    sendGAEvent({
      event: "BuyButtonClickedEvent_GA",
      value: "BuyButtonClickedEventValue_GA",
    });
    sendGTMEvent({
      event: "BuyButtonClickedEvent_GTM",
      value: "BuyButtonClickedEventValue_GTM",
    });
  };
  return (
    <a
      href="https://a.co/d/fWogqk1"
      target="_blank"
      rel="noopener noreferrer"
      className="w-full sm:w-40 px-6 flex items-center justify-center gap-2 py-2 mt-4 text-secondary bg-goldenGradient border border-background rounded-3xl transition duration-300 hover:scale-105"
      onClick={() => sendEvents()}
    >
      Adquira já
      <Image
        width={20}
        height={20}
        className="rounded-xl"
        src={bookIcon}
        alt="Amazon-logo"
      />
    </a>
  );
}
