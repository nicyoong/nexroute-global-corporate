import { render, screen } from '@testing-library/react';
import CTA from '@/components/sections/CTA';

describe('CTA', () => {
  it('renders the main heading', () => {
    render(<CTA />);
    expect(screen.getByRole('heading', { level: 2 })).toBeInTheDocument();
  });

  it('renders the CTA description paragraph', () => {
    render(<CTA />);
    expect(screen.getByText(/Whether you need a single route quote/i)).toBeInTheDocument();
  });

  it('renders Request a Custom Quote button', () => {
    render(<CTA />);
    expect(screen.getByRole('link', { name: /Request a Custom Quote/i })).toBeInTheDocument();
  });

  it('renders Learn About NexRoute button', () => {
    render(<CTA />);
    // The button has visible text "Learn About NexRoute" and aria-label "Learn About Our Company"
    // getByRole with name matches accessible name (aria-label takes precedence)
    const learnBtn = screen.getByRole('link', { name: /Learn About Our Company/i });
    expect(learnBtn).toBeInTheDocument();
  });

  it('links Request a Custom Quote to /contact', () => {
    render(<CTA />);
    const requestBtn = screen.getByRole('link', { name: /Request a Custom Quote/i });
    expect(requestBtn).toHaveAttribute('href', '/contact');
  });

  it('links Learn About NexRoute to /about', () => {
    render(<CTA />);
    const learnBtn = screen.getByRole('link', { name: /Learn About Our Company/i });
    expect(learnBtn).toHaveAttribute('href', '/about');
  });

  it('renders the response time notice', () => {
    render(<CTA />);
    expect(screen.getByText(/No commitment required/i)).toBeInTheDocument();
    expect(screen.getByText(/logistics specialists respond within 2 business hours/i)).toBeInTheDocument();
  });

  it('has correct section aria-labelledby', () => {
    render(<CTA />);
    const section = document.querySelector('section[aria-labelledby="cta-heading"]');
    expect(section).toBeInTheDocument();
  });

  it('has bg-primary class on section', () => {
    const { container } = render(<CTA />);
    const section = container.querySelector('section');
    expect(section).toHaveClass('bg-primary');
  });
});
