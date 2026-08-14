import { render, screen } from '@testing-library/react';
import Stats from '@/components/sections/Stats';

describe('Stats', () => {
  it('renders all four stats', () => {
    render(<Stats />);
    expect(screen.getByText('120+')).toBeInTheDocument();
    expect(screen.getByText('2,400+')).toBeInTheDocument();
    expect(screen.getByText('98.7%')).toBeInTheDocument();
    expect(screen.getByText('15M+')).toBeInTheDocument();
  });

  it('renders all stat labels', () => {
    render(<Stats />);
    expect(screen.getByText('Countries Served')).toBeInTheDocument();
    expect(screen.getByText('Enterprise Clients')).toBeInTheDocument();
    expect(screen.getByText('On-Time Delivery')).toBeInTheDocument();
    expect(screen.getByText('Shipments Annually')).toBeInTheDocument();
  });

  it('renders all stat descriptions', () => {
    render(<Stats />);
    expect(screen.getByText('Across six continents')).toBeInTheDocument();
    expect(screen.getByText('Trusted by industry leaders')).toBeInTheDocument();
    expect(screen.getByText('Industry-leading reliability')).toBeInTheDocument();
    expect(screen.getByText('Moving goods worldwide')).toBeInTheDocument();
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

  it('renders 4 stat groups', () => {
    render(<Stats />);
    const groups = document.querySelectorAll('[role="group"]');
    expect(groups).toHaveLength(4);
  });

  it('each stat group has correct aria-label', () => {
    render(<Stats />);
    const groups = document.querySelectorAll('[role="group"]');
    expect(groups[0]).toHaveAttribute('aria-label', 'Countries Served: 120+');
    expect(groups[1]).toHaveAttribute('aria-label', 'Enterprise Clients: 2,400+');
    expect(groups[2]).toHaveAttribute('aria-label', 'On-Time Delivery: 98.7%');
    expect(groups[3]).toHaveAttribute('aria-label', 'Shipments Annually: 15M+');
  });

  it('has bg-primary class on section', () => {
    const { container } = render(<Stats />);
    const section = container.querySelector('section');
    expect(section).toHaveClass('bg-primary');
  });
});
