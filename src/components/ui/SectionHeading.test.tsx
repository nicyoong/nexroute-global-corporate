import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import SectionHeading from "./SectionHeading";

describe("SectionHeading", () => {
  it("renders title", () => {
    render(<SectionHeading title="Test Title" />);
    expect(screen.getByRole("heading", { level: 2, name: "Test Title" })).toBeInTheDocument();
  });

  it("renders eyebrow when provided", () => {
    render(<SectionHeading eyebrow="Eyebrow" title="Title" />);
    expect(screen.getByText("Eyebrow")).toBeInTheDocument();
  });

  it("does not render eyebrow when not provided", () => {
    render(<SectionHeading title="Title" />);
    expect(screen.queryByText("Eyebrow")).not.toBeInTheDocument();
  });

  it("renders subtitle when provided", () => {
    render(<SectionHeading title="Title" subtitle="Subtitle text" />);
    expect(screen.getByText("Subtitle text")).toBeInTheDocument();
  });

  it("does not render subtitle when not provided", () => {
    render(<SectionHeading title="Title" />);
    expect(screen.queryByText("Subtitle")).not.toBeInTheDocument();
  });

  it("aligns center by default", () => {
    render(<SectionHeading title="Title" />);
    const container = screen.getByText("Title").closest("div");
    expect(container).toHaveClass("text-center");
  });

  it("aligns left when align is left", () => {
    render(<SectionHeading title="Title" align="left" />);
    const container = screen.getByText("Title").closest("div");
    expect(container).toHaveClass("text-left");
  });

  it("applies custom className", () => {
    render(<SectionHeading title="Title" className="custom-class" />);
    const container = screen.getByText("Title").closest("div");
    expect(container).toHaveClass("custom-class");
  });

  it("sets id when provided", () => {
    render(<SectionHeading title="Title" id="test-id" />);
    expect(screen.getByText("Title").closest("div")).toHaveAttribute("id", "test-id");
  });
});
