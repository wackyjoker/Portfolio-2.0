import { FC } from 'react'
import Link from 'next/link'
import MainContainer from '@/layouts/MainContainer'

const About:FC = () => (
  <MainContainer>
    <div>
      <h1>Hey this is me</h1>
      <Link href="/">
        <a>Return to home</a>
      </Link>
    </div>
  </MainContainer>
)
export default About
