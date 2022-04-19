import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/Navbar.module.css';

const navbar= () =>{
  return (
    <div className={styles.container}>
      <Image
        src="/navbarLogo.svg"
        alt="covenswap"
        className={styles.navbarLogo}
        width={176}
        height={108}
    />
    <div className={styles.links}>
        <li className={styles.navlink}>
        <Link href="/swaps">SWAPS</Link>
        </li>
        <li className={styles.navlink}>
        <Link href="/faq">FAQ</Link>
        </li>
    </div>
  </div>
  // Include Button for CONNECT WALLET
  );
}
export default navbar;