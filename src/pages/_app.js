import { ThemeProvider } from "styled-components";
import theme from "../styles/theme";
import GlobalStyle from "../styles/globals";
import Header from "../components/Header";
import Footer from "../components/Footer";
import LoadingScreen from "../components/LoadingScreen";
import { useEffect, useState } from "react";

function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
   
    setLoading(false);
    return () => {
      setLoading(true);
    };
  }, []);
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {loading ? (
        <LoadingScreen />
      ) : (
        <>
          <Header />
          <Component {...pageProps} />
          <Footer />
        </>
      )}
    </ThemeProvider>
  );
}

export default MyApp;
