import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import ServiceDetailPage from "./page";

vi.mock("next/navigation", () => ({
  useParams: () => ({ slug: "air-ocean-freight" }),
}));

vi.mock("next/link", () => ({
  default: ({ children, href }: { children: React.ReactNode; href: string }) => (
    <a href={href}>{children}</a>
  ),
}));

describe("ServiceDetailPage", () => {
  it("renders service title", () => {
    render(<ServiceDetailPage params={{ slug: "air-ocean-freight" }} />);
    const headings = screen.getAllByRole("heading");
    const titles = headings.filter(h => h.textContent?.includes("Air & Ocean Freight"));
    expect(titles.length).toBeGreaterThan(0);
  });

  it("renders service description", () => {
    render(<ServiceDetailPage params={{ slug: "air-ocean-freight" }} />);
    expect(screen.getByText(/full-container, less-than-container/i)).toBeInTheDocument();
  });

  it("renders capabilities list", () => {
    render(<ServiceDetailPage params={{ slug: "air-ocean-freight" }} />);
    expect(screen.getByText("Full Container Load (FCL) and Less-than-Container Load (LCL) ocean freight")).toBeInTheDocument();
  });

  it("renders benefits list", () => {
    render(<ServiceDetailPage params={{ slug: "air-ocean-freight" }} />);
    expect(screen.getByText("Competitive rates through volume-based carrier agreements")).toBeInTheDocument();
  });

  it("renders CTA buttons", () => {
    render(<ServiceDetailPage params={{ slug: "air-ocean-freight" }} />);
    expect(screen.getByText("Request a Quote")).toBeInTheDocument();
    expect(screen.getByText("Track a Shipment")).toBeInTheDocument();
  });

  it("renders breadcrumb", () => {
    render(<ServiceDetailPage params={{ slug: "air-ocean-freight" }} />);
    expect(screen.getByText("Home")).toBeInTheDocument();
    expect(screen.getByText("Services")).toBeInTheDocument();
  });

  it("shows 404 for unknown service", () => {
    render(<ServiceDetailPage params={{ slug: "nonexistent" }} />);
    expect(screen.getByText("Service Not Found")).toBeInTheDocument();
    expect(screen.getByText(/the service you're looking for doesn't exist/i)).toBeInTheDocument();
  });
});
