import { render, screen } from '@testing-library/react';
import QuotePage from '@/app/quote/page';

describe('QuotePage', () => {
  it('renders the page heading', () => {
    render(<QuotePage />);
    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument();
  });

  it('renders page content', () => {
    render(<QuotePage />);
    expect(document.body.children.length).toBeGreaterThan(0);
  });

  it('renders main content', () => {
    render(<QuotePage />);
    const main = document.querySelector('main');
    expect(main).toBeInTheDocument();
  });
});
