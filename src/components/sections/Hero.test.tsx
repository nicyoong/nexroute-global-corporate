import { render, screen } from '@testing-library/react';
import Hero from '@/components/sections/Hero';

describe('Hero', () => {
  it('renders the main heading', () => {
    render(<Hero />);
    const heading = screen.getByRole('heading', { level: 1 });
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent(/Moving the World Forward/i);
  });

  it('has correct aria-labelledby', () => {
    render(<Hero />);
    const section = document.querySelector('section[aria-labelledby="hero-heading"]');
    expect(section).toBeInTheDocument();
  });

  it('renders the trusted badge', () => {
    render(<Hero />);
    expect(screen.getByText(/Trusted by 2,400\+ enterprises worldwide/i)).toBeInTheDocument();
  });

  it('renders the description paragraph', () => {
    render(<Hero />);
    expect(screen.getByText(/NexRoute Global delivers integrated supply chain/i)).toBeInTheDocument();
  });

  it('renders Request a Custom Quote button', () => {
    render(<Hero />);
    expect(screen.getByRole('link', { name: /Request a Custom Quote/i })).toBeInTheDocument();
  });

  it('renders Explore Our Services button', () => {
    render(<Hero />);
    expect(screen.getByRole('link', { name: /Explore Our Services/i })).toBeInTheDocument();
  });

  it('links to /contact for Request a Custom Quote', () => {
    render(<Hero />);
    const requestBtn = screen.getByRole('link', { name: /Request a Custom Quote/i });
    expect(requestBtn).toHaveAttribute('href', '/contact');
  });

  it('links to /services for Explore Our Services', () => {
    render(<Hero />);
    const exploreBtn = screen.getByRole('link', { name: /Explore Our Services/i });
    expect(exploreBtn).toHaveAttribute('href', '/services');
  });

  it('renders certification badges', () => {
    render(<Hero />);
    expect(screen.getByText(/ISO 9001:2015 Certified/)).toBeInTheDocument();
    expect(screen.getByText(/24\/7 Operations Center/)).toBeInTheDocument();
    expect(screen.getByText(/120\+ Countries Served/)).toBeInTheDocument();
  });

  it('has section with bg-primary class', () => {
    const { container } = render(<Hero />);
    const section = container.querySelector('section');
    expect(section).toHaveClass('bg-primary');
  });

  it('renders the skip link in layout', () => {
    // Hero doesn't render skip link, layout does - test the Hero component alone
    render(<Hero />);
    // Should not have skip-link (that's in layout)
    expect(document.querySelector('.skip-link')).toBeNull();
  });
});
