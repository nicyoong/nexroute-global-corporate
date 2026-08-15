import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import CTABand from "./CTABand";

vi.mock("next/link", () => ({
  default: ({ children, href }: { children: React.ReactNode; href: string }) => (
    <a href={href}>{children}</a>
  ),
}));

describe("CTABand", () => {
  it("renders heading", () => {
    render(<CTABand />);
    expect(screen.getByText("Ready to de-risk your supply chain?")).toBeInTheDocument();
  });

  it("renders description", () => {
    render(<CTABand />);
    expect(screen.getByText(/whether you need a single route quote/i)).toBeInTheDocument();
  });

  it("renders CTA buttons", () => {
    render(<CTABand />);
    expect(screen.getByRole("link", { name: /request a custom quote/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /learn about nexroute/i })).toBeInTheDocument();
  });

  it("links to correct pages", () => {
    render(<CTABand />);
    expect(screen.getByRole("link", { name: /request a custom quote/i })).toHaveAttribute("href", "/contact");
    expect(screen.getByRole("link", { name: /learn about nexroute/i })).toHaveAttribute("href", "/about");
  });

  it("renders response time note", () => {
    render(<CTABand />);
    expect(screen.getByText(/no commitment required/i)).toBeInTheDocument();
  });

  it("has aria-labelledby", () => {
    render(<CTABand />);
    expect(screen.getByText("Ready to de-risk your supply chain?")).toHaveAttribute("id", "cta-heading");
  });
});
