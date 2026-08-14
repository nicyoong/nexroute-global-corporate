import { render, screen } from '@testing-library/react';
import Stats from '@/components/sections/Stats';

describe('Stats', () => {
  it('renders all four stats', () => {
    render(<Stats />);
    expect(screen.getByText('12M+')).toBeInTheDocument();
    expect(screen.getByText('99.2%')).toBeInTheDocument();
    expect(screen.getByText('40+')).toBeInTheDocument();
    expect(screen.getByText('24/7')).toBeInTheDocument();
  });

  it('renders all stat labels', () => {
    render(<Stats />);
    expect(screen.getByText('Shipments Per Year')).toBeInTheDocument();
    expect(screen.getByText('On-Time Delivery Rate')).toBeInTheDocument();
    expect(screen.getByText('Countries Served')).toBeInTheDocument();
    expect(screen.getByText('Global Control Tower')).toBeInTheDocument();
  });

  it('has a screen-reader-only heading', () => {
    render(<Stats />);
    const heading = screen.getByText('Company Statistics');
    expect(heading).toHaveClass('sr-only');
  });

  it('has correct section aria-labelledby', () => {
    render(<Stats />);
    const section = document.querySelector('section[aria-labelledby="stats-heading"]');
    expect(section).toBeInTheDocument();
  });

  it('renders 4 stat items', () => {
    render(<Stats />);
    const statItems = document.querySelectorAll('[class*="font-display"]');
    expect(statItems.length).toBeGreaterThanOrEqual(4);
  });

  it('has bg-primary class on section', () => {
    const { container } = render(<Stats />);
    const section = container.querySelector('section');
    expect(section).toHaveClass('bg-primary');
  });
});