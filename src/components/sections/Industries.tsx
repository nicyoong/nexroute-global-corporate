const industries = [
  {
    title: "Manufacturing",
    description:
      "Just-in-sequence parts delivery, JIT sequencing, and vendor-managed inventory programs that keep your production lines running without excess stock.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
  {
    title: "Healthcare",
    description:
      "GDP-compliant cold chain, temperature-controlled warehousing, and expedited pharma logistics with full chain-of-custody documentation and validation.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
  },
  {
    title: "Retail & E-Commerce",
    description:
      "Seasonal demand planning, cross-docking, e-commerce fulfillment, and returns management. Scale up for peak seasons and down efficiently when demand shifts.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
      </svg>
    ),
  },
  {
    title: "Automotive",
    description:
      "JIT and sequenced parts delivery for OEMs and tier suppliers. Kitting, line-side delivery, and complete vehicle logistics with zero-damage protocols.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 17h.01M16 17h.01M3 12h18M5 12V7a2 2 0 012-2h2l2-3h4l2 3h2a2 2 0 012 2v5M3 12a2 2 0 002 2v5a2 2 0 00-2 2h0a2 2 0 01-2-2v-5a2 2 0 012-2z" />
      </svg>
    ),
  },
];

export default function Industries() {
  return (
    <section className="py-20 md:py-28 bg-surface" aria-labelledby="industries-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block text-accent font-display font-semibold text-sm tracking-widest uppercase mb-3">
            Industries We Serve
          </span>
          <h2
            id="industries-heading"
            className="font-display font-bold text-3xl md:text-4xl text-primary"
          >
            Sector-Specialized Logistics
          </h2>
          <p className="mt-4 text-lg text-primary-600 max-w-2xl mx-auto">
            Every industry has unique regulatory, temperature, and timing
            requirements. Our sector-specialized teams bring the expertise your
            supply chain demands.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {industries.map((industry) => (
            <div
              key={industry.title}
              className="bg-white rounded-xl shadow-soft p-8 hover:-translate-y-1 hover:shadow-medium transition-all duration-300"
            >
              <div className="text-accent mb-5" aria-hidden="true">
                {industry.icon}
              </div>
              <h3 className="font-display font-semibold text-xl text-primary mb-3">
                {industry.title}
              </h3>
              <p className="text-primary-600 text-base leading-relaxed">
                {industry.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
