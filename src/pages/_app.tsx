import { AppProps } from 'next/app';
import Head from 'next/head';

import GlobalStyles from '../styles/global';

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>My Trips</title>
      </Head>

      <Component {...pageProps} />

      <GlobalStyles />
    </>
  );
}

export default App;
