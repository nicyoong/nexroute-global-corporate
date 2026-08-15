import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import InsightsPage from "./page";

vi.mock("next/link", () => ({
  default: ({ children, href }: { children: React.ReactNode; href: string }) => (
    <a href={href}>{children}</a>
  ),
}));

describe("InsightsPage", () => {
  it("renders page heading", () => {
    render(<InsightsPage />);
    expect(screen.getByText("Insights & Resources")).toBeInTheDocument();
  });

  it("renders article cards", () => {
    render(<InsightsPage />);
    expect(screen.getByText(/navigating post-brexit trade/i)).toBeInTheDocument();
    expect(screen.getByText(/cold chain excellence/i)).toBeInTheDocument();
    expect(screen.getByText(/the future of last-mile/i)).toBeInTheDocument();
  });

  it("renders category filters", () => {
    render(<InsightsPage />);
    expect(screen.getByRole("group", { name: /filter by category/i })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /all/i })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /trade compliance/i })).toBeInTheDocument();
  });

  it("renders breadcrumb", () => {
    render(<InsightsPage />);
    expect(screen.getByText("Home")).toBeInTheDocument();
    expect(screen.getByText("Insights")).toBeInTheDocument();
  });
});
