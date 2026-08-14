import { render, screen } from '@testing-library/react';
import Card from '@/components/ui/Card';

describe('Card', () => {
  it('renders as a div by default', () => {
    const { container } = render(<Card>Card Content</Card>);
    const card = container.firstChild;
    expect(card).toBeInTheDocument();
    expect(card?.tagName).toBe('DIV');
  });

  it('renders children content', () => {
    render(<Card>Important Content</Card>);
    expect(screen.getByText('Important Content')).toBeInTheDocument();
  });

  it('renders as a link when href is provided', () => {
    render(
      <Card href="https://example.com">
        <span>Link Card</span>
      </Card>
    );
    const card = screen.getByRole('link');
    expect(card).toBeInTheDocument();
    expect(card).toHaveAttribute('href', 'https://example.com');
  });

  it('renders as a button when onClick is provided', () => {
    const handleClick = vi.fn();
    render(<Card onClick={handleClick}>Button Card</Card>);
    const card = screen.getByRole('button', { name: /button card/i });
    expect(card).toBeInTheDocument();
    card.click();
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('has tabIndex=0 when rendered as link', () => {
    render(<Card href="/test"><span>Navigable Card</span></Card>);
    const card = screen.getByRole('link');
    expect(card).toHaveAttribute('tabindex', '0');
  });

  it('sets type="button" when rendered as button', () => {
    const handleClick = vi.fn();
    render(<Card onClick={handleClick}>Action Card</Card>);
    const card = screen.getByRole('button');
    expect(card).toHaveAttribute('type', 'button');
  });

  it('sets aria-label when provided on link card', () => {
    render(
      <Card href="/test" ariaLabel="Custom label">
        <span>Labelled</span>
      </Card>
    );
    const card = screen.getByRole('link');
    expect(card).toHaveAttribute('aria-label', 'Custom label');
  });

  it('sets aria-label when provided on button card', () => {
    render(
      <Card onClick={() => {}} ariaLabel="Action label">
        <span>Action</span>
      </Card>
    );
    const card = screen.getByRole('button');
    expect(card).toHaveAttribute('aria-label', 'Action label');
  });

  it('applies custom className', () => {
    render(<Card className="my-card">Content</Card>);
    const card = document.querySelector('.my-card');
    expect(card).toBeInTheDocument();
  });

  it('defaults to div when no href or onClick provided', () => {
    render(<Card>Plain Card</Card>);
    const cards = document.querySelectorAll('div');
    const plainCard = Array.from(cards).find(c => c.textContent === 'Plain Card');
    expect(plainCard).toBeInTheDocument();
  });

  it('prioritizes href over onClick when both are provided', () => {
    render(
      <Card href="/test" onClick={() => {}}>
        Priority
      </Card>
    );
    const link = screen.queryByRole('link');
    expect(link).toBeInTheDocument();
    const btn = screen.queryByRole('button');
    expect(btn).not.toBeInTheDocument();
  });
});
