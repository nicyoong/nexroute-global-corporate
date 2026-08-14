import { render, screen } from '@testing-library/react';
import IndustriesPage from '@/app/industries/page';

describe('IndustriesPage', () => {
  it('renders the page heading', () => {
    render(<IndustriesPage />);
    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument();
  });

  it('renders page content', () => {
    render(<IndustriesPage />);
    expect(document.body.children.length).toBeGreaterThan(0);
  });

  it('renders main content', () => {
    render(<IndustriesPage />);
    const main = document.querySelector('main');
    expect(main).toBeInTheDocument();
  });
});
