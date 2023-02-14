/*
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

const nextJest = require("next/jest");

const createJestConfig = nextJest({
	// Provide the path to your Next.js app to load next.config.js and .env files in your test environment
	dir: "./",
});

const customConfig = {
	// Automatically clear mock calls and instances between every test
	clearMocks: true,
	// The directory where Jest should output its coverage files
	coverageDirectory: ".coverage",
	// A list of paths to directories that Jest should use to search for files in
	moduleNameMapper: {
		"^@components/(.*)$": "<rootDir>/components/$1",
		"^@utils/(.*)$": "<rootDir>/utils/$1",
		"^@theme$": "<rootDir>/styles/theme.styled.js",
	},
	// A list of paths to modules that run some code to configure or set up the testing framework before each test
	setupFilesAfterEnv: ["./jest.setup.js"],
	// By default jest will use a node environment, so DOM elements (like document) will be undefined without this
	testEnvironment: "jsdom",
};

module.exports = createJestConfig(customConfig);
