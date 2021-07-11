module.exports = {
  collectCoverage: true,
  rootDir: '../src',
  moduleFileExtensions: ['js', 'jsx', 'json', 'ts'],
  coverageDirectory: '<rootDir>/../target/coverage',
  setupFiles: ['<rootDir>/../config/setupTests.js'],
  testMatch: ['<rootDir>/**/*.spec.js'],
  transformIgnorePatterns: ['node_modules/(?!(jest-)?react-native|lottie-react-native)'],
  coverageThreshold: {
    global: {
      branches: 0,
      functions: 0,
      lines: 0,
      statements: 0,
    },
  },
  transform: {
    '^.+\\.js$': 'babel-jest',
  },

  testEnvironment: 'jsdom',
};
