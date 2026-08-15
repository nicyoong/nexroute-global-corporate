"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Button from "../ui/Button";
import SectionHeading from "../ui/SectionHeading";
import Container from "../ui/Container";

type FormState = {
  name: string;
  company: string;
  email: string;
  service: string;
  origin: string;
  destination: string;
  details: string;
  incoterms: string;
  hsCode: string;
};

const SERVICES = [
  "Air Freight",
  "Ocean Freight",
  "Road Freight",
  "Customs Brokerage",
  "Warehousing & Fulfillment",
  "Cold Chain Logistics",
  "Supply Chain Consulting",
  "Other",
];

const INCOTERMS = [
  {
    code: "EXW",
    name: "EXW - Ex Works",
    description: "Seller makes goods available at their premises. Buyer handles all transport and customs.",
  },
  {
    code: "FOB",
    name: "FOB - Free on Board",
    description: "Seller delivers goods on board the vessel. Buyer handles freight and insurance from port of shipment.",
  },
  {
    code: "CIF",
    name: "CIF - Cost, Insurance & Freight",
    description: "Seller pays for cost, insurance, and freight to destination port. Risk transfers when goods load on vessel.",
  },
  {
    code: "DAP",
    name: "DAP - Delivered at Place",
    description: "Seller delivers goods to named destination, ready for unloading. Buyer handles import customs.",
  },
  {
    code: "DDP",
    name: "DDP - Delivered Duty Paid",
    description: "Seller handles all costs and risks including import customs and duties. Maximum seller responsibility.",
  },
];

const HS_CODE_HELPERS = [
  { code: "0000.00", example: "Chapter 01-24: Animal/ Veg products" },
  { code: "6000.00", example: "Chapter 60-63: Textiles" },
  { code: "8000.00", example: "Chapter 80-85: Electronics/Machinery" },
  { code: "9000.00", example: "Chapter 90-99: Instruments/Arms" },
];

const OFFICES = [
  {
    city: "Los Angeles, USA",
    address: "1200 Harbor Gateway Blvd, Suite 400, Los Angeles, CA 90710",
    phone: "+1 (800) 555-ROUTE",
    email: "la@nexrouteglobal.com",
  },
  {
    city: "Rotterdam, Netherlands",
    address: "Wilhelminakade 908, 3072 AP Rotterdam, Netherlands",
    phone: "+31 (0)10 555 0100",
    email: "rmr@nexrouteglobal.com",
  },
  {
    city: "Singapore",
    address: "50 Business Park Drive, #12-01, Singapore 609932",
    phone: "+65 6555 0200",
    email: "sgp@nexrouteglobal.com",
  },
];

function validateHSCode(code: string): string | undefined {
  if (!code.trim()) return "HS Code is required.";
  if (!/^\d{6,10}$/.test(code)) return "HS Code must be 6-10 numeric digits (e.g., 8517.12).";
  return undefined;
}

