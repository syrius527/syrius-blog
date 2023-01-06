import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Dev.Syrius Blog</title>
        <meta name="description" content="Dev.Syrius Blog" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div>
          syrius-blog입니다
          <h1 className="text-3xl font-bold underline">제목입니다 title</h1>
        </div>
      </main>
    </>
  )
}
