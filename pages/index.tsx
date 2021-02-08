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
        <h2>ABOUT ME</h2>
        <p>
          TESTING My name is Andrew Cacayuran and I am a Full Stack Developer
          based out of Orange County, CA. I started learning to code during the
          pandemic. Took a bootcamp class at NuCamp.co.
        </p>
        <h2>TECHNICAL SKILLS</h2>
        <p> JavaScript, TypeScript, Nextjs, Reactjs, Node.js </p>
        <h2>PROJECTS </h2>
      </main>
      <footer className={styles.footer}></footer>
    </div>
  )
}
