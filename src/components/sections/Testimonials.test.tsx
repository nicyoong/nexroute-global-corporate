import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Testimonials from "./Testimonials";

describe("Testimonials", () => {
  it("renders section heading", () => {
    render(<Testimonials />);
    expect(screen.getByText("Trusted by Supply Chain Leaders")).toBeInTheDocument();
  });

  it("renders all testimonials", () => {
    render(<Testimonials />);
    expect(screen.getByText(/nexroute redesigned our pan-asian/i)).toBeInTheDocument();
    expect(screen.getByText(/we ship over 12,000 temperature-sensitive/i)).toBeInTheDocument();
    expect(screen.getByText(/when our semiconductor fabrication/i)).toBeInTheDocument();
  });

  it("renders testimonial authors", () => {
    render(<Testimonials />);
    expect(screen.getByText("Margaret Chen")).toBeInTheDocument();
    expect(screen.getByText("Dr. Rajesh Malhotra")).toBeInTheDocument();
    expect(screen.getByText("Sarah Johansson")).toBeInTheDocument();
  });

  it("renders star ratings", () => {
    render(<Testimonials />);
    const ratings = document.querySelectorAll('[aria-label^="Rating:"]');
    expect(ratings).toHaveLength(3);
  });
});
