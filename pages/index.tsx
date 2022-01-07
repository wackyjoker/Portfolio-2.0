import type { NextPage } from 'next'
import Head from 'next/head'
// import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import Hero from '../containers/Hero'
import Container from '../components/Container'

const Home: NextPage = () => (
  <div className={styles.container}>
    <Container>

    <main className={styles.main}>
      <Hero />
    </main>
    </Container>
  </div>
)

export default Home
