import type { Metadata } from "next";
import TopBar from "@/components/layout/TopBar";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Services | NexRoute Global",
  description: "Explore our full range of logistics services: air & ocean freight, warehousing, customs brokerage, last-mile delivery, cold chain, and supply chain consulting.",
};

const services = [
  {
    title: "Air & Ocean Freight",
    slug: "air-ocean-freight",
    description:
      "Full-container, less-than-container, and air charter solutions across every major trade lane.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
      </svg>
    ),
  },
  {
    title: "Warehousing & Fulfillment",
    slug: "warehousing-fulfillment",
    description:
      "Strategic warehouse space with pick, pack, ship, and reverse logistics under one roof.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
      </svg>
    ),
  },
  {
    title: "Customs Brokerage",
    slug: "customs-brokerage",
    description:
      "Licensed brokers in 40+ jurisdictions managing classifications, duty optimization, and compliance.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
  {
    title: "Last-Mile Delivery",
    slug: "last-mile-delivery",
    description:
      "Final-leg logistics with white-glove, scheduled, and same-day options and real-time ETAs.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
      </svg>
    ),
  },
  {
    title: "Cold Chain Logistics",
    slug: "cold-chain",
    description:
      "GDP-compliant temperature-controlled transport and storage for pharmaceuticals and perishables.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14 10v4.777m-7.333 5.194l-2.267-2.267a1 1 0 010-1.414l2.267-2.267a1 1 0 011.414 0l2.267 2.267a1 1 0 010 1.414l-2.267 2.267a1 1 0 01-1.414 0zM20 12h-4M4 12H2m18 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Supply Chain Consulting",
    slug: "consulting",
    description:
      "Network design, cost modeling, and resilience planning from strategy to execution.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
];

export default function ServicesPage() {
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
                <li className="text-white" aria-current="page">Services</li>
              </ol>
            </nav>
            <h1 className="font-display font-bold text-3xl md:text-5xl text-white mb-4">
              Our Services
            </h1>
            <p className="text-surface/80 text-lg md:text-xl max-w-3xl leading-relaxed">
              Comprehensive logistics solutions designed for the complexities of
              modern supply chains. Every service integrates with our 24/7
              control tower for real-time visibility.
            </p>
          </Container>
        </section>

        <section className="py-20 md:py-28 bg-surface">
          <Container>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service) => (
                <Link
                  key={service.slug}
                  href={`/services/${service.slug}`}
                  className="bg-white rounded-xl shadow-soft p-6 flex flex-col hover:-translate-y-1 hover:shadow-medium transition-all duration-300 group"
                  aria-label={`Learn more about ${service.title}`}
                >
                  <div className="text-accent mb-4 group-hover:scale-110 transition-transform" aria-hidden="true">
                    {service.icon}
                  </div>
                  <h2 className="font-display font-semibold text-xl text-primary mb-3">
                    {service.title}
                  </h2>
                  <p className="text-primary-600 text-base leading-relaxed flex-grow">
                    {service.description}
                  </p>
                  <span className="mt-4 inline-flex items-center text-accent font-medium text-sm group-hover:gap-2 transition-all">
                    Learn more
                    <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </Link>
              ))}
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
