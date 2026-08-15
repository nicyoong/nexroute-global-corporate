import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import ChargeableWeightCalculator from "./ChargeableWeightCalculator";

describe("ChargeableWeightCalculator", () => {
  it("renders all input fields", () => {
    render(<ChargeableWeightCalculator />);
    expect(screen.getByLabelText(/length in centimeters/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/width in centimeters/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/height in centimeters/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/actual weight in kilograms/i)).toBeInTheDocument();
  });

  it("shows both freight method buttons", () => {
    render(<ChargeableWeightCalculator />);
    expect(screen.getByRole("button", { name: /air freight/i })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /sea freight/i })).toBeInTheDocument();
  });

  it("defaults to air freight method selected", () => {
    render(<ChargeableWeightCalculator />);
    const airBtn = screen.getByRole("button", { name: /air freight/i });
    const seaBtn = screen.getByRole("button", { name: /sea freight/i });
    expect(airBtn).toHaveAttribute("aria-pressed", "true");
    expect(seaBtn).toHaveAttribute("aria-pressed", "false");
  });

  it("switches to sea freight when clicked", () => {
    render(<ChargeableWeightCalculator />);
    const seaBtn = screen.getByRole("button", { name: /sea freight/i });
    fireEvent.click(seaBtn);
    expect(seaBtn).toHaveAttribute("aria-pressed", "true");
    expect(screen.getByRole("button", { name: /air freight/i })).toHaveAttribute(
      "aria-pressed",
      "false"
    );
  });

  it("shows placeholder result before calculation", () => {
    render(<ChargeableWeightCalculator />);
    expect(screen.getByText(/enter your cargo details/i)).toBeInTheDocument();
  });

  it("calculates dimensional weight correctly for air freight", async () => {
    render(<ChargeableWeightCalculator />);
    const lengthInput = screen.getByLabelText(/length in centimeters/i);
    const widthInput = screen.getByLabelText(/width in centimeters/i);
    const heightInput = screen.getByLabelText(/height in centimeters/i);
    const weightInput = screen.getByLabelText(/actual weight in kilograms/i);
    const calcBtn = screen.getByRole("button", { name: /calculate weight/i });

    // 100*100*100/5000 = 200 kg dimensional weight
    fireEvent.change(lengthInput, { target: { value: "100" } });
    fireEvent.change(widthInput, { target: { value: "100" } });
    fireEvent.change(heightInput, { target: { value: "100" } });
    fireEvent.change(weightInput, { target: { value: "50" } });
    fireEvent.click(calcBtn);

    await waitFor(() => {
      expect(screen.getByText(/billed by volume/i)).toBeInTheDocument();
    });
  });

  it("uses dimensional weight when it exceeds actual weight", async () => {
    render(<ChargeableWeightCalculator />);
    const lengthInput = screen.getByLabelText(/length in centimeters/i);
    const widthInput = screen.getByLabelText(/width in centimeters/i);
    const heightInput = screen.getByLabelText(/height in centimeters/i);
    const weightInput = screen.getByLabelText(/actual weight in kilograms/i);
    const calcBtn = screen.getByRole("button", { name: /calculate weight/i });

    // 200*200*200/5000 = 1600 kg dimensional weight
    fireEvent.change(lengthInput, { target: { value: "200" } });
    fireEvent.change(widthInput, { target: { value: "200" } });
    fireEvent.change(heightInput, { target: { value: "200" } });
    fireEvent.change(weightInput, { target: { value: "50" } });
    fireEvent.click(calcBtn);

    await waitFor(() => {
      expect(screen.getByText(/billed by volume/i)).toBeInTheDocument();
    });
  });

  it("calculates dimensional weight for sea freight", async () => {
    render(<ChargeableWeightCalculator />);
    const seaBtn = screen.getByRole("button", { name: /sea freight/i });
    fireEvent.click(seaBtn);

    const lengthInput = screen.getByLabelText(/length in centimeters/i);
    const widthInput = screen.getByLabelText(/width in centimeters/i);
    const heightInput = screen.getByLabelText(/height in centimeters/i);
    const weightInput = screen.getByLabelText(/actual weight in kilograms/i);
    const calcBtn = screen.getByRole("button", { name: /calculate weight/i });

    // 100*100*100/1000 = 1000 kg dimensional weight
    fireEvent.change(lengthInput, { target: { value: "100" } });
    fireEvent.change(widthInput, { target: { value: "100" } });
    fireEvent.change(heightInput, { target: { value: "100" } });
    fireEvent.change(weightInput, { target: { value: "500" } });
    fireEvent.click(calcBtn);

    await waitFor(() => {
      expect(screen.getByText(/billed by volume/i)).toBeInTheDocument();
    });
  });

  it("shows formula correct for air freight", async () => {
    render(<ChargeableWeightCalculator />);
    const lengthInput = screen.getByLabelText(/length in centimeters/i);
    const widthInput = screen.getByLabelText(/width in centimeters/i);
    const heightInput = screen.getByLabelText(/height in centimeters/i);
    const weightInput = screen.getByLabelText(/actual weight in kilograms/i);
    const calcBtn = screen.getByRole("button", { name: /calculate weight/i });

    fireEvent.change(lengthInput, { target: { value: "100" } });
    fireEvent.change(widthInput, { target: { value: "100" } });
    fireEvent.change(heightInput, { target: { value: "100" } });
    fireEvent.change(weightInput, { target: { value: "50" } });
    fireEvent.click(calcBtn);

    await waitFor(() => {
      expect(screen.getByText(/L×W×H ÷ 5000/)).toBeInTheDocument();
    });
  });

  it("shows formula correct for sea freight", async () => {
    render(<ChargeableWeightCalculator />);
    const seaBtn = screen.getByRole("button", { name: /sea freight/i });
    fireEvent.click(seaBtn);

    const lengthInput = screen.getByLabelText(/length in centimeters/i);
    const widthInput = screen.getByLabelText(/width in centimeters/i);
    const heightInput = screen.getByLabelText(/height in centimeters/i);
    const weightInput = screen.getByLabelText(/actual weight in kilograms/i);
    const calcBtn = screen.getByRole("button", { name: /calculate weight/i });

    fireEvent.change(lengthInput, { target: { value: "100" } });
    fireEvent.change(widthInput, { target: { value: "100" } });
    fireEvent.change(heightInput, { target: { value: "100" } });
    fireEvent.change(weightInput, { target: { value: "50" } });
    fireEvent.click(calcBtn);

    await waitFor(() => {
      expect(screen.getByText(/L×W×H ÷ 1000/)).toBeInTheDocument();
    });
  });

  it("resets form when Reset is clicked", async () => {
    render(<ChargeableWeightCalculator />);
    const calcBtn = screen.getByRole("button", { name: /calculate weight/i });
    const resetBtn = screen.getByRole("button", { name: /reset/i });

    const lengthInput = screen.getByLabelText(/length in centimeters/i);
    const weightInput = screen.getByLabelText(/actual weight in kilograms/i);
    fireEvent.change(lengthInput, { target: { value: "100" } });
    fireEvent.change(weightInput, { target: { value: "50" } });
    fireEvent.click(calcBtn);

    await waitFor(() => {
      expect(screen.getByText(/calculation results/i)).toBeInTheDocument();
    });

    fireEvent.click(resetBtn);
    expect(screen.getByText(/enter your cargo details/i)).toBeInTheDocument();
  });

  it("resets result when switching freight method", async () => {
    render(<ChargeableWeightCalculator />);
    const calcBtn = screen.getByRole("button", { name: /calculate weight/i });
    const seaBtn = screen.getByRole("button", { name: /sea freight/i });

    const lengthInput = screen.getByLabelText(/length in centimeters/i);
    const weightInput = screen.getByLabelText(/actual weight in kilograms/i);
    fireEvent.change(lengthInput, { target: { value: "100" } });
    fireEvent.change(weightInput, { target: { value: "50" } });
    fireEvent.click(calcBtn);
    
    await waitFor(() => {
      expect(screen.getByText(/calculation results/i)).toBeInTheDocument();
    });

    fireEvent.click(seaBtn);
    expect(screen.getByText(/enter your cargo details/i)).toBeInTheDocument();
  });

  it("returns 0 dimensional weight when inputs are empty", async () => {
    render(<ChargeableWeightCalculator />);
    const calcBtn = screen.getByRole("button", { name: /calculate weight/i });
    const weightInput = screen.getByLabelText(/actual weight in kilograms/i);

    fireEvent.change(weightInput, { target: { value: "50" } });
    fireEvent.click(calcBtn);

    await waitFor(() => {
      expect(screen.getByText(/billed by actual weight/i)).toBeInTheDocument();
    });
  });

  it("handles decimal inputs correctly", async () => {
    render(<ChargeableWeightCalculator />);
    const lengthInput = screen.getByLabelText(/length in centimeters/i);
    const widthInput = screen.getByLabelText(/width in centimeters/i);
    const heightInput = screen.getByLabelText(/height in centimeters/i);
    const weightInput = screen.getByLabelText(/actual weight in kilograms/i);
    const calcBtn = screen.getByRole("button", { name: /calculate weight/i });

    fireEvent.change(lengthInput, { target: { value: "50.5" } });
    fireEvent.change(widthInput, { target: { value: "40.2" } });
    fireEvent.change(heightInput, { target: { value: "30.1" } });
    fireEvent.change(weightInput, { target: { value: "10" } });
    fireEvent.click(calcBtn);

    await waitFor(() => {
      expect(screen.getByText(/billed by volume/i)).toBeInTheDocument();
    });
  });

  it("shows info tooltip icons", () => {
    render(<ChargeableWeightCalculator />);
    const infoIcons = document.querySelectorAll('[aria-hidden="true"]');
    expect(infoIcons.length).toBeGreaterThan(0);
  });
});
