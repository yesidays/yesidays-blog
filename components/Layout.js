import Head from "next/head";
import Link from "next/link";

import Footer from "./Footer";
import Header from "./Header";

const name = "Yesi Days Blog";

export default function Layout( {children} ) {

  return (
    <>

      {/* site wrapper */}
      <div className="site-wrapper">

        <div className="main-overlay"></div>

        <Header />
        
        { children }

        <Footer />

      </div>       

    </>
  
  )


}