import { render, screen } from '@testing-library/react';
import Badge from '@/components/ui/Badge';

describe('Badge', () => {
  it('renders children content', () => {
    render(<Badge>Active</Badge>);
    expect(screen.getByText('Active')).toBeInTheDocument();
  });

  it('applies default variant classes', () => {
    const { container } = render(<Badge>Default</Badge>);
    const span = container.querySelector('span');
    expect(span).toHaveClass('bg-primary/10');
    expect(span).toHaveClass('text-primary');
  });

  it('applies accent variant classes', () => {
    const { container } = render(<Badge variant="accent">Accent</Badge>);
    const span = container.querySelector('span');
    expect(span).toHaveClass('bg-accent/10');
    expect(span).toHaveClass('text-accent-dark');
  });

  it('applies success variant classes', () => {
    const { container } = render(<Badge variant="success">Success</Badge>);
    const span = container.querySelector('span');
    expect(span).toHaveClass('bg-green-100');
    expect(span).toHaveClass('text-green-800');
  });

  it('applies outline variant classes', () => {
    const { container } = render(<Badge variant="outline">Outline</Badge>);
    const span = container.querySelector('span');
    expect(span).toHaveClass('border');
    expect(span).toHaveClass('border-primary/20');
  });

  it('defaults to default variant', () => {
    const { container } = render(<Badge>No Variant</Badge>);
    const span = container.querySelector('span');
    expect(span).toHaveClass('bg-primary/10');
  });

  it('applies custom className', () => {
    const { container } = render(<Badge className="custom-class">Custom</Badge>);
    const span = container.querySelector('span');
    expect(span).toHaveClass('custom-class');
  });

  it('has role="status"', () => {
    const { container } = render(<Badge>Status Badge</Badge>);
    const span = container.querySelector('span');
    expect(span).toHaveAttribute('role', 'status');
  });

  it('renders empty children', () => {
    const { container } = render(<Badge />);
    const span = container.querySelector('span');
    expect(span).toBeInTheDocument();
  });
});
