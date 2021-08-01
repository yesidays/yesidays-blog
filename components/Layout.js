import Link from "next/link";
import ScriptLoader from "next/script"

import Footer from "./Footer";
import Header from "./Header";
import Carousel from "./Carousel";
import Right from "./Right";

const name = "Yesi Days Blog";

export default function Layout( {children} ) {

  return (
    <>

      {/* site wrapper */}
      <div className="site-wrapper">

        <div className="main-overlay"></div>

        <Header />

        {/*<Carousel />*/}

        {/*<Right />*/}
        
        { children }

        

        <Footer />

      </div>       

    </>
  
  )


}