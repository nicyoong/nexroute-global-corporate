import { render, screen } from '@testing-library/react';
import RootLayout from '@/app/layout';

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
});
