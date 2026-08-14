import Container from '../ui/Container';

const stats = [
  { value: '120+', label: 'Countries Served', description: 'Across six continents' },
  { value: '2,400+', label: 'Enterprise Clients', description: 'Trusted by industry leaders' },
  { value: '98.7%', label: 'On-Time Delivery', description: 'Industry-leading reliability' },
  { value: '15M+', label: 'Shipments Annually', description: 'Moving goods worldwide' },
];

export default function Stats() {
  return (
    <section className="py-16 md:py-20 bg-primary" aria-labelledby="stats-heading">
      <Container>
        <h2 id="stats-heading" className="sr-only">Company Statistics</h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center" role="group" aria-label={`${stat.label}: ${stat.value}`}>
              <div className="font-display font-bold text-4xl md:text-5xl text-accent mb-2">{stat.value}</div>
              <div className="font-sans font-semibold text-white text-lg mb-1">{stat.label}</div>
              <div className="font-sans text-surface/60 text-sm">{stat.description}</div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
