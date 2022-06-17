module.exports = {
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80,
    },
  },
  moduleNameMapper: {
    "\\.css$": "identity-obj-proxy",
    "^@/components(.*)$": "<rootDir>/src/components$1",
    "^@/blocks(.*)$": "<rootDir>/src/blocks$1",
    "^@/hooks(.*)$": "<rootDir>/src/hooks$1",
    "^@/graphql(.*)$": "<rootDir>/graphql$1",
    "^gatsby-page-utils/(.*)$": `gatsby-page-utils/dist/$1`,
  },
  testPathIgnorePatterns: [`node_modules`, `\\.cache`, `<rootDir>.*/public`],
  transformIgnorePatterns: [`node_modules/(?!(gatsby|gatsby-script)/)`],
};
