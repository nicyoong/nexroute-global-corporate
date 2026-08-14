import { render, screen } from '@testing-library/react';
import GlobalNetwork from '@/components/sections/GlobalNetwork';

describe('GlobalNetwork', () => {
  it('renders the section heading', () => {
    render(<GlobalNetwork />);
    expect(screen.getByRole('heading', { level: 2, name: /four regional hubs/i })).toBeInTheDocument();
  });

  it('renders the Global Network eyebrow', () => {
    render(<GlobalNetwork />);
    expect(screen.getByText('Global Network')).toBeInTheDocument();
  });

  it('renders all four hub regions', () => {
    render(<GlobalNetwork />);
    expect(screen.getByText('North America')).toBeInTheDocument();
    expect(screen.getByText('Europe')).toBeInTheDocument();
    expect(screen.getByText('Asia Pacific')).toBeInTheDocument();
    expect(screen.getByText('Middle East')).toBeInTheDocument();
  });

  it('renders hub cities', () => {
    render(<GlobalNetwork />);
    expect(screen.getByText('Los Angeles, CA')).toBeInTheDocument();
    expect(screen.getByText('Rotterdam, Netherlands')).toBeInTheDocument();
    expect(screen.getByText('Singapore')).toBeInTheDocument();
    expect(screen.getByText('Jebel Ali, UAE')).toBeInTheDocument();
  });

  it('renders hub throughput information', () => {
    render(<GlobalNetwork />);
    // Throughput is combined with "annual throughput" text
    expect(screen.getByText(/2\.4M TEU\/yr annual throughput/i)).toBeInTheDocument();
    expect(screen.getByText(/3\.1M TEU\/yr annual throughput/i)).toBeInTheDocument();
    expect(screen.getByText(/2\.8M TEU\/yr annual throughput/i)).toBeInTheDocument();
    expect(screen.getByText(/1\.6M TEU\/yr annual throughput/i)).toBeInTheDocument();
  });

  it('has correct section aria-labelledby', () => {
    render(<GlobalNetwork />);
    const section = document.querySelector('section[aria-labelledby="network-heading"]');
    expect(section).toBeInTheDocument();
  });

  it('renders SVG map with hub markers', () => {
    render(<GlobalNetwork />);
    const svg = document.querySelector('svg');
    expect(svg).toBeInTheDocument();
    // Check for animated circles (hub markers)
    const circles = document.querySelectorAll('circle');
    expect(circles.length).toBeGreaterThan(0);
  });

  it('renders hub description paragraph', () => {
    render(<GlobalNetwork />);
    expect(screen.getByText(/multi-modal interchange/i)).toBeInTheDocument();
  });

  it('has bg-white class on section', () => {
    const { container } = render(<GlobalNetwork />);
    const section = container.querySelector('section');
    expect(section).toHaveClass('bg-white');
  });

  it('renders 4 hub cards', () => {
    render(<GlobalNetwork />);
    // Each hub card contains region + city + throughput
    const cards = document.querySelectorAll('[class*="bg-surface"]');
    expect(cards.length).toBeGreaterThanOrEqual(4);
  });
});