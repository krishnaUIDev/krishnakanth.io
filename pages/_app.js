import Head from "next/head";
import { SessionProvider } from "next-auth/react";
import { useState, useEffect } from "react";

import "../styles/base.css";

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  const og = pageProps.data?.og;
  const title = pageProps.data?.title;

  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
        <meta property="og:title" content={title || `Krishnakanth`} />
        <meta property="og:site_name" content="Krishnakanth" />
        <meta
          property="og:description"
          content={
            og
              ? og.description
              : `Writing about the tips I usually share on Twitter and some more.`
          }
        />
        <meta name="twitter:site" content="@krishnakondoju" />
        <meta property="og:image" content={og ? og.image : ``} />
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>👍</text></svg>"
        />

        {/* <!-- Global site tag (gtag.js) - Google Analytics --> */}
        {/* <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-66J1QY576Q"
        ></script>
        <script src="/gTagScript.js" async></script> */}

        <script
          async
          src="https://platform.twitter.com/widgets.js"
          charSet="utf-8"
        ></script>

        <title>{title || `Krishnakanth`}</title>
      </Head>
      <SessionProvider session={session}>
        <Component {...pageProps} />
      </SessionProvider>
    </>
  );
}

export default MyApp;
