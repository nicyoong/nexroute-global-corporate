import type { Metadata } from "next";
import TopBar from "@/components/layout/TopBar";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import TrackingWidget from "@/components/sections/TrackingWidget";
import Container from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Track Your Shipment | NexRoute Global",
  description: "Track any NexRoute shipment in real time. Enter your tracking ID (NX-XXXXXX) to see live status updates across all hubs.",
};

export default function TrackPage() {
  return (
    <>
      <TopBar />
      <Navbar />
      <main id="main-content">
        <section className="bg-primary py-16 md:py-24">
          <Container>
            <nav aria-label="Breadcrumb" className="mb-6">
              <ol className="flex items-center gap-2 text-sm text-surface/60">
                <li><a href="/" className="hover:text-white transition-colors">Home</a></li>
                <li aria-hidden="true">/</li>
                <li className="text-white" aria-current="page">Track Shipment</li>
              </ol>
            </nav>
            <h1 className="font-display font-bold text-3xl md:text-5xl text-white mb-4">
              Track Your Shipment
            </h1>
            <p className="text-surface/80 text-lg max-w-2xl">
              Enter your tracking ID to get real-time status updates on your shipment&apos;s journey across our global network.
            </p>
          </Container>
        </section>
        <section className="py-16 bg-surface">
          <Container>
            <TrackingWidget />
          </Container>
        </section>
        <section className="py-16 bg-white">
          <Container>
            <div className="max-w-3xl mx-auto">
              <h2 className="font-display font-semibold text-xl text-primary mb-4">
                How Tracking Works
              </h2>
              <p className="text-primary-600 leading-relaxed mb-6">
                Every NexRoute shipment is assigned a unique tracking ID in the format NX-XXXXXX.
                Once booked, your shipment appears in our 24/7 control tower, providing real-time
                updates at every milestone — from pickup to final delivery.
              </p>
              <ul className="space-y-3 text-primary-600" role="list">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" aria-hidden="true" />
                  <span><strong className="text-primary">Format:</strong> NX-XXXXXX (6-digit numeric ID)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" aria-hidden="true" />
                  <span>Updates are refreshed every 15 minutes during active transit</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" aria-hidden="true" />
                  <span>Proactive alerts sent for delays, customs holds, or exceptions</span>
                </li>
              </ul>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
