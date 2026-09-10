import type { Metadata } from "next";
import "@/app/globals.css";
import Footer from "@/app/components/Footer";
import {
  GOOGLE_ANALYTICS_ID,
  GOOGLE_TAG_MANAGER_ID,
  MICROSOFT_CLARITY_PROJECT_ID,
} from "@/settings";
import MenuNavigation from "@/app/components/MenuNavigation";
import DragonAnimation from "@/app/components/shared/DragonAnimation";
import AnalyticsConsent from "@/app/components/analytics/AnalyticsConsent";

export const metadata: Metadata = {
  title: "Lewis Helderish A batalha pelo pergaminho",
  description:
    "Uma jornada épica de ação, magia e monstros! Conheça Lewis Helderish e embarque nessa aventura inesquecível.",
  keywords:
    "Lewis Helderish, Livro, Aventura, Magia, Monstros, Daniel Machado Ferreira",
  metadataBase: new URL("https://lewis-helderish.vercel.app"),
  icons: {
    icon: "https://lewis-helderish.vercel.app/favicon.ico",
  },
  openGraph: {
    title: "Lewis Helderish A batalha pelo pergaminho",
    description: "Livro de ação, aventura e fantasia",
    url: "https://lewis-helderish.vercel.app/",
    siteName: "Lewis Helderish",
    images: [
      {
        url: "/new-book-cover.png",
        width: 1414,
        height: 2000,
        alt: "Capa de Lewis Helderish: A batalha pelo pergaminho",
      },
    ],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <script type="application/ld+json">
          {`{"@context":"https://schema.org","@type":"Book","name":"Lewis Helderish: A batalha pelo pergaminho","author":{"@type":"Person","name":"Daniel Machado Ferreira"},"inLanguage":"pt-BR","image":"https://lewis-helderish.vercel.app/new-book-cover.png","url":"https://lewis-helderish.vercel.app"}`}
        </script>
      </head>
      <body className="antialiased pb-20 pt-0 md:pb-0 ">
        <AnalyticsConsent
          googleAnalyticsId={GOOGLE_ANALYTICS_ID}
          googleTagManagerId={GOOGLE_TAG_MANAGER_ID}
          microsoftClarityProjectId={MICROSOFT_CLARITY_PROJECT_ID}
        >
          <DragonAnimation />
          <section className="">
            <MenuNavigation />
          </section>
          {children}
          <section className="bg-goldenGradient min-h-80 p-8">
            <Footer />
          </section>
        </AnalyticsConsent>
      </body>
    </html>
  );
}
