import { AppProps } from 'next/app';
import Head from 'next/head';
import '../styles/global.css';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Welcome to insights-app!</title>
      </Head>
      <div className="app">
        <header className="flex" />
        <main>
          <Component {...pageProps} />
        </main>
      </div>
    </>
  );
}

export default CustomApp;
