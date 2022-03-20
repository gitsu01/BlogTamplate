import Head from 'next/head'
import home from '../styles/Home.module.css'
import p from '../project.json'

export default function Home() {
  return (
    <>
      <div className={home.container}>
      <Head>
        <title> {p.name} | Home </title>
        <meta name="description" content={p.desc} />
        <link rel="icon" href={p.icon} />
      </Head>
      <main className={home.main}>
        <div className={home.banner}>

        </div>
      </main>
      
    </div>
    </>
  )
}
