import { render, screen } from '@testing-library/react';
import SectionHeading from '@/components/ui/SectionHeading';

describe('SectionHeading', () => {
  it('renders title', () => {
    render(<SectionHeading title="Main Title" />);
    expect(screen.getByRole('heading', { name: /main title/i })).toBeInTheDocument();
  });

  it('renders h2 element', () => {
    const { container } = render(<SectionHeading title="Heading" />);
    const h2 = container.querySelector('h2');
    expect(h2).toBeInTheDocument();
    expect(h2?.tagName).toBe('H2');
  });

  it('renders eyebrow when provided', () => {
    render(<SectionHeading title="Title" eyebrow="Our Capabilities" />);
    expect(screen.getByText('Our Capabilities')).toBeInTheDocument();
  });

  it('does not render eyebrow when not provided', () => {
    render(<SectionHeading title="Title" />);
    expect(screen.queryByText('Our Capabilities')).not.toBeInTheDocument();
  });

  it('renders subtitle when provided', () => {
    render(<SectionHeading title="Title" subtitle="Subtitle text" />);
    expect(screen.getByText('Subtitle text')).toBeInTheDocument();
  });

  it('does not render subtitle when not provided', () => {
    render(<SectionHeading title="Title" />);
    expect(screen.queryByRole('paragraph', { name: /subtitle/i })).not.toBeInTheDocument();
    // Check no paragraph with subtitle text
    const paragraphs = document.querySelectorAll('p');
    expect(paragraphs.length).toBe(0);
  });

  it('aligns center by default', () => {
    const { container } = render(<SectionHeading title="Centered" />);
    const wrapper = container.firstChild as HTMLElement;
    expect(wrapper).toHaveClass('text-center');
  });

  it('aligns left when align="left"', () => {
    const { container } = render(<SectionHeading title="Left" align="left" />);
    const wrapper = container.firstChild as HTMLElement;
    expect(wrapper).toHaveClass('text-left');
    expect(wrapper).not.toHaveClass('text-center');
  });

  it('applies custom className', () => {
    const { container } = render(<SectionHeading title="Title" className="custom-class" />);
    const wrapper = container.firstChild as HTMLElement;
    expect(wrapper).toHaveClass('custom-class');
  });

  it('sets id when provided', () => {
    const { container } = render(<SectionHeading title="Title" id="heading-id" />);
    const wrapper = container.firstChild as HTMLElement;
    expect(wrapper).toHaveAttribute('id', 'heading-id');
  });

  it('does not set id when not provided', () => {
    const { container } = render(<SectionHeading title="Title" />);
    const wrapper = container.firstChild as HTMLElement;
    expect(wrapper).not.toHaveAttribute('id');
  });

  it('has correct heading level', () => {
    render(<SectionHeading title="Services" />);
    const heading = screen.getByRole('heading', { level: 2 });
    expect(heading).toBeInTheDocument();
  });
});
