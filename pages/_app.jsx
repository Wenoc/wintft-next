// eslint-disable-next-line import/no-unresolved
import Head from "next/head";
// eslint-disable-next-line import/no-unresolved
import { Analytics } from "@vercel/analytics/react";
import Layout from "../components/general/Layout";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.bunny.net" />
        <link
          href="https://fonts.bunny.net/css?family=noto-sans:400,500,600,700,800"
          rel="stylesheet"
        />
      </Head>
      <Layout>
        <Component {...pageProps} />
        <Analytics />
      </Layout>
    </>
  );
}

export default MyApp;
