import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import AboutPage from "./page";

vi.mock("next/link", () => ({
  default: ({ children, href }: { children: React.ReactNode; href: string }) => (
    <a href={href}>{children}</a>
  ),
}));

describe("AboutPage", () => {
  it("renders page heading", () => {
    render(<AboutPage />);
    expect(screen.getByText("About NexRoute Global")).toBeInTheDocument();
  });

  it("renders company description", () => {
    render(<AboutPage />);
    expect(screen.getByText(/we're a global logistics company/i)).toBeInTheDocument();
  });

  it("renders leadership team", () => {
    render(<AboutPage />);
    expect(screen.getByText("Elena Vasquez")).toBeInTheDocument();
    expect(screen.getByText("David Chen")).toBeInTheDocument();
    expect(screen.getByText("Sarah Johansson")).toBeInTheDocument();
    expect(screen.getByText("Michael Okafor")).toBeInTheDocument();
  });

  it("renders leadership titles", () => {
    render(<AboutPage />);
    expect(screen.getByText("Chief Executive Officer")).toBeInTheDocument();
    expect(screen.getByText("Chief Operating Officer")).toBeInTheDocument();
    expect(screen.getByText("Chief Technology Officer")).toBeInTheDocument();
    expect(screen.getByText("Chief Commercial Officer")).toBeInTheDocument();
  });

  it("renders company values", () => {
    render(<AboutPage />);
    expect(screen.getByText("Reliability")).toBeInTheDocument();
    expect(screen.getByText("Transparency")).toBeInTheDocument();
    expect(screen.getByText("Compliance")).toBeInTheDocument();
    expect(screen.getByText("Innovation")).toBeInTheDocument();
  });

  it("renders breadcrumb navigation", () => {
    render(<AboutPage />);
    expect(screen.getByText("Home")).toBeInTheDocument();
    expect(screen.getByText("About")).toBeInTheDocument();
  });

  it("renders CTA section", () => {
    render(<AboutPage />);
    expect(screen.getByText("Ready to Partner With Us?")).toBeInTheDocument();
    expect(screen.getByText("Request a Quote")).toBeInTheDocument();
    expect(screen.getByText("Explore Services")).toBeInTheDocument();
  });
});
