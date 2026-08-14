import Link from 'next/link';
import Button from '../ui/Button';
import Container from '../ui/Container';

export default function CTA() {
  return (
    <section className="py-20 md:py-28 bg-primary relative overflow-hidden" aria-labelledby="cta-heading">
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4" aria-hidden="true" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-accent/5 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4" aria-hidden="true" />
      <Container className="relative">
        <div className="max-w-3xl mx-auto text-center">
          <h2 id="cta-heading" className="font-display font-bold text-3xl md:text-4xl lg:text-5xl text-white mb-6">
            Ready to Optimize Your Supply Chain?
          </h2>
          <p className="font-sans text-xl text-surface/80 mb-10 leading-relaxed">
            Whether you need a single route quote or a complete logistics overhaul,
            our team is ready to build a solution that fits your operation — and
            your bottom line.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button href="/contact" variant="primary" size="lg" ariaLabel="Request a Custom Quote">
              Request a Custom Quote
            </Button>
            <Button href="/about" variant="ghost" size="lg" ariaLabel="Learn About Our Company" className="text-white border-white/30 hover:bg-white/10 hover:border-white/50">
              Learn About NexRoute
            </Button>
          </div>
          <p className="mt-8 text-surface/50 text-sm">
            No commitment required. Our logistics specialists respond within 2 business hours.
          </p>
        </div>
      </Container>
    </section>
  );
}
