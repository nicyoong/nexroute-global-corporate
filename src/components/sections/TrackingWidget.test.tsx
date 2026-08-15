import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import TrackingWidget from "./TrackingWidget";

describe("TrackingWidget", () => {
  it("renders tracking input and button", () => {
    render(<TrackingWidget />);
    expect(screen.getByPlaceholderText(/enter tracking id/i)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /track/i })).toBeInTheDocument();
  });

  it("shows error when tracking ID is empty", () => {
    render(<TrackingWidget />);
    const button = screen.getByRole("button", { name: /track/i });
    fireEvent.click(button);
    expect(screen.getByRole("alert")).toBeInTheDocument();
  });

  it("shows error for invalid format", () => {
    render(<TrackingWidget />);
    const input = screen.getByPlaceholderText(/enter tracking id/i);
    fireEvent.change(input, { target: { value: "INVALID" } });
    const button = screen.getByRole("button", { name: /track/i });
    fireEvent.click(button);
    expect(screen.getByText(/invalid format/i)).toBeInTheDocument();
  });

  it("shows loading state when tracking", async () => {
    render(<TrackingWidget />);
    const input = screen.getByPlaceholderText(/enter tracking id/i);
    fireEvent.change(input, { target: { value: "NX-123456" } });
    const button = screen.getByRole("button", { name: /track/i });
    fireEvent.click(button);
    
    await waitFor(() => {
      expect(screen.getByLabelText(/loading tracking information/i)).toBeInTheDocument();
    }, { timeout: 5000 });
  });

  it("displays exception states for demo tracking IDs", async () => {
    render(<TrackingWidget />);
    const input = screen.getByPlaceholderText(/enter tracking id/i);
    fireEvent.change(input, { target: { value: "NX-000001" } });
    const button = screen.getByRole("button", { name: /track/i });
    fireEvent.click(button);
    
    await waitFor(() => {
      expect(screen.getByText(/customs/i)).toBeInTheDocument();
    }, { timeout: 5000 });
  });
});
