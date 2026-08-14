"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Button from "@/components/ui/Button";

const navLinks = [
  { href: "/services", label: "Services" },
  { href: "/network", label: "Network" },
  { href: "/industries", label: "Industries" },
  { href: "/insights", label: "Insights" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobile = () => setMobileOpen((prev) => !prev);
  const closeMobile = () => setMobileOpen(false);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <header
        className={`sticky top-0 z-50 bg-white border-b border-slate-100 transition-shadow duration-300 ${
          scrolled ? "shadow-medium" : ""
        }`}
        role="banner"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-18">
            <Link
              href="/"
              className="flex items-center gap-2"
              aria-label="NexRoute Global homepage"
            >
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-accent font-display font-bold text-lg">
                  N
                </span>
              </div>
              <span className="font-display font-bold text-primary text-xl tracking-tight">
                NexRoute{" "}
                <span className="text-accent">Global</span>
              </span>
            </Link>
            <nav
              className="hidden lg:flex items-center gap-8"
              role="navigation"
              aria-label="Main navigation"
            >
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-primary-600 hover:text-primary font-medium text-base transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            <div className="hidden lg:flex items-center gap-3">
              <Button
                href="/client-login"
                variant="ghost"
                size="sm"
                ariaLabel="Client Login"
              >
                Client Login
              </Button>
              <Button
                href="/contact"
                variant="primary"
                size="sm"
                ariaLabel="Get a Quote"
              >
                Get a Quote
              </Button>
            </div>
            <button
              type="button"
              onClick={toggleMobile}
              className="lg:hidden p-2 text-primary hover:text-accent transition-colors rounded-md hover:bg-surface-alt"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu"
            >
              <svg
                className="w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                aria-hidden="true"
              >
                {mobileOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 9h16.5m-16.5 6.75h16.5"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </header>
      <div
        className={`fixed inset-0 z-50 lg:hidden ${
          mobileOpen ? "pointer-events-auto" : "pointer-events-none"
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
        aria-hidden={!mobileOpen}
      >
        <div
          className={`absolute inset-0 bg-black/50 transition-opacity duration-300 ${
            mobileOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={closeMobile}
          aria-hidden="true"
        />
        <div
          className={`absolute right-0 top-0 h-full w-80 max-w-full bg-white shadow-large transition-transform duration-300 ${
            mobileOpen ? "translate-x-0" : "translate-x-full"
          }`}
          id="mobile-menu"
        >
          <div className="flex flex-col h-full pt-4 px-6">
            <div className="flex items-center justify-between mb-8">
              <span className="font-display font-bold text-primary text-lg">
                NexRoute{" "}
                <span className="text-accent">Global</span>
              </span>
              <button
                type="button"
                onClick={closeMobile}
                className="p-2 text-primary-400 hover:text-primary transition-colors rounded-md hover:bg-surface-alt"
                aria-label="Close menu"
              >
                <svg
                  className="w-5 h-5"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <nav
              className="flex flex-col gap-1"
              role="navigation"
              aria-label="Mobile navigation"
            >
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={closeMobile}
                  className="py-3 px-4 text-primary-700 hover:text-primary hover:bg-surface-alt font-medium text-lg rounded-lg transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            <div className="mt-auto pb-8 flex flex-col gap-3">
              <Button
                href="/client-login"
                variant="ghost"
                fullWidth
                ariaLabel="Client Login"
              >
                Client Login
              </Button>
              <Button
                href="/contact"
                variant="primary"
                fullWidth
                ariaLabel="Get a Quote"
              >
                Get a Quote
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
