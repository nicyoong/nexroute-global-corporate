const clients = [
  "Meridian Foods",
  "Atlas Pharma",
  "Kite Retail",
  "Vantor Automotive",
  "Helios Electronics",
];

export default function ClientLogos() {
  return (
    <section className="py-12 bg-white border-y border-slate-100" aria-label="Our clients">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="sr-only">Trusted by leading global brands</p>
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
          {clients.map((name) => (
            <span
              key={name}
              className="text-slate-300 font-display font-semibold text-lg tracking-wide hover:text-slate-500 transition-colors cursor-default"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
