import { render, screen } from '@testing-library/react';
import ContactPageApp from '@/app/contact/page';

describe('ContactPage', () => {
  it('renders the page', () => {
    render(<ContactPageApp />);
    expect(document.body.children.length).toBeGreaterThan(0);
  });
});
