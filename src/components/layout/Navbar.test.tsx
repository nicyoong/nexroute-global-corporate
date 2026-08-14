import { render, screen, act } from '@testing-library/react';
import Navbar from '@/components/layout/Navbar';

describe('Navbar', () => {
  beforeEach(() => {
    vi.restoreAllMocks();
  });

  afterEach(() => {
    document.body.style.overflow = '';
  });

  it('renders the NexRoute Global logo and name', () => {
    render(<Navbar />);
    const logoLink = screen.getByRole('link', { name: /nexroute global homepage/i });
    expect(logoLink).toBeInTheDocument();
  });

  it('links the logo to the homepage', () => {
    render(<Navbar />);
    const logoLink = screen.getByRole('link', { name: /nexroute global homepage/i });
    expect(logoLink).toHaveAttribute('href', '/');
  });

  it('renders desktop navigation links', () => {
    render(<Navbar />);
    expect(screen.getByRole('link', { name: 'Services' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Network' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Industries' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Insights' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'About' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Contact' })).toBeInTheDocument();
  });

  it('renders Client Login and Get a Quote buttons', () => {
    render(<Navbar />);
    expect(screen.getByRole('link', { name: /Client Login/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /Get a Quote/i })).toBeInTheDocument();
  });

  it('renders mobile menu toggle button', () => {
    render(<Navbar />);
    const toggleBtn = screen.getByRole('button', { name: /open menu/i });
    expect(toggleBtn).toBeInTheDocument();
  });

  it('opens mobile menu when toggle is clicked', async () => {
    render(<Navbar />);
    const toggleBtn = screen.getByRole('button', { name: /open menu/i });
    await act(async () => {
      toggleBtn.click();
    });
    expect(toggleBtn).toHaveAttribute('aria-expanded', 'true');
    const dialog = document.querySelector('[role="dialog"]');
    expect(dialog).toHaveClass('pointer-events-auto');
  });

  it('closes mobile menu when close button inside dialog is clicked', async () => {
    render(<Navbar />);
    const toggleBtn = screen.getByRole('button', { name: /open menu/i });
    await act(async () => {
      toggleBtn.click();
    });
    const dialog = document.querySelector('[role="dialog"]');
    const closeBtn = dialog?.querySelector('button[aria-label="Close menu"]') as HTMLElement;
    expect(closeBtn).toBeInTheDocument();
    await act(async () => {
      closeBtn.click();
    });
    expect(toggleBtn).toHaveAttribute('aria-expanded', 'false');
    const dialogAfter = document.querySelector('[role="dialog"]');
    expect(dialogAfter).toHaveClass('pointer-events-none');
  });

  it('mobile nav links have onClick handlers to close menu', () => {
    render(<Navbar />);
    const toggleBtn = screen.getByRole('button', { name: /open menu/i });
    act(() => {
      toggleBtn.click();
    });
    // Verify mobile nav links exist with href attributes
    const mobileNav = document.querySelector('nav[aria-label="Mobile navigation"]');
    expect(mobileNav).toBeInTheDocument();
    const links = mobileNav?.querySelectorAll('a');
    expect(links).toHaveLength(6);
    links?.forEach((link) => {
      expect(link).toHaveAttribute('href');
    });
  });

  it('closes mobile menu when backdrop is clicked', async () => {
    render(<Navbar />);
    const toggleBtn = screen.getByRole('button', { name: /open menu/i });
    await act(async () => {
      toggleBtn.click();
    });
    const backdrop = document.querySelector('.bg-black\\/50') as HTMLElement;
    expect(backdrop).toBeInTheDocument();
    await act(async () => {
      backdrop.click();
    });
    const dialogAfter = document.querySelector('[role="dialog"]');
    expect(dialogAfter).toHaveClass('pointer-events-none');
  });

  it('has header with role="banner"', () => {
    render(<Navbar />);
    const header = document.querySelector('header');
    expect(header).toHaveAttribute('role', 'banner');
  });

  it('has nav with aria-label="Main navigation"', () => {
    render(<Navbar />);
    const nav = document.querySelector('nav[aria-label="Main navigation"]');
    expect(nav).toBeInTheDocument();
  });

  it('has aria-expanded on mobile toggle button', () => {
    render(<Navbar />);
    const toggleBtn = screen.getByRole('button', { name: /open menu/i });
    expect(toggleBtn).toHaveAttribute('aria-expanded', 'false');
    act(() => {
      toggleBtn.click();
    });
    expect(toggleBtn).toHaveAttribute('aria-expanded', 'true');
  });

  it('has aria-controls on mobile toggle pointing to mobile-menu', () => {
    render(<Navbar />);
    const toggleBtn = screen.getByRole('button', { name: /open menu/i });
    expect(toggleBtn).toHaveAttribute('aria-controls', 'mobile-menu');
  });

  it('mobile menu dialog has aria-modal="true"', () => {
    render(<Navbar />);
    const dialog = document.querySelector('[role="dialog"]');
    expect(dialog).toHaveAttribute('aria-modal', 'true');
  });

  it('sets body overflow to hidden when mobile menu is open', async () => {
    render(<Navbar />);
    const toggleBtn = screen.getByRole('button', { name: /open menu/i });
    await act(async () => {
      toggleBtn.click();
    });
    expect(document.body.style.overflow).toBe('hidden');
  });

  it('restores body overflow when mobile menu is closed', async () => {
    render(<Navbar />);
    const toggleBtn = screen.getByRole('button', { name: /open menu/i });
    await act(async () => {
      toggleBtn.click();
    });
    expect(document.body.style.overflow).toBe('hidden');

    await act(async () => {
      toggleBtn.click();
    });
    expect(document.body.style.overflow).toBe('');
  });
});
