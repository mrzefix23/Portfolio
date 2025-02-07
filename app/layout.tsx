import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next'


// Importation des polices
const AnekTelugu = localFont({
  src: './fonts/AnekTelugu.ttf', // Chemin vers le fichier
  variable: '--font-caption',
});

const GeistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const GeistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

// Métadonnées pour la page
export const metadata: Metadata = {
  title: "Yanis Mahdi | Software Engineering Student",
  description: "Yanis Mahdi - Software Engineering Student. Discover my portfolio, my projects, and my skills in web development.",
  keywords: ["Yanis Mahdi", "Software Engineer", "Développeur Web", "React", "Next.js", "Programmation"],
  authors: [{ name: "Yanis Mahdi", url: "https://yanismahdi.com" }],
  openGraph: {
    title: "Yanis Mahdi | Software Engineering Student",
    description: "Yanis Mahdi - Software Engineering Student. Discover my portfolio, my projects, and my skills in web development.",
    url: "https://yanismahdi.com",
    siteName: "Yanis Mahdi",
    images: [
      {
        url: "/og-image.webp",
        width: 1200,
        height: 630,
        alt: "Yanis Mahdi | Software Engineering Student",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Yanis Mahdi | Software Engineering Student",
    description: "Yanis Mahdi - Software Engineering Student. Discover my portfolio, my projects, and my skills in web development.",
    images: ["/og-image.webp"],
    creator: "@ton_handle_twitter",
  },
  icons: {
    icon: "/favicon.ico", 
    shortcut: "/favicon.ico",
  },
};


// Composant principal de la mise en page
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://yanismahdi.com" />

        {/* Schema.org JSON-LD pour un meilleur SEO */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          "name": "Yanis Mahdi",
          "url": "https://yanismahdi.com",
          "sameAs": [
            "https://github.com/mrzefix23",
            "https://www.linkedin.com/in/yanis-mahdi-933a37238/",
          ],
          "jobTitle": "Software Engineer",
          "description": "Yanis Mahdi - Software Engineering Student. Discover my portfolio, my projects, and my skills in web development."
        }) }} />
      </head>
      <body
        className={cn(
          GeistSans.variable, GeistMono.variable, AnekTelugu.variable,
          "font-sans h-full bg-background text-foreground antialiased"
        )}
      >
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}

