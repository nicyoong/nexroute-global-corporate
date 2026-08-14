import { render, screen } from '@testing-library/react';
import CTABand from '@/components/sections/CTABand';

describe('CTABand', () => {
  it('renders the main heading', () => {
    render(<CTABand />);
    expect(screen.getByRole('heading', { level: 2, name: /Ready to de-risk your supply chain\?/i })).toBeInTheDocument();
  });

  it('renders the CTA description paragraph', () => {
    render(<CTABand />);
    expect(screen.getByText(/Whether you need a single route quote/i)).toBeInTheDocument();
    expect(screen.getByText(/complete logistics overhaul/i)).toBeInTheDocument();
  });

  it('renders Request a Custom Quote button', () => {
    render(<CTABand />);
    expect(screen.getByRole('link', { name: /Request a Custom Quote/i })).toBeInTheDocument();
  });

  it('renders Learn About NexRoute button', () => {
    render(<CTABand />);
    expect(screen.getByRole('link', { name: /Learn About Our Company/i })).toBeInTheDocument();
  });

  it('links Request a Custom Quote to /contact', () => {
    render(<CTABand />);
    const requestBtn = screen.getByRole('link', { name: /Request a Custom Quote/i });
    expect(requestBtn).toHaveAttribute('href', '/contact');
  });

  it('links Learn About NexRoute to /about', () => {
    render(<CTABand />);
    const learnBtn = screen.getByRole('link', { name: /Learn About Our Company/i });
    expect(learnBtn).toHaveAttribute('href', '/about');
  });

  it('renders the response time notice', () => {
    render(<CTABand />);
    expect(screen.getByText(/No commitment required/i)).toBeInTheDocument();
    expect(screen.getByText(/logistics specialists respond within 2 business hours/i)).toBeInTheDocument();
  });

  it('has correct section aria-labelledby', () => {
    render(<CTABand />);
    const section = document.querySelector('section[aria-labelledby="cta-heading"]');
    expect(section).toBeInTheDocument();
  });

  it('has bg-primary class on section', () => {
    const { container } = render(<CTABand />);
    const section = container.querySelector('section');
    expect(section).toHaveClass('bg-primary');
  });

  it('has relative overflow-hidden on section', () => {
    const { container } = render(<CTABand />);
    const section = container.querySelector('section');
    expect(section).toHaveClass('overflow-hidden');
  });
});