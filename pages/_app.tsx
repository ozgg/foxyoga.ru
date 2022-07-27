import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
      <>
        <Head>
          <title>Лисья йога</title>
          <link rel="icon" href="/favicon.ico"/>
        </Head>
        <Component {...pageProps} />
      </>
  )
}

export default MyApp