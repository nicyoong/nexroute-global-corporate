import { render, screen } from '@testing-library/react';
import HowItWorks from '@/components/sections/HowItWorks';

describe('HowItWorks', () => {
  it('renders the section heading', () => {
    render(<HowItWorks />);
    expect(screen.getByRole('heading', { level: 2, name: /from inquiry to delivery in four steps/i })).toBeInTheDocument();
  });

  it('renders the How It Works eyebrow', () => {
    render(<HowItWorks />);
    expect(screen.getByText('How It Works')).toBeInTheDocument();
  });

  it('renders all four steps', () => {
    render(<HowItWorks />);
    expect(screen.getByText('Request a Quote')).toBeInTheDocument();
    expect(screen.getByText('Book & Confirm')).toBeInTheDocument();
    expect(screen.getByText('Track in Real Time')).toBeInTheDocument();
    expect(screen.getByText('Deliver & Document')).toBeInTheDocument();
  });

  it('renders step numbers', () => {
    render(<HowItWorks />);
    expect(screen.getByText('01')).toBeInTheDocument();
    expect(screen.getByText('02')).toBeInTheDocument();
    expect(screen.getByText('03')).toBeInTheDocument();
    expect(screen.getByText('04')).toBeInTheDocument();
  });

  it('renders step descriptions', () => {
    render(<HowItWorks />);
    expect(screen.getByText(/Our team responds within 2 business hours/i)).toBeInTheDocument();
    expect(screen.getByText(/We handle documentation, carrier booking, and compliance/i)).toBeInTheDocument();
  });

  it('has correct section aria-labelledby', () => {
    render(<HowItWorks />);
    const section = document.querySelector('section[aria-labelledby="how-it-works-heading"]');
    expect(section).toBeInTheDocument();
  });

  it('has bg-primary class on section', () => {
    const { container } = render(<HowItWorks />);
    const section = container.querySelector('section');
    expect(section).toHaveClass('bg-primary');
  });

  it('renders 4 step items', () => {
    render(<HowItWorks />);
    // Each step has a step number, title, and description
    const steps = document.querySelectorAll('[class*="font-display"]');
    expect(steps.length).toBeGreaterThanOrEqual(4);
  });
});