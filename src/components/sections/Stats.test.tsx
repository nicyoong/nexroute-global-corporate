import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Stats from "./Stats";

describe("Stats", () => {
  it("renders all stats", () => {
    render(<Stats />);
    expect(screen.getByText("12M+")).toBeInTheDocument();
    expect(screen.getByText("99.2%")).toBeInTheDocument();
    expect(screen.getByText("40+")).toBeInTheDocument();
    expect(screen.getByText("24/7")).toBeInTheDocument();
  });

  it("renders stat labels", () => {
    render(<Stats />);
    expect(screen.getByText("Shipments Per Year")).toBeInTheDocument();
    expect(screen.getByText("On-Time Delivery Rate")).toBeInTheDocument();
    expect(screen.getByText("Countries Served")).toBeInTheDocument();
    expect(screen.getByText("Global Control Tower")).toBeInTheDocument();
  });

  it("has sr-only heading", () => {
    render(<Stats />);
    expect(screen.getByText("Company Statistics")).toBeInTheDocument();
  });
});
