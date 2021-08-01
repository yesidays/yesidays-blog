import Head from 'next/head'
import Link from 'next/link'

import Layout from '../components/Layout';
import Topics from '../components/Topics';
import Ads from '../components/Ads';
import Tags from '../components/Tags';
import Bio from '../components/Bio';
import Popular from '../components/Popular';


import { getSortedPostsData } from '../lib/posts';


export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}


export default function Home({ allPostsData }) {
  return (

    <>

    <section className="main-content">
      <div className="container-xl">

        <div className="row gy-4">

          <div className="col-lg-8">

            <div className="post post-classic rounded bordered">
              <div className="thumb top-rounded">
                <a href="category.html" className="category-badge lg position-absolute">Lifestyle</a>
                <span className="post-format">
                  <i className="icon-picture"></i>
                </span>
                <a href="blog-single.html">
                  <div className="inner">
                    <img src="images/posts/post-lg-1.jpg" alt="post-title" />
                  </div>
                </a>
              </div>
              <div className="details">
                <ul className="meta list-inline mb-0">
                  <li className="list-inline-item"><a href="#"><img src="images/other/author-sm.png" className="author" alt="author"/>Katen Doe</a></li>
                  <li className="list-inline-item">29 March 2021</li>
                  <li className="list-inline-item"><i className="icon-bubble"></i> (0)</li>
                </ul>
                <h5 className="post-title mb-3 mt-3"><a href="blog-single.html">How To Become Better With Building In 1 Month</a></h5>
                <p className="excerpt mb-0">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
              </div>
              <div className="post-bottom clearfix d-flex align-items-center">
                <div className="social-share me-auto">
                  <button className="toggle-button icon-share"></button>
                  <ul className="icons list-unstyled list-inline mb-0">
                    <li className="list-inline-item"><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                    <li className="list-inline-item"><a href="#"><i className="fab fa-twitter"></i></a></li>
                    <li className="list-inline-item"><a href="#"><i className="fab fa-linkedin-in"></i></a></li>
                    <li className="list-inline-item"><a href="#"><i className="fab fa-pinterest"></i></a></li>
                    <li className="list-inline-item"><a href="#"><i className="fab fa-telegram-plane"></i></a></li>
                    <li className="list-inline-item"><a href="#"><i className="far fa-envelope"></i></a></li>
                  </ul>
                </div>
                <div className="float-end d-none d-md-block">
                  <a href="blog-single.html" className="more-link">Continue reading<i className="icon-arrow-right"></i></a>
                </div>
                <div className="more-button d-block d-md-none float-end">
                  <a href="blog-single.html"><span className="icon-options"></span></a>
                </div>
              </div>
            </div>

            
            <div className="post post-classic rounded bordered">
              <div className="thumb top-rounded">
                <a href="category.html" className="category-badge lg position-absolute">Inspiration</a>
                <a href="blog-single.html">
                  <div className="inner">
                    <img src="images/posts/post-lg-2.jpg" alt="post-title" />
                  </div>
                </a>
              </div>
              <div className="details">
                <ul className="meta list-inline mb-0">
                  <li className="list-inline-item"><a href="#"><img src="images/other/author-sm.png" className="author" alt="author"/>Katen Doe</a></li>
                  <li className="list-inline-item">29 March 2021</li>
                  <li className="list-inline-item"><i className="icon-bubble"></i> (0)</li>
                </ul>
                <h5 className="post-title mb-3 mt-3"><a href="blog-single.html">10 Ways To Immediately Start Selling Furniture</a></h5>
                <p className="excerpt mb-0">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
              </div>
              <div className="post-bottom clearfix d-flex align-items-center">
                <div className="social-share me-auto">
                  <button className="toggle-button icon-share"></button>
                  <ul className="icons list-unstyled list-inline mb-0">
                    <li className="list-inline-item"><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                    <li className="list-inline-item"><a href="#"><i className="fab fa-twitter"></i></a></li>
                    <li className="list-inline-item"><a href="#"><i className="fab fa-linkedin-in"></i></a></li>
                    <li className="list-inline-item"><a href="#"><i className="fab fa-pinterest"></i></a></li>
                    <li className="list-inline-item"><a href="#"><i className="fab fa-telegram-plane"></i></a></li>
                    <li className="list-inline-item"><a href="#"><i className="far fa-envelope"></i></a></li>
                  </ul>
                </div>
                <div className="float-end d-none d-md-block">
                  <a href="blog-single.html" className="more-link">Continue reading<i className="icon-arrow-right"></i></a>
                </div>
                <div className="more-button d-block d-md-none float-end">
                  <a href="blog-single.html"><span className="icon-options"></span></a>
                </div>
              </div>
            </div>

            
            <div className="post post-classic rounded bordered">
              <div className="thumb top-rounded">
                <a href="category.html" className="category-badge lg position-absolute">Culture</a>
                <span className="post-format">
                  <i className="icon-camrecorder"></i>
                </span>
                <a href="blog-single.html">
                  <div className="inner">
                    <img src="images/posts/post-lg-3.jpg" alt="post-title" />
                  </div>
                </a>
              </div>
              <div className="details">
                <ul className="meta list-inline mb-0">
                  <li className="list-inline-item"><a href="#"><img src="images/other/author-sm.png" className="author" alt="author"/>Katen Doe</a></li>
                  <li className="list-inline-item">29 March 2021</li>
                  <li className="list-inline-item"><i className="icon-bubble"></i> (0)</li>
                </ul>
                <h5 className="post-title mb-3 mt-3"><a href="blog-single.html">Most Important Thing You Need To Know About Swim</a></h5>
                <p className="excerpt mb-0">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
              </div>
              <div className="post-bottom clearfix d-flex align-items-center">
                <div className="social-share me-auto">
                  <button className="toggle-button icon-share"></button>
                  <ul className="icons list-unstyled list-inline mb-0">
                    <li className="list-inline-item"><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                    <li className="list-inline-item"><a href="#"><i className="fab fa-twitter"></i></a></li>
                    <li className="list-inline-item"><a href="#"><i className="fab fa-linkedin-in"></i></a></li>
                    <li className="list-inline-item"><a href="#"><i className="fab fa-pinterest"></i></a></li>
                    <li className="list-inline-item"><a href="#"><i className="fab fa-telegram-plane"></i></a></li>
                    <li className="list-inline-item"><a href="#"><i className="far fa-envelope"></i></a></li>
                  </ul>
                </div>
                <div className="float-end d-none d-md-block">
                  <a href="blog-single.html" className="more-link">Continue reading<i className="icon-arrow-right"></i></a>
                </div>
                <div className="more-button d-block d-md-none float-end">
                  <a href="blog-single.html"><span className="icon-options"></span></a>
                </div>
              </div>
            </div>

            
            <div className="post post-classic rounded bordered">
              <div className="thumb top-rounded">
                <a href="category.html" className="category-badge lg position-absolute">Lifestyle</a>
                <a href="blog-single.html">
                  <div className="inner">
                    <img src="images/posts/post-lg-4.jpg" alt="post-title" />
                  </div>
                </a>
              </div>
              <div className="details">
                <ul className="meta list-inline mb-0">
                  <li className="list-inline-item"><a href="#"><img src="images/other/author-sm.png" className="author" alt="author"/>Katen Doe</a></li>
                  <li className="list-inline-item">29 March 2021</li>
                  <li className="list-inline-item"><i className="icon-bubble"></i> (0)</li>
                </ul>
                <h5 className="post-title mb-3 mt-3"><a href="blog-single.html">Your Light Is About To Stop Being Relevant</a></h5>
                <p className="excerpt mb-0">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
              </div>
              <div className="post-bottom clearfix d-flex align-items-center">
                <div className="social-share me-auto">
                  <button className="toggle-button icon-share"></button>
                  <ul className="icons list-unstyled list-inline mb-0">
                    <li className="list-inline-item"><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                    <li className="list-inline-item"><a href="#"><i className="fab fa-twitter"></i></a></li>
                    <li className="list-inline-item"><a href="#"><i className="fab fa-linkedin-in"></i></a></li>
                    <li className="list-inline-item"><a href="#"><i className="fab fa-pinterest"></i></a></li>
                    <li className="list-inline-item"><a href="#"><i className="fab fa-telegram-plane"></i></a></li>
                    <li className="list-inline-item"><a href="#"><i className="far fa-envelope"></i></a></li>
                  </ul>
                </div>
                <div className="float-end d-none d-md-block">
                  <a href="blog-single.html" className="more-link">Continue reading<i className="icon-arrow-right"></i></a>
                </div>
                <div className="more-button d-block d-md-none float-end">
                  <a href="blog-single.html"><span className="icon-options"></span></a>
                </div>
              </div>
            </div>

            <nav>
              <ul className="pagination justify-content-center">
                <li className="page-item active" aria-current="page">
                  <span className="page-link">1</span>
                </li>
                <li className="page-item"><a className="page-link" href="#">2</a></li>
                <li className="page-item"><a className="page-link" href="#">3</a></li>
              </ul>
            </nav>

          </div>
          <div className="col-lg-4">

            
            <div className="sidebar">

            
              <Bio />

              <Popular />

              
              

              
              <Topics />

              
              <div className="widget rounded">
                <div className="widget-header text-center">
                  <h3 className="widget-title">Newsletter</h3>
                  <img src="images/wave.svg" className="wave" alt="wave" />
                </div>
                <div className="widget-content">
                  <span className="newsletter-headline text-center mb-3">Join 70,000 subscribers!</span>
                  <form>
                    <div className="mb-2">
                      <input className="form-control w-100 text-center" placeholder="Email address…" type="email" />
                    </div>
                    <button className="btn btn-default btn-full" type="submit">Sign Up</button>
                  </form>
                  <span className="newsletter-privacy text-center mt-3">By signing up, you agree to our <a href="#">Privacy Policy</a></span>
                </div>		
              </div>

              
              <Ads />

              
              <div className="widget rounded">
                <div className="widget-header text-center">
                  <h3 className="widget-title">Tag Clouds</h3>
                  <img src="images/wave.svg" className="wave" alt="wave" />
                </div>
                <div className="widget-content">
                  <a href="#" className="tag">#Trending</a>
                  <a href="#" className="tag">#Video</a>
                  <a href="#" className="tag">#Featured</a>
                  <a href="#" className="tag">#Gallery</a>
                  <a href="#" className="tag">#Celebrities</a>
                </div>		
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>

    
    <div className="instagram">
      <div className="container-xl">
        
        <a href="#" className="btn btn-default btn-instagram">@Katen on Instagram</a>
        
        <div className="instagram-feed d-flex flex-wrap">
          <div className="insta-item col-sm-2 col-6 col-md-2">
            <a href="#">
              <img src="images/insta/insta-1.jpg" alt="insta-title" />
            </a>
          </div>
          <div className="insta-item col-sm-2 col-6 col-md-2">
            <a href="#">
              <img src="images/insta/insta-2.jpg" alt="insta-title" />
            </a>
          </div>
          <div className="insta-item col-sm-2 col-6 col-md-2">
            <a href="#">
              <img src="images/insta/insta-3.jpg" alt="insta-title" />
            </a>
          </div>
          <div className="insta-item col-sm-2 col-6 col-md-2">
            <a href="#">
              <img src="images/insta/insta-4.jpg" alt="insta-title" />
            </a>
          </div>
          <div className="insta-item col-sm-2 col-6 col-md-2">
            <a href="#">
              <img src="images/insta/insta-5.jpg" alt="insta-title" />
            </a>
          </div>
          <div className="insta-item col-sm-2 col-6 col-md-2">
            <a href="#">
              <img src="images/insta/insta-6.jpg" alt="insta-title" />
            </a>
          </div>
        </div>
      </div>
    </div>

  </>

  );
}
