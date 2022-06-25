import Head from 'next/head'
import DISSection from '../components/DISSection'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Service from '../components/Service'

export default function Home() {
  return (
    <div className=''>
      <Head>
        <title>Creative Agency</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Hero />
      <DISSection />
      <Service />
      
    </div>
  )
}