import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | NexRoute Global",
  description: "Contact page layout for NexRoute Global",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
