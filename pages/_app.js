import { GlobalStyle } from "../styles/global.syles";
import "../styles/main.css";

function MyApp({ Component, pageProps }) {
	return (
		<>
			<Component {...pageProps} />
			<GlobalStyle />
		</>
	);
}

export default MyApp;
