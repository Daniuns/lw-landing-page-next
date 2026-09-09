"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { useAnalytics } from "./AnalyticsProvider";

const SCROLL_MILESTONES = [25, 50, 75, 100];

export default function NavigationAndScrollTracker() {
  const pathname = usePathname();
  const { trackEvent } = useAnalytics();
  const isFirstPageView = useRef(true);

  useEffect(() => {
    const pagePath = pathname;

    // O script do GA4 já envia a primeira page_view. Nas navegações internas
    // do App Router, este evento mantém as páginas virtuais no relatório.
    if (isFirstPageView.current) {
      isFirstPageView.current = false;
    } else {
      trackEvent("page_view", {
        page_path: pagePath,
        page_title: document.title,
      });
    }

    const reportedMilestones = new Set<number>();
    let bottomReported = false;
    let animationFrame: number | null = null;

    const reportScroll = () => {
      animationFrame = null;
      const documentHeight = Math.max(
        document.body.scrollHeight,
        document.documentElement.scrollHeight,
      );
      const scrollableHeight = documentHeight - window.innerHeight;
      const percentage =
        scrollableHeight <= 0
          ? 100
          : Math.min(
              100,
              Math.round((window.scrollY / scrollableHeight) * 100),
            );

      for (const milestone of SCROLL_MILESTONES) {
        if (percentage >= milestone && !reportedMilestones.has(milestone)) {
          reportedMilestones.add(milestone);
          trackEvent("scroll_depth", {
            page_path: pagePath,
            percent_scrolled: milestone,
          });
        }
      }

      if (percentage >= 100 && !bottomReported) {
        bottomReported = true;
        trackEvent("page_bottom_reached", { page_path: pagePath });
      }
    };

    const onScroll = () => {
      if (animationFrame === null) {
        animationFrame = window.requestAnimationFrame(reportScroll);
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    onScroll();

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (animationFrame !== null) window.cancelAnimationFrame(animationFrame);
    };
  }, [pathname, trackEvent]);

  return null;
}
