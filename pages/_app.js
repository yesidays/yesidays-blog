import Link from 'next/link';
import Head from "next/head";
import Script from 'next/script'

import Layout from '../components/Layout';

import '../styles/bootstrap.min.css'
import '../styles/style.css'


function MyApp({ Component, pageProps }) {
  return (
    <>

      <Head>

        <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
        <title>Yesi Days Blog</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
        <link rel="shortcut icon" type="image/x-icon" href="images/favicon.png" />

        {/*<Script src="../static/custom.js"></Script>*/}
        
      </Head>

      <Layout>

        <Component {...pageProps} />

      </Layout>
      
    </>

  )
}

export default MyApp
