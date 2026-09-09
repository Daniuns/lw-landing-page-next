"use client";

import { sendGAEvent, sendGTMEvent } from "@next/third-parties/google";
import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  type ReactNode,
} from "react";

type EventParameters = Record<string, string | number | boolean | undefined>;

interface AnalyticsConfig {
  gaEnabled: boolean;
  gtmEnabled: boolean;
}

interface AnalyticsContextValue {
  trackEvent: (event: string, parameters?: EventParameters) => void;
}

const AnalyticsContext = createContext<AnalyticsContextValue | null>(null);

export function AnalyticsProvider({
  children,
  config,
}: Readonly<{
  children: ReactNode;
  config: AnalyticsConfig;
}>) {
  const trackEvent = useCallback(
    (event: string, parameters: EventParameters = {}) => {
      const payload = { event, ...parameters };

      if (config.gaEnabled) sendGAEvent(payload);
      if (config.gtmEnabled) sendGTMEvent(payload);
    },
    [config.gaEnabled, config.gtmEnabled],
  );
  const value = useMemo(() => ({ trackEvent }), [trackEvent]);

  return (
    <AnalyticsContext.Provider value={value}>{children}</AnalyticsContext.Provider>
  );
}

export function useAnalytics() {
  const analytics = useContext(AnalyticsContext);

  if (!analytics) {
    throw new Error("useAnalytics must be used inside AnalyticsProvider");
  }

  return analytics;
}
