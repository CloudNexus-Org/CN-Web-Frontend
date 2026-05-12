# Frontend Testing Guide - Production Grade

This guide covers production-grade Jest + React Testing Library setup for your Next.js 16 frontend.

## Overview

- **Testing Framework**: Jest
- **Testing Library**: @testing-library/react
- **Environment**: jest-environment-jsdom
- **TypeScript Support**: ts-jest configured

## Quick Start

### Install Dependencies

```bash
npm install
```

### Run Tests

```bash
# Run all tests once
npm test

# Run tests in watch mode (recommended for development)
npm run test:watch

# Generate coverage report
npm run test:coverage
```

## Project Structure

```
project-root/
├── components/
│   ├── ui/
│   │   ├── button.tsx
│   │   └── __tests__/
│   │       └── button.test.tsx
│   ├── smooth-scroll.tsx
│   └── __tests__/
│       └── smooth-scroll.test.tsx
├── hooks/
│   ├── use-animated-count.ts
│   └── __tests__/
│       └── use-animated-count.test.ts
├── __tests__/
│   └── async-api.example.test.tsx  (Example patterns)
├── jest.config.js                   (Main Jest config)
├── jest.setup.js                    (Test environment setup)
└── package.json
```

## Test Patterns & Best Practices

### 1. **Component Testing (UI Components)**

```tsx
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Button } from '@/components/ui/button'

describe('Button Component', () => {
  it('should render and respond to clicks', async () => {
    const handleClick = jest.fn()
    const user = userEvent.setup()

    render(<Button onClick={handleClick}>Click me</Button>)
    await user.click(screen.getByRole('button'))
    expect(handleClick).toHaveBeenCalled()
  })
})
```

### 2. **Hook Testing**

```tsx
import { renderHook, act } from '@testing-library/react'
import { useAnimatedCount } from '@/hooks/use-animated-count'

describe('useAnimatedCount', () => {
  it('should animate count', () => {
    const { result } = renderHook(() => useAnimatedCount(0, 100, 1000))
    expect(result.current).toBeDefined()
  })
})
```

### 3. **Async/API Testing**

```tsx
describe('UserProfile - API Integration', () => {
  it('should fetch and display user data', async () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve({ name: 'John' }),
      }),
    )

    render(<UserProfile userId="123" />)

    await waitFor(() => {
      expect(screen.getByText('John')).toBeInTheDocument()
    })

    expect(global.fetch).toHaveBeenCalledWith('/api/users/123')
  })
})
```

### 4. **Accessibility Testing**

```tsx
describe('Button Accessibility', () => {
  it('should have proper ARIA attributes', () => {
    render(<Button aria-label="Close dialog">X</Button>)
    expect(screen.getByLabelText('Close dialog')).toBeInTheDocument()
  })

  it('should support keyboard navigation', async () => {
    const user = userEvent.setup()
    render(<Button>Focus me</Button>)
    
    await user.tab()
    expect(screen.getByRole('button')).toHaveFocus()
  })
})
```

## Testing Library Best Practices

### ✅ DO

- Query by **semantic role**: `screen.getByRole('button')`
- Query by **label**: `screen.getByLabelText('Submit')`
- Query by **placeholder**: `screen.getByPlaceholderText('Search')`
- Test **user interactions**: What users see and do
- Use **async utilities**: `waitFor`, `findBy*`
- Test **accessibility**: ARIA attributes, keyboard navigation

### ❌ DON'T

- Query by className: `screen.getByClassName('btn')`
- Query by ID (unless necessary for accessibility): `screen.getByTestId` as last resort
- Test implementation details (internal state)
- Mock too much - mock external APIs, not internal components
- Skip accessibility tests

## Common Testing Patterns

### Mocking Next.js Router

```tsx
// Already configured in jest.setup.js
jest.mock('next/navigation', () => ({
  useRouter() {
    return {
      push: jest.fn(),
      pathname: '/',
    }
  },
  usePathname() {
    return '/'
  },
}))
```

### Mocking Fetch API

