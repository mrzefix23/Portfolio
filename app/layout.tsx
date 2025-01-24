import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Analytics } from '@vercel/analytics/next';


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
  title: "Yanis Mahdi ‧ Software Engineering Student",
  description: "Generated by create next app",
};

// Composant principal de la mise en page
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          GeistSans.variable, GeistMono.variable,AnekTelugu.variable,
          "font-sans h-full bg-background text-foreground antialiased"
        )}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
