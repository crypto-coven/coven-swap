import type { NextPage } from 'next'
import Head from 'next/head'
import Navbar from "../components/navbar"
import styles from '../styles/Home.module.css'

const Dashboard: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Coven Swap</title>
        <meta name="description" content="Find the WITCH you seek" />
        <link rel="icon" href="/" />
      </Head>
      <Navbar/>
    </div>
  )
}

export default Dashboard
