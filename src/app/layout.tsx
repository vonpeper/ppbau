import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Pepe Bau | Cantante, Guitarrista, Compositor y Productor Pop Mexicano",
  description: "Sitio web oficial de Pepe Bau. Descubre la trayectoria, música original, live sessions y lanzamientos del productor y guitarrista pop mexicano.",
  keywords: ["Pepe Bau", "Pp Bau", "Música Pop Mexicana", "Pop Rock México", "Guitarrista Toluca", "Productor Musical Mexicano", "Quimera", "La Academia Azteca", "Indie Pop México"],
  authors: [{ name: "Pepe Bau" }],
  creator: "Pepe Bau",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  appleWebApp: {
    title: "Pepe Bau",
  },
  openGraph: {
    title: "Pepe Bau | Cantante, Guitarrista, Compositor y Productor Pop",
    description: "Sitio web oficial de Pepe Bau. Trayectoria, música original, live sessions y lanzamientos del productor pop mexicano.",
    url: "https://ppbau.com",
    siteName: "Pepe Bau Oficial",
    locale: "es_MX",
    type: "music.song",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pepe Bau | Artista Pop Mexicano",
    description: "Sitio oficial de Pepe Bau. Guitarrista, productor y cantautor pop mexicano.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${inter.variable} ${outfit.variable}`}
    >
      <body>
        {children}
      </body>
    </html>
  );
}

