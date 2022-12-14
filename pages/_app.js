import "../styles/globals.css";
import Head from "next/head";
import Layout from "../components/layout/Layout";
import "bootstrap/dist/css/bootstrap.min.css";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Ip Address Tracker</title>
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
