import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import Hero from "./Hero";

vi.mock("next/link", () => ({
  default: ({ children, href }: { children: React.ReactNode; href: string }) => (
    <a href={href}>{children}</a>
  ),
}));

describe("Hero", () => {
  it("renders hero heading", () => {
    render(<Hero />);
    expect(screen.getByRole("heading", { level: 1, name: /freight that moves at the speed/i })).toBeInTheDocument();
  });

  it("renders hero description", () => {
    render(<Hero />);
    expect(screen.getByText(/nexroute global connects 40\+ countries/i)).toBeInTheDocument();
  });

  it("renders Get a Quote button", () => {
    render(<Hero />);
    expect(screen.getByRole("link", { name: /get a quote/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /get a quote/i })).toHaveAttribute("href", "/contact");
  });

  it("renders Track Shipment button", () => {
    render(<Hero />);
    expect(screen.getByRole("link", { name: /track shipment/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /track shipment/i })).toHaveAttribute("href", "/track");
  });

  it("renders trusted by text", () => {
    render(<Hero />);
    expect(screen.getByText(/trusted by/i)).toBeInTheDocument();
    expect(screen.getByText(/300\+ enterprises/i)).toBeInTheDocument();
  });

  it("renders section with correct aria-labelledby", () => {
    render(<Hero />);
    const section = document.querySelector('section[aria-labelledby="hero-heading"]');
    expect(section).toBeInTheDocument();
  });
});
