import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Layout from '../components/Layout'

function Checked() {
  return <Image src="/checked.svg" alt="me" width="64" height="64" />
}

export default function Home() {
  return (
    <Layout>
<div className={styles.container}>
      <Head>
        <title>(Un)Errata</title>
        <meta name="description" content="An Error Management Platform" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          UnErrata
        </h1>

        <p className={styles.description}>
          An Error Management platform!
        </p>

        <div className={styles.grid}>
          <Link href="/book">
          <a className={styles.card}>
          
            <h2>View Books &rarr;</h2>
            <p>Browse through our collection of books to get a taste for the product</p>
          </a>
          </Link>

          <Link href="/book/create">
          <a className={styles.card}>
            <h2>Add a Book &rarr;</h2>
            <p>Are you an author? Consider adding a publication to the platform [Alpha]</p>
          </a>
          </Link>
          
          <Link href="/book/createError">
          <a
            className={styles.card}
          >
            <h2>Report Errors &rarr;</h2>
            <p>
              Found an error in a book? Report it
            </p>
          </a>
          </Link>
          
        </div>
      </main>

      <footer className={styles.footer}>
        <span>
          Powered by{' '}
          <span><a  rel="noopener noreferrer" target="_blank" href="https://github.com/probro27/prabhav-khera">Prabhav</a></span>
          <span><a  rel="noopener noreferrer" target="_blank" href="https://github.com/Medhansh-Hinduja">Medhansh</a></span>
          <span><a  rel="noopener noreferrer" target="_blank" href="https://github.com/hydroxyhelium">Medhansh</a></span>
          <span><a  rel="noopener noreferrer" target="_blank" href="https://github.com/RahulTandon1">Rahul</a></span>
        </span>
      </footer>
    </div>
    </Layout>
    
  )
}
