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
  title: "Pepe Bau | Cantante, Guitarrista, Compositor y Productor Mexicano",
  description: "Sitio web oficial de Pepe Bau. Descubre la trayectoria, música original, live sessions y lanzamientos del productor y guitarrista pop mexicano.",
  keywords: ["Pepe Bau", "Pp Bau", "Música Pop Mexicana", "Pop Rock México", "Guitarrista Toluca", "Productor Musical Mexicano", "Quimera", "La Academia Azteca", "Indie Pop México"],
  authors: [{ name: "Pepe Bau" }],
  creator: "Pepe Bau",
  alternates: {
    canonical: "https://ppbau.mx",
  },
  verification: {
    google: "google-site-verification-placeholder",
  },
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
    title: "Pepe Bau | Cantante, Guitarrista, Compositor y Productor",
    description: "Sitio web oficial de Pepe Bau. Trayectoria, música original, live sessions y lanzamientos del productor pop mexicano.",
    url: "https://ppbau.mx",
    siteName: "Pepe Bau Oficial",
    locale: "es_MX",
    type: "music.playlist",
    images: [
      {
        url: "https://ppbau.mx/images/hero_main_v2.jpg",
        width: 1200,
        height: 630,
        alt: "Pepe Bau - Cantante, Guitarrista, Compositor y Productor",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pepe Bau | Artista Pop Mexicano",
    description: "Sitio oficial de Pepe Bau. Guitarrista, productor y cantautor pop mexicano.",
    images: ["https://ppbau.mx/images/hero_main_v2.jpg"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "MusicGroup",
  "name": "Pepe Bau",
  "url": "https://ppbau.mx",
  "logo": "https://ppbau.mx/images/logo_light.png",
  "image": "https://ppbau.mx/images/hero_main_v2.jpg",
  "description": "Sitio web oficial de Pepe Bau. Descubre la trayectoria, música original, live sessions y lanzamientos del productor y guitarrista pop mexicano.",
  "genre": ["Pop", "Pop Rock", "Indie Pop"],
  "originAddress": {
    "@type": "PostalAddress",
    "addressLocality": "Toluca",
    "addressCountry": "MX"
  },
  "sameAs": [
    "https://www.instagram.com/pp.bau",
    "https://www.facebook.com/pp.bauoficial/",
    "https://www.tiktok.com/@vonpeper"
  ],
  "member": [
    {
      "@type": "Person",
      "name": "Pepe Bau",
      "jobTitle": "Cantante, Guitarrista, Compositor, Productor"
    }
  ],
  "track": [
    {
      "@type": "MusicRecording",
      "name": "Estar Contigo",
      "url": "https://ppbau.mx#musica"
    },
    {
      "@type": "MusicRecording",
      "name": "Quimera",
      "url": "https://ppbau.mx#videos"
    }
  ]
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
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}

