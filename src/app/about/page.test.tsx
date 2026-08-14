import { render, screen } from '@testing-library/react';
import AboutPage from '@/app/about/page';

describe('AboutPage', () => {
  it('renders the page heading', () => {
    render(<AboutPage />);
    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument();
  });

  it('renders page content', () => {
    render(<AboutPage />);
    expect(document.body.children.length).toBeGreaterThan(0);
  });

  it('renders main content', () => {
    render(<AboutPage />);
    const main = document.querySelector('main');
    expect(main).toBeInTheDocument();
  });
});
