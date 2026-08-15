import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import ServicesPage from "./page";

vi.mock("next/link", () => ({
  default: ({ children, href }: { children: React.ReactNode; href: string }) => (
    <a href={href}>{children}</a>
  ),
}));

describe("ServicesPage", () => {
  it("renders page heading", () => {
    render(<ServicesPage />);
    expect(screen.getByText("Our Services")).toBeInTheDocument();
  });

  it("renders all service cards", () => {
    render(<ServicesPage />);
    expect(screen.getByText("Air & Ocean Freight")).toBeInTheDocument();
    expect(screen.getByText("Warehousing & Fulfillment")).toBeInTheDocument();
    expect(screen.getByText("Customs Brokerage")).toBeInTheDocument();
    expect(screen.getByText("Last-Mile Delivery")).toBeInTheDocument();
    expect(screen.getByText("Cold Chain Logistics")).toBeInTheDocument();
    expect(screen.getByText("Supply Chain Consulting")).toBeInTheDocument();
  });

  it("links to correct service detail pages", () => {
    render(<ServicesPage />);
    const links = screen.getAllByRole("link");
    const airOceanLink = links.find(link => link.textContent?.includes("Air & Ocean Freight"));
    expect(airOceanLink).toHaveAttribute("href", "/services/air-ocean-freight");
  });

  it("renders breadcrumb", () => {
    render(<ServicesPage />);
    expect(screen.getByText("Home")).toBeInTheDocument();
    expect(screen.getByText("Services")).toBeInTheDocument();
  });
});
