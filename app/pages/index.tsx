import type { NextPage } from 'next'
import Image from 'next/image';
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { Button } from '../common/Button';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Coven Swap</title>
        <meta name="description" content="Find the WITCH you seek" />
        <link rel="icon" href="/" />
      </Head>
      <Image
        src="/homepage.jpg"
        alt="homepage background"
        className={styles.bgImage}
        layout="fill"
        objectFit="cover"
        quality={100}
      />
      <div className={styles.centered}>
        <Button variant="filled_dark" size="small" href="/dashboard">Enter</Button>
      </div>
    </div>
  )
}

export default Home
