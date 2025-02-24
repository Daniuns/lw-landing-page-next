import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "./components/Footer";
import { GoogleAnalytics } from "@next/third-parties/google";
import { GOOGLE_ANALYTICS_ID } from "@/settings";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Lewis Helderish A batalha pelo pergaminho",
  description:
    "Uma jornada épica de ação, magia e monstros! Conheça Lewis Helderish e embarque nessa aventura inesquecível.",
  keywords:
    "Lewis Helderish, Livro, Aventura, Magia, Monstros, Daniel Machado Ferreira",
  openGraph: {
    title: "Lewis Helderish A batalha pelo pergaminho",
    description: "Livro de ação, aventura e fantasia",
    url: "https://lewis-helderish.vercel.app/",
    siteName: "Lewis Helderish",
    images: [
      {
        url: "https://lewis-helderish.vercel.app/new-book-cover.png",
        width: 1200,
        height: 630,
        alt: "Imagem da landing page",
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
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <section className="bg-goldenGradient min-h-80 p-8">
          <Footer />
        </section>
      </body>
      <GoogleAnalytics gaId={GOOGLE_ANALYTICS_ID} />
    </html>
  );
}
