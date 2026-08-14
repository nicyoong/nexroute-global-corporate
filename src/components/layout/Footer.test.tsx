import { render, screen } from '@testing-library/react';
import Footer from '@/components/layout/Footer';

describe('Footer', () => {
  it('renders the NexRoute Global logo', () => {
    render(<Footer />);
    // Logo appears in the footer section, find by heading or link
    const logos = document.querySelectorAll('a[aria-label*="homepage"]');
    expect(logos.length).toBeGreaterThan(0);
  });

  it('links the logo to the homepage', () => {
    render(<Footer />);
    const logoLink = screen.getByRole('link', { name: /nexroute global homepage/i });
    expect(logoLink).toHaveAttribute('href', '/');
  });

  it('renders company description', () => {
    render(<Footer />);
    expect(screen.getByText(/NexRoute Global is a leading provider/i)).toBeInTheDocument();
  });

  it('renders footer navigation links by category', () => {
    render(<Footer />);
    expect(screen.getByText('Services')).toBeInTheDocument();
    expect(screen.getByText('Resources')).toBeInTheDocument();
  });

  it('renders Air & Ocean Freight link', () => {
    render(<Footer />);
    expect(screen.getByRole('link', { name: 'Air & Ocean Freight' })).toBeInTheDocument();
  });

  it('renders Warehousing & Fulfillment link', () => {
    render(<Footer />);
    expect(screen.getByRole('link', { name: 'Warehousing & Fulfillment' })).toBeInTheDocument();
  });

  it('renders all resource links', () => {
    render(<Footer />);
    expect(screen.getByRole('link', { name: 'Industry Insights' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Track a Shipment' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'FAQs' })).toBeInTheDocument();
  });

  it('renders contact information', () => {
    render(<Footer />);
    expect(screen.getByText('NexRoute Global Inc.')).toBeInTheDocument();
    expect(screen.getByText('1200 Harbor Gateway Blvd, Suite 400')).toBeInTheDocument();
    expect(screen.getByText('Los Angeles, CA 90710')).toBeInTheDocument();
  });

  it('renders phone link in contact', () => {
    render(<Footer />);
    const phoneLink = screen.getByRole('link', { name: '+1 (800) 555-ROUTE' });
    expect(phoneLink).toHaveAttribute('href', 'tel:+18005557688');
  });

  it('renders email link in contact', () => {
    render(<Footer />);
    const emailLink = screen.getByRole('link', { name: 'operations@nexrouteglobal.com' });
    expect(emailLink).toHaveAttribute('href', 'mailto:operations@nexrouteglobal.com');
  });

  it('renders Get in Touch button', () => {
    render(<Footer />);
    expect(screen.getByRole('link', { name: /Get in touch/i })).toBeInTheDocument();
  });

  it('renders social media links', () => {
    render(<Footer />);
    expect(screen.getByRole('link', { name: /follow us on linkedin/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /follow us on twitter/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /follow us on youtube/i })).toBeInTheDocument();
  });

  it('social media links open in new tab with noopener', () => {
    render(<Footer />);
    const linkedinLink = screen.getByRole('link', { name: /follow us on linkedin/i });
    expect(linkedinLink).toHaveAttribute('target', '_blank');
    expect(linkedinLink).toHaveAttribute('rel', 'noopener noreferrer');
  });

  it('renders certification badges', () => {
    render(<Footer />);
    expect(screen.getByText('ISO 9001:2015')).toBeInTheDocument();
    expect(screen.getByText('ISO 14001:2015')).toBeInTheDocument();
    expect(screen.getByText('AEO Certified')).toBeInTheDocument();
    expect(screen.getByText('C-TPAT')).toBeInTheDocument();
    expect(screen.getByText('GDP Compliant')).toBeInTheDocument();
  });

  it('renders newsletter subscription form', () => {
    render(<Footer />);
    expect(screen.getByLabelText('Email address')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /subscribe/i })).toBeInTheDocument();
  });

  it('newsletter input has type="email"', () => {
    render(<Footer />);
    const input = document.querySelector('input[type="email"]');
    expect(input).toBeInTheDocument();
  });

  it('newsletter input exists', () => {
    render(<Footer />);
    const input = document.querySelector('input[type="email"]');
    expect(input).toBeInTheDocument();
  });

  it('renders copyright with current year', () => {
    const currentYear = new Date().getFullYear();
    render(<Footer />);
    expect(screen.getByText(new RegExp(`© ${currentYear} NexRoute Global`))).toBeInTheDocument();
  });

  it('renders footer links', () => {
    render(<Footer />);
    expect(screen.getByRole('link', { name: 'Privacy Policy' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Terms of Service' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Accessibility' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Sitemap' })).toBeInTheDocument();
  });

  it('has role="contentinfo"', () => {
    const { container } = render(<Footer />);
    const footer = container.querySelector('footer');
    expect(footer).toHaveAttribute('role', 'contentinfo');
  });

  it('has correct aria-label on footer', () => {
    const { container } = render(<Footer />);
    const footer = container.querySelector('footer');
    expect(footer).toHaveAttribute('aria-label', 'Site footer');
  });
});
