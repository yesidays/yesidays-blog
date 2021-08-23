import Link from "next/link";
import Navbar from "./Navbar";
import { useRouter } from 'next/router'


const Header = () => {

  return (

    <>
      {/*  header */}
      <header className="header-classic">

        <div className="container-xl">
          <div className="header-top">
            <div className="row align-items-center">

              <div className="col-md-4 col-xs-12">
                <a className="navbar-brand" href="#">
                  {/*<img src="images/logo.svg" alt="logo" />*/}
                </a> 
              </div>

              <div className="col-md-8 d-none d-md-block">
                <ul className="social-icons list-unstyled list-inline mb-0 float-end">
                  <li className="list-inline-item">
                    <a href="https://www.facebook.com/yesidays" target="_blank" rel="noreferrer">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                  </li>
                  <li className="list-inline-item"><a href="https://www.twitter.com/silvercorp" target="_blank" rel="noreferrer"><i className="fab fa-twitter"></i></a></li>
                  <li className="list-inline-item"><a href="https://www.instagram.com/yesidaysb/" target="_blank" rel="noreferrer"><i className="fab fa-instagram"></i></a></li>
                  <li className="list-inline-item"><a href="https://www.youtube.com/channel/UCeq5xhBgFLkmfGPGov-N0xQ" target="_blank" rel="noreferrer"><i className="fab fa-youtube"></i></a></li>
                </ul>
              </div>

            </div>
          </div>
        </div>

        <Navbar />

      </header>
    </>

  )

}


export default Header;