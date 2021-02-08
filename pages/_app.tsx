import { NextComponentType } from 'next'
import { ReactNode } from 'react'
import '../styles/globals.css'
import Layout from './components/Layout'

const MyApp = ({ Component, pageProps }) => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
