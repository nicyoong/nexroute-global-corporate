import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import ClientLogos from "./ClientLogos";

describe("ClientLogos", () => {
  beforeEach(() => {
    vi.stubGlobal("requestAnimationFrame", (cb: FrameRequestCallback) => setTimeout(cb, 0) as unknown as number);
    vi.stubGlobal("cancelAnimationFrame", (id: number) => clearTimeout(id));
  });

  afterEach(() => {
    vi.unstubAllGlobals();
  });

  it("renders client names", () => {
    render(<ClientLogos />);
    // Client names appear twice due to carousel duplication
    const meridianFoods = screen.getAllByText("Meridian Foods");
    expect(meridianFoods.length).toBeGreaterThan(0);
    const atlasPharma = screen.getAllByText("Atlas Pharma");
    expect(atlasPharma.length).toBeGreaterThan(0);
    expect(screen.getAllByText("Kite Retail").length).toBeGreaterThan(0);
    expect(screen.getAllByText("Vantor Automotive").length).toBeGreaterThan(0);
    expect(screen.getAllByText("Helios Electronics").length).toBeGreaterThan(0);
  });

  it("has accessible label", () => {
    render(<ClientLogos />);
    expect(screen.getByText(/trusted by leading global brands/i)).toBeInTheDocument();
  });
});
