import { render, screen } from '@testing-library/react';
import Services from '@/components/sections/Services';

describe('Services', () => {
  it('renders the section heading', () => {
    render(<Services />);
    expect(screen.getByRole('heading', { level: 2, name: /Comprehensive Logistics Solutions/i })).toBeInTheDocument();
  });

  it('renders all six service cards', () => {
    render(<Services />);
    expect(screen.getByText('Air & Ocean Freight')).toBeInTheDocument();
    expect(screen.getByText('Warehousing & Fulfillment')).toBeInTheDocument();
    expect(screen.getByText('Customs Brokerage')).toBeInTheDocument();
    expect(screen.getByText('Last-Mile Delivery')).toBeInTheDocument();
    expect(screen.getByText('Cold Chain Logistics')).toBeInTheDocument();
    expect(screen.getByText('Supply Chain Consulting')).toBeInTheDocument();
  });

  it('renders service descriptions', () => {
    render(<Services />);
    expect(screen.getByText(/Full-container, less-than-container, and air charter/i)).toBeInTheDocument();
    expect(screen.getByText(/Strategic warehouse space in high-density/i)).toBeInTheDocument();
  });

  it('renders Learn more links for each service', () => {
    render(<Services />);
    expect(screen.getByRole('link', { name: /Learn more about Air & Ocean Freight/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /Learn more about Cold Chain Logistics/i })).toBeInTheDocument();
  });

  it('links Learn more about air freight to correct slug', () => {
    render(<Services />);
    const link = screen.getByRole('link', { name: /Learn more about Air & Ocean Freight/i });
    expect(link).toHaveAttribute('href', '/services/air-ocean-freight');
  });

  it('renders "Our Capabilities" eyebrow', () => {
    render(<Services />);
    expect(screen.getByText('Our Capabilities')).toBeInTheDocument();
  });

  it('renders the section subtitle', () => {
    render(<Services />);
    expect(screen.getByText(/From factory floor to final door/i)).toBeInTheDocument();
  });

  it('has correct section aria-labelledby', () => {
    render(<Services />);
    const section = document.querySelector('section[aria-labelledby="services-heading"]');
    expect(section).toBeInTheDocument();
  });
});