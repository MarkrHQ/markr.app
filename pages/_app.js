import Head from "next/head";
import "../styles/styles.css";

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>
          Markr.app - Highlight &amp; Capture Content On The Web
        </title>
        <link
          href="https://fonts.googleapis.com/css?family=Muli:400,700,900&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/markr_icon.png" />

        <meta
          name="description"
          content="Markr.app lets you highlight and capture content on the web like a marker"
        />
        <meta
          property="og:title"
          content="Markr.app lets you highlight and capture content on the web like a marker"
        />
        <meta property="og:url" content="https://markr.app" />
        <meta property="og:site_name" content="Markr" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
