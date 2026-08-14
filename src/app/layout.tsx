import type { Metadata } from "next";
import TopBar from "@/components/layout/TopBar";
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import ClientLogos from "@/components/sections/ClientLogos";
import Stats from "@/components/sections/Stats";
import Services from "@/components/sections/Services";
import GlobalNetwork from "@/components/sections/GlobalNetwork";
import HowItWorks from "@/components/sections/HowItWorks";
import Industries from "@/components/sections/Industries";
import Testimonials from "@/components/sections/Testimonials";
import CTABand from "@/components/sections/CTABand";
import Footer from "@/components/layout/Footer";
import { Inter, Sora } from "next/font/google";

export const metadata: Metadata = {
  metadataBase: new URL("https://nexrouteglobal.com"),
  title: {
    default: "NexRoute Global | Worldwide Logistics & Supply Chain Solutions",
    template: "%s | NexRoute Global",
  },
  description:
    "NexRoute Global provides end-to-end supply chain and logistics solutions across 40+ countries. Freight forwarding, customs brokerage, warehousing, and last-mile delivery — trusted by 300+ enterprises worldwide.",
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
    "cold chain",
  ],
  authors: [{ name: "NexRoute Global" }],
  creator: "NexRoute Global",
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
      "End-to-end supply chain and logistics solutions across 40+ countries.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "NexRoute Global" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "NexRoute Global | Worldwide Logistics & Supply Chain Solutions",
    description: "End-to-end supply chain and logistics solutions across 40+ countries.",
    images: ["/og-image.jpg"],
  },
};

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

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${sora.variable}`} suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#0B1F3A" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "NexRoute Global",
              url: "https://nexrouteglobal.com",
              logo: "https://nexrouteglobal.com/logo.png",
              description: "End-to-end supply chain and logistics solutions across 40+ countries.",
              address: {
                "@type": "PostalAddress",
                streetAddress: "1200 Harbor Gateway Blvd, Suite 400",
                addressLocality: "Los Angeles",
                addressRegion: "CA",
                postalCode: "90710",
                addressCountry: "US",
              },
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+1-800-555-7688",
                contactType: "customer service",
              },
              sameAs: [
                "https://linkedin.com/company/nexrouteglobal",
                "https://twitter.com/nexrouteglobal",
              ],
            }),
          }}
        />
      </head>
      <body className="antialiased min-h-screen bg-surface text-primary-900">
        <a href="#main-content" className="skip-link" aria-label="Skip to main content">
          Skip to main content
        </a>
        <TopBar />
        <Navbar />
        <main id="main-content">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
