import { ThemeProvider } from "styled-components";
import theme from "../styles/theme";
import GlobalStyle from "../styles/globals";
import Header from "../components/Header";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle/>
      <Header/>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
