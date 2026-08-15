import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import Layout from "./layout";

vi.mock("next/link", () => ({
  default: ({ children, href }: { children: React.ReactNode; href: string }) => (
    <a href={href}>{children}</a>
  ),
}));

vi.mock("@/components/layout/TopBar", () => ({ default: () => <div data-testid="topbar">TopBar</div> }));
vi.mock("@/components/layout/Navbar", () => ({ default: () => <div data-testid="navbar">Navbar</div> }));
vi.mock("@/components/layout/Footer", () => ({ default: () => <div data-testid="footer">Footer</div> }));
vi.mock("@/components/sections/Hero", () => ({ default: () => <div data-testid="hero">Hero</div> }));
vi.mock("@/components/sections/ClientLogos", () => ({ default: () => <div data-testid="clientlogos">ClientLogos</div> }));
vi.mock("@/components/sections/Stats", () => ({ default: () => <div data-testid="stats">Stats</div> }));
vi.mock("@/components/sections/Services", () => ({ default: () => <div data-testid="services">Services</div> }));
vi.mock("@/components/sections/GlobalNetwork", () => ({ default: () => <div data-testid="globalnetwork">GlobalNetwork</div> }));
vi.mock("@/components/sections/HowItWorks", () => ({ default: () => <div data-testid="howitworks">HowItWorks</div> }));
vi.mock("@/components/sections/Industries", () => ({ default: () => <div data-testid="industries">Industries</div> }));
vi.mock("@/components/sections/Testimonials", () => ({ default: () => <div data-testid="testimonials">Testimonials</div> }));
vi.mock("@/components/sections/CTABand", () => ({ default: () => <div data-testid="ctaband">CTABand</div> }));

// Mock font imports
vi.mock("next/font/google", () => ({
  Inter: () => ({ variable: "--font-inter" }),
  Sora: () => ({ variable: "--font-sora" }),
}));

describe("RootLayout", () => {
  it("renders children", () => {
    render(
      <Layout>
        <main>Test Content</main>
      </Layout>
    );
    expect(screen.getByText("Test Content")).toBeInTheDocument();
  });

  it("renders skip link", () => {
    render(<Layout><main>Content</main></Layout>);
    expect(screen.getByText("Skip to main content")).toBeInTheDocument();
  });

  it("renders main content with id", () => {
    render(<Layout><main>Content</main></Layout>);
    expect(document.querySelector('main[id="main-content"]')).toBeInTheDocument();
  });

  it("renders TopBar, Navbar, and Footer", () => {
    render(<Layout><main>Content</main></Layout>);
    expect(screen.getByTestId("topbar")).toBeInTheDocument();
    expect(screen.getByTestId("navbar")).toBeInTheDocument();
    expect(screen.getByTestId("footer")).toBeInTheDocument();
  });
});
