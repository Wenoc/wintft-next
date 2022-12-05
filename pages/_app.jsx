// eslint-disable-next-line import/no-unresolved
import { Analytics } from "@vercel/analytics/react";
import Layout from "../components/general/Layout";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
      <Analytics />
    </Layout>
  );
}

export default MyApp;
