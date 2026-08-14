import '@testing-library/jest-dom/vitest';
import { afterEach } from 'vitest';
import { cleanup } from '@testing-library/react';

// Mock IntersectionObserver
class MockIntersectionObserver {
  observe = vi.fn();
  disconnect = vi.fn();
  unobserve = vi.fn();
}
vi.stubGlobal('IntersectionObserver', MockIntersectionObserver);

// Mock requestAnimationFrame
vi.stubGlobal('requestAnimationFrame', ((cb: FrameRequestCallback) => setTimeout(cb, 0)) as unknown as typeof requestAnimationFrame);
vi.stubGlobal('cancelAnimationFrame', ((id) => clearTimeout(id)) as unknown as typeof cancelAnimationFrame);

// Mock next/font/google - intercept module
vi.doMock('next/font/google', () => {
  const originalModule = vi.requireActual('next/font/google');
  return {
    ...originalModule,
    Inter: () => ({ className: 'inter', variable: '--font-inter' }),
    Sora: () => ({ className: 'sora', variable: '--font-sora' }),
  };
});

afterEach(() => {
  cleanup();
  vi.resetModules();
});
