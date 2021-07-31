import Link from 'next/link';

import Layout from '../components/Layout';

import '../styles/bootstrap.min.css'
{/*import '../styles/all.min.css'*/}
{/*import '../styles/slick.css'*/}
{/*import '../styles/simple-line-icons.css'*/}
import '../styles/style.css'


function MyApp({ Component, pageProps }) {
  return (

    <Layout>

      <Component {...pageProps} />

    </Layout>

  )
}

export default MyApp
