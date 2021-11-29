import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import Router from 'next/router'
import { useState } from 'react'
import Loader from '../components/Loader'

function MyApp({ Component, pageProps }: AppProps) {
  const [loading, setLoading] = useState(false)
  console.log('project started')
  Router.events.on('routeChangeStart', () => {
    console.log('router is changing')
    setLoading(true)
  })
  Router.events.on('routeChangeComplete', () => {
    console.log('router is completed')
    setLoading(false)
  })
  return (
    <>
      {loading && <Loader />}
      <Component {...pageProps} />
    </>
  )
}
export default MyApp
