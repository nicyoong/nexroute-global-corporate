import Link from 'next/link';
import Card from '../ui/Card';
import SectionHeading from '../ui/SectionHeading';
import Container from '../ui/Container';

const industries = [
  {
    title: 'Healthcare & Pharmaceuticals',
    description: 'Temperature-controlled logistics for vaccines, biologics, and pharmaceuticals. GMP-compliant warehousing and cold chain integrity from origin to point of care.',
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
  },
  {
    title: 'Automotive & Mobility',
    description: 'Just-in-sequence and just-in-time delivery for OEMs and tier suppliers. Handling sensitive components, complete vehicles, and aftermarket parts with zero-damage protocols.',
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 17h.01M16 17h.01M3 12h18M5 12V7a2 2 0 012-2h2l2-3h4l2 3h2a2 2 0 012 2v5M3 12a2 2 0 002 2v5a2 2 0 00-2 2h0a2 2 0 01-2-2v-5a2 2 0 012-2z" />
      </svg>
    ),
  },
  {
    title: 'Consumer Goods & Retail',
    description: 'Fast-moving consumer goods logistics from port to shelf. Seasonal demand planning, e-commerce fulfillment, and reverse logistics for returns management.',
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
      </svg>
    ),
  },
  {
    title: 'Technology & Electronics',
    description: 'High-value electronics and semiconductor logistics with anti-static handling, bonded storage, and serialized tracking. Global distribution to assembly sites and data centers.',
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
      </svg>
    ),
  },
  {
    title: 'Energy & Industrial',
    description: 'Heavy lift and project cargo for oil & gas, renewables, and infrastructure. OOG (out-of-gauge) handling, flat-rack booking, and multi-modal engineering logistics.',
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: 'Food & Beverage',
    description: 'FDA-registered and BRC-certified cold chain solutions. Frozen, chilled, and ambient temperature control with full traceability and shelf-life management.',
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 100 4 2 2 0 000-4z" />
      </svg>
    ),
  },
];

export default function Industries() {
  return (
    <section className="py-20 md:py-28 bg-white" aria-labelledby="industries-heading">
      <Container>
        <SectionHeading
          eyebrow="Industries We Serve"
          title="Specialized Logistics for Every Sector"
          subtitle="Each industry has unique regulatory, temperature, and timing requirements. Our sector-specialized teams bring the expertise your supply chain demands."
          align="center"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((industry) => (
            <Card key={industry.title} className="p-6 flex flex-col h-full hover:-translate-y-1 transition-transform duration-300" ariaLabel={`Learn more about ${industry.title} logistics`}>
              <div className="mb-4 text-accent" aria-hidden="true">{industry.icon}</div>
              <h3 className="font-display font-semibold text-xl text-primary mb-3">{industry.title}</h3>
              <p className="text-primary-600 text-base leading-relaxed flex-grow">{industry.description}</p>
            </Card>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Link href="/industries" className="inline-flex items-center text-primary font-medium hover:text-accent transition-colors" aria-label="View all industries">
            Explore all industries
            <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </Container>
    </section>
  );
}
