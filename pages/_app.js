import Link from 'next/link';
import Head from "next/head";
import Script from 'next/script'
import { useEffect } from 'react'
import { useRouter } from 'next/router'

import * as ga from '../lib/ga'

import Layout from '../components/Layout';

import '../css/bootstrap.min.css'
import '../css/all.min.css'
import '../css/slick.css'
import '../css/simple-line-icons.css'
import '../css/style.css'


function MyApp({ Component, pageProps }) {
  const router = useRouter()

  useEffect(() => {
    const handleRouteChange = (url) => {
      ga.pageview(url)
    }
    //When the component is mounted, subscribe to router changes
    //and log those page views
    router.events.on('routeChangeComplete', handleRouteChange)

    // If the component is unmounted, unsubscribe
    // from the event with the `off` method
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

  return (
    <>

      <Head>

        <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
        <title>Yesi Days Blog</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
        <link rel="shortcut icon" type="image/x-icon" href="images/favicon.png" />

        {/*<Script src="../static/custom.js"></Script>*/}

        {/* Global Site Tag (gtag.js) - Google Analytics */}
        <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
              page_path: window.location.pathname,
            });
          `,
            }}
          />

      <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1435995620378131" crossOrigin="anonymous"></script>
      <ins className="adsbygoogle" style="display:block; text-align:center;"
          data-ad-layout="in-article"
          data-ad-format="fluid"
          data-ad-client="ca-pub-1435995620378131"
          data-ad-slot="5679228788"></ins>
      <script>
          (adsbygoogle = window.adsbygoogle || []).push({});
      </script>

        
      </Head>

      <Layout>

        <Component {...pageProps} />

      </Layout>
      
    </>

  )
}

export default MyApp
