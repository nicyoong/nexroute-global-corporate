import { render, screen } from '@testing-library/react';
import TrackPage from '@/app/track/page';

describe('TrackPage', () => {
  it('renders the page heading', () => {
    render(<TrackPage />);
    expect(screen.getByRole('heading', { level: 1, name: /Track Your Shipment/i })).toBeInTheDocument();
  });

  it('renders the page description', () => {
    render(<TrackPage />);
    expect(screen.getByText(/Enter your tracking ID to get real-time status/i)).toBeInTheDocument();
  });

  it('renders breadcrumb navigation', () => {
    render(<TrackPage />);
    const breadcrumb = document.querySelector('nav[aria-label="Breadcrumb"]');
    expect(breadcrumb).toBeInTheDocument();
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('Track Shipment')).toBeInTheDocument();
  });

  it('renders main content with id="main-content"', () => {
    render(<TrackPage />);
    const main = document.querySelector('main[id="main-content"]');
    expect(main).toBeInTheDocument();
  });

  it('renders TrackingWidget', () => {
    render(<TrackPage />);
    expect(screen.getByLabelText('Tracking ID')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Track/i })).toBeInTheDocument();
  });

  it('renders "How Tracking Works" section', () => {
    render(<TrackPage />);
    expect(screen.getByRole('heading', { level: 2, name: /How Tracking Works/i })).toBeInTheDocument();
  });

  it('renders tracking format information', () => {
    render(<TrackPage />);
    expect(screen.getAllByText(/NX-XXXXXX/i).length).toBeGreaterThan(0);
    expect(screen.getByText(/6-digit numeric ID/i)).toBeInTheDocument();
  });

  it('renders tracking info list items', () => {
    render(<TrackPage />);
    expect(screen.getByText(/refreshed every 15 minutes/i)).toBeInTheDocument();
    expect(screen.getByText(/Proactive alerts sent for delays/i)).toBeInTheDocument();
  });
});
