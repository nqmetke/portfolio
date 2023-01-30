import Head from 'next/head';
import Link from 'next/link';
import Card from '../components/card'
import Date from '../components/date';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData } from '../lib/posts';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData
    }
  }
}
export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          I am a software engineering with a passion for the outdoors, robotics, and tabletop board games. 
        </p>
      </section>

      <section>
        <h2 className={utilStyles.headingLg}>Projects</h2>
        <div className={utilStyles.flexgrid}>
          <Card title="Dewey" href="https://github.com/nqmetke/dewey" description="A web app made to track reading progress, and find new books."></Card>
          <Card title="Autonomous Search and Rescue Drone" href="https://seniordesignday.engr.uconn.edu/seniorprojectpt/senior-design-2022-electrical-and-computer-engineering-team-06/" description="Drone flight control to autonomously find object within range. Sponsored by Sikorsky"></Card>
          <Card title="Personal Computer Management Software" description="A administration tool for ordering new computers built for university staff. Written with React and Laravel."></Card>
        </div>
        <div className={utilStyles.marginTop}>
          <Link href="/projects" >See All Projects</Link>
        </div>
      </section>
      {/* <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.length > 0 ? 
          allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>{title}</Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
          </li>
          )) : (<h6>No posts yet!</h6>)}
        </ul>
      </section> */}
    </Layout>
  );
}