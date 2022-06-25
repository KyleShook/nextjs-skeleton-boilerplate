import { GlobalStyle } from "../styles/global.styled";
import { ThemeProvider } from "styled-components";
import { theme } from "../styles/theme.styled.js";
import { Header, Footer } from "@components";

function MyApp({ Component, pageProps }) {
	return (
		<>
			<ThemeProvider theme={theme}>
				<GlobalStyle />
				<Header />
				<main>
					<Component {...pageProps} />
				</main>
				<Footer />
			</ThemeProvider>
		</>
	);
}

export default MyApp;
