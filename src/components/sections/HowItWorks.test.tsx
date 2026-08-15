import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import HowItWorks from "./HowItWorks";

describe("HowItWorks", () => {
  it("renders section heading", () => {
    render(<HowItWorks />);
    expect(screen.getByText("From inquiry to delivery in four steps")).toBeInTheDocument();
  });

  it("renders all four steps", () => {
    render(<HowItWorks />);
    expect(screen.getByText("01")).toBeInTheDocument();
    expect(screen.getByText("02")).toBeInTheDocument();
    expect(screen.getByText("03")).toBeInTheDocument();
    expect(screen.getByText("04")).toBeInTheDocument();
  });

  it("renders step titles", () => {
    render(<HowItWorks />);
    expect(screen.getByText("Request a Quote")).toBeInTheDocument();
    expect(screen.getByText("Book & Confirm")).toBeInTheDocument();
    expect(screen.getByText("Track in Real Time")).toBeInTheDocument();
    expect(screen.getByText("Deliver & Document")).toBeInTheDocument();
  });

  it("renders step descriptions", () => {
    render(<HowItWorks />);
    expect(screen.getByText(/tell us about your cargo/i)).toBeInTheDocument();
    expect(screen.getByText(/select your service level/i)).toBeInTheDocument();
    expect(screen.getByText(/monitor every shipment/i)).toBeInTheDocument();
    expect(screen.getByText(/your cargo arrives on time/i)).toBeInTheDocument();
  });
});
