import type { Metadata } from "next";
import "./globals.css";
import { Navigation } from "@/components/ui/Navigation";
import { Footer } from "@/components/ui/Footer";
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
  title: "JonnyAi | AI Development Studio | Build 10x Faster",
  description: "We deploy 39 specialized AI agents to build your product in weeks, not months. Framework licensing, done-for-you builds, and equity partnerships.",
  keywords: ["AI development", "software development", "venture studio", "multi-agent AI", "UK", "web development", "mobile apps"],
  authors: [{ name: "Jonny Allum", url: "https://www.jonnyai.co.uk" }],
  creator: "Jonny Allum Innovations Ltd",
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://www.jonnyai.co.uk",
    siteName: "JonnyAi",
    title: "JonnyAi | AI Development Studio | Build 10x Faster",
    description: "We deploy 39 specialized AI agents to build your product in weeks, not months.",
  },
  twitter: {
    card: "summary_large_image",
    title: "JonnyAi | AI Development Studio",
    description: "Build 10x faster with our AI agent orchestra.",
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
      <body className={`${inter.variable} ${outfit.variable} antialiased`}>
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
