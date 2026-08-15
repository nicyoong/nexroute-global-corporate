import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import IndustriesPage from "./page";

vi.mock("next/link", () => ({
  default: ({ children, href }: { children: React.ReactNode; href: string }) => (
    <a href={href}>{children}</a>
  ),
}));

describe("IndustriesPage", () => {
  it("renders page heading", () => {
    render(<IndustriesPage />);
    expect(screen.getByText("Industries We Serve")).toBeInTheDocument();
  });

  it("renders all industry cards", () => {
    render(<IndustriesPage />);
    expect(screen.getByText("Manufacturing")).toBeInTheDocument();
    expect(screen.getByText("Healthcare")).toBeInTheDocument();
    expect(screen.getByText("Retail & E-commerce")).toBeInTheDocument();
    expect(screen.getByText("Automotive")).toBeInTheDocument();
  });

  it("renders industry features", () => {
    render(<IndustriesPage />);
    expect(screen.getByText("JIT and sequenced parts delivery")).toBeInTheDocument();
    expect(screen.getByText("GDP and FDA compliance")).toBeInTheDocument();
    expect(screen.getByText("E-commerce fulfillment")).toBeInTheDocument();
    expect(screen.getByText("Kitting and line-side delivery")).toBeInTheDocument();
  });

  it("renders breadcrumb", () => {
    render(<IndustriesPage />);
    expect(screen.getByText("Home")).toBeInTheDocument();
    expect(screen.getByText("Industries")).toBeInTheDocument();
  });
});
