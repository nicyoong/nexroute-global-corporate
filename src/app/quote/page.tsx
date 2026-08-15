import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Link from "next/link";
import ChargeableWeightCalculator from "@/components/sections/ChargeableWeightCalculator";

export const metadata: Metadata = {
  title: "Request a Quote | NexRoute Global",
  description: "Get an instant freight quote from NexRoute Global. Calculate chargeable weight with our interactive tool and receive a customized logistics proposal within 2 business hours.",
};

export default function QuotePage() {
  return (
    <main id="main-content">
      <section className="bg-primary py-16 md:py-24">
        <Container>
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center gap-2 text-sm text-surface/60">
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li aria-hidden="true">/</li>
              <li className="text-white" aria-current="page">Get a Quote</li>
            </ol>
          </nav>
          <h1 className="font-display font-bold text-3xl md:text-5xl text-white mb-4">
            Request a Quote
          </h1>
          <p className="text-surface/80 text-lg md:text-xl max-w-3xl leading-relaxed">
            Tell us about your shipment and our logistics team will prepare a
            custom proposal within 2 business hours.
          </p>
        </Container>
      </section>

      {/* Chargeable Weight Calculator */}
      <section className="py-20 md:py-28 bg-white" aria-labelledby="weight-calculator-heading">
        <Container>
          <SectionHeading
            eyebrow="Industry Tool"
            title="Chargeable Weight Calculator"
            subtitle="Freight forwarders charge by the greater of actual weight or volumetric weight. Use our calculator to estimate your chargeable weight and understand your freight costs."
            align="center"
          />
          <div className="max-w-4xl mx-auto">
            <ChargeableWeightCalculator />
          </div>
        </Container>
      </section>

      {/* Quote Form */}
      <section className="py-20 md:py-28 bg-surface">
        <Container>
          <div className="max-w-3xl mx-auto">
            <h2 className="font-display font-bold text-2xl md:text-3xl text-primary mb-4 text-center">
              Complete Your Request
            </h2>
            <p className="text-primary-600 text-lg text-center mb-10">
              Fill out the form below and our team will contact you with a detailed proposal.
            </p>
            <form className="bg-white rounded-2xl shadow-soft p-8 space-y-6" aria-label="Quote request form">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-primary-700 mb-1">
                    Full Name <span className="text-red-500" aria-label="required">*</span>
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    className="w-full px-4 py-2.5 rounded-lg border border-slate-200 focus:border-accent focus:outline-none transition-colors"
                    placeholder="John Smith"
                  />
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-primary-700 mb-1">
                    Company <span className="text-red-500" aria-label="required">*</span>
                  </label>
                  <input
                    id="company"
                    type="text"
                    required
                    className="w-full px-4 py-2.5 rounded-lg border border-slate-200 focus:border-accent focus:outline-none transition-colors"
                    placeholder="Acme Corp"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-primary-700 mb-1">
                  Work Email <span className="text-red-500" aria-label="required">*</span>
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  className="w-full px-4 py-2.5 rounded-lg border border-slate-200 focus:border-accent focus:outline-none transition-colors"
                  placeholder="john@acmecorp.com"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="origin" className="block text-sm font-medium text-primary-700 mb-1">
                    Origin <span className="text-red-500" aria-label="required">*</span>
                  </label>
                  <input
                    id="origin"
                    type="text"
                    required
                    className="w-full px-4 py-2.5 rounded-lg border border-slate-200 focus:border-accent focus:outline-none transition-colors"
                    placeholder="Shanghai, CN"
                  />
                </div>
                <div>
                  <label htmlFor="destination" className="block text-sm font-medium text-primary-700 mb-1">
                    Destination <span className="text-red-500" aria-label="required">*</span>
                  </label>
                  <input
                    id="destination"
                    type="text"
                    required
                    className="w-full px-4 py-2.5 rounded-lg border border-slate-200 focus:border-accent focus:outline-none transition-colors"
                    placeholder="Los Angeles, US"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="service" className="block text-sm font-medium text-primary-700 mb-1">
                  Service Required <span className="text-red-500" aria-label="required">*</span>
                </label>
                <select
                  id="service"
                  required
                  className="w-full px-4 py-2.5 rounded-lg border border-slate-200 focus:border-accent focus:outline-none transition-colors bg-white"
                >
                  <option value="">Select a service…</option>
                  <option value="air-freight">Air Freight</option>
                  <option value="ocean-freight">Ocean Freight</option>
                  <option value="road-freight">Road Freight</option>
                  <option value="customs">Customs Brokerage</option>
                  <option value="warehousing">Warehousing & Fulfillment</option>
                  <option value="cold-chain">Cold Chain Logistics</option>
                  <option value="consulting">Supply Chain Consulting</option>
                </select>
              </div>
              <div>
                <label htmlFor="details" className="block text-sm font-medium text-primary-700 mb-1">
                  Cargo Details
                </label>
                <textarea
                  id="details"
                  rows={4}
                  className="w-full px-4 py-2.5 rounded-lg border border-slate-200 focus:border-accent focus:outline-none transition-colors"
                  placeholder="Commodity type, dimensions, weight, special requirements…"
                />
              </div>
              <button
                type="submit"
                className="w-full sm:w-auto px-8 py-3 bg-accent hover:bg-accent-dark text-white font-semibold rounded-lg shadow-accent transition-colors"
              >
                Submit Request
              </button>
            </form>
          </div>
        </Container>
      </section>
    </main>
  );
}
