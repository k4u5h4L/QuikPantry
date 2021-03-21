import React from "react";

import Head from "next/head";
import { Provider } from "next-auth/client";
import type { AppProps /*, AppContext */ } from "next/app";

import NextNprogress from "nextjs-progressbar";

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <Provider session={pageProps.session}>
            <Head>
                <meta charSet="utf-8" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
                <meta
                    content="A React, TypeScript, Next.js based grocery app"
                    name="description"
                />
                <meta content="QuikPantry" name="title" />
                <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
                <link
                    rel="icon"
                    type="shortcut icon"
                    sizes="16x16"
                    href="/assets/images/favicon.ico"
                />
                <title>QuikPantry</title>
            </Head>
            <NextNprogress
                color="#f99459"
                startPosition={0.3}
                stopDelayMs={200}
                height={3}
            />
            <Component {...pageProps} />
        </Provider>
    );
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
//
// MyApp.getInitialProps = async (appContext: AppContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);

//   return { ...appProps }
// }

export default MyApp;
