import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import TrackPage from "./page";

vi.mock("next/link", () => ({
  default: ({ children, href }: { children: React.ReactNode; href: string }) => (
    <a href={href}>{children}</a>
  ),
}));

vi.mock("@/components/sections/TrackingWidget", () => ({
  default: () => <div data-testid="tracking-widget">Tracking Widget</div>
}));

describe("TrackPage", () => {
  it("renders the tracking widget", () => {
    render(<TrackPage />);
    expect(screen.getByText(/track your shipment/i)).toBeInTheDocument();
    expect(screen.getByTestId("tracking-widget")).toBeInTheDocument();
  });

  it("renders page heading", () => {
    render(<TrackPage />);
    expect(screen.getByRole("heading", { level: 1 })).toBeInTheDocument();
  });

  it("renders breadcrumb", () => {
    render(<TrackPage />);
    expect(screen.getByText("Home")).toBeInTheDocument();
    expect(screen.getByText("Track Shipment")).toBeInTheDocument();
  });
});
