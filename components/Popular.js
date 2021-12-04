import Image from 'next/image'


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
                <a href="/posts/gde-intento">
                  <div className="inner">
                    {/*<Image
                        src="images/posts/tabs-1.jpg"
                        alt="Popular"
                        width={100}
                        height={100}
                    />*/}
                  </div>
                </a>
              </div>
              <div className="details clearfix">
                <h6 className="post-title my-0">
                  <a href="/posts/gde-intento">Mi segundo intento para convertirme en GDE</a></h6>
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