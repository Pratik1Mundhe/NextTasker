module.exports = {
    moduleNameMapper: {
      "\\.(css|less|sass|scss)$": "identity-obj-proxy", // Mock CSS imports
      "^@/components/(.*)$": "<rootDir>/app/components/$1", // Adjust path if needed
      "^next/font/google$": "<rootDir>/__mocks__/next/font/google.js", // Mock Google Fonts
      "^@/(.*)$": "<rootDir>/app/$1"
    },
    transform: {
      "^.+\\.[t|j]sx?$": "babel-jest",
      "\\.(css|scss)$": "jest-css-modules-transform"
    },
    testEnvironment: "jsdom",
    moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
    transformIgnorePatterns: [
      
    ]
  };
  