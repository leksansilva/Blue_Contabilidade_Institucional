import { ThemeProvider } from "styled-components";
import theme from "../styles/theme";
import GlobalStyle from "../styles/globals";
import Header from "../components/Header";
import Footer from "../components/Footer";
import LoadingScreen from "../components/LoadingScreen";
import "nprogress/nprogress.css";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    router.events.on("routeChangeError", () => setLoading(false));
    router.events.on("routeChangeStart", () => setLoading(false));
    router.events.on("routeChangeComplete", () => setLoading(true));

    return () => {
      router.events.off("routeChangeError", () => setLoading(false));
      router.events.off("routeChangeStart", () => setLoading(false));
      router.events.off("routeChangeComplete", () => setLoading(true));
    };
  }, [router.events]);
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
