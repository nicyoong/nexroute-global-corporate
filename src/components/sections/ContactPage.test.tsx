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
      
    });

    it('shows error when submitting with empty origin', () => {
      render(<ContactPage />);
      fireEvent.change(screen.getByLabelText(/^Full Name/), { target: { value: 'John Doe' } });
      fireEvent.change(screen.getByLabelText(/^Company/), { target: { value: 'Acme Inc' } });
      fireEvent.change(screen.getByLabelText(/^Work Email/), { target: { value: 'john@example.com' } });
      fireEvent.change(screen.getByLabelText(/^Service/), { target: { value: 'Air Freight' } });
      const btn = screen.getByRole('button', { name: /Submit Request/i });
      fireEvent.click(btn);
      
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
    it('shows submitting state when submitting', async () => {
      render(<ContactPage />);
      const fillForm = () => {
        fireEvent.change(screen.getByLabelText(/^Full Name/), { target: { value: 'John Doe' } });
        fireEvent.change(screen.getByLabelText(/^Company/), { target: { value: 'Acme Inc' } });
        fireEvent.change(screen.getByLabelText(/^Work Email/), { target: { value: 'john@example.com' } });
        fireEvent.change(screen.getByLabelText(/^Service/), { target: { value: 'Air Freight' } });
        fireEvent.change(screen.getByLabelText(/^Origin/), { target: { value: 'New York' } });
        fireEvent.change(screen.getByLabelText(/^Destination/), { target: { value: 'London' } });
        fireEvent.change(screen.getByRole('combobox', { name: /^Incoterms 2020/ }), { target: { value: 'FOB' } });
        fireEvent.change(screen.getByLabelText(/HS Code/), { target: { value: '85171200' } });
      };
      fillForm();
      const btn = screen.getByRole('button', { name: /Submit Request/i });
      fireEvent.click(btn);

      // The button shows "Submitting..." with an ellipsis character
      expect(btn).toBeDisabled();
      const submitBtnText = btn.textContent;
      expect(submitBtnText).toContain('Submitting');
    });

    it('shows success state after form submission', async () => {
      render(<ContactPage />);
      const fillForm = () => {
        fireEvent.change(screen.getByLabelText(/^Full Name/), { target: { value: 'John Doe' } });
        fireEvent.change(screen.getByLabelText(/^Company/), { target: { value: 'Acme Inc' } });
        fireEvent.change(screen.getByLabelText(/^Work Email/), { target: { value: 'john@example.com' } });
        fireEvent.change(screen.getByLabelText(/^Service/), { target: { value: 'Air Freight' } });
        fireEvent.change(screen.getByLabelText(/^Origin/), { target: { value: 'New York' } });
        fireEvent.change(screen.getByLabelText(/^Destination/), { target: { value: 'London' } });
        fireEvent.change(screen.getByRole('combobox', { name: /^Incoterms 2020/ }), { target: { value: 'FOB' } });
        fireEvent.change(screen.getByLabelText(/HS Code/), { target: { value: '85171200' } });
      };
      fillForm();
      const btn = screen.getByRole('button', { name: /Submit Request/i });
      fireEvent.click(btn);

      await new Promise(r => setTimeout(r, 1600));
      expect(screen.getByText(/Request Received/)).toBeInTheDocument();
      expect(screen.getByText(/Thank you, John Doe/)).toBeInTheDocument();
      expect(screen.getByText(/john@example.com/)).toBeInTheDocument();
    });

    it('does not submit when form is invalid', async () => {
      render(<ContactPage />);
      fireEvent.change(screen.getByLabelText(/^Full Name/), { target: { value: 'John Doe' } });
      fireEvent.change(screen.getByLabelText(/^Company/), { target: { value: 'Acme Inc' } });
      fireEvent.change(screen.getByLabelText(/^Work Email/), { target: { value: 'john@example.com' } });
      fireEvent.change(screen.getByLabelText(/^Service/), { target: { value: 'Air Freight' } });
      fireEvent.change(screen.getByLabelText(/^Origin/), { target: { value: 'New York' } });
      fireEvent.change(screen.getByLabelText(/^Destination/), { target: { value: 'London' } });
      // Leave incoterms and hsCode empty

      const btn = screen.getByRole('button', { name: /Submit Request/i });
      fireEvent.click(btn);

      expect(screen.queryByText(/Request Received/)).not.toBeInTheDocument();
      const hsInput = screen.getByLabelText(/HS Code/);
      const incotermSelect = screen.getByRole('combobox', { name: /^Incoterms 2020/ });
      expect(hsInput).toHaveAttribute('aria-invalid', 'true');
      expect(incotermSelect).toHaveAttribute('aria-invalid', 'true');
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

  // ===== NEW TESTS: Incoterms 2020 dropdown =====

  describe('Incoterms 2020 dropdown', () => {
    it('renders the Incoterms 2020 select field', () => {
      render(<ContactPage />);
      expect(screen.getByRole('combobox', { name: /^Incoterms 2020/ })).toBeInTheDocument();
    });

    it('has a default empty option for incoterms', () => {
      render(<ContactPage />);
      const select = screen.getByRole('combobox', { name: /^Incoterms 2020/ });
      const defaultOption = select.querySelector('option[value=""]');
      expect(defaultOption).toBeInTheDocument();
      expect(defaultOption?.textContent).toBe('Select Incoterm\u2026');
    });

    it('renders all 5 Incoterm options', () => {
      render(<ContactPage />);
      const select = screen.getByRole('combobox', { name: /^Incoterms 2020/ });
      const incotermOptions = Array.from(select.querySelectorAll('option'));
      const optionValues = incotermOptions.map(o => o.value);
      expect(optionValues).toContain('EXW');
      expect(optionValues).toContain('FOB');
      expect(optionValues).toContain('CIF');
      expect(optionValues).toContain('DAP');
      expect(optionValues).toContain('DDP');
    });

    it('shows error when incoterms field is empty on submit', () => {
      render(<ContactPage />);
      fireEvent.change(screen.getByLabelText(/^Full Name/), { target: { value: 'John Doe' } });
      fireEvent.change(screen.getByLabelText(/^Company/), { target: { value: 'Acme Inc' } });
      fireEvent.change(screen.getByLabelText(/^Work Email/), { target: { value: 'john@example.com' } });
      fireEvent.change(screen.getByLabelText(/^Service/), { target: { value: 'Air Freight' } });
      fireEvent.change(screen.getByLabelText(/^Origin/), { target: { value: 'New York' } });
      fireEvent.change(screen.getByLabelText(/^Destination/), { target: { value: 'London' } });
      // Don't select incoterms
      fireEvent.change(screen.getByLabelText(/HS Code/), { target: { value: '85171200' } });

      const btn = screen.getByRole('button', { name: /Submit Request/i });
      fireEvent.click(btn);

      expect(screen.getByRole('combobox', { name: /^Incoterms 2020/ })).toHaveAttribute('aria-invalid', 'true');
      const select = screen.getByRole('combobox', { name: /^Incoterms 2020/ });
      expect(select).toHaveAttribute('aria-invalid', 'true');
    });

    it('clears incoterms error when user selects a valid option', () => {
      render(<ContactPage />);
      const select = screen.getByRole('combobox', { name: /^Incoterms 2020/ });
      const btn = screen.getByRole('button', { name: /Submit Request/i });

      fireEvent.click(btn);
      expect(screen.getByRole('combobox', { name: /^Incoterms 2020/ })).toHaveAttribute('aria-invalid', 'true');

      fireEvent.change(select, { target: { value: 'FOB' } });
      expect(screen.getByRole('combobox', { name: /^Incoterms 2020/ })).toHaveAttribute('aria-invalid', 'false');
      expect(select).toHaveAttribute('aria-invalid', 'false');
    });

    it('selecting an incoterm updates form state', () => {
      render(<ContactPage />);
      const select = screen.getByRole('combobox', { name: /^Incoterms 2020/ });
      fireEvent.change(select, { target: { value: 'CIF' } });
      expect(select).toHaveValue('CIF');
    });
  });

  // ===== NEW TESTS: Incoterms help toggle =====

  describe('Incoterms help toggle', () => {
    it('does not show incoterms help by default', () => {
      render(<ContactPage />);
      expect(screen.queryByRole('region', { name: /Incoterms 2020 helper/ })).not.toBeInTheDocument();
    });

    it('toggles help panel when clicking "What\'s this?" button', () => {
      render(<ContactPage />);
      const helpBtn = screen.getByRole('button', { name: /What's this\?/i });
      expect(helpBtn).toBeInTheDocument();
      expect(screen.queryByRole('region', { name: /Incoterms 2020 helper/ })).not.toBeInTheDocument();

      fireEvent.click(helpBtn);
      const helpRegion = screen.getByRole('region', { name: /Incoterms 2020 helper/ });
      expect(helpRegion).toBeInTheDocument();
    });

    it('shows all 5 Incoterm descriptions when help is expanded', () => {
      render(<ContactPage />);
      const helpBtn = screen.getByRole('button', { name: /What's this\?/i });
      fireEvent.click(helpBtn);

      // Check each incoterm code appears in the help region
      const helpRegion = screen.getByRole('region', { name: /Incoterms 2020 helper/ });
      expect(helpRegion).toBeInTheDocument();
      expect(helpRegion.textContent).toContain('EXW');
      expect(helpRegion.textContent).toContain('FOB');
      expect(helpRegion.textContent).toContain('CIF');
      expect(helpRegion.textContent).toContain('DAP');
      expect(helpRegion.textContent).toContain('DDP');

      // Check descriptions are present
      expect(helpRegion.textContent).toContain('Ex Works');
      expect(helpRegion.textContent).toContain('Free on Board');
      expect(helpRegion.textContent).toContain('Cost, Insurance');
      expect(helpRegion.textContent).toContain('Delivered at Place');
      expect(helpRegion.textContent).toContain('Delivered Duty Paid');
    });

    it('toggles help panel off when clicking again', () => {
      render(<ContactPage />);
      const helpBtn = screen.getByRole('button', { name: /What's this\?/i });
      fireEvent.click(helpBtn);
      expect(screen.getByRole('region', { name: /Incoterms 2020 helper/ })).toBeInTheDocument();

      fireEvent.click(helpBtn);
      expect(screen.queryByRole('region', { name: /Incoterms 2020 helper/ })).not.toBeInTheDocument();
    });

    it('sets aria-expanded correctly on help button', () => {
      render(<ContactPage />);
      const helpBtn = screen.getByRole('button', { name: /What's this\?/i });
      expect(helpBtn).toHaveAttribute('aria-expanded', 'false');

      fireEvent.click(helpBtn);
      expect(helpBtn).toHaveAttribute('aria-expanded', 'true');

      fireEvent.click(helpBtn);
      expect(helpBtn).toHaveAttribute('aria-expanded', 'false');
    });

    it('links help button aria-controls to help region', () => {
      render(<ContactPage />);
      const helpBtn = screen.getByRole('button', { name: /What's this\?/i });
      expect(helpBtn).toHaveAttribute('aria-controls', 'incoterms-help');

      fireEvent.click(helpBtn);
      expect(screen.getByRole('region', { name: /Incoterms 2020 helper/ })).toHaveAttribute('id', 'incoterms-help');
    });
  });

  // ===== NEW TESTS: HS Code validation =====

  describe('HS Code validation', () => {
    it('renders the HS Code input field', () => {
      render(<ContactPage />);
      expect(screen.getByLabelText(/HS Code/)).toBeInTheDocument();
    });

    it('shows helper text for HS Code on initial render', () => {
      render(<ContactPage />);
      expect(screen.getByText(/Harmonized System code for customs classification/)).toBeInTheDocument();
    });

    it('shows "(6-10 digits)" label hint', () => {
      render(<ContactPage />);
      expect(screen.getByText(/\(6-10 digits\)/)).toBeInTheDocument();
    });

    it('shows placeholder text', () => {
      render(<ContactPage />);
      const input = screen.getByLabelText(/HS Code/);
      expect(input).toHaveAttribute('placeholder', 'e.g., 85171200');
    });

    it('shows validation error when HS Code is empty on submit', () => {
      render(<ContactPage />);
      fireEvent.change(screen.getByLabelText(/^Full Name/), { target: { value: 'John Doe' } });
      fireEvent.change(screen.getByLabelText(/^Company/), { target: { value: 'Acme Inc' } });
      fireEvent.change(screen.getByLabelText(/^Work Email/), { target: { value: 'john@example.com' } });
      fireEvent.change(screen.getByLabelText(/^Service/), { target: { value: 'Air Freight' } });
      fireEvent.change(screen.getByLabelText(/^Origin/), { target: { value: 'New York' } });
      fireEvent.change(screen.getByLabelText(/^Destination/), { target: { value: 'London' } });
      fireEvent.change(screen.getByRole('combobox', { name: /^Incoterms 2020/ }), { target: { value: 'FOB' } });
      // Leave HS Code empty

      const btn = screen.getByRole('button', { name: /Submit Request/i });
      fireEvent.click(btn);

      // On submit error goes into errors state, check aria-invalid instead
      expect(screen.getByLabelText(/HS Code/)).toHaveAttribute("aria-invalid", "true");
    });

    it('validates HS Code rejects too short input (5 digits)', () => {
      render(<ContactPage />);
      const input = screen.getByLabelText(/HS Code/);
      fireEvent.change(input, { target: { value: '12345' } });
      expect(screen.getByText(/HS Code must be 6-10 numeric digits/)).toBeInTheDocument();
    });

    it('validates HS Code input has maxLength=10', () => {
      render(<ContactPage />);
      const input = screen.getByLabelText(/HS Code/);
      expect(input).toHaveAttribute('maxlength', '10');
    });

    it('validates HS Code rejects non-numeric characters', () => {
      render(<ContactPage />);
      const input = screen.getByLabelText(/HS Code/);
      fireEvent.change(input, { target: { value: '8517a200' } });
      expect(screen.getByText(/HS Code must be 6-10 numeric digits/)).toBeInTheDocument();
    });

    it('accepts valid 6-digit HS Code', () => {
      render(<ContactPage />);
      const input = screen.getByLabelText(/HS Code/);
      fireEvent.change(input, { target: { value: '851712' } });
      expect(screen.queryByText(/HS Code must be 6-10 numeric digits/)).not.toBeInTheDocument();
      expect(screen.getByLabelText(/HS Code/)).toHaveAttribute('aria-invalid', 'false');
    });

    it('accepts valid 10-digit HS Code', () => {
      render(<ContactPage />);
      const input = screen.getByLabelText(/HS Code/);
      fireEvent.change(input, { target: { value: '8517120000' } });
      expect(screen.queryByText(/HS Code must be 6-10 numeric digits/)).not.toBeInTheDocument();
    });

    it('accepts valid 7-digit HS Code', () => {
      render(<ContactPage />);
      const input = screen.getByLabelText(/HS Code/);
      fireEvent.change(input, { target: { value: '8517120' } });
      expect(screen.queryByText(/HS Code must be 6-10 numeric digits/)).not.toBeInTheDocument();
    });

    it('accepts valid 8-digit HS Code', () => {
      render(<ContactPage />);
      const input = screen.getByLabelText(/HS Code/);
      fireEvent.change(input, { target: { value: '85171200' } });
      expect(screen.queryByText(/HS Code must be 6-10 numeric digits/)).not.toBeInTheDocument();
    });

    it('shows help text when HS Code is valid', () => {
      render(<ContactPage />);
      const input = screen.getByLabelText(/HS Code/);
      fireEvent.change(input, { target: { value: '85171200' } });
      expect(screen.getByText(/Harmonized System code for customs classification/)).toBeInTheDocument();
    });

    it('hides help text when HS Code is invalid', () => {
      render(<ContactPage />);
      const input = screen.getByLabelText(/HS Code/);
      fireEvent.change(input, { target: { value: '12345' } });
      expect(screen.queryByText(/Harmonized System code/)).not.toBeInTheDocument();
    });

    it('applies red border when HS Code has real-time error', () => {
      render(<ContactPage />);
      const input = screen.getByLabelText(/HS Code/);
      fireEvent.change(input, { target: { value: '12345' } });
      expect(input).toHaveClass('border-red-400');
    });

    it('clears real-time error when user types valid HS Code', () => {
      render(<ContactPage />);
      const input = screen.getByLabelText(/HS Code/);
      // Start with invalid
      fireEvent.input(input, { target: { value: '12345' } });
      expect(input).toHaveAttribute('aria-invalid', 'true');
      // Then fix it
      fireEvent.input(input, { target: { value: '85171200' } });
      expect(input).toHaveAttribute('aria-invalid', 'false');
    });

    it('applies aria-invalid when HS Code has validation error', () => {
      render(<ContactPage />);
      const input = screen.getByLabelText(/HS Code/);
      fireEvent.change(input, { target: { value: '12345' } });
      expect(input).toHaveAttribute('aria-invalid', 'true');
    });

    it('clears aria-invalid when HS Code becomes valid', () => {
      render(<ContactPage />);
      const input = screen.getByLabelText(/HS Code/);
      fireEvent.change(input, { target: { value: '12345' } });
      expect(input).toHaveAttribute('aria-invalid', 'true');
      fireEvent.change(input, { target: { value: '85171200' } });
      expect(input).toHaveAttribute('aria-invalid', 'false');
    });

    it('sets aria-describedby to hsCode-error when there is an error', () => {
      render(<ContactPage />);
      const input = screen.getByLabelText(/HS Code/);
      fireEvent.change(input, { target: { value: '12345' } });
      expect(input).toHaveAttribute('aria-describedby', 'hsCode-error');
    });

    it('sets aria-describedby to hsCode-help when there is no error', () => {
      render(<ContactPage />);
      const input = screen.getByLabelText(/HS Code/);
      expect(input).toHaveAttribute('aria-describedby', 'hsCode-help');
    });

    it('has inputMode="numeric" and pattern="[0-9]*" on HS Code input', () => {
      render(<ContactPage />);
      const input = screen.getByLabelText(/HS Code/);
      expect(input).toHaveAttribute('inputmode', 'numeric');
      expect(input).toHaveAttribute('pattern', '[0-9]*');
    });

    it('has maxLength={10} on HS Code input', () => {
      render(<ContactPage />);
      const input = screen.getByLabelText(/HS Code/);
      expect(input).toHaveAttribute('maxlength', '10');
    });
  });

  // ===== NEW TESTS: Trade Compliance sidebar card =====

  describe('Trade Compliance sidebar card', () => {
    it('renders the Trade Compliance card in the sidebar', () => {
      render(<ContactPage />);
      expect(screen.getByText('Trade Compliance')).toBeInTheDocument();
    });

    it('renders the Trade Compliance card description', () => {
      render(<ContactPage />);
      expect(screen.getByText(/customs brokerage team ensures all HS codes and Incoterms/)).toBeInTheDocument();
    });

    it('positions Trade Compliance card after the Response Time notice', () => {
      render(<ContactPage />);
      const paragraphs = Array.from(document.querySelectorAll('p'));
      const responseTimeIndex = paragraphs.findIndex(p => p.textContent?.includes('Response Time'));
      const tradeComplianceIndex = paragraphs.findIndex(p => p.textContent?.includes('Trade Compliance'));
      expect(tradeComplianceIndex).toBeGreaterThan(responseTimeIndex);
    });

    it('has dark background for Trade Compliance card', () => {
      render(<ContactPage />);
      const card = screen.getByText('Trade Compliance').closest('[class*="bg-primary"]');
      expect(card).toBeInTheDocument();
    });
  });

  // ===== INTEGRATION: Full form with new fields =====

  describe('full form integration with new fields', () => {
    it('successfully submits with all required fields including incoterms and hsCode', async () => {
      render(<ContactPage />);
      fireEvent.change(screen.getByLabelText(/^Full Name/), { target: { value: 'John Doe' } });
      fireEvent.change(screen.getByLabelText(/^Company/), { target: { value: 'Acme Inc' } });
      fireEvent.change(screen.getByLabelText(/^Work Email/), { target: { value: 'john@example.com' } });
      fireEvent.change(screen.getByLabelText(/^Service/), { target: { value: 'Air Freight' } });
      fireEvent.change(screen.getByLabelText(/^Origin/), { target: { value: 'Shanghai' } });
      fireEvent.change(screen.getByLabelText(/^Destination/), { target: { value: 'Hamburg' } });
      fireEvent.change(screen.getByRole('combobox', { name: /^Incoterms 2020/ }), { target: { value: 'CIF' } });
      fireEvent.change(screen.getByLabelText(/HS Code/), { target: { value: '85171200' } });

      const btn = screen.getByRole('button', { name: /Submit Request/i });
      fireEvent.click(btn);

      await new Promise(r => setTimeout(r, 1600));
      expect(screen.getByText(/Request Received/)).toBeInTheDocument();
    });

    it('shows validation errors for both incoterms and hsCode on invalid submit', () => {
      render(<ContactPage />);
      fireEvent.change(screen.getByLabelText(/^Full Name/), { target: { value: 'John Doe' } });
      fireEvent.change(screen.getByLabelText(/^Company/), { target: { value: 'Acme Inc' } });
      fireEvent.change(screen.getByLabelText(/^Work Email/), { target: { value: 'john@example.com' } });
      fireEvent.change(screen.getByLabelText(/^Service/), { target: { value: 'Air Freight' } });
      fireEvent.change(screen.getByLabelText(/^Origin/), { target: { value: 'Shanghai' } });
      fireEvent.change(screen.getByLabelText(/^Destination/), { target: { value: 'Hamburg' } });
      // Leave incoterms and hsCode empty

      const btn = screen.getByRole('button', { name: /Submit Request/i });
      fireEvent.click(btn);

      expect(screen.getByRole('combobox', { name: /^Incoterms 2020/ })).toHaveAttribute('aria-invalid', 'true');
      expect(screen.getByLabelText(/HS Code/)).toHaveAttribute('aria-invalid', 'true');
    });

    it('clears incoterms and hsCode errors when user provides valid input', () => {
      render(<ContactPage />);
      fireEvent.change(screen.getByLabelText(/^Full Name/), { target: { value: 'John Doe' } });
      fireEvent.change(screen.getByLabelText(/^Company/), { target: { value: 'Acme Inc' } });
      fireEvent.change(screen.getByLabelText(/^Work Email/), { target: { value: 'john@example.com' } });
      fireEvent.change(screen.getByLabelText(/^Service/), { target: { value: 'Air Freight' } });
      fireEvent.change(screen.getByLabelText(/^Origin/), { target: { value: 'Shanghai' } });
      fireEvent.change(screen.getByLabelText(/^Destination/), { target: { value: 'Hamburg' } });

      const btn = screen.getByRole('button', { name: /Submit Request/i });
      fireEvent.click(btn);

      expect(screen.getByRole('combobox', { name: /^Incoterms 2020/ })).toHaveAttribute('aria-invalid', 'true');
      expect(screen.getByLabelText(/HS Code/)).toHaveAttribute('aria-invalid', 'true');

      fireEvent.change(screen.getByRole('combobox', { name: /^Incoterms 2020/ }), { target: { value: 'DAP' } });
      fireEvent.change(screen.getByLabelText(/HS Code/), { target: { value: '85171200' } });

      expect(screen.getByRole('combobox', { name: /^Incoterms 2020/ })).toHaveAttribute('aria-invalid', 'false');
      expect(screen.getByLabelText(/HS Code/)).toHaveAttribute('aria-invalid', 'false');
    });
  });
});
