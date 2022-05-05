module.exports = {
  collectCoverageFrom: [
    'src/domain/**/*.{ts,js}',
    '!src/**/*.d.js',
    '!src/index.js',
    '!src/common/**/*.js',
  ],
  coverageDirectory: 'coverage',
  coverageThreshold: {
    global: {
      branches: 90,
      functions: 90,
      lines: 90,
      statements: 90,
    },
  },
  moduleFileExtensions: ['ts', 'json', 'js', 'node'],
  modulePaths: ['<rootDir>'],
  modulePathIgnorePatterns: ['<rootDir>/src/infrastructure'],
  rootDir: './',
  testEnvironment: 'node',
  testRegex: '.*\\.test\\.js$',
};