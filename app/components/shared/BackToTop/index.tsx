"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { ArrowUp } from "lucide-react";

export default function BackToTop() {
  const pathname = usePathname();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const updateVisibility = () => setIsVisible(window.scrollY > 400);

    updateVisibility();
    window.addEventListener("scroll", updateVisibility, { passive: true });

    return () => window.removeEventListener("scroll", updateVisibility);
  }, [pathname]);

  if (!isVisible) return null;

  const scrollToTop = () => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    window.scrollTo({
      top: 0,
      behavior: prefersReducedMotion ? "auto" : "smooth",
    });
  };

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Voltar ao início da página"
      title="Voltar ao início"
      className="fixed bottom-28 right-4 z-30 flex h-12 w-12 items-center justify-center rounded-full border-2 border-[#172228] bg-lightGolden text-[#172228] shadow-[0_0_0_3px_rgba(13,25,30,.85)] transition hover:-translate-y-1 hover:bg-[#dfbd8b] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#172228] md:bottom-20 md:right-5"
    >
      <ArrowUp size={20} strokeWidth={2.5} aria-hidden="true" />
    </button>
  );
}
