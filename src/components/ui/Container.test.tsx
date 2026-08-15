import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Container from "./Container";

describe("Container", () => {
  it("renders children", () => {
    render(<Container>Test Content</Container>);
    expect(screen.getByText("Test Content")).toBeInTheDocument();
  });

  it("applies default max-width classes", () => {
    render(<Container>Content</Container>);
    const container = screen.getByText("Content").closest("div");
    expect(container).toHaveClass("max-w-7xl", "mx-auto");
  });

  it("applies custom className", () => {
    render(<Container className="custom-class">Content</Container>);
    const container = screen.getByText("Content").closest("div");
    expect(container).toHaveClass("custom-class");
  });

  it("sets id when provided", () => {
    render(<Container id="test-id">Content</Container>);
    expect(screen.getByText("Content").closest("div")).toHaveAttribute("id", "test-id");
  });

  it("renders as section when as is section", () => {
    render(<Container as="section">Section Content</Container>);
    const el = screen.getByText("Section Content").closest("section");
    expect(el).toBeInTheDocument();
  });

  it("renders as article when as is article", () => {
    render(<Container as="article">Article Content</Container>);
    const el = screen.getByText("Article Content").closest("article");
    expect(el).toBeInTheDocument();
  });
});