```tsx
// Mock successful response
global.fetch = jest.fn(() =>
  Promise.resolve({
    ok: true,
    json: () => Promise.resolve({ data: 'test' }),
  }),
)

// Mock error response
global.fetch = jest.fn(() =>
  Promise.resolve({
    ok: false,
    status: 500,
  }),
)

// Mock network error
global.fetch = jest.fn(() =>
  Promise.reject(new Error('Network error')),
)
```

### Testing Async State

```tsx
it('should handle loading state', async () => {
  render(<Component />)
  
  // Loading state
  expect(screen.getByTestId('loading')).toBeInTheDocument()
  
  // Wait for data
  await waitFor(() => {
    expect(screen.getByTestId('content')).toBeInTheDocument()
  })
  
  // Verify loading is gone
  expect(screen.queryByTestId('loading')).not.toBeInTheDocument()
})
```

### Testing User Interactions

```tsx
import userEvent from '@testing-library/user-event'

it('should handle form submission', async () => {
  const user = userEvent.setup()
  const handleSubmit = jest.fn()
  
  render(<Form onSubmit={handleSubmit} />)
  
  await user.type(screen.getByPlaceholderText('Email'), 'test@example.com')
  await user.click(screen.getByRole('button', { name: /submit/i }))
  
  expect(handleSubmit).toHaveBeenCalled()
})
```

## Configuration Details

### jest.config.js

- **setupFilesAfterEnv**: Runs jest.setup.js before each test
- **testEnvironment**: jsdom (for DOM testing)
- **moduleNameMapper**: Maps @ alias to root directory
- **collectCoverageFrom**: Defines what files are included in coverage
- **coverageThreshold**: Enforces minimum coverage (60%)
- **transformIgnorePatterns**: Prevents common packages from causing transform errors

### jest.setup.js

- Imports @testing-library/jest-dom (adds custom matchers)
- Mocks Next.js navigation hooks
- Mocks window.matchMedia (for responsive testing)
- Mocks IntersectionObserver (for scroll/visibility tests)

## Coverage Goals

```
Path                Coverage Target
components/**/*.tsx   60%+
lib/**/*.tsx          60%+
hooks/**/*.ts         60%+
```

Run `npm run test:coverage` to see current coverage report.

## Example Test Files

- **components/ui/__tests__/button.test.tsx** - UI component testing
- **components/__tests__/smooth-scroll.test.tsx** - Complex component testing
- **hooks/__tests__/use-animated-count.test.ts** - Hook testing
- **__tests__/async-api.example.test.tsx** - Async/API testing patterns

## Debugging Tests

### Run Single Test File

```bash
npm test -- button.test.tsx
```

### Run Tests Matching Pattern

```bash
npm test -- --testNamePattern="should render"
```

### Debug in VS Code

Add to `.vscode/launch.json`:

```json
{
  "type": "node",
  "request": "launch",
  "name": "Jest Debug",
  "program": "${workspaceFolder}/node_modules/.bin/jest",
  "args": ["--runInBand", "--watch"],
  "console": "integratedTerminal",
  "internalConsoleOptions": "neverOpen"
}
```

## Common Issues & Solutions

### Issue: IntersectionObserver is not defined

**Solution**: Already mocked in jest.setup.js

### Issue: window.matchMedia is not a function

**Solution**: Already mocked in jest.setup.js

### Issue: Cannot find module '@/*'

**Solution**: moduleNameMapper in jest.config.js handles this

### Issue: Tests failing due to async operations

**Solution**: Use `waitFor()` or `findBy*` queries for async assertions

### Issue: Component not rendering with mocked router

**Solution**: Verify jest.setup.js is configured correctly and router mock returns required properties

## Next Steps

1. Write tests alongside your features (TDD)
2. Aim for >80% coverage for critical components
3. Use tests as documentation for component behavior
4. Run tests before committing (consider git hooks)
5. Add CI/CD integration for automated testing

## Resources

- [Jest Docs](https://jestjs.io/)
- [React Testing Library Docs](https://testing-library.com/react)
- [Testing Best Practices](https://kentcdodds.com/blog/common-mistakes-with-react-testing-library)
