import Link from 'next/link';
import Button from '../ui/Button';
import Container from '../ui/Container';
import Badge from '../ui/Badge';

export default function Hero() {
  return (
    <section className="relative bg-primary overflow-hidden" aria-labelledby="hero-heading">
      <div className="absolute inset-0 opacity-10" aria-hidden="true">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="hero-pattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1" fill="currentColor" className="text-white" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hero-pattern)" />
        </svg>
      </div>
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary-light to-primary/90" aria-hidden="true" />
      <Container className="relative py-20 md:py-28 lg:py-36">
        <div className="max-w-4xl">
          <Badge variant="accent" className="mb-6">Trusted by 2,400+ enterprises worldwide</Badge>
          <h1 id="hero-heading" className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-white mb-6 leading-tight">
            Moving the World Forward —{' '}
            <span className="text-accent-light">One Route at a Time</span>
          </h1>
          <p className="font-sans text-xl text-surface/80 mb-8 max-w-2xl leading-relaxed">
            NexRoute Global delivers integrated supply chain solutions across
            air, ocean, and land — connecting markets, streamlining customs, and
            ensuring your goods arrive on time, every time.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button href="/contact" variant="primary" size="lg" ariaLabel="Request a Custom Quote">
              Request a Custom Quote
            </Button>
            <Button href="/services" variant="ghost" size="lg" ariaLabel="Explore Our Services" className="text-white border-white/30 hover:bg-white/10 hover:border-white/50">
              Explore Our Services
            </Button>
          </div>
          <div className="mt-12 pt-8 border-t border-white/10 flex flex-wrap gap-8 items-center">
            <div className="flex items-center gap-2 text-surface/60 text-sm">
              <svg className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              ISO 9001:2015 Certified
            </div>
            <div className="flex items-center gap-2 text-surface/60 text-sm">
              <svg className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              24/7 Operations Center
            </div>
            <div className="flex items-center gap-2 text-surface/60 text-sm">
              <svg className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              120+ Countries Served
            </div>
          </div>
        </div>
      </Container>
      <div className="absolute bottom-0 left-0 right-0" aria-hidden="true">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V120Z" fill="#F8FAFC" />
        </svg>
      </div>
    </section>
  );
}
