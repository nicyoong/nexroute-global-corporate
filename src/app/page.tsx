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
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "NexRoute Global | Worldwide Logistics & Supply Chain Solutions",
  description:
    "NexRoute Global provides end-to-end supply chain and logistics solutions across 40+ countries. Freight forwarding, customs brokerage, warehousing, and last-mile delivery — trusted by 300+ enterprises worldwide.",
};

export default function Home() {
  return (
    <>
      <TopBar />
      <Navbar />
      <Hero />
      <ClientLogos />
      <Stats />
      <Services />
      <GlobalNetwork />
      <HowItWorks />
      <Industries />
      <Testimonials />
      <CTABand />
      <Footer />
    </>
  );
}
