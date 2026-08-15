import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import CTA from "./CTA";

vi.mock("next/link", () => ({
  default: ({ children, href }: { children: React.ReactNode; href: string }) => (
    <a href={href}>{children}</a>
  ),
}));

describe("CTA", () => {
  it("renders heading", () => {
    render(<CTA />);
    expect(screen.getByText("Ready to Optimize Your Supply Chain?")).toBeInTheDocument();
  });

  it("renders description", () => {
    render(<CTA />);
    expect(screen.getByText(/whether you need a single route quote/i)).toBeInTheDocument();
  });

  it("renders CTA buttons", () => {
    render(<CTA />);
    expect(screen.getByRole("link", { name: /request a custom quote/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /learn about nexroute/i })).toBeInTheDocument();
  });

  it("links to correct pages", () => {
    render(<CTA />);
    expect(screen.getByRole("link", { name: /request a custom quote/i })).toHaveAttribute("href", "/contact");
    expect(screen.getByRole("link", { name: /learn about nexroute/i })).toHaveAttribute("href", "/about");
  });

  it("renders response time note", () => {
    render(<CTA />);
    expect(screen.getByText(/no commitment required/i)).toBeInTheDocument();
  });
});
