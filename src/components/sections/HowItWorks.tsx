const steps = [
  {
    step: "01",
    title: "Request a Quote",
    description: "Tell us about your cargo, route, and timeline. Our team responds within 2 business hours with a detailed, competitive proposal.",
  },
  {
    step: "02",
    title: "Book & Confirm",
    description: "Select your service level, confirm rates, and schedule pickup. We handle documentation, carrier booking, and compliance in one workflow.",
  },
  {
    step: "03",
    title: "Track in Real Time",
    description: "Monitor every shipment through our control tower. Get proactive alerts on delays, customs holds, or weather disruptions — before they become problems.",
  },
  {
    step: "04",
    title: "Deliver & Document",
    description: "Your cargo arrives on time with full proof of delivery, signed paperwork, and a post-delivery performance report for your records.",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-20 md:py-28 bg-primary" aria-labelledby="how-it-works-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block text-accent-light font-display font-semibold text-sm tracking-widest uppercase mb-3">
            How It Works
          </span>
          <h2
            id="how-it-works-heading"
            className="font-display font-bold text-3xl md:text-4xl text-white"
          >
            From inquiry to delivery in four steps
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((s, i) => (
            <div key={s.step} className="relative">
              {/* Connector line */}
              {i < steps.length - 1 && (
                <div
                  className="hidden lg:block absolute top-6 left-full w-full h-px bg-white/10 -mr-4"
                  aria-hidden="true"
                />
              )}
              <div className="font-display font-bold text-5xl text-accent/20 mb-3">
                {s.step}
              </div>
              <h3 className="font-display font-semibold text-xl text-white mb-2">
                {s.title}
              </h3>
              <p className="text-surface/60 text-sm leading-relaxed">
                {s.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
