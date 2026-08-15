# Pull Request: NexRoute Global - Interactive Features & Test Suite

## Summary
This PR adds interactive features to the NexRoute Global corporate website and establishes a comprehensive test suite with 198 passing tests.

## Changes

### Interactive Features

#### 1. Chargeable Weight Calculator (`/quote`)
- **New file**: `src/app/quote/page.tsx`
- **New file**: `src/components/sections/ChargeableWeightCalculator.tsx`
- Interactive calculator for air and sea freight
- Real-time dimensional weight calculation
- Air freight divisor: 5000 cm³/kg
- Sea freight divisor: 1000 cm³/kg
- Shows which weight method applies (actual vs dimensional)
- Reset functionality and freight method switching

#### 2. Enhanced RFQ Form (`/contact`)
- **Updated file**: `src/components/sections/ContactPage.tsx`
- Added Incoterms 2020 dropdown (EXW, FOB, CIF, DAP, DDP)
- Added HS Code input with 6-10 digit validation
- Helper text explaining Incoterms
- Trade compliance sidebar information
- Office addresses (Los Angeles, Rotterdam, Singapore)
- Form validation for all required fields
- Success state after submission

#### 3. Shipment Tracking Exception States
- **Updated file**: `src/components/sections/TrackingWidget.tsx`
- Added exception state handling for demo tracking IDs
- Three exception types:
  - `NX-000001`: Customs hold
  - `NX-000002`: Weather delay
  - `NX-000003`: Port congestion
- Amber/orange alert styling for exceptions
- Resolution notes and estimated clearance dates
- Exception-specific timeline updates

### Test Suite

#### Test Configuration
- **New file**: `vitest.config.ts`
- **New file**: `vitest.setup.ts`
- Configured Vitest with jsdom environment
- Set up testing library defaults

#### Test Coverage
- **Total**: 198 tests across 33 test files
- **Coverage**: All major components and pages
- Key test files:
  - `src/app/quote/page.test.tsx` - Quote page tests
  - `src/components/sections/ChargeableWeightCalculator.test.tsx` - Calculator tests
  - `src/components/sections/ContactPage.test.tsx` - RFQ form tests
  - `src/components/sections/TrackingWidget.test.tsx` - Tracking tests
  - All existing component tests updated and fixed

### Documentation
- **New file**: `QA_TEST_REPORT.md` - Comprehensive test report
- **Updated file**: `PULL_REQUEST.md` - PR description

## Technical Details

### Dependencies Added
```json
{
  "vitest": "^1.2.0",
  "@vitest/ui": "^1.2.0",
  "@testing-library/react": "^14.2.1",
  "@testing-library/jest-dom": "^6.1.5",
  "@testing-library/user-event": "^14.5.1",
  "@vitejs/plugin-react": "^4.2.1",
  "jsdom": "^24.0.0"
}
```

### Scripts Added
```json
{
  "test": "vitest",
  "test:ui": "vitest --ui",
  "test:run": "vitest run"
}
```

### Test Fixes Applied
- Fixed framer-motion mocks in tests
- Fixed requestAnimationFrame issues in ClientLogos
- Fixed async state updates in forms
- Fixed text matching for dynamic content
- Fixed duplicate element queries

## How to Test

### Run Tests
```bash
npm run test
npm run test:run  # For CI
npm run test:ui   # For interactive UI
```

### Build Verification
```bash
npm run build
```

### Preview Locally
```bash
npm run dev
```

## Checklist
- [x] All 198 tests passing
- [x] Build succeeds without errors
- [x] No TypeScript errors
- [x] Interactive features tested manually
- [x] Form validation works correctly
- [x] Tracking exceptions display properly
- [x] Calculator calculations are accurate

## Related Issues
- Fixes test suite failures
- Adds B2B logistics features
- Improves test coverage
