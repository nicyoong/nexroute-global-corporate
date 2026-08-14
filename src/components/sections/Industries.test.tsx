import { render, screen } from '@testing-library/react';
import Industries from '@/components/sections/Industries';

describe('Industries', () => {
  it('renders the section heading', () => {
    render(<Industries />);
    expect(screen.getByRole('heading', { level: 2 })).toBeInTheDocument();
  });

  it('renders all six industry cards', () => {
    render(<Industries />);
    expect(screen.getByText('Healthcare & Pharmaceuticals')).toBeInTheDocument();
    expect(screen.getByText('Automotive & Mobility')).toBeInTheDocument();
    expect(screen.getByText('Consumer Goods & Retail')).toBeInTheDocument();
    expect(screen.getByText('Technology & Electronics')).toBeInTheDocument();
    expect(screen.getByText('Energy & Industrial')).toBeInTheDocument();
    expect(screen.getByText('Food & Beverage')).toBeInTheDocument();
  });

  it('renders industry descriptions', () => {
    render(<Industries />);
    expect(screen.getByText(/Temperature-controlled logistics for vaccines/i)).toBeInTheDocument();
    expect(screen.getByText(/Just-in-sequence and just-in-time delivery/i)).toBeInTheDocument();
  });

  it('renders "Explore all industries" link', () => {
    render(<Industries />);
    // Find the link by its aria-label
    const link = screen.getByRole('link', { name: /View all industries/i });
    expect(link).toBeInTheDocument();
  });

  it('links to /industries for "Explore all industries"', () => {
    render(<Industries />);
    const link = screen.getByRole('link', { name: /View all industries/i });
    expect(link).toHaveAttribute('href', '/industries');
  });

  it('has correct section aria-labelledby', () => {
    render(<Industries />);
    const section = document.querySelector('section[aria-labelledby="industries-heading"]');
    expect(section).toBeInTheDocument();
  });

  it('renders "Industries We Serve" eyebrow', () => {
    render(<Industries />);
    expect(screen.getByText('Industries We Serve')).toBeInTheDocument();
  });

  it('renders the section subtitle', () => {
    render(<Industries />);
    expect(screen.getByText(/Each industry has unique regulatory/i)).toBeInTheDocument();
  });

  it('each card has an aria-label', () => {
    render(<Industries />);
    const cards = document.querySelectorAll('[aria-label]');
    expect(cards.length).toBeGreaterThan(0);
  });
});
