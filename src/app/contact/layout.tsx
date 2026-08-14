import type { Metadata } from "next";
import TopBar from "@/components/layout/TopBar";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ContactPage from "@/components/sections/ContactPage";

export const metadata: Metadata = {
  title: "Contact & Request a Quote | NexRoute Global",
  description: "Get in touch with NexRoute Global for a custom logistics quote. Our team responds within 2 business hours.",
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <TopBar />
      <Navbar />
      <main id="main-content">{children}</main>
      <Footer />
    </>
  );
}
