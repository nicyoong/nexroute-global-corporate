import { SERVICES_DATA } from '@/data/services';

describe('SERVICES_DATA', () => {
  it('has 6 services defined', () => {
    const keys = Object.keys(SERVICES_DATA);
    expect(keys).toHaveLength(6);
  });

  it('has all expected service slugs', () => {
    const keys = Object.keys(SERVICES_DATA);
    expect(keys).toContain('air-ocean-freight');
    expect(keys).toContain('warehousing-fulfillment');
    expect(keys).toContain('customs-brokerage');
    expect(keys).toContain('last-mile-delivery');
    expect(keys).toContain('cold-chain');
    expect(keys).toContain('consulting');
  });

  it('each service has required fields', () => {
    for (const [slug, service] of Object.entries(SERVICES_DATA)) {
      expect(service.title).toBeTruthy();
      expect(service.description).toBeTruthy();
      expect(service.fullDescription).toBeTruthy();
      expect(service.metaDescription).toBeTruthy();
      expect(Array.isArray(service.capabilities)).toBe(true);
      expect(Array.isArray(service.benefits)).toBe(true);
      expect(service.capabilities.length).toBeGreaterThan(0);
      expect(service.benefits.length).toBeGreaterThan(0);
    }
  });

  it('air-ocean-freight has correct structure', () => {
    const service = SERVICES_DATA['air-ocean-freight'];
    expect(service.title).toBe('Air & Ocean Freight');
    expect(service.eyebrow).toBe('Freight Forwarding');
    expect(service.capabilities).toHaveLength(8);
    expect(service.benefits).toHaveLength(4);
  });

  it('cold-chain has correct structure', () => {
    const service = SERVICES_DATA['cold-chain'];
    expect(service.title).toBe('Cold Chain Logistics');
    expect(service.eyebrow).toBe('Cold Chain');
    expect(service.capabilities).toHaveLength(8);
    expect(service.benefits).toHaveLength(4);
  });

  it('consulting has correct structure', () => {
    const service = SERVICES_DATA['consulting'];
    expect(service.title).toBe('Supply Chain Consulting');
    expect(service.eyebrow).toBe('Consulting');
    expect(service.capabilities).toHaveLength(8);
    expect(service.benefits).toHaveLength(4);
  });

  it('all services have unique slugs', () => {
    const slugs = Object.keys(SERVICES_DATA);
    const uniqueSlugs = new Set(slugs);
    expect(uniqueSlugs.size).toBe(slugs.length);
  });
});
