export default {
  preset: "ts-jest",
  testEnvironment: "jest-environment-jsdom",
  setupFilesAfterEnv: ["<rootDir>/setupTests.ts"],
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],

  transform: {
    "^.+\\.tsx?$": "@swc/jest",
    "^.+\\.css$": "jest-transform-css",
  },
  moduleNameMapper: {
    "\\.(css|less)$": "identity-obj-proxy",
    "^.+\\.(svg)$": "<rootDir>/src/__tests__/mocksvg.tsx",
  },
};
