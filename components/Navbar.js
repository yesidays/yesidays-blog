import Link from "next/link";


const Navbar = () => {

  return (

    <>

      <nav className="navbar navbar-expand-lg">
        <div className="header-bottom  w-100">    
          <div className="container-xl">
            <div className="d-flex align-items-center">
              <div className="collapse navbar-collapse flex-grow-1">
                <ul className="navbar-nav">
                  <li className="nav-item dropdown active">
                    <a className="nav-link" href="/">Blog</a>
                  </li>
                  {/*<li className="nav-item">
                    <a className="nav-link" href="#">Blog</a>
                  </li>*/}
                  <li className="nav-item">
                    <a className="nav-link" href="/about">¿Quien soy?</a>
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