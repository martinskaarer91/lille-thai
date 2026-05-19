import type { Metadata } from "next";
import Header from "./components/Header";
import Footer from "./components/Footer";

import {
  Geist,
  Geist_Mono,
  Cormorant_Garamond,
} from "next/font/google";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-cormorant",
});

export const metadata: Metadata = {
  title: "Lille Thai | Thai restaurant i Lillestrøm",
  description:
    "Thai og asiatisk restaurant i Lillestrøm med takeaway og servering. Nyt Phad Thai, crispy duck, dumplings, scampi, wok, curry og klassiske asiatiske retter.",

  keywords: [
    "Lille Thai",
    "thai restaurant Lillestrøm",
    "thai mat Lillestrøm",
    "asiatisk restaurant Lillestrøm",
    "takeaway Lillestrøm",
    "Phad Thai",
    "crispy duck",
    "dumplings",
    "wonton",
    "Tom Yam",
    "Kong Bao kylling",
    "chop suey",
    "sursøt saus",
    "red curry",
    "kokosmelk curry",
    "scampi",
    "tempura scampi",
    "stekt ris",
    "nudler",
    "fried rice",
    "wok",
    "teriyaki",
    "thai takeaway",
    "asiatisk mat",
    "kinesisk mat",
    "vegetar wok",
    "sterk thai mat",
    "seafood thai",
  ],

  openGraph: {
    title: "Lille Thai | Thai restaurant i Lillestrøm",
    description:
      "Thai og asiatisk restaurant med takeaway i Lillestrøm. Phad Thai, crispy duck, dumplings, curry og wokretter.",
    type: "website",
    locale: "nb_NO",

    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Lille Thai restaurant",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="no">
      <body
        className={`
          ${geistSans.variable}
          ${geistMono.variable}
          ${cormorant.variable}
        `}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
