import Head from 'Next/Head';
import Layout from '../components/Layout';
import Card from '../components/Card';
import Date from '../components/Date';
import utilStyles from '../styles/utils.module.css';


export default function Project() {
    return (
      <Layout>
        <Head>
          <title></title>
        </Head>
        <section>
        <h2 className={utilStyles.headingLg}>Projects</h2>
        <div className={utilStyles.flexgrid}>
          <Card title="Dewey" href="https://github.com/nqmetke/dewey" description="A web app made to track reading progress, and find new books."></Card>
          <Card title="Autonomous Search and Rescue Drone" href="https://seniordesignday.engr.uconn.edu/seniorprojectpt/senior-design-2022-electrical-and-computer-engineering-team-06/" description="Drone flight control to autonomously find object within range. Sponsored by Sikorsky"></Card>
          <Card title="Personal Computer Management Software" description="A administration tool for ordering new computers built for university staff. Written with React and Laravel."></Card>
        </div>
      </section>
      </Layout>
    );
}