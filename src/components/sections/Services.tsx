import Link from 'next/link';
import Card from '../ui/Card';
import SectionHeading from '../ui/SectionHeading';
import Container from '../ui/Container';

const services = [
  {
    title: 'Air Freight',
    description: 'Time-critical air cargo solutions with Express, Standard, and Charter services. We handle everything from palletized shipments to oversized project cargo with real-time tracking and guaranteed delivery windows.',
    icon: (
      <svg className="w-8 h-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
      </svg>
    ),
  },
  {
    title: 'Ocean Freight',
    description: 'Full container load (FCL) and less-than-container load (LCL) shipping across all major trade lanes. Partner carriers include Maersk, MSC, CMA CGM, and COSCO — with competitive transit times and competitive rates.',
    icon: (
      <svg className="w-8 h-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 21h18M3 10h18M3 7l9-4 9 4M4 10v11M20 10v11M8 14v3M12 14v3M16 14v3" />
      </svg>
    ),
  },
  {
    title: 'Road Freight',
    description: 'Full truckload (FTL), less-than-truckload (LTL), and expedited ground shipping across North America, Europe, and Asia. Temperature-controlled and hazardous materials certified.',
    icon: (
      <svg className="w-8 h-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 17h.01M16 17h.01M3 12h18M5 12V7a2 2 0 012-2h2l2-3h4l2 3h2a2 2 0 012 2v5M3 12a2 2 0 002 2v5a2 2 0 00-2 2h0a2 2 0 01-2-2v-5a2 2 0 012-2zM19 14a2 2 0 01-2 2v5a2 2 0 012 2h0a2 2 0 002-2v-5a2 2 0 00-2-2z" />
      </svg>
    ),
  },
  {
    title: 'Customs Brokerage',
    description: 'Licensed customs brokers in 40+ countries. We manage classifications, duty optimization, trade compliance, and regulatory filings — minimizing clearance delays and ensuring full compliance with evolving trade policies.',
    icon: (
      <svg className="w-8 h-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
  {
    title: 'Warehousing & Distribution',
    description: 'Strategic warehouse locations in key logistics hubs — from bonded facilities to e-commerce fulfillment centers. Cross-docking, pick-and-pack, kitting, and last-mile dispatch under one roof.',
    icon: (
      <svg className="w-8 h-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
      </svg>
    ),
  },
  {
    title: 'Supply Chain Consulting',
    description: 'End-to-end supply chain design and optimization. We analyze your current network, identify bottlenecks, and build resilient, cost-efficient logistics strategies tailored to your growth trajectory.',
    icon: (
      <svg className="w-8 h-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
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
            <Card key={service.title} className="p-6 flex flex-col h-full hover:-translate-y-1 transition-transform duration-300" ariaLabel={`Learn more about ${service.title}`}>
              <div className="mb-4" aria-hidden="true">{service.icon}</div>
              <h3 className="font-display font-semibold text-xl text-primary mb-3">{service.title}</h3>
              <p className="text-primary-600 text-base leading-relaxed flex-grow">{service.description}</p>
              <div className="mt-5">
                <Link href={`/services#${service.title.toLowerCase().replace(/\s+/g, '-')}`} className="inline-flex items-center text-accent font-medium text-base hover:text-accent-dark transition-colors group" aria-label={`Learn more about ${service.title}`}>
                  Learn more
                  <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </Card>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Link href="/services" className="inline-flex items-center text-primary font-medium hover:text-accent transition-colors" aria-label="View all services">
            View all services
            <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </Container>
    </section>
  );
}
