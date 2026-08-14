import Link from "next/link";

const contactInfo = [
  {
    label: "Phone",
    value: "+1 (800) 555-ROUTE",
    href: "tel:+18005557688",
  },
  {
    label: "Email",
    value: "operations@nexrouteglobal.com",
    href: "mailto:operations@nexrouteglobal.com",
  },
  { label: "Certification", value: "ISO 9001:2015 Certified", href: null },
];

export default function TopBar() {
  return (
    <div
      className="bg-primary text-surface/80 text-sm"
      role="complementary"
      aria-label="Contact information bar"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-4 flex-wrap">
          {contactInfo.map((item) => (
            <span key={item.label} className="flex items-center gap-1.5">
              {item.href ? (
                <Link
                  href={item.href}
                  className="hover:text-accent transition-colors"
                  aria-label={`${item.label}: ${item.value}`}
                >
                  {item.value}
                </Link>
              ) : (
                <span className="flex items-center gap-1">
                  <span
                    className="w-1.5 h-1.5 rounded-full bg-accent inline-block"
                    aria-hidden="true"
                  />
                  {item.value}
                </span>
              )}
            </span>
          ))}
        </div>
        <span className="text-xs text-surface/60">
          Serving 40+ countries · 24/7 Operations Center
        </span>
      </div>
    </div>
  );
}
