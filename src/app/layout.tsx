import type { Metadata } from "next";
import "./globals.css";
import { Navigation } from "@/components/ui/Navigation";
import { Footer } from "@/components/ui/Footer";

export const metadata: Metadata = {
  title: "JonnyAi | AI Development Studio | Build 10x Faster",
  description: "We deploy 20+ specialised AI agents to build your product in weeks, not months. Framework licensing, done-for-you builds, and equity partnerships.",
  keywords: ["AI development", "software development", "venture studio", "multi-agent AI", "UK", "web development", "mobile apps"],
  authors: [{ name: "Jonny Allum", url: "https://www.jonnyai.co.uk" }],
  creator: "Jonny Allum Innovations Ltd",
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://www.jonnyai.co.uk",
    siteName: "JonnyAi",
    title: "JonnyAi | AI Development Studio | Build 10x Faster",
    description: "We deploy 20+ specialised AI agents to build your product in weeks, not months.",
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
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Outfit:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased">
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
