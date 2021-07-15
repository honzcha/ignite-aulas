import { GetStaticProps } from 'next'
import Head from 'next/head'
import { getPrismicClient } from '../../services/prismic'
import styles from './styles.module.scss'
import Prismic from '@prismicio/client'

export default function Posts() {
  return (
    <>
      <Head>
        <title>Posts | Not-substack </title>
      </Head>


      <main className={styles.container}>
        <div className={styles.posts}>
          <a href="#">
            <time>15 July 2021</time>
            <strong>Non sint anim qui deserunt aute amet ullamco.</strong>
            <p>Nulla nostrud cillum ad eiusmod irure cillum excepteur. Aute anim consequat ex est commodo amet.</p>
          </a>
          <a href="#">
            <time>15 July 2021</time>
            <strong>Non sint anim qui deserunt aute amet ullamco.</strong>
            <p>Nulla nostrud cillum ad eiusmod irure cillum excepteur. Aute anim consequat ex est commodo amet.</p>
          </a>
          <a href="#">
            <time>15 July 2021</time>
            <strong>Non sint anim qui deserunt aute amet ullamco.</strong>
            <p>Nulla nostrud cillum ad eiusmod irure cillum excepteur. Aute anim consequat ex est commodo amet.</p>
          </a>
        </div>
      </main>

    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient()

  const response = await prismic.query([
    Prismic.predicates.at('document.type','post')
  ], {
    fetch: ['publication.title','publication.content'],
    pageSize: 100,
  })

  console.log(JSON.stringify(response, null, 2))

  return {
    props: {}
  }
}