import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { QueryProvider } from "@/components/providers/query-provider";

const cormorantGaramond = Cormorant_Garamond({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "ATIYE Beauty Studio - Dauerhaft schön",
  description: "Professionelle Laser-Haarentfernung für Frauen und Männer. NiSV-zertifiziert, moderne Technologie, transparente Preise. Termin vereinbaren!",
  keywords: "Laser Haarentfernung, dauerhaft, NiSV, Frauen, Männer, ATIYE Beauty Studio",
  authors: [{ name: "ATIYE Beauty Studio" }],
  creator: "ATIYE Beauty Studio",
  publisher: "ATIYE Beauty Studio",
  icons: {
    icon: "/favicon.ico",
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://atiye-beauty-studio.de"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: "https://atiye-beauty-studio.de",
    title: "ATIYE Beauty Studio - Dauerhaft schön",
    description: "Professionelle Laser-Haarentfernung für Frauen und Männer. NiSV-zertifiziert, moderne Technologie, transparente Preise.",
    siteName: "ATIYE Beauty Studio",
    images: [
      {
        url: "/api/og",
        width: 1200,
        height: 630,
        alt: "ATIYE Beauty Studio - Dauerhaft schön",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ATIYE Beauty Studio - Dauerhaft schön",
    description: "Professionelle Laser-Haarentfernung für Frauen und Männer. NiSV-zertifiziert, moderne Technologie, transparente Preise.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={`${cormorantGaramond.variable} ${inter.variable} font-sans antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <QueryProvider>
            <TooltipProvider>
              {children}
              <Toaster />
              <Sonner />
            </TooltipProvider>
          </QueryProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
