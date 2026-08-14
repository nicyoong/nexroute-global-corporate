import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About NexRoute Global",
  description: "Learn about NexRoute Global's mission, leadership team, certifications, and commitment to operational excellence in global logistics.",
};

const leadership = [
  {
    name: "Elena Vasquez",
    title: "Chief Executive Officer",
    bio: "25+ years in global logistics. Former VP at Maersk, led expansion into 30+ emerging markets.",
  },
  {
    name: "David Chen",
    title: "Chief Operating Officer",
    bio: "Operations expert with 20 years optimizing supply chain networks across Asia-Pacific and North America.",
  },
  {
    name: "Sarah Johansson",
    title: "Chief Technology Officer",
    bio: "Tech visionary building the control tower platform. Previously led digital transformation at DHL Supply Chain.",
  },
  {
    name: "Michael Okafor",
    title: "Chief Commercial Officer",
    bio: "Commercial strategy leader with deep enterprise relationships across manufacturing, pharma, and retail sectors.",
  },
];

const values = [
  {
    title: "Reliability",
    description: "On-time delivery isn't a goal—it's our baseline. 99.2% on-time rate across all lanes, every quarter.",
  },
  {
    title: "Transparency",
    description: "Real-time visibility into every shipment. No black boxes, no surprises. Just clear data when you need it.",
  },
  {
    title: "Compliance",
    description: "GDP, ISO 9001:2015, ISO 14001:2015, AEO, C-TPAT. We maintain every certification your supply chain requires.",
  },
  {
    title: "Innovation",
    description: "From our 24/7 control tower to AI-driven route optimization, we invest in technology that moves your business forward.",
  },
];

export default function AboutPage() {
  return (
    <main id="main-content">
      <section className="bg-primary py-16 md:py-24">
        <Container>
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center gap-2 text-sm text-surface/60">
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li aria-hidden="true">/</li>
              <li className="text-white" aria-current="page">About</li>
            </ol>
          </nav>
          <h1 className="font-display font-bold text-3xl md:text-5xl text-white mb-4">
            About NexRoute Global
          </h1>
          <p className="text-surface/80 text-lg md:text-xl max-w-3xl leading-relaxed">
            We're a global logistics company built on reliability, technology, and
            deep industry expertise. Since 2010, we've helped 300+ enterprises
            optimize their supply chains across 40+ countries.
          </p>
        </Container>
      </section>

      <section className="py-20 md:py-28 bg-white">
        <Container>
          <SectionHeading
            eyebrow="Our Story"
            title="Built for Complexity, Designed for Clarity"
            subtitle="We started with a simple observation: global logistics was broken. Too many handoffs, too little visibility, too much risk. NexRoute was founded to change that."
            align="left"
          />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-primary-600 text-lg leading-relaxed mb-6">
                Over 14 years, we've grown from a single hub in Los Angeles to a
                four-hub global network serving 40+ countries. But our mission
                hasn't changed: give every client the visibility, control, and
                peace of mind that comes from knowing their cargo is in expert
                hands.
              </p>
              <p className="text-primary-600 text-lg leading-relaxed">
                Today, our 24/7 control tower monitors 12M+ shipments annually,
                our team of 2,500+ logistics specialists operates across four
                continents, and our technology platform provides real-time
                visibility from pickup to final delivery.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: "14+", label: "Years in Operation" },
                { value: "40+", label: "Countries Served" },
                { value: "300+", label: "Enterprise Clients" },
                { value: "2,500+", label: "Team Members" },
              ].map((stat) => (
                <div key={stat.label} className="bg-surface rounded-xl p-6 text-center">
                  <div className="font-display font-bold text-3xl text-accent mb-1">
                    {stat.value}
                  </div>
                  <div className="text-primary-600 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="py-20 md:py-28 bg-surface">
        <Container>
          <SectionHeading
            eyebrow="Leadership"
            title="Meet Our Team"
            align="left"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {leadership.map((member) => (
              <div key={member.name} className="bg-white rounded-xl p-6 shadow-soft">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center text-white font-display font-bold text-2xl flex-shrink-0">
                    {member.name.charAt(0)}
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-lg text-primary">
                      {member.name}
                    </h3>
                    <p className="text-accent font-medium text-sm mb-2">{member.title}</p>
                    <p className="text-primary-600 text-sm">{member.bio}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20 md:py-28 bg-white">
        <Container>
          <SectionHeading
            eyebrow="Our Values"
            title="What Drives Us"
            align="left"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => (
              <div key={value.title} className="bg-surface rounded-xl p-6">
                <h3 className="font-display font-semibold text-lg text-primary mb-3">
                  {value.title}
                </h3>
                <p className="text-primary-600 text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20 md:py-28 bg-primary">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display font-bold text-2xl md:text-3xl text-white mb-4">
              Ready to Partner With Us?
            </h2>
            <p className="text-surface/80 text-lg mb-8">
              Whether you need a single route quote or a complete logistics
              overhaul, our team is ready to build a solution that fits your
              operation.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="px-8 py-4 bg-accent hover:bg-accent-dark text-white font-semibold rounded-lg shadow-accent transition-colors"
              >
                Request a Quote
              </Link>
              <Link
                href="/services"
                className="px-8 py-4 border border-white/30 hover:border-white/60 text-white font-semibold rounded-lg transition-colors"
              >
                Explore Services
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
