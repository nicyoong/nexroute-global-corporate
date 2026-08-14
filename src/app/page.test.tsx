import { render, screen } from '@testing-library/react';
import Home from '@/app/page';

describe('Home Page', () => {
  it('renders all top-level components', () => {
    render(<Home />);
    expect(document.body.children.length).toBeGreaterThan(0);
  });

  it('renders TopBar component content', () => {
    render(<Home />);
    // TopBar has the ISO certification text that also appears in Footer - use the tagline
    expect(screen.getByText('Serving 120+ countries · 24/7 Operations Center')).toBeInTheDocument();
  });

  it('renders Navbar component content', () => {
    render(<Home />);
    // Navbar has Services nav link in the main nav
    const nav = document.querySelector('nav[aria-label="Main navigation"]');
    expect(nav?.querySelector('a[href="/services"]')).toBeInTheDocument();
  });

  it('renders Hero component content', () => {
    render(<Home />);
    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument();
  });

  it('renders Services component content', () => {
    render(<Home />);
    // Services section heading
    expect(screen.getByRole('heading', { name: /comprehensive logistics solutions/i })).toBeInTheDocument();
  });

  it('renders Stats component content', () => {
    render(<Home />);
    expect(screen.getByText('120+')).toBeInTheDocument();
  });

  it('renders Industries component content', () => {
    render(<Home />);
    expect(screen.getByText('Healthcare & Pharmaceuticals')).toBeInTheDocument();
  });

  it('renders Testimonials component content', () => {
    render(<Home />);
    expect(screen.getByText('Margaret Chen')).toBeInTheDocument();
  });

  it('renders CTA component content', () => {
    render(<Home />);
    // CTA has a unique heading text
    expect(screen.getByRole('heading', { name: /ready to optimize/i })).toBeInTheDocument();
  });

  it('renders Footer component content', () => {
    render(<Home />);
    expect(screen.getByText('NexRoute Global Inc.')).toBeInTheDocument();
  });
});
