import Link from "next/link";
import Button from "@/components/ui/Button";
import SectionHeading from "@/components/ui/SectionHeading";
import Container from "@/components/ui/Container";
import { SERVICES_DATA } from "@/data/services";

export function generateStaticParams() {
  return Object.keys(SERVICES_DATA).map((slug) => ({ slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const service = SERVICES_DATA[params.slug];
  if (!service) return { title: "Service Not Found" };
  return {
    title: `${service.title} | NexRoute Global`,
    description: service.metaDescription,
  };
}

interface ServiceDetailPageProps {
  params: { slug: string };
}

export default function ServiceDetailPage({ params }: ServiceDetailPageProps) {
  const service = SERVICES_DATA[params.slug];

  if (!service) {
    return (
      <section className="py-28 bg-surface">
        <Container>
          <div className="max-w-xl mx-auto text-center">
            <h1 className="font-display font-bold text-3xl text-primary mb-4">
              Service Not Found
            </h1>
            <p className="text-primary-600 mb-8">
              The service you&apos;re looking for doesn&apos;t exist or has been moved.
            </p>
            <Button href="/services" variant="primary" ariaLabel="View all services">
              Back to Services
            </Button>
          </div>
        </Container>
      </section>
    );
  }

  return (
    <>
      {/* Hero */}
      <section className="bg-primary py-16 md:py-24">
        <Container>
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center gap-2 text-sm text-surface/60 flex-wrap">
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li aria-hidden="true">/</li>
              <li><Link href="/services" className="hover:text-white transition-colors">Services</Link></li>
              <li aria-hidden="true">/</li>
              <li className="text-white" aria-current="page">{service.title}</li>
            </ol>
          </nav>
          <h1 className="font-display font-bold text-3xl md:text-5xl text-white mb-4">
            {service.title}
          </h1>
          <p className="text-surface/80 text-lg md:text-xl max-w-3xl leading-relaxed">
            {service.description}
          </p>
        </Container>
      </section>

      {/* Capabilities */}
      <section className="py-20 md:py-28 bg-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            <div>
              <SectionHeading
                eyebrow={service.eyebrow}
                title={service.title}
                align="left"
              />
              <p className="text-primary-600 text-lg leading-relaxed mb-8">
                {service.fullDescription}
              </p>
              <ul className="space-y-3" role="list">
                {service.capabilities.map((cap) => (
                  <li key={cap} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-primary-700">{cap}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-surface rounded-2xl p-8">
              <h2 className="font-display font-semibold text-xl text-primary mb-4">
                Key Benefits
              </h2>
              <ul className="space-y-4">
                {service.benefits.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" aria-hidden="true" />
                    <span className="text-primary-600">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary">
        <Container>
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-display font-bold text-2xl md:text-3xl text-white mb-4">
              Ready to get started with {service.title}?
            </h2>
            <p className="text-surface/80 text-lg mb-8">
              Speak with a logistics specialist about your {service.title.toLowerCase()} requirements.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button href="/contact" variant="primary" size="lg" ariaLabel="Request a quote for this service">
                Request a Quote
              </Button>
              <Button href="/track" variant="ghost" size="lg" ariaLabel="Track a shipment" className="text-white border-white/30 hover:bg-white/10 hover:border-white/50">
                Track a Shipment
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
