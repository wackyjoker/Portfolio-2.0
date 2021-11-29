import React from 'react'
import Link from 'next/link'

const Hero: React.FC = () => (
  <>
    <div>hello</div>
    <Link href="/about">
      <a>About me</a>
    </Link>
  </>
)
export default Hero
