import React from 'react';
import { useEffect, useRef, useState } from 'react';
import {ethers} from "ethers";
import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/Navbar.module.css';
import { style } from 'styled-system';
declare let window:any;

const Navbar = () => {
  const [currentAccount, setCurrentAccount] = useState("");
  const isMetamaskConnected = !!currentAccount;
  /*
   * A function to check if a user wallet is connected.
   */
  const checkIfWalletIsConnected = async () => {
    try {
      const { ethereum } = window;

      /*
       * Check if we're authorized to access the user's wallet
       */
      const accounts = await ethereum.request({ method: "eth_accounts" });

      if (accounts.length !== 0) {
        const account = accounts[0];
        setCurrentAccount(account);
        // success("🦄 Wallet is Connected!");
      } else {
        // success("Welcome 🎉  ");
        // warn("To create a feed, Ensure your wallet Connected!");
      }
    } catch (err) {
      // error(`${err.message}`);
    }
  };

  /**
   * Implement your connectWallet method here
   */
  const connectWallet = async () => {
    try {
      const { ethereum } = window;

      if (!ethereum) {
        // warn("Make sure you have MetaMask Connected");
        return;
      }

      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });
      setCurrentAccount(accounts[0]);
    } catch (err) {
      // error(`${err.message}`);
    }
  };

  /*
   * This runs our function when the page loads.
   */
  useEffect(() => {
    checkIfWalletIsConnected();
  }, []);

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
          {!isMetamaskConnected && (
            <button 
              className={styles.addressText}
              onClick={connectWallet}
            >
              CONNECT WALLET
            </button>
          )}
          {isMetamaskConnected && (
            <div
              className={styles.addressText}
            >
              {`${String(currentAccount).substring(0, 6)}...${String(currentAccount).substring(38)}`}
            </div>
          )}
          </div>
         </div>
      </div>
  </div>
  );
}
export default Navbar;
