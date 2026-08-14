import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Industries | NexRoute Global",
  description: "Sector-specialized logistics solutions for Manufacturing, Healthcare, Retail & E-commerce, and Automotive industries.",
};

const industries = [
  {
    title: "Manufacturing",
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    description:
      "Just-in-sequence parts delivery, JIT sequencing, and vendor-managed inventory programs that keep your production lines running without excess stock.",
    features: [
      "JIT and sequenced parts delivery",
      "Vendor-managed inventory (VMI)",
      "Production line feeding",
      "Consignment stock management",
      "Cross-docking and transloading",
    ],
    stats: { label: "Client Base", value: "150+ manufacturers" },
  },
  {
    title: "Healthcare",
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
    description:
      "GDP-compliant cold chain, temperature-controlled warehousing, and expedited pharma logistics with full chain-of-custody documentation and validation.",
    features: [
      "GDP and FDA compliance",
      "Temperature-controlled transport",
      "Continuous data logging",
      "Validated packaging solutions",
      "Chain-of-custody documentation",
    ],
    stats: { label: "Cold Chain", value: "99.9% integrity rate" },
  },
  {
    title: "Retail & E-commerce",
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
      </svg>
    ),
    description:
      "Seasonal demand planning, cross-docking, e-commerce fulfillment, and returns management. Scale up for peak seasons and down efficiently when demand shifts.",
    features: [
      "E-commerce fulfillment",
      "Seasonal demand scaling",
      "Cross-docking operations",
      "Returns management",
      "Last-mile delivery",
    ],
    stats: { label: "Volume", value: "5M+ orders/year" },
  },
  {
    title: "Automotive",
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 17h.01M16 17h.01M3 12h18M5 12V7a2 2 0 012-2h2l2-3h4l2 3h2a2 2 0 012 2v5M3 12a2 2 0 002 2v5a2 2 0 00-2 2h0a2 2 0 01-2-2v-5a2 2 0 012-2z" />
      </svg>
    ),
    description:
      "JIT and sequenced parts delivery for OEMs and tier suppliers. Kitting, line-side delivery, and complete vehicle logistics with zero-damage protocols.",
    features: [
      "JIT/sequenced delivery",
      "Kitting and line-side delivery",
      "Complete vehicle logistics",
      "Zero-damage protocols",
      "Supplier coordination",
    ],
    stats: { label: "OEM Partners", value: "25+ global brands" },
  },
];

export default function IndustriesPage() {
  return (
    <main id="main-content">
      <section className="bg-primary py-16 md:py-24">
        <Container>
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center gap-2 text-sm text-surface/60">
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li aria-hidden="true">/</li>
              <li className="text-white" aria-current="page">Industries</li>
            </ol>
          </nav>
          <h1 className="font-display font-bold text-3xl md:text-5xl text-white mb-4">
            Industries We Serve
          </h1>
          <p className="text-surface/80 text-lg md:text-xl max-w-3xl leading-relaxed">
            Every industry has unique regulatory, temperature, and timing
            requirements. Our sector-specialized teams bring the expertise your
            supply chain demands.
          </p>
        </Container>
      </section>

      <section className="py-20 md:py-28 bg-surface">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {industries.map((industry) => (
              <div
                key={industry.title}
                className="bg-white rounded-2xl p-8 shadow-soft hover:shadow-medium transition-shadow"
              >
                <div className="text-accent mb-5" aria-hidden="true">
                  {industry.icon}
                </div>
                <h2 className="font-display font-bold text-2xl text-primary mb-3">
                  {industry.title}
                </h2>
                <p className="text-primary-600 leading-relaxed mb-5">
                  {industry.description}
                </p>
                <div className="mb-5">
                  <p className="text-primary-700 font-medium mb-3">Key Capabilities:</p>
                  <ul className="space-y-2" role="list">
                    {industry.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2">
                        <svg
                          className="w-5 h-5 text-accent flex-shrink-0 mt-0.5"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          aria-hidden="true"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span className="text-primary-600 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="pt-5 border-t border-slate-100">
                  <span className="text-accent font-semibold">
                    {industry.stats.label}: {industry.stats.value}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </main>
  );
}
