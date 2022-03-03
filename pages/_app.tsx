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
  Router.events.on('routeChangeStart', () => {
    setLoading(false)
  })
  Router.events.on('routeChangeComplete', () => {
    setLoading(true)
  })
  return (
    <>
      <ChakraProvider>
        {loading ? (

          <Component {...pageProps} />

        ) : <Loader />}
      </ChakraProvider>

    </>
  )
}
export default App
