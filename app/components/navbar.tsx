import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/Navbar.module.css';
import { style } from 'styled-system';

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
      <div className={styles.content}>
        <div className={styles.links}>
            <li className={styles.navlink}>
              <Link href="/swaps">SWAPS</Link>
            </li>
            <li className={styles.navlink}>
              <Link href="/faq">FAQ</Link>
            </li>
        </div>
        <div className={styles.push}>
            <div className={styles.addressBox}>
              <p className={styles.addressText}>CONNECT WALLET</p>
            </div>
          </div>
      </div>
  </div>
  );
}
export default navbar;
