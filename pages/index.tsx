import type { NextPage } from 'next'
// import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import Hero from '../containers/Hero'
import Container from '../components/Container'

const Home: NextPage = () => (
  <div className={styles.container}>
    <Container>

      <Hero />
    </Container>
  </div>
)

export default Home
