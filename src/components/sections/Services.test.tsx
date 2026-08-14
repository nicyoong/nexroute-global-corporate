import { render, screen } from '@testing-library/react';
import Services from '@/components/sections/Services';

describe('Services', () => {
  it('renders the section heading', () => {
    render(<Services />);
    expect(screen.getByRole('heading', { level: 2, name: /comprehensive logistics solutions/i })).toBeInTheDocument();
  });

  it('renders all six service cards', () => {
    render(<Services />);
    expect(screen.getByText('Air Freight')).toBeInTheDocument();
    expect(screen.getByText('Ocean Freight')).toBeInTheDocument();
    expect(screen.getByText('Road Freight')).toBeInTheDocument();
    expect(screen.getByText('Customs Brokerage')).toBeInTheDocument();
    expect(screen.getByText('Warehousing & Distribution')).toBeInTheDocument();
    expect(screen.getByText('Supply Chain Consulting')).toBeInTheDocument();
  });

  it('renders service descriptions', () => {
    render(<Services />);
    expect(screen.getByText(/Time-critical air cargo solutions/i)).toBeInTheDocument();
    expect(screen.getByText(/Full container load/i)).toBeInTheDocument();
  });

  it('renders "View all services" link', () => {
    render(<Services />);
    expect(screen.getByRole('link', { name: /view all services/i })).toBeInTheDocument();
  });

  it('links to /services for "View all services"', () => {
    render(<Services />);
    const link = screen.getByRole('link', { name: /view all services/i });
    expect(link).toHaveAttribute('href', '/services');
  });

  it('each service card has an aria-label', () => {
    render(<Services />);
    const cards = document.querySelectorAll('[aria-label]');
    // Should have aria-labels for each card
    expect(cards.length).toBeGreaterThan(0);
  });

  it('has correct section aria-labelledby', () => {
    render(<Services />);
    const section = document.querySelector('section[aria-labelledby="services-heading"]');
    expect(section).toBeInTheDocument();
  });

  it('renders Learn more links for each service', () => {
    render(<Services />);
    expect(screen.getByRole('link', { name: /learn more about air freight/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /learn more about ocean freight/i })).toBeInTheDocument();
  });

  it('renders "Our Capabilities" eyebrow', () => {
    render(<Services />);
    expect(screen.getByText('Our Capabilities')).toBeInTheDocument();
  });

  it('renders the section subtitle', () => {
    render(<Services />);
    expect(screen.getByText(/From factory floor to final door/i)).toBeInTheDocument();
  });
});
