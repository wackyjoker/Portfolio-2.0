import type { NextPage } from 'next'
// import Image from 'next/image'
import { Text } from '@chakra-ui/react'
import MainContainer from '@/layouts/MainContainer'
import styles from '../styles/Home.module.scss'

const Home: NextPage = () => (
  <div className={styles.container}>
    <MainContainer>
      <Text
        bgGradient="linear(to-l, #7928CA, #FF0080)"
        bgClip="text"
        fontSize="6xl"
        fontWeight="extrabold"
      >
        Welcome to My Portfolio
      </Text>
    </MainContainer>
  </div>
)

export default Home
