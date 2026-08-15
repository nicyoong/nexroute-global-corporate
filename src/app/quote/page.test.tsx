import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import QuotePage from "./page";

vi.mock("next/link", () => ({
  default: ({ children, href }: { children: React.ReactNode; href: string }) => (
    <a href={href}>{children}</a>
  ),
}));

vi.mock("@/components/sections/ChargeableWeightCalculator", () => ({
  default: () => <div data-testid="weight-calculator">Weight Calculator</div>
}));

describe("QuotePage", () => {
  it("renders the page title and description", () => {
    render(<QuotePage />);
    expect(screen.getByText(/request a quote/i)).toBeInTheDocument();
    expect(screen.getByText(/tell us about your shipment/i)).toBeInTheDocument();
  });

  it("renders breadcrumb navigation", () => {
    render(<QuotePage />);
    expect(screen.getByText(/home/i)).toBeInTheDocument();
    expect(screen.getByText(/get a quote/i)).toBeInTheDocument();
  });

  it("renders the Chargeable Weight Calculator section", () => {
    render(<QuotePage />);
    expect(screen.getByTestId("weight-calculator")).toBeInTheDocument();
  });

  it("renders the quote request form", () => {
    render(<QuotePage />);
    expect(screen.getByLabelText(/full name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/company/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/work email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/origin/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/destination/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/service required/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/cargo details/i)).toBeInTheDocument();
  });

  it("has all required form fields marked required", () => {
    render(<QuotePage />);
    const requiredFields = document.querySelectorAll("[required]");
    expect(requiredFields.length).toBeGreaterThanOrEqual(6);
  });

  it("renders service dropdown with options", () => {
    render(<QuotePage />);
    const select = screen.getByLabelText(/service required/i);
    expect(select).toBeInTheDocument();
  });

  it("has form with aria-label", () => {
    render(<QuotePage />);
    const form = document.querySelector('form[aria-label]');
    expect(form).toBeInTheDocument();
    expect(form).toHaveAttribute("aria-label", "Quote request form");
  });

  it("has submit button", () => {
    render(<QuotePage />);
    expect(screen.getByRole("button", { name: /submit request/i })).toBeInTheDocument();
  });

  it("links home in breadcrumb to /", () => {
    render(<QuotePage />);
    const homeLink = screen.getByText(/home/i).closest("a");
    expect(homeLink).toHaveAttribute("href", "/");
  });

  it("renders section with correct heading level", () => {
    render(<QuotePage />);
    expect(screen.getByRole("heading", { level: 2, name: /complete your request/i })).toBeInTheDocument();
  });
});