export default function ContactPage() {
  const [form, setForm] = useState<FormState>({
    name: "",
    company: "",
    email: "",
    service: "",
    origin: "",
    destination: "",
    details: "",
    incoterms: "",
    hsCode: "",
  });
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [showIncotermsHelp, setShowIncotermsHelp] = useState(false);
  const [hsCodeError, setHsCodeError] = useState<string | undefined>();

  const validate = (): boolean => {
    const errs: Partial<Record<keyof FormState, string>> = {};
    if (!form.name.trim()) errs.name = "Name is required.";
    if (!form.company.trim()) errs.company = "Company is required.";
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      errs.email = "Valid work email is required.";
    if (!form.service) errs.service = "Please select a service.";
    if (!form.origin.trim()) errs.origin = "Origin is required.";
    if (!form.destination.trim()) errs.destination = "Destination is required.";
    if (!form.incoterms) errs.incoterms = "Please select an Incoterm.";
    const hsError = validateHSCode(form.hsCode);
    if (hsError) errs.hsCode = hsError;
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormState]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
    if (name === "hsCode") {
      setHsCodeError(validateHSCode(value));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 1500));
    setSubmitting(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <section className="py-20 md:py-28 bg-surface" aria-labelledby="contact-success">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-2xl mx-auto text-center"
          >
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6" aria-hidden="true">
              <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 id="contact-success" className="font-display font-bold text-3xl text-primary mb-4">
              Request Received
            </h2>
            <p className="text-primary-600 text-lg mb-8">
              Thank you, {form.name}. A NexRoute account manager will contact you
              within 2 business hours at {form.email}.
            </p>
            <Button href="/" variant="secondary" ariaLabel="Return to homepage">
              Back to Homepage
            </Button>
          </motion.div>
        </Container>
      </section>
    );
  }

  return (
    <section className="py-20 md:py-28 bg-surface" aria-labelledby="contact-heading">
      <Container>
        <SectionHeading
          eyebrow="Get in Touch"
          title="Request a Quote"
          subtitle="Tell us about your shipment and our logistics team will prepare a custom proposal within 2 business hours."
          align="center"
        />
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Form */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} noValidate className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-primary-700 mb-1">
                    Full Name <span className="text-red-500" aria-label="required">*</span>
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={form.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-2.5 rounded-lg border ${
                      errors.name ? "border-red-400" : "border-slate-200"
                    } focus:border-accent focus:outline-none transition-colors`}
                    aria-invalid={!!errors.name}
                    aria-describedby={errors.name ? "name-error" : undefined}
                  />
                  {errors.name && (
                    <p id="name-error" className="mt-1 text-sm text-red-500" role="alert">{errors.name}</p>
                  )}
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-primary-700 mb-1">
                    Company <span className="text-red-500" aria-label="required">*</span>
                  </label>
                  <input
                    id="company"
                    name="company"
                    type="text"
                    value={form.company}
                    onChange={handleChange}
                    className={`w-full px-4 py-2.5 rounded-lg border ${
                      errors.company ? "border-red-400" : "border-slate-200"
                    } focus:border-accent focus:outline-none transition-colors`}
                    aria-invalid={!!errors.company}
                  />
                  {errors.company && (
                    <p className="mt-1 text-sm text-red-500" role="alert">{errors.company}</p>
                  )}
                </div>
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-primary-700 mb-1">
                  Work Email <span className="text-red-500" aria-label="required">*</span>
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-2.5 rounded-lg border ${
                    errors.email ? "border-red-400" : "border-slate-200"
                  } focus:border-accent focus:outline-none transition-colors`}
                  aria-invalid={!!errors.email}
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-500" role="alert">{errors.email}</p>
                )}
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-primary-700 mb-1">
                    Service <span className="text-red-500" aria-label="required">*</span>
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={form.service}
                    onChange={handleChange}
                    className={`w-full px-4 py-2.5 rounded-lg border ${
                      errors.service ? "border-red-400" : "border-slate-200"
                    } focus:border-accent focus:outline-none transition-colors bg-white`}
                    aria-invalid={!!errors.service}
                  >
                    <option value="">Select a service…</option>
                    {SERVICES.map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                  {errors.service && (
                    <p className="mt-1 text-sm text-red-500" role="alert">{errors.service}</p>
                  )}
                </div>
                <div>
                  <label htmlFor="incoterms" className="block text-sm font-medium text-primary-700 mb-1">
                    Incoterms 2020 <span className="text-red-500" aria-label="required">*</span>
                    <button
                      type="button"
                      onClick={() => setShowIncotermsHelp(!showIncotermsHelp)}
                      className="ml-2 text-accent hover:text-accent-dark text-xs font-normal underline"
                      aria-expanded={showIncotermsHelp}
                      aria-controls="incoterms-help"
                    >
                      What's this?
                    </button>
                  </label>
                  <select
                    id="incoterms"
                    name="incoterms"
                    value={form.incoterms}
                    onChange={handleChange}
                    className={`w-full px-4 py-2.5 rounded-lg border ${
                      errors.incoterms ? "border-red-400" : "border-slate-200"
                    } focus:border-accent focus:outline-none transition-colors bg-white`}
                    aria-invalid={!!errors.incoterms}
                  >
                    <option value="">Select Incoterm…</option>
                    {INCOTERMS.map((term) => (
                      <option key={term.code} value={term.code}>{term.code} - {term.name.split(" - ")[1]}</option>
                    ))}
                  </select>
                  {errors.incoterms && (
                    <p className="mt-1 text-sm text-red-500" role="alert">{errors.incoterms}</p>
                  )}
                  {showIncotermsHelp && (
                    <div id="incoterms-help" className="mt-3 space-y-2" role="region" aria-label="Incoterms 2020 helper">
                      {INCOTERMS.map((term) => (
                        <div key={term.code} className="bg-surface rounded-lg p-3 text-sm">
                          <p className="font-semibold text-primary">{term.code} - {term.name.split(" - ")[1]}</p>
                          <p className="text-primary-600 mt-1">{term.description}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="hsCode" className="block text-sm font-medium text-primary-700 mb-1">
                    HS Code <span className="text-red-500" aria-label="required">*</span>
                    <span className="ml-1 text-xs text-slate-500 font-normal">(6-10 digits)</span>
                  </label>
                  <input
                    id="hsCode"
                    name="hsCode"
                    type="text"
                    value={form.hsCode}
                    onChange={handleChange}
                    maxLength={10}
                    placeholder="e.g., 85171200"
                    className={`w-full px-4 py-2.5 rounded-lg border ${
                      hsCodeError ? "border-red-400" : errors.hsCode ? "border-red-400" : "border-slate-200"
                    } focus:border-accent focus:outline-none transition-colors`}
                    aria-invalid={!!hsCodeError || !!errors.hsCode}
                    aria-describedby={hsCodeError ? "hsCode-error" : "hsCode-help"}
                    inputMode="numeric"
                    pattern="[0-9]*"
                  />
                  {hsCodeError && (
                    <p id="hsCode-error" className="mt-1 text-sm text-red-500" role="alert">{hsCodeError}</p>
                  )}
                  {!hsCodeError && (
                    <p id="hsCode-help" className="mt-1 text-xs text-slate-500">
                      Harmonized System code for customs classification
                    </p>
                  )}
                </div>
                <div>
                  <label htmlFor="details" className="block text-sm font-medium text-primary-700 mb-1">
                    Cargo Details
                  </label>
                  <input
                    id="details"
                    name="details"
                    type="text"
                    placeholder="Weight, dimensions, commodity type…"
                    value={form.details}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 rounded-lg border border-slate-200 focus:border-accent focus:outline-none transition-colors"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="origin" className="block text-sm font-medium text-primary-700 mb-1">
                    Origin <span className="text-red-500" aria-label="required">*</span>
                  </label>
                  <input
                    id="origin"
                    name="origin"
                    type="text"
                    value={form.origin}
                    onChange={handleChange}
                    className={`w-full px-4 py-2.5 rounded-lg border ${
                      errors.origin ? "border-red-400" : "border-slate-200"
                    } focus:border-accent focus:outline-none transition-colors`}
                    aria-invalid={!!errors.origin}
                  />
                  {errors.origin && (
                    <p className="mt-1 text-sm text-red-500" role="alert">{errors.origin}</p>
                  )}
                </div>
                <div>
                  <label htmlFor="destination" className="block text-sm font-medium text-primary-700 mb-1">
                    Destination <span className="text-red-500" aria-label="required">*</span>
                  </label>
                  <input
                    id="destination"
                    name="destination"
                    type="text"
                    value={form.destination}
                    onChange={handleChange}
                    className={`w-full px-4 py-2.5 rounded-lg border ${
                      errors.destination ? "border-red-400" : "border-slate-200"
                    } focus:border-accent focus:outline-none transition-colors`}
                    aria-invalid={!!errors.destination}
                  />
                  {errors.destination && (
                    <p className="mt-1 text-sm text-red-500" role="alert">{errors.destination}</p>
                  )}
                </div>
              </div>
              <button
                type="submit"
                disabled={submitting}
                className="w-full sm:w-auto px-8 py-3 bg-accent hover:bg-accent-dark text-white font-semibold rounded-lg shadow-accent transition-colors disabled:opacity-60"
              >
                {submitting ? (
                  <span className="flex items-center gap-2">
                    <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" aria-hidden="true">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                    </svg>
                    Submitting…
                  </span>
                ) : (
                  "Submit Request"
                )}
              </button>
            </form>
          </div>

          {/* Sidebar: Offices */}
          <div className="space-y-6">
            <h3 className="font-display font-semibold text-xl text-primary">Our Offices</h3>
            {OFFICES.map((office) => (
              <div key={office.city} className="bg-white rounded-xl shadow-soft p-5">
                <h4 className="font-display font-semibold text-primary mb-2">{office.city}</h4>
                <p className="text-primary-600 text-sm leading-relaxed mb-3">{office.address}</p>
                <p className="text-sm">
                  <span className="text-primary-500">Phone: </span>
                  <a href={`tel:${office.phone.replace(/\s/g, "")}`} className="text-accent hover:underline">{office.phone}</a>
                </p>
                <p className="text-sm mt-1">
                  <span className="text-primary-500">Email: </span>
                  <a href={`mailto:${office.email}`} className="text-accent hover:underline">{office.email}</a>
                </p>
              </div>
            ))}
            <div className="bg-accent/10 rounded-xl p-5 text-sm text-primary-700">
              <p className="font-semibold text-primary mb-1">Response Time</p>
              <p>All requests are reviewed within 2 business hours during global operating hours (24/7).</p>
            </div>
            <div className="bg-primary rounded-xl p-5 text-sm text-surface">
              <p className="font-semibold text-white mb-2">Trade Compliance</p>
              <p className="text-surface/80">
                Our customs brokerage team ensures all HS codes and Incoterms are correctly applied for smooth clearance.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
