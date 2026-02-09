import type { Metadata } from "next";
import "./globals.css";
import { Banner } from "@/components/ui/Banner";
import { Navigation } from "@/components/ui/Navigation";
import { Footer } from "@/components/ui/Footer";
import { NeuralNetwork } from "@/components/NeuralNetwork";
import { Inter, Outfit } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  title: "JonnyAi | Pioneering AI Architecture | Build 10x Faster",
  description: "Pioneering the future of AI architecture. We deploy 42 specialized AI agents orchestrated by Jai.OS 4.0 to build your product in weeks, not months.",
  keywords: ["AI development", "AI architecture", "software development", "venture studio", "multi-agent AI", "Jai.OS", "UK", "web development", "mobile apps"],
  authors: [{ name: "Jonny Allum", url: "https://www.jonnyai.co.uk" }],
  creator: "Jonny Allum Innovations Ltd",
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://www.jonnyai.co.uk",
    siteName: "JonnyAi",
    title: "JonnyAi | Pioneering AI Architecture | Build 10x Faster",
    description: "Pioneering the future of AI architecture with 42 specialized AI agents.",
  },
  twitter: {
    card: "summary_large_image",
    title: "JonnyAi | Pioneering AI Architecture",
    description: "Pioneering AI architecture with our 42-agent orchestra.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${outfit.variable} antialiased font-sans`}>
        <NeuralNetwork />
        <Banner />
        <Navigation />
        <main className="relative z-10">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
