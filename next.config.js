/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
};

module.exports = nextConfig;

const path = require("path");

module.exports = {
	webpack: (config) => {
		config.resolve.modules.push(path.resolve("./"));

		return config;
	},
};
