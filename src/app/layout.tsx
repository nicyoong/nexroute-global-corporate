import type { Metadata } from "next";
import { Inter, Sora } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "NexRoute Global | Worldwide Logistics & Supply Chain Solutions",
    template: "%s | NexRoute Global",
  },
  description:
    "NexRoute Global provides end-to-end supply chain and logistics solutions across 120+ countries. Freight forwarding, customs brokerage, warehousing, and last-mile delivery — trusted by enterprises worldwide.",
  keywords: [
    "logistics",
    "supply chain",
    "freight forwarding",
    "cargo",
    "warehousing",
    "customs brokerage",
    "last-mile delivery",
    "international shipping",
    "B2B logistics",
  ],
  authors: [{ name: "NexRoute Global" }],
  creator: "NexRoute Global",
  publisher: "NexRoute Global",
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
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://nexrouteglobal.com",
    siteName: "NexRoute Global",
    title: "NexRoute Global | Worldwide Logistics & Supply Chain Solutions",
    description:
      "End-to-end supply chain and logistics solutions across 120+ countries. Freight forwarding, customs brokerage, warehousing, and last-mile delivery.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "NexRoute Global — Global logistics network",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "NexRoute Global | Worldwide Logistics & Supply Chain Solutions",
    description:
      "End-to-end supply chain and logistics solutions across 120+ countries.",
    images: ["/og-image.jpg"],
    creator: "@nexrouteglobal",
  },
  alternates: {
    canonical: "https://nexrouteglobal.com",
  },
  category: "logistics",
  manifest: "/site-manifest.json",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${sora.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <meta name="theme-color" content="#0B1F3A" />
        <meta name="msapplication-TileColor" content="#0B1F3A" />
      </head>
      <body className="antialiased min-h-screen bg-surface text-primary-900">
        <a
          href="#main-content"
          className="skip-link"
          aria-label="Skip to main content"
        >
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
