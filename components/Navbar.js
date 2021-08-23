import Link from "next/link";
import { useRouter } from 'next/router';

const Navbar = () => {

  const router = useRouter();

  return (

    <>

      <nav className="navbar navbar-expand-lg">
        <div className="header-bottom  w-100">    
          <div className="container-xl">
            <div className="d-flex align-items-center">
              <div className="collapse navbar-collapse flex-grow-1">
                <ul className="navbar-nav">
                  <li className={router.pathname == '/' ? '"nav-item dropdown active' : 'nav-item dropdown'}>
                    <Link href="/"><a className="nav-link">Blog</a></Link>
                  </li>
                  {/*<li className="nav-item">
                    <a className="nav-link" href="#">Blog</a>
                  </li>*/}
                  <li className={router.pathname == '/about' ? '"nav-item dropdown active' : 'nav-item dropdown'}>
                    <Link href="/about"><a className="nav-link">¿Quién soy?</a></Link>
                  </li>
                  {/*<li className="nav-item">
                    <a className="nav-link" href="">Contacto</a>
                  </li>*/}
                </ul>
              </div>

              {/*<div className="header-buttons">
                <button className="search icon-button">
                  <i className="icon-magnifier"></i>
                </button>
                <button className="burger-menu icon-button ms-2 float-end float-lg-none">
                  <span className="burger-icon"></span>
                </button>
              </div>*/}

            </div>
          </div>

        </div>
      </nav>

    </>

    

    )

}


export default Navbar;