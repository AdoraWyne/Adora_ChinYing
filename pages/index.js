import Head from 'next/head'
import { Inter } from '@next/font/google' // might need to delete as we have our own fonts

const inter = Inter({ subsets: ['latin'] }) // same as Inter

export default function Home() {
  return (
    <>
      <Head>
        <title>Adora&apos;s Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        
      </div>
    </>
  )
}
