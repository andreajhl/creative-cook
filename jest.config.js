module.exports = {
  collectCoverage: true,
  coverageProvider: 'v8',
  collectCoverageFrom: [
    './src/**/*.{js,jsx,ts,tsx}',
    '!./src/app/**',
    '!**/*.d.ts',
    '!**/node_modules/**',
    '!<rootDir>/out/**',
    '!<rootDir>/.next/**',
    '!<rootDir>/*.config.js',
    '!**/node_modules/**',
  ],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1'
  },
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  testPathIgnorePatterns: [
    '<rootDir>/node_modules/$1',
    '<rootDir>/.next/$1',
    '<rootDir>/src/wordings/$1',
    '<rootDir>/src/mocks/$1',
    '<rootDir>/src/interfaces/$1',
    '<rootDir>/src/hooks/$1',
    '<rootDir>/src/app/$1',
  ],
  coveragePathIgnorePatterns: [
    '<rootDir>/src/mocks/',
    '<rootDir>/src/wordings/',
    '<rootDir>/src/interfaces/',
    '<rootDir>/src/hooks/',
  ],
  collectCoverage: true,
  coverageDirectory: './coverage/',
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': ['babel-jest', { presets: ['next/babel'] }],
  },
  transformIgnorePatterns: [
    '/node_modules/',
  ],
}