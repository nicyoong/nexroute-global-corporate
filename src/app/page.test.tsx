import { render, screen } from '@testing-library/react';
import Home from '@/app/page';

describe('Home Page', () => {
  it('renders all top-level components', () => {
    render(<Home />);
    expect(document.body.children.length).toBeGreaterThan(0);
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

  it('renders ClientLogos', () => {
    render(<Home />);
    expect(screen.getByText(/Trusted by leading global brands/i)).toBeInTheDocument();
  });

  it('renders GlobalNetwork', () => {
    render(<Home />);
    expect(screen.getByText('North America')).toBeInTheDocument();
  });

  it('renders HowItWorks', () => {
    render(<Home />);
    expect(screen.getByText('Request a Quote')).toBeInTheDocument();
  });
});
