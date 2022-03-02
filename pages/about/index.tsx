import { FC } from 'react'
import Link from 'next/link'
import MainContainer from '@/layouts/MainContainer'

const About: FC = () => (
  <MainContainer>
    <div>
      <h1>
        A PERN Stack developer Dedicated to Frontend Development with
        experience building client-side web apps on React.
        Passionate for pixel-perfect frontend apps.
      </h1>
      <Link href="/">
        <a>Return to home</a>
      </Link>
    </div>
  </MainContainer>
)
export default About
