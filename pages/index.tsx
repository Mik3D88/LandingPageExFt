import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Mike LandingPage</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        <h1 className="text-6xl font-bold">
          Bem vindo(a) ao{' '}
          <a className="text-blue-600" href="https://www.instagram.com/mikealmeida.ph/">
            Mike Almeida Platform!
          </a>
        </h1>
      </main>

      <footer className="flex h-24 w-full items-center justify-center border-t">
        <a
          className="flex items-center justify-center gap-2"
          href="https://www.instagram.com/mikealmeida.ph/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Construido por Mike
        </a>
      </footer>
    </div>
  )
}

export default Home
