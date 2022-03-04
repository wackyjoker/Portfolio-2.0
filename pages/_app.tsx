import '../styles/globals.scss'
import { useEffect, useState } from 'react'
import type { AppProps } from 'next/app'
import Router from 'next/router'
import { ChakraProvider, useColorModeValue } from '@chakra-ui/react'
import Loader from '@/components/Loader'

function App({ Component, pageProps }: AppProps) {
  const [firstLoad, setFirstLoading] = useState(true)
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    setFirstLoading(false)// on first load
  }, [])
  Router.events.on('routeChangeStart', () => {
    setLoading(true)
  })
  Router.events.on('routeChangeComplete', () => {
    setLoading(false)
  })
  const ballColor = useColorModeValue('#ED64A6', '#FC8181')
  return (
    <>
      {firstLoad
        ? <Loader /> : (
          <ChakraProvider>
            {loading ? (
              <Loader ballColor={ballColor} />

            ) : <Component {...pageProps} />}
          </ChakraProvider>
        ) }

    </>
  )
}
export default App
