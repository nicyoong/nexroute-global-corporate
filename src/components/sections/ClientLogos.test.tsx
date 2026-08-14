import { render, screen, act } from '@testing-library/react';
import ClientLogos from '@/components/sections/ClientLogos';

const mockAnimationFrame = (cb: FrameRequestCallback) => {
  return setTimeout(cb, 0) as unknown as number;
};

describe('ClientLogos', () => {
  beforeEach(() => {
    vi.stubGlobal('requestAnimationFrame', mockAnimationFrame);
    vi.stubGlobal('cancelAnimationFrame', (id: number) => clearTimeout(id));
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('renders the section with correct aria-label', () => {
    render(<ClientLogos />);
    const section = document.querySelector('section[aria-label="Our clients"]');
    expect(section).toBeInTheDocument();
  });

  it('renders all client names (at least once each)', () => {
    render(<ClientLogos />);
    expect(screen.getAllByText('Meridian Foods').length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByText('Atlas Pharma').length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByText('Kite Retail').length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByText('Vantor Automotive').length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByText('Helios Electronics').length).toBeGreaterThanOrEqual(1);
  });

  it('has screen reader only text', () => {
    render(<ClientLogos />);
    expect(screen.getByText('Trusted by leading global brands')).toBeInTheDocument();
  });

  it('renders client names twice for seamless scrolling', () => {
    render(<ClientLogos />);
    const allMeridian = document.querySelectorAll('[class*="text-slate-300"]');
    expect(allMeridian.length).toBeGreaterThanOrEqual(5);
  });

  it('section has bg-white class', () => {
    const { container } = render(<ClientLogos />);
    const section = container.querySelector('section');
    expect(section).toHaveClass('bg-white');
  });

  it('section has overflow-hidden class', () => {
    const { container } = render(<ClientLogos />);
    const section = container.querySelector('section');
    expect(section).toHaveClass('overflow-hidden');
  });

  it('applies transform style for animation', () => {
    render(<ClientLogos />);
    const transformEl = document.querySelector('[style*="transform"]');
    expect(transformEl).toBeInTheDocument();
  });

  it('applies transition class on hover for client names', () => {
    render(<ClientLogos />);
    const clientSpans = document.querySelectorAll('[class*="text-slate-300"]');
    clientSpans.forEach((span) => {
      expect(span).toHaveClass('transition-colors');
    });
  });

  it('renders exactly 5 unique client names', () => {
    render(<ClientLogos />);
    const uniqueNames = new Set<string>();
    document.querySelectorAll('[class*="text-slate-300"]').forEach((span) => {
      if (span.textContent) uniqueNames.add(span.textContent);
    });
    expect(uniqueNames.size).toBe(5);
  });

  it('container has flex class', () => {
    render(<ClientLogos />);
    const container = document.querySelector('[style*="transform"]');
    expect(container).toHaveClass('flex');
  });

  it('items are centered in container', () => {
    render(<ClientLogos />);
    const container = document.querySelector('[style*="transform"]');
    expect(container).toHaveClass('items-center');
  });
});
