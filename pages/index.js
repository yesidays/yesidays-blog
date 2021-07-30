import Image from 'next/image'
import Link from 'next/link'

import Layout from '../components/layout';
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
    <Layout home>

      <div>
        <ul>
            {allPostsData.map(({ slug, date, title }, index) => (
              <li key={index}>
                <Link href={`/posts/${slug}`}>
                  <a>{title}</a>
                </Link>
                <br />
                <span>
                  {date}
                </span>
              </li>
            ))}
        </ul>
      </div>
    </Layout>
  );
}
