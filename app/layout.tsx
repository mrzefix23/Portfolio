import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';

// Importation des polices optimisées
const AnekTelugu = localFont({
  src: './fonts/AnekTelugu.ttf',
  variable: '--font-caption',
  display: "swap",
});

const GeistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
  display: "swap",
});

const GeistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Yanis Mahdi | Software Engineering Student & Web Developer",
  description: "Portfolio de Yanis Mahdi - Étudiant en Master Génie Logiciel",
  keywords: [
    "Yanis Mahdi", "Software Engineer", "Développeur Web", "React", "Next.js", 
    "Full Stack Developer", "Frontend Developer", "JavaScript", "TypeScript",
    "Web Development Portfolio", "SEO", "UI/UX", "Python", "Java", "SQL", "Agile", "Scrum"
  ],
  authors: [{ name: "Yanis Mahdi", url: "https://yanismahdi.com" }],
  openGraph: {
    title: "Yanis Mahdi | Software Engineering Student & Web Developer",
    description: "Portfolio de Yanis Mahdi - Étudiant en Master Génie Logiciel",
    url: "https://yanismahdi.com",
    siteName: "Yanis Mahdi Portfolio",
    images: [
      {
        url: "/og-image.webp",
        width: 1200,
        height: 630,
        alt: "Portfolio de Yanis Mahdi, Étudiant en Master Génie Logiciel",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Yanis Mahdi | Software Engineering Student & Web Developer",
    description: "Portfolio de Yanis Mahdi - Étudiant en génie logiciel et développeur web spécialisé en React et Next.js.",
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
    <html lang="fr">
      <head>
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content="Yanis Mahdi" />
        <meta name="theme-color" content="#000000" />
        <link rel="canonical" href="https://yanismahdi.com" />
        
        {/* Schema.org JSON-LD amélioré */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          "name": "Yanis Mahdi",
          "url": "https://yanismahdi.com",
          "sameAs": [
            "https://github.com/mrzefix23",
            "https://www.linkedin.com/in/yanis-mahdi-933a37238/"
          ],
          "jobTitle": "Software Engineer",
          "description": "Portfolio de Yanis Mahdi - Étudiant en génie logiciel et développeur web."
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
