import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import NetworkPage from "./page";

vi.mock("next/link", () => ({
  default: ({ children, href }: { children: React.ReactNode; href: string }) => (
    <a href={href}>{children}</a>
  ),
}));

describe("NetworkPage", () => {
  it("renders page heading", () => {
    render(<NetworkPage />);
    expect(screen.getByText("Our Global Network")).toBeInTheDocument();
  });

  it("renders hub cards", () => {
    render(<NetworkPage />);
    expect(screen.getByText("North America")).toBeInTheDocument();
    expect(screen.getByText("Europe")).toBeInTheDocument();
    expect(screen.getByText("Asia Pacific")).toBeInTheDocument();
    expect(screen.getByText("Middle East")).toBeInTheDocument();
  });

  it("renders hub cities", () => {
    render(<NetworkPage />);
    expect(screen.getByText("Los Angeles, CA")).toBeInTheDocument();
    expect(screen.getByText("Rotterdam, Netherlands")).toBeInTheDocument();
    expect(screen.getByText("Singapore")).toBeInTheDocument();
    expect(screen.getByText("Jebel Ali, UAE")).toBeInTheDocument();
  });

  it("renders coverage stats", () => {
    render(<NetworkPage />);
    expect(screen.getByText("40+")).toBeInTheDocument();
    expect(screen.getByText("4")).toBeInTheDocument();
    expect(screen.getByText("150+")).toBeInTheDocument();
    expect(screen.getByText("2,500+")).toBeInTheDocument();
  });

  it("renders breadcrumb", () => {
    render(<NetworkPage />);
    expect(screen.getByText("Home")).toBeInTheDocument();
    expect(screen.getByText("Network")).toBeInTheDocument();
  });
});
