import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Card from "./Card";

describe("Card", () => {
  it("renders as a div by default", () => {
    render(<Card>Card Content</Card>);
    const card = screen.getByText("Card Content").closest("div");
    expect(card).toBeInTheDocument();
    expect(card).toHaveClass("bg-white", "rounded-xl");
  });

  it("renders as a link when href is provided", () => {
    render(<Card href="/test">Link Card</Card>);
    const card = screen.getByText("Link Card").closest("a");
    expect(card).toBeInTheDocument();
    expect(card).toHaveAttribute("href", "/test");
  });

  it("renders as a button when onClick is provided", () => {
    render(<Card onClick={() => {}}>Button Card</Card>);
    const card = screen.getByText("Button Card").closest("button");
    expect(card).toBeInTheDocument();
    expect(card).toHaveAttribute("type", "button");
  });

  it("applies custom className", () => {
    render(<Card className="custom-class">Content</Card>);
    const card = screen.getByText("Content").closest("div");
    expect(card).toHaveClass("custom-class");
  });

  it("sets aria-label when provided", () => {
    render(<Card href="/test" ariaLabel="Custom label">Link Card</Card>);
    expect(screen.getByRole("link", { name: /custom label/i })).toBeInTheDocument();
  });

  it("has hover shadow effect", () => {
    render(<Card>Hover Card</Card>);
    const card = screen.getByText("Hover Card").closest("div");
    expect(card).toHaveClass("hover:shadow-medium");
  });
});
