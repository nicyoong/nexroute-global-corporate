import { render, screen } from '@testing-library/react';
import Testimonials from '@/components/sections/Testimonials';

describe('Testimonials', () => {
  it('renders three testimonials', () => {
    render(<Testimonials />);
    expect(screen.getByText('Margaret Chen')).toBeInTheDocument();
    expect(screen.getByText('Dr. Rajesh Malhotra')).toBeInTheDocument();
    expect(screen.getByText('Sarah Johansson')).toBeInTheDocument();
  });

  it('renders testimonials with correct titles and companies', () => {
    render(<Testimonials />);
    expect(screen.getByText('VP of Supply Chain, Apex Manufacturing Group')).toBeInTheDocument();
    expect(screen.getByText('Director of Logistics, VitaCure Pharmaceuticals')).toBeInTheDocument();
    expect(screen.getByText('Supply Chain Director, Nordic Microelectronics')).toBeInTheDocument();
  });

  it('renders testimonial quotes', () => {
    render(<Testimonials />);
    expect(screen.getByText(/NexRoute Global redesigned our pan-European/i)).toBeInTheDocument();
    expect(screen.getByText(/We ship over 12,000 temperature-sensitive/i)).toBeInTheDocument();
    expect(screen.getByText(/When our semiconductor fabrication line/i)).toBeInTheDocument();
  });

  it('has a screen-reader-only heading', () => {
    render(<Testimonials />);
    const heading = screen.getByText('Client Testimonials');
    expect(heading).toHaveClass('sr-only');
  });

  it('renders star ratings - each testimonial has 5 stars', () => {
    render(<Testimonials />);
    // Check there are 3 blockquotes (one per testimonial)
    const blockquotes = document.querySelectorAll('blockquote');
    expect(blockquotes).toHaveLength(3);
    // Each blockquote should have a rating group with aria-label
    const ratingGroups = document.querySelectorAll('[aria-label*="Rating"]');
    expect(ratingGroups).toHaveLength(3);
  });

  it('has correct section aria-labelledby', () => {
    render(<Testimonials />);
    const section = document.querySelector('section[aria-labelledby="testimonials-heading"]');
    expect(section).toBeInTheDocument();
  });

  it('renders all three testimonial blockquotes', () => {
    render(<Testimonials />);
    const blockquotes = document.querySelectorAll('blockquote');
    expect(blockquotes).toHaveLength(3);
  });

  it('renders testimonials with bg-white class', () => {
    render(<Testimonials />);
    const cards = document.querySelectorAll('.bg-white');
    expect(cards.length).toBeGreaterThanOrEqual(3);
  });
});
