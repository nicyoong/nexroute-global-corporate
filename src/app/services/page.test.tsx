import { render, screen } from '@testing-library/react';
import ServicesPage from '@/app/services/page';

describe('ServicesPage', () => {
  it('renders the page heading', () => {
    render(<ServicesPage />);
    expect(screen.getByRole('heading', { level: 1, name: /Our Services/i })).toBeInTheDocument();
  });

  it('renders the page description', () => {
    render(<ServicesPage />);
    expect(screen.getByText(/Comprehensive logistics solutions designed for the complexities/i)).toBeInTheDocument();
  });

  it('renders all six service cards', () => {
    render(<ServicesPage />);
    expect(screen.getByRole('heading', { name: /Air & Ocean Freight/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /Warehousing & Fulfillment/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /Customs Brokerage/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /Last-Mile Delivery/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /Cold Chain Logistics/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /Supply Chain Consulting/i })).toBeInTheDocument();
  });

  it('links each service card to its detail page', () => {
    render(<ServicesPage />);
    const link = screen.getByRole('link', { name: /Learn more about Air & Ocean Freight/i });
    expect(link).toHaveAttribute('href', '/services/air-ocean-freight');
  });

  it('links Warehousing to correct slug', () => {
    render(<ServicesPage />);
    const link = screen.getByRole('link', { name: /Learn more about Warehousing & Fulfillment/i });
    expect(link).toHaveAttribute('href', '/services/warehousing-fulfillment');
  });

  it('links Customs Brokerage to correct slug', () => {
    render(<ServicesPage />);
    const link = screen.getByRole('link', { name: /Learn more about Customs Brokerage/i });
    expect(link).toHaveAttribute('href', '/services/customs-brokerage');
  });

  it('links Last-Mile Delivery to correct slug', () => {
    render(<ServicesPage />);
    const link = screen.getByRole('link', { name: /Learn more about Last-Mile Delivery/i });
    expect(link).toHaveAttribute('href', '/services/last-mile-delivery');
  });

  it('links Cold Chain to correct slug', () => {
    render(<ServicesPage />);
    const link = screen.getByRole('link', { name: /Learn more about Cold Chain Logistics/i });
    expect(link).toHaveAttribute('href', '/services/cold-chain');
  });

  it('links Consulting to correct slug', () => {
    render(<ServicesPage />);
    const link = screen.getByRole('link', { name: /Learn more about Supply Chain Consulting/i });
    expect(link).toHaveAttribute('href', '/services/consulting');
  });

  it('renders breadcrumb navigation', () => {
    render(<ServicesPage />);
    const breadcrumb = document.querySelector('nav[aria-label="Breadcrumb"]');
    expect(breadcrumb).toBeInTheDocument();
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getAllByText('Services').length).toBeGreaterThan(0);
  });

  it('renders main content with id="main-content"', () => {
    render(<ServicesPage />);
    const main = document.querySelector('main[id="main-content"]');
    expect(main).toBeInTheDocument();
  });

  it('renders all service descriptions', () => {
    render(<ServicesPage />);
    expect(screen.getByText(/Full-container, less-than-container, and air charter/i)).toBeInTheDocument();
    expect(screen.getByText(/Strategic warehouse space with pick, pack, ship/i)).toBeInTheDocument();
  });

  it('renders "Learn more" links for all services', () => {
    render(<ServicesPage />);
    const learnMoreLinks = screen.getAllByRole('link', { name: /Learn more/ });
    expect(learnMoreLinks).toHaveLength(6);
  });

  it('renders each service card', () => {
    render(<ServicesPage />);
    const cards = document.querySelectorAll('[class*="rounded-xl"]');
    expect(cards).toHaveLength(6);
  });
});
