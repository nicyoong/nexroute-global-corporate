import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import TrackingWidget from '@/components/sections/TrackingWidget';

describe('TrackingWidget', () => {
  it('renders the input field', () => {
    render(<TrackingWidget />);
    const input = screen.getByLabelText('Tracking ID');
    expect(input).toBeInTheDocument();
  });

  it('renders the Track button', () => {
    render(<TrackingWidget />);
    const btn = screen.getByRole('button', { name: /Track/i });
    expect(btn).toBeInTheDocument();
  });

  it('shows error when form is submitted empty', () => {
    render(<TrackingWidget />);
    const btn = screen.getByRole('button', { name: /Track/i });
    fireEvent.click(btn);
    expect(screen.getByRole('alert')).toBeInTheDocument();
    expect(screen.getByText(/Please enter a tracking ID/i)).toBeInTheDocument();
  });

  it('shows error for invalid tracking format', () => {
    render(<TrackingWidget />);
    const input = screen.getByLabelText('Tracking ID');
    const btn = screen.getByRole('button', { name: /Track/i });
    fireEvent.change(input, { target: { value: 'invalid' } });
    fireEvent.click(btn);
    expect(screen.getByRole('alert')).toBeInTheDocument();
    expect(screen.getByText(/Invalid format/i)).toBeInTheDocument();
  });

  it('shows error for tracking ID with letters only', () => {
    render(<TrackingWidget />);
    const input = screen.getByLabelText('Tracking ID');
    const btn = screen.getByRole('button', { name: /Track/i });
    fireEvent.change(input, { target: { value: 'NX-ABCDEF' } });
    fireEvent.click(btn);
    expect(screen.getByText(/Invalid format/i)).toBeInTheDocument();
  });

  it('validates NX-XXXXXX pattern (6 digits required)', () => {
    render(<TrackingWidget />);
    const input = screen.getByLabelText('Tracking ID');
    const btn = screen.getByRole('button', { name: /Track/i });
    fireEvent.change(input, { target: { value: 'NX-12345' } });
    fireEvent.click(btn);
    expect(screen.getByText(/Invalid format/i)).toBeInTheDocument();
  });

  it('validates NX-XXXXXX pattern (too many digits)', () => {
    render(<TrackingWidget />);
    const input = screen.getByLabelText('Tracking ID');
    const btn = screen.getByRole('button', { name: /Track/i });
    fireEvent.change(input, { target: { value: 'NX-1234567' } });
    fireEvent.click(btn);
    expect(screen.getByText(/Invalid format/i)).toBeInTheDocument();
  });

  it('accepts valid tracking ID format (uppercase)', () => {
    render(<TrackingWidget />);
    const input = screen.getByLabelText('Tracking ID');
    const btn = screen.getByRole('button', { name: /Track/i });
    fireEvent.change(input, { target: { value: 'NX-123456' } });
    fireEvent.click(btn);
    expect(screen.getByLabelText(/Loading tracking information/i)).toBeInTheDocument();
  });

  it('accepts valid tracking ID format (lowercase)', () => {
    render(<TrackingWidget />);
    const input = screen.getByLabelText('Tracking ID');
    const btn = screen.getByRole('button', { name: /Track/i });
    fireEvent.change(input, { target: { value: 'nx-123456' } });
    fireEvent.click(btn);
    expect(screen.getByLabelText(/Loading tracking information/i)).toBeInTheDocument();
  });

  it('shows skeleton loading when tracking is in progress', () => {
    render(<TrackingWidget />);
    const input = screen.getByLabelText('Tracking ID');
    const btn = screen.getByRole('button', { name: /Track/i });
    fireEvent.change(input, { target: { value: 'NX-123456' } });
    fireEvent.click(btn);
    expect(screen.getByLabelText(/Loading tracking information/i)).toBeInTheDocument();
  });

  it('clears error when user types after invalid input', () => {
    render(<TrackingWidget />);
    const input = screen.getByLabelText('Tracking ID');
    const btn = screen.getByRole('button', { name: /Track/i });

    fireEvent.click(btn);
    expect(screen.getByText(/Please enter a tracking ID/i)).toBeInTheDocument();

    fireEvent.change(input, { target: { value: 'NX-123456' } });
    expect(screen.queryByText(/Please enter a tracking ID/i)).not.toBeInTheDocument();
  });

  it('input has aria-invalid set when error exists', () => {
    render(<TrackingWidget />);
    const input = screen.getByLabelText('Tracking ID');
    const btn = screen.getByRole('button', { name: /Track/i });

    fireEvent.click(btn);
    expect(input).toHaveAttribute('aria-invalid', 'true');
  });

  it('input has aria-describedby pointing to error element when error exists', () => {
    render(<TrackingWidget />);
    const input = screen.getByLabelText('Tracking ID');
    const btn = screen.getByRole('button', { name: /Track/i });

    fireEvent.click(btn);
    expect(input).toHaveAttribute('aria-describedby', 'track-error');
  });

  it('loading button is disabled', () => {
    render(<TrackingWidget />);
    const input = screen.getByLabelText('Tracking ID');
    const btn = screen.getByRole('button', { name: /Track/i });
    fireEvent.change(input, { target: { value: 'NX-123456' } });
    fireEvent.click(btn);

    expect(btn).toBeDisabled();
  });

  it('has no initial error', () => {
    render(<TrackingWidget />);
    expect(screen.queryByRole('alert')).not.toBeInTheDocument();
  });

  it('trims input before validation', () => {
    render(<TrackingWidget />);
    const input = screen.getByLabelText('Tracking ID');
    const btn = screen.getByRole('button', { name: /Track/i });

    fireEvent.change(input, { target: { value: '  NX-123456  ' } });
    fireEvent.click(btn);

    expect(screen.getByLabelText(/Loading tracking information/i)).toBeInTheDocument();
  });

  it('clears error state on new input after invalid submission', () => {
    render(<TrackingWidget />);
    const input = screen.getByLabelText('Tracking ID');
    const btn = screen.getByRole('button', { name: /Track/i });

    fireEvent.change(input, { target: { value: '   ' } });
    fireEvent.click(btn);
    expect(screen.getByRole('alert')).toBeInTheDocument();

    fireEvent.change(input, { target: { value: 'NX-123456' } });
    expect(screen.queryByRole('alert')).not.toBeInTheDocument();
  });

  it('renders form with noValidate attribute', () => {
    render(<TrackingWidget />);
    const form = document.querySelector('form');
    expect(form).toHaveAttribute('noValidate');
  });

  it('displays tracking result after loading completes', async () => {
    render(<TrackingWidget />);
    const input = screen.getByLabelText('Tracking ID');
    const btn = screen.getByRole('button', { name: /Track/i });
    fireEvent.change(input, { target: { value: 'NX-123456' } });
    fireEvent.click(btn);

    await waitFor(() => {
      expect(screen.getByText('NX-123456')).toBeInTheDocument();
    }, { timeout: 2000 });
  });

  it('shows progress bar with correct number of segments', async () => {
    render(<TrackingWidget />);
    const input = screen.getByLabelText('Tracking ID');
    const btn = screen.getByRole('button', { name: /Track/i });
    fireEvent.change(input, { target: { value: 'NX-123456' } });
    fireEvent.click(btn);

    await waitFor(() => {
      const progressSegments = document.querySelectorAll('[role="progressbar"] > div > div');
      expect(progressSegments).toHaveLength(5);
    }, { timeout: 2000 });
  });

  it('shows all 5 timeline status entries after loading', async () => {
    render(<TrackingWidget />);
    const input = screen.getByLabelText('Tracking ID');
    const btn = screen.getByRole('button', { name: /Track/i });
    fireEvent.change(input, { target: { value: 'NX-123456' } });
    fireEvent.click(btn);

    await waitFor(() => {
      expect(screen.getByText('Booked')).toBeInTheDocument();
      expect(screen.getByText('Delivered')).toBeInTheDocument();
    }, { timeout: 2000 });
  });

  it('shows LIVE indicator for current status', async () => {
    render(<TrackingWidget />);
    const input = screen.getByLabelText('Tracking ID');
    const btn = screen.getByRole('button', { name: /Track/i });
    fireEvent.change(input, { target: { value: 'NX-123456' } });
    fireEvent.click(btn);

    await waitFor(() => {
      expect(screen.getByText('LIVE')).toBeInTheDocument();
    }, { timeout: 2000 });
  });

  it('resets state when tracking a new ID after previous search', async () => {
    render(<TrackingWidget />);
    const input = screen.getByLabelText('Tracking ID');
    const btn = screen.getByRole('button', { name: /Track/i });

    fireEvent.change(input, { target: { value: 'NX-123456' } });
    fireEvent.click(btn);

    await waitFor(() => {
      expect(screen.getByText('NX-123456')).toBeInTheDocument();
    }, { timeout: 2000 });

    fireEvent.change(input, { target: { value: 'NX-654321' } });
    fireEvent.click(btn);

    await waitFor(() => {
      expect(screen.getByText('NX-654321')).toBeInTheDocument();
    }, { timeout: 2000 });
  });

  it('sets aria attributes on progressbar element', async () => {
    render(<TrackingWidget />);
    const input = screen.getByLabelText('Tracking ID');
    const btn = screen.getByRole('button', { name: /Track/i });
    fireEvent.change(input, { target: { value: 'NX-123456' } });
    fireEvent.click(btn);

    await waitFor(() => {
      const progressbar = document.querySelector('[role="progressbar"]');
      expect(progressbar).toHaveAttribute('aria-valuenow');
      expect(progressbar).toHaveAttribute('aria-valuemin', '0');
      expect(progressbar).toHaveAttribute('aria-valuemax', '4');
    }, { timeout: 2000 });
  });
});
