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
    expect(screen.getByText('VP of Supply Chain, Meridian Foods International')).toBeInTheDocument();
    expect(screen.getByText('Director of Logistics, Atlas Pharma Group')).toBeInTheDocument();
    expect(screen.getByText('Supply Chain Director, Helios Electronics')).toBeInTheDocument();
  });

  it('renders testimonial quotes', () => {
    render(<Testimonials />);
    expect(screen.getByText(/NexRoute redesigned our pan-Asian distribution network/i)).toBeInTheDocument();
    expect(screen.getByText(/We ship over 12,000 temperature-sensitive/i)).toBeInTheDocument();
    expect(screen.getByText(/When our semiconductor fabrication line/i)).toBeInTheDocument();
  });

  it('renders 5-star ratings for each testimonial', () => {
    render(<Testimonials />);
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

  it('renders section title', () => {
    render(<Testimonials />);
    expect(screen.getByRole('heading', { level: 2, name: /Trusted by Supply Chain Leaders/i })).toBeInTheDocument();
  });
});