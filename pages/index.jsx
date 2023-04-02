import Head from 'next/head'
import { Inter } from 'next/font/google'
import Home from './home/index.jsx'
import Header from '@/components/layout/Header.jsx'
import Karussell from '@/components/ui/Karussell.jsx'

export default function Index() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        

      </Head>
      <Header />
      <Karussell />
      <Home />
    </div>
  )
}
