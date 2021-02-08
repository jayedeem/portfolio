import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Drew Jason</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Drew Jason</h1>
        <h1>Full Stack Web Developer</h1>
        <small>Github</small>
        <small>Email</small>
        <h3>ABOUT ME</h3>
      </main>
      <footer className={styles.footer}></footer>
    </div>
  )
}
