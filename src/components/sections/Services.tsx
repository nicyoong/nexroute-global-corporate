import Link from "next/link";
import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";

const services = [
  {
    title: "Air & Ocean Freight",
    description:
      "Full-container, less-than-container, and air charter solutions across every major trade lane. We combine carrier relationships with route optimization to deliver the right balance of speed and cost for your cargo.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
      </svg>
    ),
  },
  {
    title: "Warehousing & Fulfillment",
    description:
      "Strategic warehouse space in high-density logistics corridors. Pick, pack, ship, and reverse logistics handled under one roof — with real-time inventory visibility through our integrated WMS.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
      </svg>
    ),
  },
  {
    title: "Customs Brokerage",
    description:
      "Licensed brokers in 40+ jurisdictions. We manage classifications, duty optimization, compliance filings, and regulatory intelligence so your goods clear borders fast and stay compliant.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
  {
    title: "Last-Mile Delivery",
    description:
      "Final-leg logistics that protects your brand promise. White-glove, scheduled, and same-day options across urban and rural networks, with proof-of-delivery and real-time ETAs.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
      </svg>
    ),
  },
  {
    title: "Cold Chain Logistics",
    description:
      "Temperature-controlled transport and storage for pharmaceuticals, biologics, and perishables. GDP-compliant facilities, continuous data logging, and validated packaging solutions.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14 10v4.777m-7.333 5.194l-2.267-2.267a1 1 0 010-1.414l2.267-2.267a1 1 0 011.414 0l2.267 2.267a1 1 0 010 1.414l-2.267 2.267a1 1 0 01-1.414 0zM20 12h-4M4 12H2m18 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Supply Chain Consulting",
    description:
      "Network design, cost modeling, and resilience planning from strategy to execution. We analyze your current flows, identify bottlenecks, and build supply chains that scale with your growth.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
];

export default function Services() {
  return (
    <section className="py-20 md:py-28 bg-surface" aria-labelledby="services-heading">
      <Container>
        <SectionHeading
          eyebrow="Our Capabilities"
          title="Comprehensive Logistics Solutions"
          subtitle="From factory floor to final door — we manage every leg of your supply chain with precision, visibility, and a commitment to on-time performance."
          align="center"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-white rounded-xl shadow-soft p-6 flex flex-col hover:-translate-y-1 hover:shadow-medium transition-all duration-300"
            >
              <div className="text-accent mb-4" aria-hidden="true">
                {service.icon}
              </div>
              <h3 className="font-display font-semibold text-xl text-primary mb-3">
                {service.title}
              </h3>
              <p className="text-primary-600 text-base leading-relaxed flex-grow">
                {service.description}
              </p>
              <div className="mt-5">
                <Link
                  href={`/services#${service.title.toLowerCase().replace(/\s+/g, "-")}`}
                  className="inline-flex items-center text-accent font-medium text-base hover:text-accent-dark transition-colors group"
                  aria-label={`Learn more about ${service.title}`}
                >
                  Learn more
                  <svg
                    className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
