import { render, screen } from '@testing-library/react';
import Industries from '@/components/sections/Industries';

describe('Industries', () => {
  it('renders the section heading', () => {
    render(<Industries />);
    expect(screen.getByRole('heading', { level: 2, name: /Sector-Specialized Logistics/i })).toBeInTheDocument();
  });

  it('renders all four industry cards', () => {
    render(<Industries />);
    expect(screen.getByText('Manufacturing')).toBeInTheDocument();
    expect(screen.getByText('Healthcare')).toBeInTheDocument();
    expect(screen.getByText('Retail & E-Commerce')).toBeInTheDocument();
    expect(screen.getByText('Automotive')).toBeInTheDocument();
  });

  it('renders industry descriptions', () => {
    render(<Industries />);
    expect(screen.getByText(/Just-in-sequence parts delivery/i)).toBeInTheDocument();
    expect(screen.getByText(/GDP-compliant cold chain/i)).toBeInTheDocument();
  });

  it('renders "Industries We Serve" eyebrow', () => {
    render(<Industries />);
    expect(screen.getByText('Industries We Serve')).toBeInTheDocument();
  });

  it('renders the section subtitle', () => {
    render(<Industries />);
    expect(screen.getByText(/Every industry has unique regulatory/i)).toBeInTheDocument();
  });

  it('has correct section aria-labelledby', () => {
    render(<Industries />);
    const section = document.querySelector('section[aria-labelledby="industries-heading"]');
    expect(section).toBeInTheDocument();
  });

  it('renders 4 industry cards', () => {
    render(<Industries />);
    const cards = document.querySelectorAll('[class*="bg-white"]');
    expect(cards).toHaveLength(4);
  });
});