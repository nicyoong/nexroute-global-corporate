import "@testing-library/jest-dom/vitest";
import { afterEach } from "vitest";
import { cleanup } from "@testing-library/react";

// Mock IntersectionObserver for framer-motion
class MockIntersectionObserver {
  observe = vi.fn();
  disconnect = vi.fn();
  unobserve = vi.fn();
  readonly rootMargin?: string;
  readonly thresholds?: number[];
  
  constructor(callback: IntersectionObserverCallback, options?: IntersectionObserverInit) {
    this.rootMargin = options?.rootMargin;
    this.thresholds = options?.thresholds;
  }
  
  takeRecords = () => [];
}

vi.stubGlobal("IntersectionObserver", MockIntersectionObserver);

// Mock requestAnimationFrame for animations
vi.stubGlobal("requestAnimationFrame", ((callback: FrameRequestCallback) => {
  return setTimeout(callback, 16);
}) as unknown as typeof requestAnimationFrame);

vi.stubGlobal("cancelAnimationFrame", ((id: number) => {
  clearTimeout(id);
}) as unknown as typeof cancelAnimationFrame);

afterEach(() => {
  cleanup();
  vi.clearAllTimers();
});
