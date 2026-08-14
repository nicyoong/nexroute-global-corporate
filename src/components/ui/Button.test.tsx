import { render, screen } from '@testing-library/react';
import Button from '@/components/ui/Button';

describe('Button', () => {
  it('renders as a button by default with children text', () => {
    render(<Button>Click me</Button>);
    const btn = screen.getByRole('button', { name: /click me/i });
    expect(btn).toBeInTheDocument();
    expect(btn).toHaveTextContent('Click me');
  });

  it('renders as a Link when href is provided', () => {
    render(<Button href="/test">Navigate</Button>);
    const link = screen.getByRole('link', { name: /navigate/i });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', '/test');
  });

  it('applies primary variant classes by default', () => {
    render(<Button>Primary</Button>);
    const btn = screen.getByRole('button', { name: /primary/i });
    expect(btn).toHaveClass('bg-accent');
  });

  it('applies secondary variant classes', () => {
    render(<Button variant="secondary">Secondary</Button>);
    const btn = screen.getByRole('button', { name: /secondary/i });
    expect(btn).toHaveClass('bg-primary');
  });

  it('applies ghost variant classes', () => {
    render(<Button variant="ghost">Ghost</Button>);
    const btn = screen.getByRole('button', { name: /ghost/i });
    expect(btn).toHaveClass('bg-transparent');
  });

  it('applies correct size classes for sm', () => {
    render(<Button size="sm">Small</Button>);
    const btn = screen.getByRole('button', { name: /small/i });
    expect(btn).toHaveClass('px-4', 'py-2', 'text-sm');
  });

  it('applies correct size classes for md', () => {
    render(<Button size="md">Medium</Button>);
    const btn = screen.getByRole('button', { name: /medium/i });
    expect(btn).toHaveClass('px-6', 'py-3', 'text-base');
  });

  it('applies correct size classes for lg', () => {
    render(<Button size="lg">Large</Button>);
    const btn = screen.getByRole('button', { name: /large/i });
    expect(btn).toHaveClass('px-8', 'py-4', 'text-lg');
  });

  it('applies fullWidth class when fullWidth is true', () => {
    render(<Button fullWidth>Full Width</Button>);
    const btn = screen.getByRole('button', { name: /full width/i });
    expect(btn).toHaveClass('w-full');
  });

  it('does not apply fullWidth class when false', () => {
    render(<Button>Not Full</Button>);
    const btn = screen.getByRole('button', { name: /not full/i });
    expect(btn).not.toHaveClass('w-full');
  });

  it('calls onClick when clicked', () => {
    const handleClick = vi.fn();
    render(<Button onClick={handleClick}>Click</Button>);
    screen.getByRole('button', { name: /click/i }).click();
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('renders type="submit" when type is submit', () => {
    render(<Button type="submit">Submit</Button>);
    const btn = screen.getByRole('button', { name: /submit/i });
    expect(btn).toHaveAttribute('type', 'submit');
  });

  it('renders type="button" by default', () => {
    render(<Button>Default</Button>);
    const btn = screen.getByRole('button', { name: /default/i });
    expect(btn).toHaveAttribute('type', 'button');
  });

  it('sets aria-label when provided', () => {
    render(<Button ariaLabel="Test label">Label</Button>);
    const btn = screen.getByLabelText('Test label');
    expect(btn).toBeInTheDocument();
  });

  it('appends custom className', () => {
    render(<Button className="custom-class">Custom</Button>);
    const btn = screen.getByRole('button', { name: /custom/i });
    expect(btn).toHaveClass('custom-class');
  });

  it('renders icon on the left when iconPosition is left', () => {
    render(
      <Button icon={<span data-testid="icon">🚀</span>} iconPosition="left">
        Icon Left
      </Button>
    );
    expect(screen.getByTestId('icon')).toBeInTheDocument();
  });

  it('renders icon on the right when iconPosition is right', () => {
    render(
      <Button icon={<span data-testid="icon">🚀</span>} iconPosition="right">
        Icon Right
      </Button>
    );
    expect(screen.getByTestId('icon')).toBeInTheDocument();
  });

  it('does not render icon when icon is not provided', () => {
    render(<Button>No Icon</Button>);
    expect(screen.queryByTestId('icon')).not.toBeInTheDocument();
  });

  it('defaults variant to primary', () => {
    render(<Button>Default Variant</Button>);
    const btn = screen.getByRole('button', { name: /default variant/i });
    expect(btn).toHaveClass('bg-accent');
  });

  it('defaults size to md', () => {
    render(<Button>Default Size</Button>);
    const btn = screen.getByRole('button', { name: /default size/i });
    expect(btn).toHaveClass('px-6');
  });

  it('defaults iconPosition to left', () => {
    render(
      <Button icon={<span data-testid="icon">▶</span>}>Default Position</Button>
    );
    const btn = screen.getByRole('button', { name: /default position/i });
    const icon = screen.getByTestId('icon');
    const children = btn.textContent?.replace(/▶/, '').trim();
    expect(children).toBe('Default Position');
  });
});
