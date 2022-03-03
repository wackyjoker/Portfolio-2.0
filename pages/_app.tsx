import '../styles/globals.scss'
import { useEffect, useState } from 'react'
import type { AppProps } from 'next/app'
import Router from 'next/router'
import { ChakraProvider } from '@chakra-ui/react'
import Loader, { FirstLoader } from '@/components/Loader'

function App({ Component, pageProps }: AppProps) {
  const [firstLoad, setFirstLoading] = useState(false)
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    setFirstLoading(true)// on first load
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
      {firstLoad
        ? (
          <ChakraProvider>
            {loading ? (

              <Component {...pageProps} />

            ) : <Loader />}
          </ChakraProvider>
        ) : <FirstLoader />}

    </>
  )
}
export default App
