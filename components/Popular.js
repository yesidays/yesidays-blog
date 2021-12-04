import Image from 'next/image'
import Link from 'next/link';


const Popular = () => {
  return (  
    <>
        <div className="widget rounded">
          <div className="widget-header text-center">
            <h3 className="widget-title">Populares</h3>
              {/*<Image
                src="images/wave.svg"
                alt="Popular"
                width={100}
                height={100}
              />*/}
                  
          </div>
          <div className="widget-content">    
            <div className="post post-list-sm circle">
              <div className="thumb circle">
                <span className="number">1</span>
                <Link href="/posts/gde-intento">
                  <a href="">
                    <div className="inner">
                      {/*<Image
                        src="images/posts/tabs-1.jpg"
                        alt="Popular"
                        width={100}
                        height={100}
                      />*/}
                    </div>
                  </a></Link>
              </div>
              <div className="details clearfix">
                <h6 className="post-title my-0">
                  <Link href="/posts/gde-intento">
                    <a href="">Mi segundo intento para convertirme en GDE</a>
                  </Link>
                </h6>
                  <ul className="meta list-inline mt-1 mb-0">
                    <li className="list-inline-item">18 Nov 2021</li>
                  </ul>
              </div>
            </div>
          </div>		
        </div>
    </>

  );
}
 
export default Popular;