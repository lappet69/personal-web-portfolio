import { Inter } from '@next/font/google'
import HeroSection from 'components/HeroSection'
import HomeNavigation from 'components/HomeNavigation'
import HomeSection from 'components/HomeSection'
import MainNavbar from 'components/MainNavbar'
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Andre Sinabariba</title>
        <meta name="description" content="Andre sinabariba" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HeroSection />
      <div className='bg-white'>
        <HomeNavigation />
      </div>

    </>
  )
}
