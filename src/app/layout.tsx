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
  title: "JonnyAi | Premier AI Architecture Studio | UK Based, Global Scale",
  description: "UK-based AI studio specializing in multi-agent orchestration via Jai.OS 4.0. We build enterprise-grade software 10x faster. Delivering AI excellence from Emsworth, Hampshire to the world.",
  keywords: ["AI development", "AI architecture", "software development Portsmouth", "Emsworth AI", "Hampshire tech", "remote AI team", "multi-agent AI", "Jai.OS", "UK Venture Studio", "web development", "mobile apps"],
  authors: [{ name: "Jonny Allum", url: "https://www.jonnyai.co.uk" }],
  creator: "Jonny Allum Innovations Ltd",
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://www.jonnyai.co.uk",
    siteName: "JonnyAi",
    title: "JonnyAi | Pioneering AI Architecture | Build 10x Faster",
    description: "Pioneering the future of AI architecture with 43 specialized AI agents. Delivering global AI solutions from our Emsworth base.",
  },
  twitter: {
    card: "summary_large_image",
    title: "JonnyAi | Pioneering AI Architecture",
    description: "Pioneering AI architecture with our 43-agent orchestra. UK based, global delivery.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              "name": "JonnyAi",
              "image": "https://www.jonnyai.co.uk/Logo/JonnyAI full logo.png",
              "@id": "https://www.jonnyai.co.uk",
              "url": "https://www.jonnyai.co.uk",
              "telephone": "",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Emsworth",
                "addressRegion": "Hampshire",
                "addressCountry": "GB"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 50.849,
                "longitude": -0.985
              },
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday"
                ],
                "opens": "09:00",
                "closes": "18:00"
              },
              "sameAs": [
                "https://linkedin.com/in/jonny-allum-12a757140",
                "https://github.com/jonnyallum"
              ]
            })
          }}
        />
      </head>
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
