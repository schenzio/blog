import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'
//import Post from './posts/first-post'
import Link from 'next/link'
import Date from '../components/date'

export async function getStaticProps() {//pre-rendering with static generation
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
    //By returning allPostsData inside the props object in getStaticProps, the blog posts will be passed to the Home component as a prop
  }
}

export default function Home( {allPostsData} ) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hi, I&apos;m your <b><i>friendly neighrborhood full stack developer</i></b></p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '} {/* adds an empty space, which is used to divide text over multiple lines*/}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
            <Link href={`/posts/${id}`}>
              <a>{title}</a>
            </Link>
            <br />
            <small className={utilStyles.lightText}>
              <Date dateString={date} />
            </small>
          </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}
         
          
