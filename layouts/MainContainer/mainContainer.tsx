import Head from 'next/head'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import { Box, Container as ChakraContainer } from '@chakra-ui/react'
import { MainContainerProps } from './types'
// import { useTheme } from 'next-themes'
// import NextLink from 'next/link'
import MenuBar from '@/components/MenuBar'
import Footer from '@/components/Footer'

export default function MainContainer(props:MainContainerProps) {
  const [mounted, setMounted] = useState(false)
  // const { resolvedTheme, setTheme } = useTheme()

  useEffect(() => setMounted(true), [])

  const { children, ...customMeta } = props
  const router = useRouter()
  const meta = {
    title: 'Kevin Young - Developer,Gamer,Dreamer',
    description: 'Front-end developer, JavaScript enthusiast,Software Engineer.',
    image: 'placeholder',
    type: 'website',
    ...customMeta,
  }

  return (
    <Box as="main" pb={8}>
      <Head>
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <meta content={meta.description} name="description" />
        <meta property="og:url" content={`https://yourURL...${router.asPath}`} />
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content="Kevin Young" />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <MenuBar path={router.asPath} />
        <ChakraContainer maxW="container.md" pt={14}>
          {children}
          <Footer />
        </ChakraContainer>
      </main>
    </Box>
  )
}
