const path = require("path");

module.exports = {
	webpackFinal: async (config) => {
		config.resolve.alias["@theme"] = path.resolve(
			__dirname,
			"../styles/theme.styled.js"
		);
		return config;
	},
	stories: [
		"../stories/**/*.stories.mdx",
		"../stories/**/*.stories.@(js|jsx|ts|tsx)",
		"../components/**/*.stories.@(js|jsx|ts|tsx)",
	],
	addons: [
		"@storybook/addon-links",
		"@storybook/addon-essentials",
		"@storybook/addon-interactions",
	],
	framework: "@storybook/react",
	core: {
		builder: "@storybook/builder-webpack5",
		disableTelemetry: true,
	},
};
