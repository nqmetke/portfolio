import Head from 'Next/Head'
import Image from 'Next/Image'
import styles from '../styles/layout.module.css'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/Link'

const name = "Nathanael Metke";
export const siteTitle = "Nathanael Metke"


export default function Layout({ children, home }){
    return (
        <div className={styles.container}>
            <Head>
                <link rel="icon" href='/favicon.ico' />
                <meta
                    name='description'
                    content="Personal Website for Nathanael Metke"
                />
    <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle,
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header className={styles.header}>
        {home ? (
          <>
            <Image
              priority
              src="/images/profile.png"
              className={utilStyles.borderCircle}
              height={144}
              width={144}
              alt=""
            />
            <h1 className={utilStyles.heading2Xl}>{name}</h1>
            <h3 className={utilStyles.subtitle}><a href="mailto:nqmetke@gmail.com"> email </a>|
                                                <a href="https://github.com/nqmetke"> github </a> |
                                                <a href="https://www.linkedin.com/in/nathanael-metke/"> linkedin </a> | 
                                                <a href="/resume.pdf"> resume </a></h3>
          </>
        ) : (
          <>
            <Link href="/">
              <Image
                priority
                src="/images/profile.png"
                className={utilStyles.borderCircle}
                height={108}
                width={108}
                alt=""
              />
            </Link>
            <h2 className={utilStyles.headingLg}>
              <Link href="/" className={utilStyles.colorInherit}>
                {name}
              </Link>
            </h2>
          </>
        )}
      </header>
      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">??? Back to home</Link>
        </div>
      )}
    </div>
  );
}