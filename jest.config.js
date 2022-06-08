/*
 * For a detailed explanation regarding each configuration property and type check, visit:
 * https://jestjs.io/docs/configuration
 */
/** @type { import('@jest/types').Config.InitialOptions } */
module.exports = {
  // watch: true,
  clearMocks: true,
  collectCoverage: true,
  // coverageDirectory: "coverage",
  coverageProvider: "v8",
  preset: 'ts-jest',
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest'
  },
  // A set of global variables that need to be available in all test environments
  globals: {
    'ts-jest': {
      tsConfig: 'tsconfig.json',
      diagnostics: false,
    },
  },
  // An array of file extensions your modules use
  moduleFileExtensions: [
    "js",
    "mjs",
    "cjs",
    "jsx",
    "ts",
    "tsx",
    "json",
    "node"
  ],
  // The glob patterns Jest uses to detect test files
  testMatch: [
    "**/__tests__/**/*.[jt]s?(x)",
    "**/?(*.)+(spec|test).[tj]s?(x)"
  ],

  // An array of regexp pattern strings that are matched against all test paths, matched tests are skipped
  testPathIgnorePatterns: [
    "/node_modules/",
    "/dist/"
  ],

  // Indicates whether each individual test should be reported during the run
  verbose: true,

  // Whether to use watchman for file crawling
  watchman: true,
};
