import { render, screen } from '@testing-library/react';
import RootLayout from '@/app/layout';

vi.mock('next/font/google', () => ({
  Inter: () => ({ className: 'inter', variable: '--font-inter' }),
  Sora: () => ({ className: 'sora', variable: '--font-sora' }),
}));

describe('RootLayout', () => {
  it('renders children', () => {
    render(<RootLayout><main>Main Content</main></RootLayout>);
    expect(screen.getByText('Main Content')).toBeInTheDocument();
  });

  it('has html with lang="en"', () => {
    const { container } = render(<RootLayout><div>Content</div></RootLayout>);
    const html = container.querySelector('html');
    expect(html).toHaveAttribute('lang', 'en');
  });

  it('renders skip to content link', () => {
    render(<RootLayout><main>Content</main></RootLayout>);
    const skipLink = document.querySelector('.skip-link');
    expect(skipLink).toBeInTheDocument();
    expect(skipLink).toHaveAttribute('href', '#main-content');
    expect(skipLink).toHaveAttribute('aria-label', 'Skip to main content');
  });

  it('has min-h-screen and antialiased on body', () => {
    const { container } = render(<RootLayout><div>Content</div></RootLayout>);
    const body = container.querySelector('body');
    expect(body).toHaveClass('min-h-screen');
    expect(body).toHaveClass('antialiased');
  });

  it('renders favicon links', () => {
    render(<RootLayout><div>Content</div></RootLayout>);
    const icons = document.querySelectorAll('link[rel="icon"]');
    expect(icons.length).toBeGreaterThanOrEqual(1);
  });

  it('renders preconnect links for Google Fonts', () => {
    render(<RootLayout><div>Content</div></RootLayout>);
    const preconnects = document.querySelectorAll('link[rel="preconnect"]');
    expect(preconnects.length).toBeGreaterThanOrEqual(2);
  });

  it('renders theme-color meta tag', () => {
    render(<RootLayout><div>Content</div></RootLayout>);
    const themeColor = document.querySelector('meta[name="theme-color"]');
    expect(themeColor).toBeInTheDocument();
    expect(themeColor).toHaveAttribute('content', '#0B1F3A');
  });

  it('renders structured data (JSON-LD)', () => {
    render(<RootLayout><div>Content</div></RootLayout>);
    const jsonLd = document.querySelector('script[type="application/ld+json"]');
    expect(jsonLd).toBeInTheDocument();
    expect(jsonLd?.textContent).toContain('Organization');
  });

  it('wraps children in main with id="main-content"', () => {
    render(<RootLayout><div>Inner Content</div></RootLayout>);
    const main = document.querySelector('main');
    expect(main).toHaveAttribute('id', 'main-content');
    expect(screen.getByText('Inner Content')).toBeInTheDocument();
  });

  it('renders TopBar', () => {
    render(<RootLayout><div>Children</div></RootLayout>);
    expect(screen.getByText(/Serving 40\+ countries/i)).toBeInTheDocument();
  });

  it('renders Navbar', () => {
    render(<RootLayout><div>Children</div></RootLayout>);
    expect(screen.getByRole('link', { name: 'Services' })).toBeInTheDocument();
  });

  it('renders Footer', () => {
    render(<RootLayout><div>Children</div></RootLayout>);
    const footer = document.querySelector('footer');
    expect(footer).toBeInTheDocument();
  });
});
