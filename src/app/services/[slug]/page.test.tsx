import { render, screen } from '@testing-library/react';
import ServiceDetailPage from '@/app/services/[slug]/page';

describe('ServiceDetailPage', () => {
  it('renders the service title for air-ocean-freight', () => {
    render(<ServiceDetailPage params={{ slug: 'air-ocean-freight' }} />);
    expect(screen.getByRole('heading', { level: 1, name: /Air & Ocean Freight/i })).toBeInTheDocument();
  });

  it('renders the service description', () => {
    render(<ServiceDetailPage params={{ slug: 'air-ocean-freight' }} />);
    expect(screen.getByText(/Full-container, less-than-container, and air charter solutions/i)).toBeInTheDocument();
  });

  it('renders breadcrumb navigation', () => {
    render(<ServiceDetailPage params={{ slug: 'air-ocean-freight' }} />);
    const breadcrumb = document.querySelector('nav[aria-label="Breadcrumb"]');
    expect(breadcrumb).toBeInTheDocument();
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getAllByText('Services').length).toBeGreaterThan(0);
    // Air & Ocean Freight appears in both heading and breadcrumb
    expect(screen.getAllByText(/Air & Ocean Freight/i).length).toBeGreaterThan(0);
  });

  it('renders service capabilities', () => {
    render(<ServiceDetailPage params={{ slug: 'air-ocean-freight' }} />);
    expect(screen.getByText(/Full Container Load/i)).toBeInTheDocument();
    expect(screen.getByText(/Hazardous materials/i)).toBeInTheDocument();
  });

  it('renders key benefits', () => {
    render(<ServiceDetailPage params={{ slug: 'air-ocean-freight' }} />);
    expect(screen.getByRole('heading', { level: 2, name: /Key Benefits/i })).toBeInTheDocument();
    expect(screen.getByText(/Competitive rates through volume-based carrier/i)).toBeInTheDocument();
  });

  it('renders CTA section', () => {
    render(<ServiceDetailPage params={{ slug: 'air-ocean-freight' }} />);
    expect(screen.getByText(/Ready to get started with Air & Ocean Freight\?/i)).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /Request a Quote/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /Track a Shipment/i })).toBeInTheDocument();
  });

  it('links Request a Quote to /contact', () => {
    render(<ServiceDetailPage params={{ slug: 'air-ocean-freight' }} />);
    const btn = screen.getByRole('link', { name: /Request a Quote/i });
    expect(btn).toHaveAttribute('href', '/contact');
  });

  it('links Track a Shipment to /track', () => {
    render(<ServiceDetailPage params={{ slug: 'air-ocean-freight' }} />);
    const btn = screen.getByRole('link', { name: /Track a Shipment/i });
    expect(btn).toHaveAttribute('href', '/track');
  });

  it('renders the "Not Found" page for unknown slug', () => {
    render(<ServiceDetailPage params={{ slug: 'nonexistent-service' }} />);
    expect(screen.getByRole('heading', { level: 1, name: /Service Not Found/i })).toBeInTheDocument();
    expect(screen.getByText(/doesn't exist or has been moved/i)).toBeInTheDocument();
    // The button has aria-label "View all services" not "Back to Services"
    expect(screen.getByRole('link', { name: /View all services/i })).toBeInTheDocument();
  });

  it('links Back to Services to /services', () => {
    render(<ServiceDetailPage params={{ slug: 'nonexistent-service' }} />);
    const link = screen.getByRole('link', { name: /View all services/i });
    expect(link).toHaveAttribute('href', '/services');
  });

  it('renders benefits with dot indicators', () => {
    render(<ServiceDetailPage params={{ slug: 'air-ocean-freight' }} />);
    // Benefits appear in the right sidebar
    expect(screen.getByText(/Competitive rates/i)).toBeInTheDocument();
    expect(screen.getByText(/Guaranteed space allocation/i)).toBeInTheDocument();
  });
});

describe('ServiceDetailPage - cold-chain', () => {
  it('renders cold chain service title', () => {
    render(<ServiceDetailPage params={{ slug: 'cold-chain' }} />);
    expect(screen.getByRole('heading', { level: 1, name: /Cold Chain Logistics/i })).toBeInTheDocument();
  });

  it('renders cold chain capabilities', () => {
    render(<ServiceDetailPage params={{ slug: 'cold-chain' }} />);
    // Use a more specific match to avoid ambiguity
    const lis = document.querySelectorAll('li');
    const capabilityTexts = Array.from(lis).map(li => li.textContent);
    expect(capabilityTexts.some(t => t?.includes('GDP-compliant'))).toBe(true);
    expect(capabilityTexts.some(t => t?.includes('Continuous data logging'))).toBe(true);
  });
});

describe('ServiceDetailPage - consulting', () => {
  it('renders consulting service title', () => {
    render(<ServiceDetailPage params={{ slug: 'consulting' }} />);
    expect(screen.getByRole('heading', { level: 1, name: /Supply Chain Consulting/i })).toBeInTheDocument();
  });

  it('renders consulting benefits', () => {
    render(<ServiceDetailPage params={{ slug: 'consulting' }} />);
    expect(screen.getByText(/Average 18% total logistics cost reduction/i)).toBeInTheDocument();
  });
});