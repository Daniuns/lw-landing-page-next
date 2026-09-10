"use client";

import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google";
import Clarity from "@microsoft/clarity";
import { useEffect, useState, type ReactNode } from "react";
import { AnalyticsProvider } from "./AnalyticsProvider";
import NavigationAndScrollTracker from "./NavigationAndScrollTracker";

const CONSENT_STORAGE_KEY = "lewis-helderish-analytics-consent";

type ConsentStatus = "accepted" | "rejected" | null;

function clearAnalyticsCookies() {
  document.cookie.split(";").forEach((cookie) => {
    const name = cookie.trim().split("=")[0];

    if (name.startsWith("_ga")) {
      document.cookie = `${name}=; Max-Age=0; path=/; SameSite=Lax`;
    }
  });
}

export default function AnalyticsConsent({
  children,
  googleAnalyticsId,
  googleTagManagerId,
  microsoftClarityProjectId,
}: Readonly<{
  children: ReactNode;
  googleAnalyticsId: string;
  googleTagManagerId: string;
  microsoftClarityProjectId: string;
}>) {
  const [consent, setConsent] = useState<ConsentStatus>(null);
  const [hasLoadedPreference, setHasLoadedPreference] = useState(false);

  useEffect(() => {
    const savedConsent = window.localStorage.getItem(CONSENT_STORAGE_KEY);

    if (savedConsent === "accepted" || savedConsent === "rejected") {
      setConsent(savedConsent);
    }
    setHasLoadedPreference(true);
  }, []);

  const saveConsent = (nextConsent: Exclude<ConsentStatus, null>) => {
    window.localStorage.setItem(CONSENT_STORAGE_KEY, nextConsent);
    setConsent(nextConsent);

    if (nextConsent === "rejected") {
      revokeAnalyticsConsent();
    }
  };

  const revokeAnalyticsConsent = () => {
    clearAnalyticsCookies();
    window.dataLayer?.push([
      "consent",
      "update",
      { analytics_storage: "denied" },
    ]);
  };

  const openPreferences = () => {
    window.localStorage.removeItem(CONSENT_STORAGE_KEY);
    revokeAnalyticsConsent();
    setConsent(null);
  };

  useEffect(() => {
    if (!microsoftClarityProjectId) return;

    Clarity.init(microsoftClarityProjectId);
    Clarity.consentV2({
      ad_Storage: "denied",
      analytics_Storage: "granted",
    });
  }, [microsoftClarityProjectId]);

  const canTrack = consent === "accepted";

  const hasAnalyticsIntegration = Boolean(
    googleAnalyticsId || googleTagManagerId || microsoftClarityProjectId,
  );

  return (
    <AnalyticsProvider
      config={{
        gaEnabled: canTrack && Boolean(googleAnalyticsId),
        gtmEnabled: canTrack && Boolean(googleTagManagerId),
      }}
    >
      {canTrack && <NavigationAndScrollTracker />}
      {children}

      {canTrack && googleAnalyticsId && (
        <GoogleAnalytics gaId={googleAnalyticsId} />
      )}
      {canTrack && googleTagManagerId && (
        <GoogleTagManager gtmId={googleTagManagerId} />
      )}

      {hasLoadedPreference && hasAnalyticsIntegration && consent === null && (
        <aside
          className="fixed inset-x-3 bottom-16 z-50 mx-auto max-w-2xl rounded-xl border border-lightGolden/40 bg-gray-800 p-5 text-slate-100 shadow-2xl md:bottom-5"
          aria-labelledby="cookie-banner-title"
          aria-describedby="cookie-banner-description"
          role="dialog"
        >
          <h2
            id="cookie-banner-title"
            className="mb-2 text-2xl text-lightGolden"
          >
            Cookies e estatísticas
          </h2>
          <p
            id="cookie-banner-description"
            className="font-sans text-sm leading-relaxed text-slate-300"
          >
            Podemos usar cookies analíticos para entender qual a melhor
            experiência no uso do site.
          </p>
          <div className="mt-5 flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
            <button
              type="button"
              onClick={() => saveConsent("rejected")}
              className="min-h-11 rounded-full border border-lightGolden/60 px-5 py-2 text-sm font-semibold text-lightGolden transition hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lightGolden"
            >
              Recusar cookies
            </button>
            <button
              type="button"
              onClick={() => saveConsent("accepted")}
              className="min-h-11 rounded-full bg-goldenGradient px-5 py-2 text-sm font-semibold text-secondary transition hover:-translate-y-0.5 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lightGolden"
            >
              Aceitar cookies
            </button>
          </div>
        </aside>
      )}

      {hasLoadedPreference && hasAnalyticsIntegration && consent !== null && (
        <button
          type="button"
          onClick={openPreferences}
          className="fixed bottom-16 right-3 z-40 rounded-full border border-lightGolden/50 bg-gray-800 px-4 py-2 text-xs font-semibold text-lightGolden shadow-lg transition hover:bg-[#172228] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lightGolden md:bottom-5"
          aria-label="Gerenciar preferência de cookies"
        >
          Cookies
        </button>
      )}
    </AnalyticsProvider>
  );
}
