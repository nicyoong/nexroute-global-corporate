import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import TopBar from "./TopBar";

describe("TopBar", () => {
  it("renders contact phone number", () => {
    render(<TopBar />);
    expect(screen.getByText("+1 (800) 555-ROUTE")).toBeInTheDocument();
  });

  it("renders contact email", () => {
    render(<TopBar />);
    expect(screen.getByText("operations@nexrouteglobal.com")).toBeInTheDocument();
  });

  it("renders certification badge", () => {
    render(<TopBar />);
    expect(screen.getByText("ISO 9001:2015 Certified")).toBeInTheDocument();
  });

  it("renders operating statement", () => {
    render(<TopBar />);
    expect(screen.getByText(/serving 40\+ countries/i)).toBeInTheDocument();
    expect(screen.getByText(/24\/7 operations center/i)).toBeInTheDocument();
  });

  it("has correct role and aria-label", () => {
    render(<TopBar />);
    expect(document.querySelector('[role="complementary"]')).toBeInTheDocument();
    expect(document.querySelector('[aria-label="Contact information bar"]')).toBeInTheDocument();
  });

  it("phone number links to tel:", () => {
    render(<TopBar />);
    const phoneLink = screen.getByText("+1 (800) 555-ROUTE").closest("a");
    expect(phoneLink).toHaveAttribute("href", "tel:+18005557688");
  });

  it("email links to mailto:", () => {
    render(<TopBar />);
    const emailLink = screen.getByText("operations@nexrouteglobal.com").closest("a");
    expect(emailLink).toHaveAttribute("href", "mailto:operations@nexrouteglobal.com");
  });
});
