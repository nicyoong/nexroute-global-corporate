export default function Hero() {
  return (
    <section className="bg-primary overflow-hidden" aria-labelledby="hero-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center py-20 lg:py-32">
          {/* Left: Copy */}
          <div>
            <span className="inline-block text-accent-light font-display font-semibold text-sm tracking-widest uppercase mb-4">
              End-to-End Supply Chain Solutions
            </span>
            <h1
              id="hero-heading"
              className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-white leading-tight mb-6"
            >
              Freight that moves at the speed of your business.
            </h1>
            <p className="text-surface/80 text-lg sm:text-xl leading-relaxed mb-8 max-w-xl">
              NexRoute Global connects 40+ countries with a single source of
              truth — real-time visibility, proactive exception management, and
              a 24/7 control tower that keeps your supply chain on schedule,
              every shipment, every time.
            </p>
            <div className="flex flex-wrap gap-4 mb-10">
              <a
                href="/contact"
                className="inline-flex items-center px-6 py-3 bg-accent hover:bg-accent-dark text-white font-semibold rounded-lg shadow-accent transition-colors"
              >
                Get a Quote
              </a>
              <a
                href="/track"
                className="inline-flex items-center px-6 py-3 border border-white/30 hover:border-white/60 text-white font-semibold rounded-lg transition-colors"
              >
                Track Shipment
              </a>
            </div>
            <div className="flex items-center gap-2 text-surface/60 text-sm">
              <svg className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Trusted by <strong className="text-white">300+ enterprises</strong> worldwide</span>
            </div>
          </div>

          {/* Right: Animated SVG map */}
          <div className="relative flex items-center justify-center" aria-hidden="true">
            <svg
              viewBox="0 0 600 400"
              className="w-full max-w-lg"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient id="route-grad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#F97316" stopOpacity="0.2" />
                  <stop offset="50%" stopColor="#F97316" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#F97316" stopOpacity="0.2" />
                </linearGradient>
              </defs>
              {/* Simplified world outline paths */}
              <path d="M80 140 Q120 100 180 120 Q240 140 260 100 Q280 60 320 80 Q360 100 380 140 Q400 180 360 200 Q320 220 280 200 Q240 180 200 200 Q160 220 120 200 Q80 180 80 140Z" fill="none" stroke="#1E293B" strokeWidth="2" />
              <path d="M140 240 Q180 220 220 240 Q260 260 280 240 Q300 220 340 240 Q380 260 400 240 Q420 220 440 240" fill="none" stroke="#1E293B" strokeWidth="2" />
              <path d="M100 300 Q150 280 200 300 Q250 320 300 300 Q350 280 400 300" fill="none" stroke="#1E293B" strokeWidth="2" />
              {/* Shipping route arcs */}
              <path d="M120 160 Q200 100 300 120" fill="none" stroke="url(#route-grad)" strokeWidth="2" strokeDasharray="4 4" className="animate-pulse" />
              <path d="M300 120 Q400 100 480 140" fill="none" stroke="url(#route-grad)" strokeWidth="2" strokeDasharray="4 4" />
              <path d="M120 160 Q200 200 280 180" fill="none" stroke="url(#route-grad)" strokeWidth="2" strokeDasharray="4 4" />
              <path d="M280 180 Q360 220 440 200" fill="none" stroke="url(#route-grad)" strokeWidth="2" strokeDasharray="4 4" />
              <path d="M200 260 Q300 240 400 260" fill="none" stroke="url(#route-grad)" strokeWidth="2" strokeDasharray="4 4" />
              <path d="M160 140 Q240 80 340 100 Q440 120 500 160" fill="none" stroke="url(#route-grad)" strokeWidth="2" strokeDasharray="4 4" />
              {/* Hub dots */}
              <circle cx="120" cy="160" r="6" fill="#F97316" className="animate-ping" style={{ animationDuration: '2s' }} />
              <circle cx="120" cy="160" r="4" fill="#F97316" />
              <circle cx="300" cy="120" r="6" fill="#F97316" className="animate-ping" style={{ animationDuration: '2.5s' }} />
              <circle cx="300" cy="120" r="4" fill="#F97316" />
              <circle cx="480" cy="140" r="6" fill="#F97316" className="animate-ping" style={{ animationDuration: '3s' }} />
              <circle cx="480" cy="140" r="4" fill="#F97316" />
              <circle cx="280" cy="180" r="5" fill="#F97316" className="animate-ping" style={{ animationDuration: '2.2s' }} />
              <circle cx="280" cy="180" r="3" fill="#F97316" />
              <circle cx="440" cy="200" r="5" fill="#F97316" className="animate-ping" style={{ animationDuration: '2.8s' }} />
              <circle cx="440" cy="200" r="3" fill="#F97316" />
              <circle cx="200" cy="260" r="5" fill="#F97316" className="animate-ping" style={{ animationDuration: '3.2s' }} />
              <circle cx="200" cy="260" r="3" fill="#F97316" />
              <circle cx="400" cy="260" r="5" fill="#F97316" className="animate-ping" style={{ animationDuration: '2.6s' }} />
              <circle cx="400" cy="260" r="3" fill="#F97316" />
              {/* Moving dot along routes */}
              <circle r="3" fill="#fff" opacity="0.9">
                <animateMotion dur="4s" repeatCount="indefinite" path="M120 160 Q200 100 300 120" />
              </circle>
              <circle r="3" fill="#fff" opacity="0.9">
                <animateMotion dur="5s" repeatCount="indefinite" path="M300 120 Q400 100 480 140" />
              </circle>
              <circle r="3" fill="#fff" opacity="0.9">
                <animateMotion dur="6s" repeatCount="indefinite" path="M160 140 Q240 80 340 100 Q440 120 500 160" />
              </circle>
            </svg>
            {/* Floating badge */}
            <div className="absolute bottom-4 left-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg px-4 py-2 text-white text-sm">
              <span className="text-accent font-semibold">24/7 Control Tower</span> · Live tracking
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
