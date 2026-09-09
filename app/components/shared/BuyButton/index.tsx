"use client";

import { BookOpenText } from "lucide-react";
import { useAnalytics } from "@/app/components/analytics/AnalyticsProvider";

interface IBuyButtonProps {
  readonly variant?: "light" | "dark";
  readonly label?: string;
  readonly source?: string;
  readonly className?: string;
}

export default function BuyButton({
  variant = "light",
  label = "Comprar na Amazon",
  source = "unknown",
  className = "",
}: IBuyButtonProps) {
  const { trackEvent } = useAnalytics();

  const sendEvents = () => {
    trackEvent("buy_click", {
      button_id: source,
      button_label: label || "Comprar",
      page_path: window.location.pathname,
      destination: "amazon",
      item_id: "lewis-helderish-a-batalha-pelo-pergaminho",
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
      aria-label={`${label} — abre a página do livro na Amazon`}
      className={`w-full min-h-11 sm:w-auto px-5 flex items-center justify-center whitespace-nowrap gap-2 py-2.5 border border-transparent rounded-full font-semibold transition duration-300 hover:-translate-y-0.5 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lightGolden focus-visible:ring-offset-2 focus-visible:ring-offset-background ${bgClass} ${className}`}
      onClick={() => sendEvents()}
    >
      {label && <span>{label}</span>}
      <BookOpenText size={18} />
    </a>
  );
}
