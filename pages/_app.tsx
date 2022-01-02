import "../styles/globals.css";
import "tailwindcss/tailwind.css";
import type { AppProps } from "next/app";
import { NextIntlProvider } from "next-intl";

import ProgressBar from "@badrap/bar-of-progress";
import Router from "next/router";

const progrss = new ProgressBar({
  size: 4,
  color: "#FE595E",
  className: "z-50",
  delay: 100,
});

Router.events.on("routeChangeStart", progrss.start);
Router.events.on("routeChangeComplete", progrss.finish);
Router.events.on("routeChangeError", progrss.finish);

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <NextIntlProvider messages={pageProps.messages}>
      <Component {...pageProps} />
    </NextIntlProvider>
  );
}

export default MyApp;
