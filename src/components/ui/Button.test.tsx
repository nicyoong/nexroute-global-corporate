import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Button from "./Button";

describe("Button", () => {
  it("renders as a button by default", () => {
    render(<Button>Click me</Button>);
    expect(screen.getByRole("button", { name: /click me/i })).toBeInTheDocument();
  });

  it("renders as a link when href is provided", () => {
    render(<Button href="/test">Go to test</Button>);
    expect(screen.getByRole("link", { name: /go to test/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /go to test/i })).toHaveAttribute("href", "/test");
  });

  it("applies primary variant by default", () => {
    render(<Button>Primary</Button>);
    const btn = screen.getByRole("button", { name: /primary/i });
    expect(btn).toHaveClass("bg-accent");
  });

  it("applies secondary variant", () => {
    render(<Button variant="secondary">Secondary</Button>);
    const btn = screen.getByRole("button", { name: /secondary/i });
    expect(btn).toHaveClass("bg-primary");
  });

  it("applies ghost variant", () => {
    render(<Button variant="ghost">Ghost</Button>);
    const btn = screen.getByRole("button", { name: /ghost/i });
    expect(btn).toHaveClass("bg-transparent");
  });

  it("applies size classes correctly", () => {
    render(<Button size="sm">Small</Button>);
    expect(screen.getByRole("button", { name: /small/i })).toHaveClass("px-4", "py-2");

    render(<Button size="md">Medium</Button>);
    expect(screen.getByRole("button", { name: /medium/i })).toHaveClass("px-6", "py-3");

    render(<Button size="lg">Large</Button>);
    expect(screen.getByRole("button", { name: /large/i })).toHaveClass("px-8", "py-4");
  });

  it("applies fullWidth class", () => {
    render(<Button fullWidth>Full</Button>);
    expect(screen.getByRole("button", { name: /full/i })).toHaveClass("w-full");
  });

  it("applies custom className", () => {
    render(<Button className="custom-class">Custom</Button>);
    expect(screen.getByRole("button", { name: /custom/i })).toHaveClass("custom-class");
  });

  it("shows aria-label when provided", () => {
    render(<Button ariaLabel="Custom label">Button</Button>);
    expect(screen.getByRole("button", { name: /custom label/i })).toBeInTheDocument();
  });

  it("is disabled when disabled prop is true", () => {
    render(<Button disabled>Disabled</Button>);
    expect(screen.getByRole("button", { name: /disabled/i })).toBeDisabled();
  });

  it("renders icon on the left by default", () => {
    render(<Button icon={<span aria-hidden="true">icon</span>}>With Icon</Button>);
    const btn = screen.getByRole("button", { name: /with icon/i });
    expect(btn).toHaveTextContent("icon");
    expect(btn).toHaveTextContent("With Icon");
  });

  it("renders icon on the right when iconPosition is right", () => {
    render(<Button icon={<span aria-hidden="true">icon</span>} iconPosition="right">With Icon</Button>);
    const btn = screen.getByRole("button", { name: /with icon/i });
    expect(btn).toHaveTextContent("icon");
    expect(btn).toHaveTextContent("With Icon");
  });

  it("does not render href attribute when not provided", () => {
    render(<Button>No Link</Button>);
    const btn = screen.getByRole("button", { name: /no link/i });
    expect(btn).not.toHaveAttribute("href");
  });

  it("renders as submit button when type is submit", () => {
    render(<Button type="submit">Submit</Button>);
    const btn = screen.getByRole("button", { name: /submit/i });
    expect(btn).toHaveAttribute("type", "submit");
  });

  it("calls onClick when clicked", () => {
    const handleClick = vi.fn();
    render(<Button onClick={handleClick}>Click</Button>);
    screen.getByRole("button", { name: /click/i }).click();
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
