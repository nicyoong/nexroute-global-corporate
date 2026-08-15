import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import ArticlePage from "./page";

vi.mock("next/link", () => ({
  default: ({ children, href }: { children: React.ReactNode; href: string }) => (
    <a href={href}>{children}</a>
  ),
}));

describe("ArticlePage", () => {
  it("renders post-brexit-guide article", () => {
    render(<ArticlePage params={{ slug: "post-brexit-guide" }} />);
    expect(screen.getAllByText(/navigating post-brexit trade/i).length).toBeGreaterThan(0);
    expect(screen.getByText(/trade compliance/i)).toBeInTheDocument();
  });

  it("renders cold-chain-excellence article", () => {
    render(<ArticlePage params={{ slug: "cold-chain-excellence" }} />);
    expect(screen.getAllByText(/cold chain excellence/i).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/maintaining/i).length).toBeGreaterThan(0);
  });

  it("renders future-last-mile article", () => {
    render(<ArticlePage params={{ slug: "future-last-mile" }} />);
    expect(screen.getAllByText(/the future of last-mile/i).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/electric/i).length).toBeGreaterThan(0);
  });

  it("renders incoterms-2020 article", () => {
    render(<ArticlePage params={{ slug: "incoterms-2020" }} />);
    expect(screen.getAllByText(/incoterms 2020/i).length).toBeGreaterThan(0);
    expect(screen.getByText(/resources/i)).toBeInTheDocument();
  });

  it("renders red-sea-crisis article", () => {
    render(<ArticlePage params={{ slug: "red-sea-crisis" }} />);
    expect(screen.getAllByText(/supply chain resilience/i).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/red sea/i).length).toBeGreaterThan(0);
  });

  it("renders digital-twins article", () => {
    render(<ArticlePage params={{ slug: "digital-twins" }} />);
    expect(screen.getAllByText(/digital twins in logistics/i).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/simulating/i).length).toBeGreaterThan(0);
  });

  it("shows CTA section", () => {
    render(<ArticlePage params={{ slug: "post-brexit-guide" }} />);
    expect(screen.getByText(/ready to optimize your supply chain/i)).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /request a quote/i })).toBeInTheDocument();
  });

  it("shows breadcrumb navigation", () => {
    render(<ArticlePage params={{ slug: "post-brexit-guide" }} />);
    expect(screen.getByText("Home")).toBeInTheDocument();
    expect(screen.getByText("Insights")).toBeInTheDocument();
  });
});
