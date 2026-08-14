import Container from '../ui/Container';

const testimonials = [
  {
    quote:
      "NexRoute Global redesigned our pan-European distribution network and reduced our average lead time by 34%. Their customs brokerage team alone has saved us over $2M annually in duty optimization.",
    author: 'Margaret Chen',
    title: 'VP of Supply Chain',
    company: 'Apex Manufacturing Group',
    rating: 5,
  },
  {
    quote:
      "We ship over 12,000 temperature-sensitive pharmaceutical units monthly. NexRoute's cold chain integrity has never dropped below 99.9% — and their 24/7 tracking portal gives us complete visibility.",
    author: 'Dr. Rajesh Malhotra',
    title: 'Director of Logistics',
    company: 'VitaCure Pharmaceuticals',
    rating: 5,
  },
  {
    quote:
      "When our semiconductor fabrication line needed an emergency air freight from Taiwan to Texas, NexRoute had it cleared and on the dock in 38 hours. That's the kind of partner you build your business around.",
    author: 'Sarah Johansson',
    title: 'Supply Chain Director',
    company: 'Nordic Microelectronics',
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 md:py-28 bg-surface-alt" aria-labelledby="testimonials-heading">
      <Container>
        <h2 id="testimonials-heading" className="sr-only">Client Testimonials</h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {testimonials.map((t, index) => (
            <blockquote key={index} className="bg-white rounded-xl shadow-soft p-8 flex flex-col h-full">
              <div className="flex gap-1 mb-4" aria-label={`Rating: ${t.rating} out of 5 stars`}>
                {Array.from({ length: t.rating }).map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-primary-700 text-base leading-relaxed flex-grow italic">&ldquo;{t.quote}&rdquo;</p>
              <footer className="mt-6 pt-6 border-t border-slate-100">
                <div className="font-display font-semibold text-primary text-base">{t.author}</div>
                <div className="text-primary-500 text-sm">{t.title}, {t.company}</div>
              </footer>
            </blockquote>
          ))}
        </div>
      </Container>
    </section>
  );
}
