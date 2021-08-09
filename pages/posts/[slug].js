import { getAllPostIds, getPostData } from "../../lib/posts";

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
  return (
    <>
      <div>
        <h1>{postData.title}</h1>
        <br />

        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />

        <div>
          Fecha de publicación: {postData.date}
        </div>


      </div>
    </>
  );
}