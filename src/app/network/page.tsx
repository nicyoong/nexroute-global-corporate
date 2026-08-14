import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Global Network | NexRoute Global",
  description: "Explore NexRoute Global's 4 regional hubs and 40+ country coverage. Strategic logistics corridors connecting North America, Europe, Asia Pacific, and the Middle East.",
};

const hubs = [
  {
    region: "North America",
    city: "Los Angeles, CA",
    throughput: "2.4M TEU/yr",
    description: "Gateway to trans-Pacific trade routes with direct rail connections to major distribution centers.",
    services: ["Ocean Freight", "Air Freight", "Warehousing", "Customs Clearance"],
  },
  {
    region: "Europe",
    city: "Rotterdam, Netherlands",
    throughput: "3.1M TEU/yr",
    description: "Europe's largest port with multimodal connectivity to 20+ countries via rail, road, and inland waterways.",
    services: ["FCL/LCL Freight", "Bonded Storage", "Trade Compliance", "Last-Mile Distribution"],
  },
  {
    region: "Asia Pacific",
    city: "Singapore",
    throughput: "2.8M TEU/yr",
    description: "Strategic hub connecting East and West with 200+ global connections and advanced digital logistics platforms.",
    services: ["Container Station", "Transshipment", "Value-Added Services", "Cold Chain"],
  },
  {
    region: "Middle East",
    city: "Jebel Ali, UAE",
    throughput: "1.6M TEU/yr",
    description: "Gateway to MENA region with free zone advantages and re-export capabilities across 3 continents.",
    services: ["Freight Forwarding", "Warehousing", "Customs Brokerage", "Project Cargo"],
  },
];

export default function NetworkPage() {
  return (
    <main id="main-content">
      <section className="bg-primary py-16 md:py-24">
        <Container>
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center gap-2 text-sm text-surface/60">
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li aria-hidden="true">/</li>
              <li className="text-white" aria-current="page">Network</li>
            </ol>
          </nav>
          <h1 className="font-display font-bold text-3xl md:text-5xl text-white mb-4">
            Our Global Network
          </h1>
          <p className="text-surface/80 text-lg md:text-xl max-w-3xl leading-relaxed">
            Four strategic hubs, 40+ countries, and a 24/7 control tower providing
            end-to-end visibility across your entire supply chain.
          </p>
        </Container>
      </section>

      <section className="py-20 md:py-28 bg-white">
        <Container>
          <SectionHeading
            eyebrow="Regional Hubs"
            title="Strategic Locations, Global Reach"
            subtitle="Each hub operates as a multi-modal interchange connecting ocean, air, and ground freight under unified management."
            align="left"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {hubs.map((hub, index) => (
              <div
                key={hub.region}
                className="bg-surface rounded-2xl p-8 hover:shadow-medium transition-shadow"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <span className="text-accent font-display font-semibold text-sm tracking-wider uppercase">
                      {hub.region}
                    </span>
                    <h2 className="font-display font-bold text-2xl text-primary mt-1">
                      {hub.city}
                    </h2>
                  </div>
                  <span className="bg-accent/10 text-accent-dark px-3 py-1 rounded-full text-sm font-semibold">
                    {hub.throughput}
                  </span>
                </div>
                <p className="text-primary-600 mb-5 leading-relaxed">
                  {hub.description}
                </p>
                <div>
                  <p className="text-primary-700 font-medium mb-3">Key Services:</p>
                  <div className="flex flex-wrap gap-2">
                    {hub.services.map((service) => (
                      <span
                        key={service}
                        className="bg-white border border-slate-200 text-primary-600 px-3 py-1 rounded-lg text-sm"
                      >
                        {service}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20 md:py-28 bg-surface">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <SectionHeading
              eyebrow="Global Coverage"
              title="40+ Countries Connected"
              subtitle="Our network spans every major trade lane, from manufacturing hubs in Asia to consumer markets in North America and Europe."
            />
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
              {[
                { label: "Countries", value: "40+" },
                { label: "Hubs", value: "4" },
                { label: "Warehouses", value: "150+" },
                { label: "Team Members", value: "2,500+" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="font-display font-bold text-4xl text-primary mb-1">
                    {stat.value}
                  </div>
                  <div className="text-primary-600 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
