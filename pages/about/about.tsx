import React from 'react'
import Link from 'next/link'
import Container from '@/components/Container'

const About:React.FunctionComponent = () => (
  <Container>
    <div>
      <h1>Hey this is me</h1>
      <Link href="/">
        <a>Return to home</a>
      </Link>
    </div>
  </Container>

)

export default About
