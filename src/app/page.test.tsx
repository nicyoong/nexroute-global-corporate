import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import Home from "./page";

vi.mock("next/link", () => ({
  default: ({ children, href }: { children: React.ReactNode; href: string }) => (
    <a href={href}>{children}</a>
  ),
}));

// Mock all framer-motion components
vi.mock("framer-motion", () => ({
  motion: {
    div: ({ children, ...props }: Record<string, unknown>) =>
      require("react").createElement("div", props, children),
    h1: ({ children, ...props }: Record<string, unknown>) =>
      require("react").createElement("h1", props, children),
    h2: ({ children, ...props }: Record<string, unknown>) =>
      require("react").createElement("h2", props, children),
    h3: ({ children, ...props }: Record<string, unknown>) =>
      require("react").createElement("h3", props, children),
    p: ({ children, ...props }: Record<string, unknown>) =>
      require("react").createElement("p", props, children),
    span: ({ children, ...props }: Record<string, unknown>) =>
      require("react").createElement("span", props, children),
    svg: ({ children, ...props }: Record<string, unknown>) =>
      require("react").createElement("svg", props, children),
    path: ({ ...props }: Record<string, unknown>) =>
      require("react").createElement("path", props),
    circle: ({ ...props }: Record<string, unknown>) =>
      require("react").createElement("circle", props),
    animateMotion: ({ children, ...props }: Record<string, unknown>) =>
      require("react").createElement("animateMotion", props, children),
    animate: ({ ...props }: Record<string, unknown>) =>
      require("react").createElement("animate", props),
    ul: ({ children, ...props }: Record<string, unknown>) =>
      require("react").createElement("ul", props, children),
    li: ({ children, ...props }: Record<string, unknown>) =>
      require("react").createElement("li", props, children),
    button: ({ children, ...props }: Record<string, unknown>) =>
      require("react").createElement("button", props, children),
    blockquote: ({ children, ...props }: Record<string, unknown>) =>
      require("react").createElement("blockquote", props, children),
    ol: ({ children, ...props }: Record<string, unknown>) =>
      require("react").createElement("ol", props, children),
    img: ({ ...props }: Record<string, unknown>) =>
      require("react").createElement("img", props),
  },
  AnimatePresence: ({ children }: { children: React.ReactNode }) => children,
}));

describe("Home", () => {
  it("renders all homepage sections", () => {
    render(<Home />);
    expect(screen.getByText(/freight that moves at the speed/i)).toBeInTheDocument();
    expect(screen.getByText("12M+")).toBeInTheDocument();
    expect(screen.getByText("Air & Ocean Freight")).toBeInTheDocument();
    expect(screen.getByText("Manufacturing")).toBeInTheDocument();
    // Use a more flexible search for the how-it-works heading
    expect(screen.getByText(/inquiry to delivery/i)).toBeInTheDocument();
  });

  it("renders CTA section", () => {
    render(<Home />);
    // The CTA heading is "Ready to Optimize Your Supply Chain?"
    // Just check that the CTA section renders
    expect(screen.getByRole("link", { name: /request a custom quote/i })).toBeInTheDocument();
  });
});
