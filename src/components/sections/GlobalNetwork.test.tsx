import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import GlobalNetwork from "./GlobalNetwork";

describe("GlobalNetwork", () => {
  it("renders section heading", () => {
    render(<GlobalNetwork />);
    expect(screen.getByText("Four Regional Hubs, Worldwide Reach")).toBeInTheDocument();
  });

  it("renders all hub regions", () => {
    render(<GlobalNetwork />);
    expect(screen.getByText("North America")).toBeInTheDocument();
    expect(screen.getByText("Europe")).toBeInTheDocument();
    expect(screen.getByText("Asia Pacific")).toBeInTheDocument();
    expect(screen.getByText("Middle East")).toBeInTheDocument();
  });

  it("renders hub cities", () => {
    render(<GlobalNetwork />);
    expect(screen.getByText("Los Angeles, CA")).toBeInTheDocument();
    expect(screen.getByText("Rotterdam, Netherlands")).toBeInTheDocument();
    expect(screen.getByText("Singapore")).toBeInTheDocument();
    expect(screen.getByText("Jebel Ali, UAE")).toBeInTheDocument();
  });

  it("renders hub description", () => {
    render(<GlobalNetwork />);
    expect(screen.getByText(/each hub operates as a multi-modal interchange/i)).toBeInTheDocument();
  });
});
