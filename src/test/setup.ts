import '@testing-library/jest-dom/vitest';
import { vi } from 'vitest';
import React from 'react';
import { render, screen } from '@testing-library/react';

// Mock next/link to render anchor tags
vi.mock('next/link', () => ({
  default: ({
    href,
    children,
    className,
    'aria-label': ariaLabel,
    target,
    rel,
  }: any) =>
    React.createElement('a', {
      href,
      className,
      'aria-label': ariaLabel,
      target,
      rel,
      children,
    }),
}));

// Mock next/font/google
vi.mock('next/font/google', () => ({
  Inter: () => ({ variable: '--font-inter', className: '' }),
  Sora: () => ({ variable: '--font-sora', className: '' }),
}));

// Mock matchMedia for jsdom
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: vi.fn().mockImplementation((query: string) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: vi.fn(),
    removeListener: vi.fn(),
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  })),
});

// Mock scrollIntoView
HTMLElement.prototype.scrollIntoView = vi.fn();

// Mock IntersectionObserver
window.IntersectionObserver = class IntersectionObserver {
  constructor() {}
  disconnect() {}
  observe() {}
  takeRecords() { return []; }
  unobserve() {}
} as any;
