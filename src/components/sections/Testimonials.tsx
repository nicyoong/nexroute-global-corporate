const testimonials = [
  {
    quote:
      "NexRoute redesigned our pan-Asian distribution network and cut our average lead time by 31%. Their customs brokerage team alone has saved us over $1.8M annually in duty optimization and compliance penalties.",
    author: "Margaret Chen",
    title: "VP of Supply Chain",
    company: "Meridian Foods International",
    rating: 5,
  },
  {
    quote:
      "We ship over 12,000 temperature-sensitive pharmaceutical units monthly. NexRoute's cold chain integrity has never dropped below 99.9% — and their 24/7 tracking portal gives us complete end-to-end visibility.",
    author: "Dr. Rajesh Malhotra",
    title: "Director of Logistics",
    company: "Atlas Pharma Group",
    rating: 5,
  },
  {
    quote:
      "When our semiconductor fabrication line needed an emergency air freight from Taiwan to Austin, NexRoute had it cleared and on the dock in 38 hours. That's the kind of partner you build your operations around.",
    author: "Sarah Johansson",
    title: "Supply Chain Director",
    company: "Helios Electronics",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 md:py-28 bg-white" aria-labelledby="testimonials-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block text-accent font-display font-semibold text-sm tracking-widest uppercase mb-3">
            Client Testimonials
          </span>
          <h2
            id="testimonials-heading"
            className="font-display font-bold text-3xl md:text-4xl text-primary"
          >
            Trusted by Supply Chain Leaders
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, index) => (
            <blockquote
              key={index}
              className="bg-surface rounded-xl p-8 flex flex-col"
            >
              <div
                className="flex gap-1 mb-4"
                aria-label={`Rating: ${t.rating} out of 5 stars`}
              >
                {Array.from({ length: t.rating }).map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-accent"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    aria-hidden="true"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-primary-700 text-base leading-relaxed flex-grow italic">
                &ldquo;{t.quote}&rdquo;
              </p>
              <footer className="mt-6 pt-6 border-t border-slate-100">
                <div className="font-display font-semibold text-primary">
                  {t.author}
                </div>
                <div className="text-primary-500 text-sm">
                  {t.title}, {t.company}
                </div>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
