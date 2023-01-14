import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import quran from '../styles/Quran.module.css'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1>Al-Quran App with Next.js</h1>
        <div>
            <Link href='/quran'>
              <button className={quran.btn}>
                Read Al-Quran 
              </button>
            </Link>
        </div>
      </main>
    </>
  )
}
