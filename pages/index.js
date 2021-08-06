import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

import Layout from '../components/Layout';
import Sidebar from '../components/Sidebar';
import Instagram from '../components/Instagram';


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


            {/* Posts */}

            {allPostsData.map(({ slug, date, title, excerpt, category, cover }, index) => (
              
              <div className="post post-classic rounded bordered" key={index}>
              <div className="thumb top-rounded">
                <a href="" className="category-badge lg position-absolute">{category}</a>
                <span className="post-format">
                  <i className="icon-picture"></i>
                </span>
                <a href="blog-single.html">
                  <div className="inner">
                    <img src={cover} />
                  </div>
                </a>
              </div>
              <div className="details">
                <ul className="meta list-inline mb-0">
                  {/*<li className="list-inline-item"><a href="#"><img src="images/other/author-sm.png" className="author" alt="author"/>Yesi Days</a></li>*/}
                  <li className="list-inline-item">{date}</li>
                  {/*<li className="list-inline-item"><i className="icon-bubble"></i> (0)</li>*/}
                </ul>
                <h5 className="post-title mb-3 mt-3">
                  <Link href={`/posts/${slug}`}>
                    <a>{title}</a>
                  </Link>
                </h5>
                <p className="excerpt mb-0">
                  {excerpt}
                </p>
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
                  <a href="blog-single.html" className="more-link">Leer más<i className="icon-arrow-right"></i></a>
                </div>
                <div className="more-button d-block d-md-none float-end">
                  <a href="blog-single.html"><span className="icon-options"></span></a>
                </div>
              </div>

            </div>

            ))}

            {/* End Post */}

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

            <Sidebar />

          </div>

        </div>

      </div>
    </section>

    
    {/*<Instagram />*/}

  </>

  );
}
