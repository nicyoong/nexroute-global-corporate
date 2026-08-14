import { render, screen } from '@testing-library/react';
import NetworkPage from '@/app/network/page';

describe('NetworkPage', () => {
  it('renders the page heading', () => {
    render(<NetworkPage />);
    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument();
  });

  it('renders page content', () => {
    render(<NetworkPage />);
    expect(document.body.children.length).toBeGreaterThan(0);
  });

  it('renders main content', () => {
    render(<NetworkPage />);
    const main = document.querySelector('main');
    expect(main).toBeInTheDocument();
  });
});
