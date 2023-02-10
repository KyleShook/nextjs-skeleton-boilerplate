import React from "react";
import { GlobalStyle } from "../styles/global.styled";
import { ThemeProvider } from "styled-components";
import { theme } from "../styles/theme.styled.js";

export const decorators = [
	(Story) => (
		<ThemeProvider theme={theme}>
			<GlobalStyle />
			<Story />
		</ThemeProvider>
	),
];

export const parameters = {
	actions: { argTypesRegex: "^on[A-Z].*" },
	controls: {
		matchers: {
			color: /(background|color)$/i,
			date: /Date$/,
		},
	},
};
