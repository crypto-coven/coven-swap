import React from 'react';
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/Navbar.module.css';
import { style } from 'styled-system';
import { connectWallet } from '../utils/interact';
import { WalletResponse } from '../config/types';

type NavbarProps = {
  hasConnect: boolean;
  walletAddress?: string;
  onWalletConnected?: (walletResponse: WalletResponse) => void;
  onWalletDisconnect?: () => void;
}

const navbar = ({
  hasConnect,
  walletAddress,
  onWalletConnected,
  onWalletDisconnect,
}: NavbarProps) => {
  const [currentPath, setCurrentPath] = useState('/');
    const connectButtonRef = useRef(null);
    const connectWalletPressed = async () => {
        const walletResponse = await connectWallet();
        if (onWalletConnected) {
            onWalletConnected(walletResponse);
        }
    };

    const disconnectWalletPressed = async () => {
        if (onWalletDisconnect) {
            onWalletDisconnect();
        }
    };    

    const changeTexttoDisconnect = () => {
        if (!connectButtonRef.current) {
            return;
        }
        (connectButtonRef.current as any).innerText = 'Disconnect wallet';
    };

    const changeTextBack = () => {
        if (!connectButtonRef.current) {
            return;
        }
        (connectButtonRef.current as any).innerText = `Connected: ${String(
            walletAddress
        ).substring(0, 6)}...${String(walletAddress).substring(38)}`;
    };

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
          {hasConnect && (
            <>
              {walletAddress ? (
                  <div className={styles.addressBox}>
                  <button 
                    className={styles.addressText}
                    ref={connectButtonRef}
                    id="walletButton"
                    onMouseEnter={changeTexttoDisconnect}
                    onMouseLeave={changeTextBack}
                    onClick={disconnectWalletPressed}
                  >
                    {`Connected: ${String(
                                        walletAddress
                                    ).substring(0, 6)}...${String(
                                        walletAddress
                                    ).substring(38)}`}
                  </button>
                </div>
              ) : (
                <div className={styles.addressBox}>
                  <button 
                    className={styles.addressText}
                    onClick={connectWalletPressed}
                  >
                    CONNECT WALLET
                  </button>
                </div>
              )}
              </>
          )}
          </div>
      </div>
  </div>
  );
}
export default navbar;
