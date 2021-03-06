const Bio = () => {
  return (  
    <>
        <div className="widget rounded">
          <div className="widget-about data-bg-image text-center" data-bg-image="images/map-bg.png">
            {/*<img src="images/logo.svg" alt="logo" className="mb-4" />*/}
            <p className="mb-4">
              Hola soy <strong>Yesi Days</strong>.
              <br />Soy Científica de Datos con experiencia en Ingeniería de Software. 
            </p>
            <ul className="social-icons list-unstyled list-inline mb-0">
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
    </>

  );
}
 
export default Bio;