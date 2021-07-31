const Carousel  = () => {
  return (  

    <section className="hero-carousel">
      <div className="container-xl">
        <div className="post-carousel-lg">
          <div className="post featured-post-xl">
            <div className="details clearfix">
              <a href="category.html" className="category-badge lg">Lifestyle</a>
              <h4 className="post-title"><a href="blog-single.html">9 Most Awesome Blue Lake With Snow Mountain</a></h4>
              <ul className="meta list-inline mb-0">
                <li className="list-inline-item"><a href="#">Katen Doe</a></li>
                <li className="list-inline-item">29 March 2021</li>
              </ul>
                    </div>
                    <a href="blog-single.html">
                        <div className="thumb rounded">
                            <div className="inner data-bg-image" data-bg-image="images/posts/featured-xl-1.jpg"></div>
                        </div>
                    </a>
                </div>
                <div className="post featured-post-xl">
                    <div className="details clearfix">
                        <a href="category.html" className="category-badge lg">Culture</a>
                        <h4 className="post-title"><a href="blog-single.html">Important Thing You Need To Know About Swim</a></h4>
                        <ul className="meta list-inline mb-0">
                            <li className="list-inline-item"><a href="#">Katen Doe</a></li>
                            <li className="list-inline-item">29 March 2021</li>
                        </ul>
                    </div>
                    <a href="blog-single.html">
                        <div className="thumb rounded">
                            <div className="inner data-bg-image" data-bg-image="images/posts/featured-xl-2.jpg"></div>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    </section>


  );
}
 
export default Carousel;