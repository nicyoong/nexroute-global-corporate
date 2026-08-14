import { render, screen } from '@testing-library/react';
import Home from '@/app/page';

describe('Home Page', () => {
  it('renders all top-level components', () => {
    render(<Home />);
    expect(document.body.children.length).toBeGreaterThan(0);
  });

  it('renders TopBar component content', () => {
    render(<Home />);
    expect(screen.getByText(/Serving 40\+ countries/i)).toBeInTheDocument();
  });

  it('renders Navbar component content', () => {
    render(<Home />);
    const nav = document.querySelector('nav[aria-label="Main navigation"]');
    expect(nav?.querySelector('a[href="/services"]')).toBeInTheDocument();
  });

  it('renders Hero component content', () => {
    render(<Home />);
    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument();
  });

  it('renders Services component content', () => {
    render(<Home />);
    expect(screen.getByRole('heading', { name: /Comprehensive Logistics Solutions/i })).toBeInTheDocument();
  });

  it('renders Stats component content', () => {
    render(<Home />);
    expect(screen.getByText('12M+')).toBeInTheDocument();
  });

  it('renders Industries component content', () => {
    render(<Home />);
    expect(screen.getByText('Manufacturing')).toBeInTheDocument();
  });

  it('renders Testimonials component content', () => {
    render(<Home />);
    expect(screen.getByText('Margaret Chen')).toBeInTheDocument();
  });

  it('renders CTA component content', () => {
    render(<Home />);
    expect(screen.getByRole('heading', { name: /Ready to de-risk your supply chain\?/i })).toBeInTheDocument();
  });

  it('renders Footer component content', () => {
    render(<Home />);
    expect(screen.getByText('NexRoute Global Inc.')).toBeInTheDocument();
  });
});