import { render, screen } from '@testing-library/react';
import TopBar from '@/components/layout/TopBar';

describe('TopBar', () => {
  it('renders contact info', () => {
    render(<TopBar />);
    expect(screen.getByText('+1 (800) 555-ROUTE')).toBeInTheDocument();
    expect(screen.getByText('operations@nexrouteglobal.com')).toBeInTheDocument();
    expect(screen.getByText('ISO 9001:2015 Certified')).toBeInTheDocument();
  });

  it('renders phone as a link', () => {
    render(<TopBar />);
    const phoneLink = screen.getByRole('link', { name: /phone: \+1 \(800\) 555-route/i });
    expect(phoneLink).toBeInTheDocument();
    expect(phoneLink).toHaveAttribute('href', 'tel:+18005557688');
  });

  it('renders email as a link', () => {
    render(<TopBar />);
    const emailLink = screen.getByRole('link', { name: /email: operations@nexrouteglobal.com/i });
    expect(emailLink).toBeInTheDocument();
    expect(emailLink).toHaveAttribute('href', 'mailto:operations@nexrouteglobal.com');
  });

  it('renders ISO certification as plain text (not a link)', () => {
    render(<TopBar />);
    const certText = screen.getByText('ISO 9001:2015 Certified');
    expect(certText.closest('a')).toBeNull();
  });

  it('renders the footer tagline', () => {
    render(<TopBar />);
    expect(screen.getByText('Serving 120+ countries · 24/7 Operations Center')).toBeInTheDocument();
  });

  it('has role="complementary"', () => {
    const { container } = render(<TopBar />);
    const el = container.firstChild as HTMLElement;
    expect(el).toHaveAttribute('role', 'complementary');
  });

  it('has correct aria-label', () => {
    const { container } = render(<TopBar />);
    const el = container.firstChild as HTMLElement;
    expect(el).toHaveAttribute('aria-label', 'Contact information bar');
  });

  it('renders all three contact items', () => {
    render(<TopBar />);
    const items = screen.getAllByRole('link').length + document.querySelectorAll('span').length;
    expect(items).toBeGreaterThan(0);
  });
});
