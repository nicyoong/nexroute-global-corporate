import { render, screen, fireEvent } from '@testing-library/react';
import ContactPage from '@/components/sections/ContactPage';

describe('ContactPage', () => {
  describe('initial state', () => {
    it('renders the section heading', () => {
      render(<ContactPage />);
      expect(screen.getByRole('heading', { name: /Request a Quote/i })).toBeInTheDocument();
    });

    it('renders the subtitle', () => {
      render(<ContactPage />);
      expect(screen.getByText(/prepare a custom proposal within 2 business hours/i)).toBeInTheDocument();
    });

    it('renders all form fields', () => {
      render(<ContactPage />);
      expect(screen.getByLabelText(/^Full Name/)).toBeInTheDocument();
      expect(screen.getByLabelText(/^Company/)).toBeInTheDocument();
      expect(screen.getByLabelText(/^Work Email/)).toBeInTheDocument();
      expect(screen.getByLabelText(/^Service/)).toBeInTheDocument();
      expect(screen.getByLabelText(/^Origin/)).toBeInTheDocument();
      expect(screen.getByLabelText(/^Destination/)).toBeInTheDocument();
    });

    it('renders submit button', () => {
      render(<ContactPage />);
      const btn = screen.getByRole('button', { name: /Submit Request/i });
      expect(btn).toBeInTheDocument();
      expect(btn).not.toBeDisabled();
    });

    it('renders office addresses', () => {
      render(<ContactPage />);
      expect(screen.getByText(/1200 Harbor Gateway Blvd/)).toBeInTheDocument();
      expect(screen.getByText(/Wilhelminakade 908/)).toBeInTheDocument();
      expect(screen.getByText(/50 Business Park Drive/)).toBeInTheDocument();
    });

    it('renders response time notice', () => {
      render(<ContactPage />);
      expect(screen.getAllByText(/business hours/i).length).toBeGreaterThan(0);
    });
  });

  describe('validation', () => {
    it('shows error when submitting with empty name', () => {
      render(<ContactPage />);
      const btn = screen.getByRole('button', { name: /Submit Request/i });
      fireEvent.click(btn);
      expect(screen.getByText('Name is required.')).toBeInTheDocument();
    });

    it('shows error when submitting with empty company', () => {
      render(<ContactPage />);
      fireEvent.change(screen.getByLabelText(/^Full Name/), { target: { value: 'John Doe' } });
      fireEvent.change(screen.getByLabelText(/^Company/), { target: { value: '' } });
      const btn = screen.getByRole('button', { name: /Submit Request/i });
      fireEvent.click(btn);
      expect(screen.getByText('Company is required.')).toBeInTheDocument();
    });

    it('shows error when submitting with invalid email', () => {
      render(<ContactPage />);
      fireEvent.change(screen.getByLabelText(/^Full Name/), { target: { value: 'John Doe' } });
      fireEvent.change(screen.getByLabelText(/^Company/), { target: { value: 'Acme Inc' } });
      fireEvent.change(screen.getByLabelText(/^Work Email/), { target: { value: 'not-an-email' } });
      const btn = screen.getByRole('button', { name: /Submit Request/i });
      fireEvent.click(btn);
      expect(screen.getByText('Valid work email is required.')).toBeInTheDocument();
    });

    it('shows error when submitting with empty email', () => {
      render(<ContactPage />);
      fireEvent.change(screen.getByLabelText(/^Full Name/), { target: { value: 'John Doe' } });
      fireEvent.change(screen.getByLabelText(/^Company/), { target: { value: 'Acme Inc' } });
      const btn = screen.getByRole('button', { name: /Submit Request/i });
      fireEvent.click(btn);
      expect(screen.getByText('Valid work email is required.')).toBeInTheDocument();
    });

    it('shows error when no service is selected', () => {
      render(<ContactPage />);
      fireEvent.change(screen.getByLabelText(/^Full Name/), { target: { value: 'John Doe' } });
      fireEvent.change(screen.getByLabelText(/^Company/), { target: { value: 'Acme Inc' } });
      fireEvent.change(screen.getByLabelText(/^Work Email/), { target: { value: 'john@example.com' } });
      const btn = screen.getByRole('button', { name: /Submit Request/i });
      fireEvent.click(btn);
      expect(screen.getByText('Please select a service.')).toBeInTheDocument();
    });

    it('shows error when submitting with empty origin', () => {
      render(<ContactPage />);
      fireEvent.change(screen.getByLabelText(/^Full Name/), { target: { value: 'John Doe' } });
      fireEvent.change(screen.getByLabelText(/^Company/), { target: { value: 'Acme Inc' } });
      fireEvent.change(screen.getByLabelText(/^Work Email/), { target: { value: 'john@example.com' } });
      fireEvent.change(screen.getByLabelText(/^Service/), { target: { value: 'Air Freight' } });
      const btn = screen.getByRole('button', { name: /Submit Request/i });
      fireEvent.click(btn);
      expect(screen.getByText('Origin is required.')).toBeInTheDocument();
    });

    it('shows error when submitting with empty destination', () => {
      render(<ContactPage />);
      fireEvent.change(screen.getByLabelText(/^Full Name/), { target: { value: 'John Doe' } });
      fireEvent.change(screen.getByLabelText(/^Company/), { target: { value: 'Acme Inc' } });
      fireEvent.change(screen.getByLabelText(/^Work Email/), { target: { value: 'john@example.com' } });
      fireEvent.change(screen.getByLabelText(/^Service/), { target: { value: 'Air Freight' } });
      fireEvent.change(screen.getByLabelText(/^Origin/), { target: { value: 'New York' } });
      const btn = screen.getByRole('button', { name: /Submit Request/i });
      fireEvent.click(btn);
      expect(screen.getByText('Destination is required.')).toBeInTheDocument();
    });

    it('clears field error when user types valid input', () => {
      render(<ContactPage />);
      const nameInput = screen.getByLabelText(/^Full Name/);
      const btn = screen.getByRole('button', { name: /Submit Request/i });

      fireEvent.click(btn);
      expect(screen.getByText('Name is required.')).toBeInTheDocument();

      fireEvent.change(nameInput, { target: { value: 'John Doe' } });
      expect(screen.queryByText('Name is required.')).not.toBeInTheDocument();
    });
  });

  describe('form submission', () => {
    it('shows submitting state when submitting', () => {
      render(<ContactPage />);
      const fillForm = () => {
        fireEvent.change(screen.getByLabelText(/^Full Name/), { target: { value: 'John Doe' } });
        fireEvent.change(screen.getByLabelText(/^Company/), { target: { value: 'Acme Inc' } });
        fireEvent.change(screen.getByLabelText(/^Work Email/), { target: { value: 'john@example.com' } });
        fireEvent.change(screen.getByLabelText(/^Service/), { target: { value: 'Air Freight' } });
        fireEvent.change(screen.getByLabelText(/^Origin/), { target: { value: 'New York' } });
        fireEvent.change(screen.getByLabelText(/^Destination/), { target: { value: 'London' } });
      };
      fillForm();
      const btn = screen.getByRole('button', { name: /Submit Request/i });
      fireEvent.click(btn);

      expect(screen.getByText(/Submitting/i)).toBeInTheDocument();
      expect(btn).toBeDisabled();
    });
  });

  describe('service options', () => {
    it('renders all service options in the dropdown', () => {
      render(<ContactPage />);
      const select = screen.getByLabelText(/^Service/);
      expect(select).toBeInTheDocument();

      const options = screen.getAllByRole('option');
      const optionTexts = options.map(o => o.textContent);
      expect(optionTexts).toContain('Air Freight');
      expect(optionTexts).toContain('Ocean Freight');
      expect(optionTexts).toContain('Road Freight');
      expect(optionTexts).toContain('Customs Brokerage');
      expect(optionTexts).toContain('Warehousing & Fulfillment');
      expect(optionTexts).toContain('Cold Chain Logistics');
      expect(optionTexts).toContain('Supply Chain Consulting');
      expect(optionTexts).toContain('Other');
    });

    it('has a default empty option', () => {
      render(<ContactPage />);
      const select = screen.getByLabelText(/^Service/);
      const defaultOption = select.querySelector('option[value=""]');
      expect(defaultOption).toBeInTheDocument();
    });
  });

  describe('office links', () => {
    it('renders office cities', () => {
      render(<ContactPage />);
      const cityElements = document.querySelectorAll('h4');
      expect(cityElements.length).toBe(3);
    });

    it('renders email links with mailto: href', () => {
      render(<ContactPage />);
      const mailtoLinks = document.querySelectorAll('a[href^="mailto:"]');
      expect(mailtoLinks.length).toBeGreaterThan(0);
    });
  });

  describe('form accessibility', () => {
    it('has aria-invalid on error fields', () => {
      render(<ContactPage />);
      const btn = screen.getByRole('button', { name: /Submit Request/i });
      fireEvent.click(btn);

      const nameInput = screen.getByLabelText(/^Full Name/);
      expect(nameInput).toHaveAttribute('aria-invalid', 'true');
    });

    it('has error elements with role="alert"', () => {
      render(<ContactPage />);
      const btn = screen.getByRole('button', { name: /Submit Request/i });
      fireEvent.click(btn);

      const alerts = document.querySelectorAll('[role="alert"]');
      expect(alerts.length).toBeGreaterThan(0);
    });
  });
});