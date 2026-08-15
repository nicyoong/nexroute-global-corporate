import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Footer from "./Footer";

describe("Footer", () => {
  it("renders the NexRoute Global logo", () => {
    render(<Footer />);
    expect(screen.getByLabelText(/nexroute global homepage/i)).toBeInTheDocument();
  });

  it("renders company description", () => {
    render(<Footer />);
    expect(screen.getByText(/nexroute global is a leading provider/i)).toBeInTheDocument();
  });

  it("renders social media links", () => {
    render(<Footer />);
    expect(screen.getByLabelText(/follow us on linkedin/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/follow us on twitter/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/follow us on youtube/i)).toBeInTheDocument();
  });

  it("renders Services section with links", () => {
    render(<Footer />);
    expect(screen.getByText("Services")).toBeInTheDocument();
    expect(screen.getByText("Air & Ocean Freight")).toBeInTheDocument();
    expect(screen.getByText("Customs Brokerage")).toBeInTheDocument();
    expect(screen.getByText("Last-Mile Delivery")).toBeInTheDocument();
  });

  it("renders Resources section with links", () => {
    render(<Footer />);
    expect(screen.getByText("Resources")).toBeInTheDocument();
    expect(screen.getByText("Industry Insights")).toBeInTheDocument();
    expect(screen.getByText("Track a Shipment")).toBeInTheDocument();
  });

  it("renders Contact HQ section", () => {
    render(<Footer />);
    expect(screen.getByText("Contact HQ")).toBeInTheDocument();
    expect(screen.getByText("NexRoute Global Inc.")).toBeInTheDocument();
    expect(screen.getByText(/1200 harbor gateway/i)).toBeInTheDocument();
  });

  it("renders certification badges", () => {
    render(<Footer />);
    expect(screen.getByText("ISO 9001:2015")).toBeInTheDocument();
    expect(screen.getByText("ISO 14001:2015")).toBeInTheDocument();
    expect(screen.getByText("AEO Certified")).toBeInTheDocument();
    expect(screen.getByText("C-TPAT")).toBeInTheDocument();
    expect(screen.getByText("GDP Compliant")).toBeInTheDocument();
  });

  it("renders newsletter subscription form", () => {
    render(<Footer />);
    expect(screen.getByLabelText(/email address for newsletter/i)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /subscribe/i })).toBeInTheDocument();
  });

  it("renders copyright with current year", () => {
    render(<Footer />);
    const currentYear = new Date().getFullYear();
    expect(screen.getByText(new RegExp(`© ${currentYear} NexRoute Global Inc.`))).toBeInTheDocument();
  });

  it("renders footer links", () => {
    render(<Footer />);
    expect(screen.getByText("Privacy Policy")).toBeInTheDocument();
    expect(screen.getByText("Terms of Service")).toBeInTheDocument();
    expect(screen.getByText("Accessibility")).toBeInTheDocument();
    expect(screen.getByText("Sitemap")).toBeInTheDocument();
  });

  it("has correct role attributes", () => {
    render(<Footer />);
    expect(document.querySelector('footer[role="contentinfo"]')).toBeInTheDocument();
  });
});
