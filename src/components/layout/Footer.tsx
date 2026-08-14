import Link from "next/link";
import Button from "../ui/Button";

const currentYear = new Date().getFullYear();

const footerLinks = {
  company: [
    { label: "About NexRoute", href: "/about" },
    { label: "Our Network", href: "/network" },
    { label: "Leadership Team", href: "/about/leadership" },
    { label: "Careers", href: "/careers" },
    { label: "News & Media", href: "/insights" },
  ],
  services: [
    { label: "Air & Ocean Freight", href: "/services/air-ocean-freight" },
    { label: "Warehousing & Fulfillment", href: "/services/warehousing-fulfillment" },
    { label: "Customs Brokerage", href: "/services/customs-brokerage" },
    { label: "Last-Mile Delivery", href: "/services/last-mile-delivery" },
    { label: "Cold Chain Logistics", href: "/services/cold-chain" },
    { label: "Supply Chain Consulting", href: "/services/consulting" },
  ],
  resources: [
    { label: "Industry Insights", href: "/insights" },
    { label: "Trade Compliance Guides", href: "/resources/trade-guides" },
    { label: "Incoterms 2020 Reference", href: "/resources/incoterms" },
    { label: "Client Portal", href: "/client-login" },
    { label: "Track a Shipment", href: "/track" },
    { label: "FAQs", href: "/faq" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-primary text-surface pt-16 pb-8" role="contentinfo" aria-label="Site footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Column 1: Company */}
          <div>
            <Link
              href="/"
              className="inline-flex items-center gap-2 mb-5"
              aria-label="NexRoute Global homepage"
            >
              <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
                <span className="font-display font-bold text-primary text-lg">
                  N
                </span>
              </div>
              <span className="font-display font-bold text-white text-xl">
                NexRoute{" "}
                <span className="text-accent">Global</span>
              </span>
            </Link>
            <p className="text-surface/60 text-sm leading-relaxed mb-5">
              NexRoute Global is a leading provider of end-to-end supply chain
              and logistics solutions, operating across 40+ countries with a
              commitment to reliability, compliance, and operational excellence.
            </p>
            <div className="flex gap-3" aria-label="Social media links">
              {["LinkedIn", "Twitter", "YouTube"].map((platform) => (
                <a
                  key={platform}
                  href={`https://${platform.toLowerCase()}.com/nexrouteglobal`}
                  className="w-9 h-9 rounded-lg bg-white/10 hover:bg-accent flex items-center justify-center transition-colors"
                  aria-label={`Follow us on ${platform}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="sr-only">{platform}</span>
                  <svg
                    className="w-4 h-4 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    {platform === "LinkedIn" && (
                      <path d="M19 3H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V5a2 2 0 00-2-2zm-11 15H7v-7h2v7zm-1-8a1.1 1.1 0 110-2.2 1.1 1.1 0 010 2.2zM17 18h-2v-3.5c0-1.1-.5-1.8-1.5-1.8s-1.4.8-1.4 1.7V18h-2v-7h2v1c.4-.6 1-.9 1.7-.9 1.3 0 2.2.9 2.2 2.5V18z" />
                    )}
                    {platform === "Twitter" && (
                      <path d="M23 3a10.9 10.9 0 01-3.14 1.53A4.48 4.48 0 0012 7.5v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5 0-.28-.03-.56-.08-.83A7.82 7.82 0 0023 3z" />
                    )}
                    {platform === "YouTube" && (
                      <path d="M23.5 6.2a3 3 0 00-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 00.5 6.2 31.4 31.4 0 000 12a31.4 31.4 0 00.5 5.8 3 3 0 002.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 002.1-2.1A31.4 31.4 0 0024 12a31.4 31.4 0 00-.5-5.8zM9.5 15.5V8.5l6.5 3.5-6.5 3.5z" />
                    )}
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Services */}
          <div>
            <h3 className="font-display font-semibold text-white text-lg mb-4">
              Services
            </h3>
            <ul className="space-y-2.5" role="list">
              {footerLinks.services.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-surface/60 hover:text-accent text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Resources */}
          <div>
            <h3 className="font-display font-semibold text-white text-lg mb-4">
              Resources
            </h3>
            <ul className="space-y-2.5" role="list">
              {footerLinks.resources.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-surface/60 hover:text-accent text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h3 className="font-display font-semibold text-white text-lg mb-4">
              Contact HQ
            </h3>
            <address className="not-italic text-surface/60 text-sm leading-relaxed mb-5">
              <p className="font-medium text-white mb-1">
                NexRoute Global Inc.
              </p>
              <p>1200 Harbor Gateway Blvd, Suite 400</p>
              <p>Los Angeles, CA 90710</p>
              <p>United States</p>
              <br />
              <p>
                <strong className="text-surface">Phone:</strong>{" "}
                <a
                  href="tel:+18005557688"
                  className="hover:text-accent transition-colors"
                >
                  +1 (800) 555-ROUTE
                </a>
              </p>
              <p>
                <strong className="text-surface">Email:</strong>{" "}
                <a
                  href="mailto:operations@nexrouteglobal.com"
                  className="hover:text-accent transition-colors"
                >
                  operations@nexrouteglobal.com
                </a>
              </p>
            </address>
            <Button
              href="/contact"
              variant="primary"
              size="sm"
              ariaLabel="Get in touch with our team"
            >
              Get in Touch
            </Button>
          </div>
        </div>

        {/* Certification badges */}
        <div
          className="py-6 border-t border-white/10 flex flex-wrap items-center justify-center gap-6"
          role="group"
          aria-label="Certifications and partnerships"
        >
          {[
            "ISO 9001:2015",
            "ISO 14001:2015",
            "AEO Certified",
            "C-TPAT",
            "GDP Compliant",
          ].map((cert) => (
            <span
              key={cert}
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 rounded-lg text-surface/70 text-xs font-medium border border-white/10"
            >
              <svg
                className="w-4 h-4 text-accent"
                fill="currentColor"
                viewBox="0 0 20 20"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              {cert}
            </span>
          ))}
        </div>

        {/* Newsletter */}
        <div className="py-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-surface/60 text-sm">
            Subscribe to our logistics insights newsletter. No spam — just
            industry intelligence.
          </p>
          <div className="flex w-full md:w-auto gap-2">
            <label htmlFor="newsletter-email" className="sr-only">
              Email address
            </label>
            <input
              id="newsletter-email"
              type="email"
              placeholder="Enter your email"
              className="flex-1 md:w-64 px-4 py-2.5 rounded-lg bg-white/10 border border-white/20 text-white placeholder-surface/40 text-sm focus:border-accent focus:outline-none transition-colors"
              aria-label="Email address for newsletter"
            />
            <button
              type="button"
              className="px-4 py-2.5 bg-accent hover:bg-accent-dark text-white font-semibold rounded-lg shadow-accent transition-colors text-sm"
              aria-label="Subscribe to newsletter"
            >
              Subscribe
            </button>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-surface/40">
          <p>&copy; {currentYear} NexRoute Global Inc. All rights reserved.</p>
          <div className="flex gap-5">
            <Link href="/privacy" className="hover:text-surface transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-surface transition-colors">
              Terms of Service
            </Link>
            <Link href="/accessibility" className="hover:text-surface transition-colors">
              Accessibility
            </Link>
            <Link href="/sitemap.xml" className="hover:text-surface transition-colors">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
