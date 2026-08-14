import { render, screen } from '@testing-library/react';
import Hero from '@/components/sections/Hero';

describe('Hero', () => {
  it('renders the main heading', () => {
    render(<Hero />);
    const heading = screen.getByRole('heading', { level: 1 });
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent(/Freight that moves at the speed of your business/i);
  });

  it('has correct aria-labelledby', () => {
    render(<Hero />);
    const section = document.querySelector('section[aria-labelledby="hero-heading"]');
    expect(section).toBeInTheDocument();
  });

  it('renders the trusted badge', () => {
    render(<Hero />);
    // The text is split across span/strong elements, query by individual parts
    expect(screen.getByText(/300\+ enterprises/i)).toBeInTheDocument();
    expect(screen.getByText(/worldwide/i)).toBeInTheDocument();
  });

  it('renders the description paragraph', () => {
    render(<Hero />);
    expect(screen.getByText(/NexRoute Global connects 40\+ countries/i)).toBeInTheDocument();
  });

  it('renders Get a Quote button', () => {
    render(<Hero />);
    expect(screen.getByRole('link', { name: /Get a Quote/i })).toBeInTheDocument();
  });

  it('renders Track Shipment button', () => {
    render(<Hero />);
    expect(screen.getByRole('link', { name: /Track Shipment/i })).toBeInTheDocument();
  });

  it('links Get a Quote to /contact', () => {
    render(<Hero />);
    const requestBtn = screen.getByRole('link', { name: /Get a Quote/i });
    expect(requestBtn).toHaveAttribute('href', '/contact');
  });

  it('links Track Shipment to /track', () => {
    render(<Hero />);
    const trackBtn = screen.getByRole('link', { name: /Track Shipment/i });
    expect(trackBtn).toHaveAttribute('href', '/track');
  });

  it('renders the End-to-End Supply Chain Solutions eyebrow', () => {
    render(<Hero />);
    expect(screen.getByText(/End-to-End Supply Chain Solutions/i)).toBeInTheDocument();
  });

  it('has section with bg-primary class', () => {
    const { container } = render(<Hero />);
    const section = container.querySelector('section');
    expect(section).toHaveClass('bg-primary');
  });

  it('renders SVG map on the right side', () => {
    render(<Hero />);
    const svg = document.querySelector('svg');
    expect(svg).toBeInTheDocument();
  });

  it('renders the 24/7 Control Tower badge', () => {
    render(<Hero />);
    // Match the specific badge text (not the one in the paragraph)
    const badge = document.querySelector('.absolute');
    expect(badge).toBeInTheDocument();
    expect(badge?.textContent).toContain('24/7 Control Tower');
  });
});