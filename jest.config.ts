/**
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

import presets from 'jest-preset-angular/presets';
import { type JestConfigWithTsJest, pathsToModuleNameMapper } from 'ts-jest';

export default {
  ...presets.createCjsPreset(),
  // Automatically clear mock calls, instances, contexts and results before every test
  clearMocks: true,
  // Indicates whether the coverage information should be collected while executing the test
  collectCoverage: true,
  // The directory where Jest should output its coverage files
  coverageDirectory: 'coverage/jest',
  // Indicates which provider should be used to instrument code for coverage
  coverageProvider: 'v8',
  testEnvironment: 'jsdom',
  moduleNameMapper: pathsToModuleNameMapper(
    {
      '@shared/*': ['src/app/shared/*'],
      '@theme/*': ['src/app/theme/*'],
      '@store/*': ['src/app/store/*'],
      '@about/*': ['src/app/about/*'],
      '@welcome/*': ['src/app/welcome/*'],
      '@internalization/*': ['src/app/internalization/*'],
    },
    { prefix: '<rootDir>' },
  ),
  setupFilesAfterEnv: ['<rootDir>/setup-jest.ts'],
} satisfies JestConfigWithTsJest;
