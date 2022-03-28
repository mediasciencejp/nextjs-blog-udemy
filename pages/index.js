import Layout, {siteTitle} from "../components/Layout";
import utilStyles from "../styles/utils.module.css";
import styles from "../styles/home.module.css";
import Link from "next/link";
import {getPostsData} from "../lib/post";
import Head from "next/head";

// SSG
export async function getStaticProps() {
  const allPostsData = getPostsData();

  return {
    props: {
      allPostsData,
    }
  };
}

// SSR
// export async function getServerSideProps(context) {
//   const allPostsData = getPostsData();
//   return {
//     props: {
//       allPostsData,
//     }
//   };
// }

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <title>{siteTitle}</title>
      </Head>

      <section className={utilStyles.headingMd}>
        <p>私はインチキのにしやんです。インチキポスターを販売しています。</p>
      </section>

      <section>
        <h2>📝とあるインチキな男のブログ</h2>
        <div className={styles.grid}>
          {allPostsData.map(({id, title, date, thumbnail}) => (
            <article key={id}>
              <Link href={`/posts/${id}`}>
                <img
                  src={thumbnail}
                  className={styles.thumbnailImage}
                />
              </Link>
              <Link href={`/posts/${id}`}>
                <a className={utilStyles.boldText}>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>{date}</small>
            </article>
          ))}
        </div>
      </section>
    </Layout>
  );
}
