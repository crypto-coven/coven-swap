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
        src="/background.png"
        alt="homepage background"
        className={styles.bgImage}
        layout="fill"
        objectFit="cover"
        quality={100}
      />
      <div className={styles.centered}>
        <Image
          src="/homePageLogo.svg"
          alt="homepage logo"
          className={styles.logo}
          width={351.04}
          height={233.16}
        />
        <Image
          src="/portalIllustration.png"
          alt="portal outlines"
          className={styles.outlines}
          width={902}
          height={833.73}
        />
        <Image
          src="/union.png"
          alt="portal union"
          className={styles.portal}
          width={520}
          height={833.73}
        />
        <p className={styles.message}>
          Hark, WITCH — <br/><br/>
          The time of your metamorphosis is upon us.<br/><br/>
          
          A face for a face, a soul for a soul. Your transfigured visage lies just beyond this threshold. <br/><br/>
          
          It calls for you. <br/>

          <Button variant="filled_dark" size="small" href="/dashboard">Enter</Button>
        </p>
      </div>
    </div>
  )
}

export default Home
