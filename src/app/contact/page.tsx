import type { Metadata } from "next";
import ContactPage from "@/components/sections/ContactPage";

export const metadata: Metadata = {
  title: "Contact & Request a Quote | NexRoute Global",
  description: "Get in touch with NexRoute Global for a custom logistics quote. Our team responds within 2 business hours.",
};

export default function ContactPageRoute() {
  return <ContactPage />;
}
