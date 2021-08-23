const Popular = () => {
  return (  
    <>
        <div className="widget rounded">
                <div className="widget-header text-center">
                  <h3 className="widget-title">Popular Posts</h3>
                  <img src="images/wave.svg" className="wave" alt="wave" />
                </div>
                <div className="widget-content">
              
                  <div className="post post-list-sm circle">
                    <div className="thumb circle">
                      <span className="number">1</span>
                      <a href="blog-single.html">
                        <div className="inner">
                          <img src="images/posts/tabs-1.jpg" alt="post-title" />
                        </div>
                      </a>
                    </div>
                    <div className="details clearfix">
                      <h6 className="post-title my-0"><a href="blog-single.html">3 Easy Ways To Make Your iPhone Faster</a></h6>
                      <ul className="meta list-inline mt-1 mb-0">
                        <li className="list-inline-item">29 March 2021</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="post post-list-sm circle">
                    <div className="thumb circle">
                      <span className="number">2</span>
                      <a href="blog-single.html">
                        <div className="inner">
                          <img src="images/posts/tabs-2.jpg" alt="post-title" />
                        </div>
                      </a>
                    </div>
                    <div className="details clearfix">
                      <h6 className="post-title my-0"><a href="blog-single.html">An Incredibly Easy Method That Works For All</a></h6>
                      <ul className="meta list-inline mt-1 mb-0">
                        <li className="list-inline-item">29 March 2021</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="post post-list-sm circle">
                    <div className="thumb circle">
                      <span className="number">3</span>
                      <a href="blog-single.html">
                        <div className="inner">
                          <img src="images/posts/tabs-3.jpg" alt="post-title" />
                        </div>
                      </a>
                    </div>
                    <div className="details clearfix">
                      <h6 className="post-title my-0"><a href="blog-single.html">10 Ways To Immediately Start Selling Furniture</a></h6>
                      <ul className="meta list-inline mt-1 mb-0">
                        <li className="list-inline-item">29 March 2021</li>
                      </ul>
                    </div>
                  </div>
                </div>		
              </div>
    </>

  );
}
 
export default Popular;