// pages/index.js

import Link from "next/link"
import styles from '../styles/IndexHome.module.css'

export default function Home() {
  return (
    <div className={styles.container}>

      <main className={styles.main}>
        <h2 className={styles.title}>
          Ecodash autumn lookbook
        </h2>

        <div className={styles.grid}>
          <Link href="/alyssa" >
            <a className={styles.card}>
            <h2>Alyssa &rarr;</h2>
            </a>
          </Link>

          <Link href="/caitlyn" >
          <a className={styles.card}>
            <h2>Caitlyn &rarr;</h2>
            </a>
          </Link>

          <Link
            href="/wesley"
          >
            <a className={styles.card}>
            <h2>Wesley &rarr;</h2>
            </a>
          </Link>

        </div>
      </main>
    </div>
  )
}
