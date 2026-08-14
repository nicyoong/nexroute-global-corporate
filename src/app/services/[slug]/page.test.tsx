import { render, screen } from '@testing-library/react';
import ServicesDetailPage from '@/app/services/[slug]/page';

describe('ServiceDetailPage', () => {
  it('renders the service title for air-ocean-freight', () => {
    render(<ServicesDetailPage params={{ slug: 'air-ocean-freight' }} />);
    expect(screen.getByRole('heading', { level: 1, name: /Air & Ocean Freight/i })).toBeInTheDocument();
  });

  it('renders the service description', () => {
    render(<ServicesDetailPage params={{ slug: 'air-ocean-freight' }} />);
    expect(screen.getByText(/Full-container, less-than-container, and air charter solutions/i)).toBeInTheDocument();
  });

  it('renders breadcrumb navigation', () => {
    render(<ServicesDetailPage params={{ slug: 'air-ocean-freight' }} />);
    const breadcrumb = document.querySelector('nav[aria-label="Breadcrumb"]');
    expect(breadcrumb).toBeInTheDocument();
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getAllByText('Services').length).toBeGreaterThan(0);
    expect(screen.getAllByText(/Air & Ocean Freight/i).length).toBeGreaterThan(0);
  });

  it('renders service capabilities', () => {
    render(<ServicesDetailPage params={{ slug: 'air-ocean-freight' }} />);
    expect(screen.getByText(/Full Container Load/i)).toBeInTheDocument();
    expect(screen.getByText(/Hazardous materials/i)).toBeInTheDocument();
  });

  it('renders key benefits', () => {
    render(<ServicesDetailPage params={{ slug: 'air-ocean-freight' }} />);
    expect(screen.getByRole('heading', { level: 2, name: /Key Benefits/i })).toBeInTheDocument();
    expect(screen.getByText(/Competitive rates through volume-based carrier/i)).toBeInTheDocument();
  });

  it('renders CTA section', () => {
    render(<ServicesDetailPage params={{ slug: 'air-ocean-freight' }} />);
    expect(screen.getByText(/Ready to get started with Air & Ocean Freight\?/i)).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /Request a Quote/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /Track a Shipment/i })).toBeInTheDocument();
  });

  it('links Request a Quote to /contact', () => {
    render(<ServicesDetailPage params={{ slug: 'air-ocean-freight' }} />);
    const btn = screen.getByRole('link', { name: /Request a Quote/i });
    expect(btn).toHaveAttribute('href', '/contact');
  });

  it('links Track a Shipment to /track', () => {
    render(<ServicesDetailPage params={{ slug: 'air-ocean-freight' }} />);
    const btn = screen.getByRole('link', { name: /Track a Shipment/i });
    expect(btn).toHaveAttribute('href', '/track');
  });

  it('renders the "Not Found" page for unknown slug', () => {
    render(<ServicesDetailPage params={{ slug: 'nonexistent-service' }} />);
    expect(screen.getByRole('heading', { level: 1, name: /Service Not Found/i })).toBeInTheDocument();
    expect(screen.getByText(/doesn't exist or has been moved/i)).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /View all services/i })).toBeInTheDocument();
  });

  it('links Back to Services to /services', () => {
    render(<ServicesDetailPage params={{ slug: 'nonexistent-service' }} />);
    const link = screen.getByRole('link', { name: /View all services/i });
    expect(link).toHaveAttribute('href', '/services');
  });

  it('renders benefits with dot indicators', () => {
    render(<ServicesDetailPage params={{ slug: 'air-ocean-freight' }} />);
    expect(screen.getByText(/Competitive rates/i)).toBeInTheDocument();
    expect(screen.getByText(/Guaranteed space allocation/i)).toBeInTheDocument();
  });

  it('renders the full description for the service', () => {
    render(<ServicesDetailPage params={{ slug: 'air-ocean-freight' }} />);
    expect(screen.getByText(/Our air and ocean freight services cover the full spectrum/i)).toBeInTheDocument();
  });

  it('renders eyebrow for the service', () => {
    render(<ServicesDetailPage params={{ slug: 'air-ocean-freight' }} />);
    expect(screen.getByText('Freight Forwarding')).toBeInTheDocument();
  });

  it('renders correct number of capability list items', () => {
    render(<ServicesDetailPage params={{ slug: 'air-ocean-freight' }} />);
    const lis = document.querySelectorAll('li');
    const capabilityLis = Array.from(lis).filter(li => li.textContent?.includes('Container'));
    expect(capabilityLis.length).toBeGreaterThanOrEqual(1);
  });

  it('renders correct number of benefit items', () => {
    render(<ServicesDetailPage params={{ slug: 'air-ocean-freight' }} />);
    const benefitItems = document.querySelectorAll('[class*="bg-accent"]');
    expect(benefitItems.length).toBeGreaterThanOrEqual(4);
  });
});

