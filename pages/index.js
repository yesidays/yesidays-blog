import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

import Layout from '../components/Layout';
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

            {/* Posts */}

            {allPostsData.map(({ slug, date, title, excerpt, category, cover }, index) => (
              
              <div className="post post-classic rounded bordered" key={index}>
              <div className="thumb top-rounded">
                <Link href={`/posts/${slug}`}>
                  <a className="category-badge lg position-absolute">{category}</a>
                </Link>
                {/*<span className="post-format">
                  <i className="icon-picture"></i>
                </span>*/}
                <Link href={`/posts/${slug}`}>
                  <a>
                    <div className="inner">
                      <img src={cover} />
                    </div>
                  </a>
                </Link>
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
                {/*<div className="social-share me-auto">
                  <button className="toggle-button icon-share"></button>
                  <ul className="icons list-unstyled list-inline mb-0">
                    <li className="list-inline-item"><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                    <li className="list-inline-item"><a href="#"><i className="fab fa-twitter"></i></a></li>
                    <li className="list-inline-item"><a href="#"><i className="fab fa-linkedin-in"></i></a></li>
                    <li className="list-inline-item"><a href="#"><i className="fab fa-pinterest"></i></a></li>
                    <li className="list-inline-item"><a href="#"><i className="fab fa-telegram-plane"></i></a></li>
                    <li className="list-inline-item"><a href="#"><i className="far fa-envelope"></i></a></li>
                  </ul>
                </div>*/}
                <div className="float-end d-none d-md-block">
                  <Link href={`/posts/${slug}`}>
                    <a className="more-link">Leer más<i className="icon-arrow-right"></i></a>
                  </Link>
                </div>
                <div className="more-button d-block d-md-none float-end">
                  <Link href={`/posts/${slug}`}>
                    <a><span className="icon-options"></span></a>
                  </Link>
                </div>
              </div>

            </div>

            ))}

            {/* End Post */}

            

  
    
    {/*<Instagram />*/}

  </>

  );
}
