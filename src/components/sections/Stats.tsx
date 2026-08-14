const stats = [
  { value: "12M+", label: "Shipments Per Year" },
  { value: "99.2%", label: "On-Time Delivery Rate" },
  { value: "40+", label: "Countries Served" },
  { value: "24/7", label: "Global Control Tower" },
];

export default function Stats() {
  return (
    <section className="py-16 bg-surface" aria-labelledby="stats-heading">
      <h2 id="stats-heading" className="sr-only">Company Statistics</h2>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-display font-bold text-3xl sm:text-4xl text-primary mb-1">
                {stat.value}
              </div>
              <div className="text-primary-600 text-sm font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
