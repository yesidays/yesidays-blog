import { getAllPostIds, getPostData } from "../../lib/posts";

import { useState } from 'react'
import * as ga from '../../lib/ga'

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.slug);
  return {
    props: {
      postData,
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

export default function Post({ postData }) {

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

        

        <div><a href="/"><i>Regresar</i></a></div>


      </div>
    </>
  );
}