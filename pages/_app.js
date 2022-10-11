import { ThemeProvider } from "@assets/utils/themeContext";
import GlobalStyles from "@assets/styles/GlobalStyles";

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <ThemeProvider>
      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
