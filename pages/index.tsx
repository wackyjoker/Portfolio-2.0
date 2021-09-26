import type { NextPage } from 'next'
import Head from 'next/head'
// import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import Hero from '../containers/Hero'

const Home: NextPage = () => (
  <div className={styles.container}>
    <Head>
      <title>Wacky</title>
      <meta name="Wacky-Portfolio" content="portfolio site of wacky" />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main className={styles.main}>
      <Hero />
    </main>
  </div>
)

export default Home