describe('ServiceDetailPage - cold-chain', () => {
  it('renders cold chain service title', () => {
    render(<ServicesDetailPage params={{ slug: 'cold-chain' }} />);
    expect(screen.getByRole('heading', { level: 1, name: /Cold Chain Logistics/i })).toBeInTheDocument();
  });

  it('renders cold chain capabilities', () => {
    render(<ServicesDetailPage params={{ slug: 'cold-chain' }} />);
    const lis = document.querySelectorAll('li');
    const capabilityTexts = Array.from(lis).map(li => li.textContent);
    expect(capabilityTexts.some(t => t?.includes('GDP-compliant'))).toBe(true);
    expect(capabilityTexts.some(t => t?.includes('Continuous data logging'))).toBe(true);
  });
});

describe('ServiceDetailPage - consulting', () => {
  it('renders consulting service title', () => {
    render(<ServicesDetailPage params={{ slug: 'consulting' }} />);
    expect(screen.getByRole('heading', { level: 1, name: /Supply Chain Consulting/i })).toBeInTheDocument();
  });

  it('renders consulting benefits', () => {
    render(<ServicesDetailPage params={{ slug: 'consulting' }} />);
    expect(screen.getByText(/Average 18% total logistics cost reduction/i)).toBeInTheDocument();
  });

  it('renders consulting capabilities', () => {
    render(<ServicesDetailPage params={{ slug: 'consulting' }} />);
    expect(screen.getByText(/Current-state supply chain assessment/i)).toBeInTheDocument();
    expect(screen.getByText(/Network design and optimization modeling/i)).toBeInTheDocument();
  });
});

describe('ServiceDetailPage - warehousing', () => {
  it('renders warehousing service title', () => {
    render(<ServicesDetailPage params={{ slug: 'warehousing-fulfillment' }} />);
    expect(screen.getByRole('heading', { level: 1, name: /Warehousing & Fulfillment/i })).toBeInTheDocument();
  });

  it('renders warehousing capabilities', () => {
    render(<ServicesDetailPage params={{ slug: 'warehousing-fulfillment' }} />);
    expect(screen.getByText(/Bonded and non-bonded warehouse space/i)).toBeInTheDocument();
    expect(screen.getByText(/E-commerce pick, pack, and same-day dispatch/i)).toBeInTheDocument();
  });

  it('renders warehousing benefits', () => {
    render(<ServicesDetailPage params={{ slug: 'warehousing-fulfillment' }} />);
    expect(screen.getByText(/Reduce warehousing overhead by up to 30%/i)).toBeInTheDocument();
  });
});

describe('ServiceDetailPage - customs-brokerage', () => {
  it('renders customs brokerage service title', () => {
    render(<ServicesDetailPage params={{ slug: 'customs-brokerage' }} />);
    expect(screen.getByRole('heading', { level: 1, name: /Customs Brokerage/i })).toBeInTheDocument();
  });

  it('renders customs capabilities', () => {
    render(<ServicesDetailPage params={{ slug: 'customs-brokerage' }} />);
    expect(screen.getByText(/Import and export customs clearance/i)).toBeInTheDocument();
    expect(screen.getByText(/HS code classification and tariff optimization/i)).toBeInTheDocument();
  });

  it('renders customs benefits', () => {
    render(<ServicesDetailPage params={{ slug: 'customs-brokerage' }} />);
    expect(screen.getByText(/Average 8–12% duty savings through optimization/i)).toBeInTheDocument();
  });
});

describe('ServiceDetailPage - last-mile', () => {
  it('renders last mile service title', () => {
    render(<ServicesDetailPage params={{ slug: 'last-mile-delivery' }} />);
    expect(screen.getByRole('heading', { level: 1, name: /Last-Mile Delivery/i })).toBeInTheDocument();
  });

  it('renders last mile capabilities', () => {
    render(<ServicesDetailPage params={{ slug: 'last-mile-delivery' }} />);
    expect(screen.getByText(/Same-day and next-day urban delivery/i)).toBeInTheDocument();
    expect(screen.getByText(/White-glove and threshold delivery/i)).toBeInTheDocument();
  });

  it('renders last mile benefits', () => {
    render(<ServicesDetailPage params={{ slug: 'last-mile-delivery' }} />);
    expect(screen.getByText(/on-time delivery rate/i)).toBeInTheDocument();
  });
});
