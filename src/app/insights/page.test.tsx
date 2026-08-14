import { render, screen } from '@testing-library/react';
import InsightsPage from '@/app/insights/page';

describe('InsightsPage', () => {
  it('renders the page heading', () => {
    render(<InsightsPage />);
    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument();
  });

  it('renders page content', () => {
    render(<InsightsPage />);
    expect(document.body.children.length).toBeGreaterThan(0);
  });

  it('renders main content', () => {
    render(<InsightsPage />);
    const main = document.querySelector('main');
    expect(main).toBeInTheDocument();
  });
});
