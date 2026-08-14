import { render, screen } from '@testing-library/react';
import Container from '@/components/ui/Container';

describe('Container', () => {
  it('renders children', () => {
    render(<Container>Container Content</Container>);
    expect(screen.getByText('Container Content')).toBeInTheDocument();
  });

  it('renders as div by default', () => {
    const { container } = render(<Container>Default</Container>);
    expect(container.firstChild?.tagName).toBe('DIV');
  });

  it('renders as section when as="section"', () => {
    const { container } = render(<Container as="section">Section</Container>);
    expect(container.firstChild?.tagName).toBe('SECTION');
  });

  it('renders as article when as="article"', () => {
    const { container } = render(<Container as="article">Article</Container>);
    expect(container.firstChild?.tagName).toBe('ARTICLE');
  });

  it('applies default container classes', () => {
    const { container } = render(<Container>Default Classes</Container>);
    const el = container.firstChild as HTMLElement;
    expect(el).toHaveClass('max-w-7xl');
    expect(el).toHaveClass('mx-auto');
    expect(el).toHaveClass('px-4');
  });

  it('applies custom className', () => {
    const { container } = render(<Container className="custom">Custom</Container>);
    const el = container.firstChild as HTMLElement;
    expect(el).toHaveClass('custom');
  });

  it('sets id when id is provided', () => {
    const { container } = render(<Container id="main-content">Id Test</Container>);
    const el = container.firstChild as HTMLElement;
    expect(el).toHaveAttribute('id', 'main-content');
  });

  it('does not set id when id is not provided', () => {
    const { container } = render(<Container>No ID</Container>);
    const el = container.firstChild as HTMLElement;
    expect(el).not.toHaveAttribute('id');
  });

  it('defaults as to div', () => {
    const { container } = render(<Container>Default As</Container>);
    const el = container.firstChild as HTMLElement;
    expect(el.tagName).toBe('DIV');
  });
});
