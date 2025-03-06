"use client";

import { sendGAEvent, sendGTMEvent } from "@next/third-parties/google";
import { BookOpenText } from "lucide-react";

interface IBuyButtonProps {
  readonly variant?: "light" | "dark";
}

export default function BuyButton({ variant = "light" }: IBuyButtonProps) {
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
  const bgClass =
    variant === "dark"
      ? "bg-blueGradient text-blue-100"
      : "bg-goldenGradient text-secondary";

  return (
    <a
      href="https://a.co/d/fWogqk1"
      target="_blank"
      rel="noopener noreferrer"
      className={`w-full h-full sm:w-auto px-4 flex items-center justify-center whitespace-nowrap gap-2 py-2 border-background rounded-3xl transition duration-300 hover:scale-105 ${bgClass}`}
      onClick={() => sendEvents()}
    >
      Adquira já
      <BookOpenText size={18} />
    </a>
  );
}
