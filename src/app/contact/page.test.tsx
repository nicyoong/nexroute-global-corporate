import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import ContactPageRoute from "./page";

vi.mock("next/link", () => ({
  default: ({ children, href }: { children: React.ReactNode; href: string }) => (
    <a href={href}>{children}</a>
  ),
}));

describe("ContactPageRoute", () => {
  it("renders the contact page component", () => {
    render(<ContactPageRoute />);
    expect(screen.getByText(/request a quote/i)).toBeInTheDocument();
  });

  it("renders contact form fields", () => {
    render(<ContactPageRoute />);
    expect(screen.getByLabelText(/name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
  });
});
