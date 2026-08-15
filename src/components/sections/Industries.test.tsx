import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Industries from "./Industries";

describe("Industries", () => {
  it("renders section heading", () => {
    render(<Industries />);
    expect(screen.getByText("Sector-Specialized Logistics")).toBeInTheDocument();
  });

  it("renders all industry cards", () => {
    render(<Industries />);
    expect(screen.getByText("Manufacturing")).toBeInTheDocument();
    expect(screen.getByText("Healthcare")).toBeInTheDocument();
    expect(screen.getByText("Retail & E-Commerce")).toBeInTheDocument();
    expect(screen.getByText("Automotive")).toBeInTheDocument();
  });

  it("renders industry descriptions", () => {
    render(<Industries />);
    expect(screen.getByText(/just-in-sequence parts delivery/i)).toBeInTheDocument();
    expect(screen.getByText(/gdp-compliant cold chain/i)).toBeInTheDocument();
    expect(screen.getByText(/seasonal demand planning/i)).toBeInTheDocument();
    expect(screen.getByText(/jit and sequenced parts delivery/i)).toBeInTheDocument();
  });
});
