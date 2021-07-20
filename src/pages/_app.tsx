import { AppProps } from "next/app"
import Header from "components/Header"
import { ThemeProvider } from "styled-components"

import GlobalStyles from "styles/global"

import { Provider } from "next-auth/client"

function App({ Component, pageProps }: AppProps) {
	return (
		<Provider session={pageProps.session}>
			<ThemeProvider theme={{}}>
				<GlobalStyles />

				<Header />
				<Component {...pageProps} />
			</ThemeProvider>
		</Provider>
	)
}

export default App
