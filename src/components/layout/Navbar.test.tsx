import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import Navbar from "./Navbar";

// Mock framer-motion to avoid requestAnimationFrame issues
vi.mock("framer-motion", () => ({
  motion: {
    div: ({ children, ...props }: Record<string, unknown>) =>
      require("react").createElement("div", props, children),
    ul: ({ children, ...props }: Record<string, unknown>) =>
      require("react").createElement("ul", props, children),
    li: ({ children, ...props }: Record<string, unknown>) =>
      require("react").createElement("li", props, children),
    button: ({ children, ...props }: Record<string, unknown>) =>
      require("react").createElement("button", props, children),
  },
  AnimatePresence: ({ children }: { children: React.ReactNode }) => children,
}));

describe("Navbar", () => {
  it("renders the logo and brand name", () => {
    render(<Navbar />);
    expect(screen.getByLabelText(/nexroute global homepage/i)).toBeInTheDocument();
  });

  it("renders desktop navigation links", () => {
    render(<Navbar />);
    expect(screen.getByRole("link", { name: "Services" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Network" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Industries" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Insights" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "About" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Contact" })).toBeInTheDocument();
  });

  it("renders Client Login and Get a Quote buttons", () => {
    render(<Navbar />);
    expect(screen.getByRole("link", { name: /client login/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /get a quote/i })).toBeInTheDocument();
  });

  it("renders mobile menu toggle button", () => {
    render(<Navbar />);
    expect(screen.getByLabelText("Open menu")).toBeInTheDocument();
  });

  it("opens mobile menu when toggle is clicked", () => {
    render(<Navbar />);
    const toggleBtn = screen.getByLabelText("Open menu");
    fireEvent.click(toggleBtn);
    expect(screen.getByRole("dialog", { name: /mobile navigation/i })).toBeInTheDocument();
    // Use getAllByLabelText since there might be multiple "Close menu" buttons
    const closeBtns = screen.getAllByLabelText("Close menu");
    expect(closeBtns.length).toBeGreaterThan(0);
    // Check that at least one Services link exists
    const servicesLinks = screen.getAllByRole("link", { name: "Services" });
    expect(servicesLinks.length).toBeGreaterThan(0);
  });

  it("closes mobile menu when close button is clicked", () => {
    render(<Navbar />);
    const toggleBtn = screen.getByLabelText("Open menu");
    fireEvent.click(toggleBtn);
    expect(screen.getByRole("dialog", { name: /mobile navigation/i })).toBeInTheDocument();
    const closeBtns = screen.getAllByLabelText("Close menu");
    if (closeBtns.length > 0) {
      fireEvent.click(closeBtns[0]);
    }
    expect(screen.queryByRole("dialog", { name: /mobile navigation/i })).not.toBeInTheDocument();
  });

  it("has aria-expanded on mobile toggle", () => {
    render(<Navbar />);
    const toggleBtn = screen.getByLabelText("Open menu");
    expect(toggleBtn).toHaveAttribute("aria-expanded", "false");
    fireEvent.click(toggleBtn);
    expect(toggleBtn).toHaveAttribute("aria-expanded", "true");
  });

  it("has aria-controls on mobile toggle", () => {
    render(<Navbar />);
    const toggleBtn = screen.getByLabelText("Open menu");
    expect(toggleBtn).toHaveAttribute("aria-controls", "mobile-menu");
  });
});
