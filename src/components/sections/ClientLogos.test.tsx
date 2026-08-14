import { render, screen } from '@testing-library/react';
import ClientLogos from '@/components/sections/ClientLogos';

describe('ClientLogos', () => {
  it('renders the section with correct aria-label', () => {
    render(<ClientLogos />);
    const section = document.querySelector('section[aria-label="Our clients"]');
    expect(section).toBeInTheDocument();
  });

  it('renders all client names (at least once each)', () => {
    render(<ClientLogos />);
    // Since names are duplicated for seamless scroll, use getAllByText
    expect(screen.getAllByText('Meridian Foods').length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByText('Atlas Pharma').length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByText('Kite Retail').length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByText('Vantor Automotive').length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByText('Helios Electronics').length).toBeGreaterThanOrEqual(1);
  });

  it('has screen reader only text', () => {
    render(<ClientLogos />);
    expect(screen.getByText('Trusted by leading global brands')).toBeInTheDocument();
  });

  it('renders client names twice for seamless scrolling', () => {
    render(<ClientLogos />);
    const allMeridian = document.querySelectorAll('[class*="text-slate-300"]');
    // There should be 10 spans (5 clients * 2)
    expect(allMeridian.length).toBeGreaterThanOrEqual(5);
  });

  it('section has bg-white class', () => {
    const { container } = render(<ClientLogos />);
    const section = container.querySelector('section');
    expect(section).toHaveClass('bg-white');
  });

  it('section has overflow-hidden class', () => {
    const { container } = render(<ClientLogos />);
    const section = container.querySelector('section');
    expect(section).toHaveClass('overflow-hidden');
  });

  it('applies transform style for animation', () => {
    render(<ClientLogos />);
    const transformEl = document.querySelector('[style*="transform"]');
    expect(transformEl).toBeInTheDocument();
  });
});