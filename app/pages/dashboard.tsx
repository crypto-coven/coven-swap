import type { NextPage } from 'next'
import Head from 'next/head'
import Navbar from "../components/navbar"
import styles from '../styles/Dashboard.module.css'

const Dashboard: NextPage = () => {
  return (
    <div>
        <Head>
        <title>Coven Swap</title>
        <meta name="description" content="Find the WITCH you seek" />
        <link rel="icon" href="/" />
        </Head>
        <Navbar/>
        <div className={styles.background}>
        </div>
    </div>
  )
}

export default Dashboard
