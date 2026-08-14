import { render, screen, fireEvent } from '@testing-library/react';
import ChargeableWeightCalculator from '@/components/sections/ChargeableWeightCalculator';

describe('ChargeableWeightCalculator', () => {
  it('renders the component with input fields', () => {
    render(<ChargeableWeightCalculator />);
    expect(screen.getByLabelText(/Length/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Width/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Height/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Weight/i)).toBeInTheDocument();
  });

  it('renders calculate button', () => {
    render(<ChargeableWeightCalculator />);
    expect(screen.getByRole('button', { name: /Calculate/i })).toBeInTheDocument();
  });

  it('calculates and shows result when values are provided', () => {
    render(<ChargeableWeightCalculator />);
    fireEvent.change(screen.getByLabelText(/Length/i), { target: { value: '100' } });
    fireEvent.change(screen.getByLabelText(/Width/i), { target: { value: '50' } });
    fireEvent.change(screen.getByLabelText(/Height/i), { target: { value: '50' } });
    fireEvent.change(screen.getByLabelText(/Weight/i), { target: { value: '100' } });
    fireEvent.click(screen.getByRole('button', { name: /Calculate/i }));

    expect(document.querySelector('[class*="bg-primary"]')).toBeInTheDocument();
  });

  it('renders without crashing on empty calculate', () => {
    render(<ChargeableWeightCalculator />);
    fireEvent.click(screen.getByRole('button', { name: /Calculate/i }));
    expect(screen.getByRole('button', { name: /Calculate/i })).toBeInTheDocument();
  });

  it('renders without crashing on invalid values', () => {
    render(<ChargeableWeightCalculator />);
    fireEvent.change(screen.getByLabelText(/Length/i), { target: { value: '-10' } });
    fireEvent.change(screen.getByLabelText(/Width/i), { target: { value: '50' } });
    fireEvent.change(screen.getByLabelText(/Height/i), { target: { value: '50' } });
    fireEvent.change(screen.getByLabelText(/Weight/i), { target: { value: '100' } });
    fireEvent.click(screen.getByRole('button', { name: /Calculate/i }));
    expect(screen.getByRole('button', { name: /Calculate/i })).toBeInTheDocument();
  });
});
