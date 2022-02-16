import '../styles/globals.scss'
import { useEffect, useState } from 'react'
import type { AppProps } from 'next/app'
import Router from 'next/router'
import { ChakraProvider } from '@chakra-ui/react'
import Loader from '@/components/Loader'

function App({ Component, pageProps }: AppProps) {
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    setLoading(true)
  }, [])
  console.log('project started')
  Router.events.on('routeChangeStart', () => {
    console.log('router is changing')
    setLoading(false)
  })
  Router.events.on('routeChangeComplete', () => {
    console.log('router is completed')
    setLoading(true)
  })
  return (
    <>
      {loading ? (
        <ChakraProvider>
          <Component {...pageProps} />
        </ChakraProvider>
      ) : <Loader />}

    </>
  )
}
export default App
