import type { NextPage } from 'next'
// import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import Hero from '../containers/Hero'
import MainContainer from '@/layouts/MainContainer'

const Home: NextPage = () => (
  <div className={styles.container}>
    <MainContainer>

      <Hero />
    </MainContainer>
  </div>
)

export default Home
