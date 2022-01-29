import { getAllPostIds, getPostData } from "../../lib/posts";
import Link from "next/link";

import { useState } from 'react'
import * as ga from '../../lib/ga'

import {
    FacebookShareButton,
    FacebookIcon,
    TwitterShareButton,
    TwitterIcon,
    WhatsappShareButton,
    WhatsappIcon,
    LinkedinShareButton,
    LinkedinIcon,
} from 'next-share';

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.slug);
  const urlPost = 'https://www.yesidays.tech/posts/' + params.slug

  return {
    props: {
      postData,
      urlPost
    },
  };
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export default function Post({ postData, urlPost }) {

  const [query, setQuery] = useState("");

  const search = () => {
    ga.event({
      action: "select_content",
      params : {
        search_term: content_type
      }
    })
  }



  return (
    <>
      <div>
        <h1 onClick={(event) => setQuery(event.target.value)}>{postData.title}</h1>
        <div>
          <small>Fecha de publicación: {postData.date}</small>
        </div>
        <br />

        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />

        <div><Link href="/"><a><i>Regresar</i></a></Link></div>

        <br />

        <TwitterShareButton
          url={urlPost} >
          <TwitterIcon size={32} round />
        </TwitterShareButton>&nbsp;

        <FacebookShareButton
          url={urlPost} >
          <FacebookIcon size={32} round />
        </FacebookShareButton>&nbsp;

        <WhatsappShareButton
          url={urlPost} >
          <WhatsappIcon size={32} round />
        </WhatsappShareButton>
        &nbsp;
        <LinkedinShareButton
          url={urlPost} >
          <LinkedinIcon size={32} round />
        </LinkedinShareButton>

        

        


      </div>
    </>
  );
}