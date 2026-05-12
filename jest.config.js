import nextJest from 'next/jest.js'

const createJestConfig = nextJest({
  dir: './',
})

const customJestConfig = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  testEnvironment: 'jest-environment-jsdom',
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/$1',
  },
  testMatch: [
    '**/__tests__/**/*.test.{ts,tsx}',
    '**/*.test.{ts,tsx}',
  ],
  collectCoverageFrom: [
    'components/ui/button.tsx',
    'components/smooth-scroll.tsx',
    'hooks/use-animated-count.ts',
    'lib/utils.ts',
    '!**/*.d.ts',
    '!**/node_modules/**',
    '!**/.next/**',
    '!**/coverage/**',
    '!**/.storybook/**',
    '!backend/**',
    '!lib/api/**',
  ],
  coverageProvider: 'v8',
  coverageThreshold: {
    global: {
      branches: 60,
      functions: 55,
      lines: 60,
      statements: 60,
    },
  },
  testPathIgnorePatterns: [
    '<rootDir>/.next/',
    '<rootDir>/node_modules/',
    '<rootDir>/backend/',
  ],
  transformIgnorePatterns: [
    'node_modules/(?!(lenis|@base-ui|@splinetool)/)',
  ],
}

export default createJestConfig(customJestConfig)
