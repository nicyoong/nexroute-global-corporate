import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import Services from "./Services";

vi.mock("next/link", () => ({
  default: ({ children, href }: { children: React.ReactNode; href: string }) => (
    <a href={href}>{children}</a>
  ),
}));

vi.mock("framer-motion", () => ({
  motion: {
    div: ({ children, ...props }: Record<string, unknown>) =>
      require("react").createElement("div", props, children),
  },
}));

describe("Services", () => {
  it("renders section heading", () => {
    render(<Services />);
    expect(screen.getByText("Comprehensive Logistics Solutions")).toBeInTheDocument();
  });

  it("renders all service cards", () => {
    render(<Services />);
    expect(screen.getByText("Air & Ocean Freight")).toBeInTheDocument();
    expect(screen.getByText("Warehousing & Fulfillment")).toBeInTheDocument();
    expect(screen.getByText("Customs Brokerage")).toBeInTheDocument();
    expect(screen.getByText("Last-Mile Delivery")).toBeInTheDocument();
    expect(screen.getByText("Cold Chain Logistics")).toBeInTheDocument();
    expect(screen.getByText("Supply Chain Consulting")).toBeInTheDocument();
  });

  it("renders Learn more links for each service", () => {
    render(<Services />);
    const links = screen.getAllByText(/learn more/i);
    expect(links).toHaveLength(6);
  });

  it("links to correct service detail pages", () => {
    render(<Services />);
    const links = screen.getAllByRole("link");
    const airOceanLink = links.find(link => link.getAttribute("href") === "/services/air-ocean-freight");
    expect(airOceanLink).toBeInTheDocument();
  });
});
