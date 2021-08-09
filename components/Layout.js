import Link from "next/link";
import ScriptLoader from "next/script"

import Footer from "./Footer";
import Header from "./Header";
import Carousel from "./Carousel";
import Sidebar from '../components/Sidebar';
import Right from "./Right";

const name = "Yesi Days Blog";

export default function Layout( {children} ) {

  return (
    <>

      {/* site wrapper */}
      <div className="site-wrapper">

        <div className="main-overlay"></div>

        <Header />

        <section className="main-content">
          <div className="container-xl">

            <div className="row gy-4">

              <div className="row gy-4">

                <div className="col-lg-8">

                  {/*<Carousel />*/}

                  {/*<Right />*/}
          
                  { children }
                </div>

                <div className="col-lg-4">

                  <Sidebar />

                </div>

                {/*<nav>
                  <ul className="pagination justify-content-center">
                    <li className="page-item active" aria-current="page">
                      <span className="page-link">1</span>
                    </li>
                    <li className="page-item"><a className="page-link" href="#">2</a></li>
                    <li className="page-item"><a className="page-link" href="#">3</a></li>
                  </ul>
                </nav>*/}
                
              </div>
            </div>
          </div>
        </section>
      </div>

        
      <Footer />       

    </>
  
  )


}