import Head from 'next/head'
import styles from './styles.module.scss'

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