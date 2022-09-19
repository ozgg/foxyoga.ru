import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import Head from "next/head";
import Layout from "../components/layouts/layout";

function FoxYoga({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Лисья йога</title>
        <link rel="icon" href="/favicon.ico"/>
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}

export default FoxYoga
