import type { NextPage } from 'next'
import React, { useState, useEffect } from 'react';
import Head from 'next/head'
import Navbar from "../components/navbar"
import styles from '../styles/Dashboard.module.css'
import Modal from '../components/modal';
import Card from '../components/card';
import { style } from 'styled-system';
// import { getWitchCount } from './api/api'

declare let window:any;

export default function Dashboard() {

  const [seeWitchDetails, setSeeWitchDetails] = useState(false);
  const toggle = () => setSeeWitchDetails(!seeWitchDetails);
  const [currentAccount, setCurrentAccount] = useState("");

  // TODO: don't repeat this
  const checkIfWalletIsConnected = async () => {
    try {
      const { ethereum } = window;
      const accounts = await ethereum.request({ method: "eth_accounts" });

      if (accounts.length !== 0) {
        const account = accounts[0];
        setCurrentAccount(account);
      } 
    } catch (err) {
      console.log(err.message)
    }
  };

  const isWalletNotConnected = !currentAccount;
  //const witchCount = Promise.resolve(getWitchCount(currentAccount));
  const hasWitches = false;

  useEffect(() => {
    checkIfWalletIsConnected();
  }, []);

  return (
    <div className={styles.background}>
        <Head>
        <title>Coven Swap</title>
        <meta name="description" content="Find the WITCH you seek" />
        <link rel="icon" href="/" />
        </Head>
        {/* <div className={styles.content}> */}
        <Navbar></Navbar>
        <div className={styles.container}>
          {isWalletNotConnected && (
            <div className={styles.messageBox}>
              <p>Connect your wallet to get started!</p>
            </div>
          )}
          {hasWitches && (
            <div className={styles.messageBox}>
                <p>
                Alas, there are no WITCHES in your coven. View the collection on <a href="https://opensea.io/collection/cryptocoven">OpenSea</a>.
                </p>
            </div>
          )}
            <div className={styles.header}>Your Coven</div>
            <div className={styles.subheader}># witches</div>
            <div className={styles.messageBox}>
                <p>
                Select a witch to start a swap!
                </p>
            </div>
              <div className={styles.witchContainer}>
                <div className={styles.cardContainer} onClick={toggle}>
                <Card
                  imageUrl="/hydra.png"
                  witchId="162"
                  name="Hydra, the Theoretical Sextant"
                  archetype="Mage"
                  sun="gemini"
                  moon="libra"
                  rising="virgo"></Card>
              </div>
              <Modal 
                imageUrl="/hydra.png"
                witchId="162"
                name="Hydra, the Theoretical Sextant"
                archetype="Mage"
                sun="leo"
                moon="taurus"
                rising="pisces"
                articulation="You are a WITCH made of daydreams. You tattoo your own skin with wasps dipped in squid ink. Your magic spawns from sparks of flame. You have written dissertations on enchanted clothing. <br/><br/> FLOURISH MY FRIEND!"
                show={seeWitchDetails}
                hide={toggle}
              />
              <div className={styles.cardContainer} onClick={toggle}>
                <Card
                  imageUrl="/nectarine.png"
                  witchId="9468"
                  name="Nectarine, the Delicate Snowflake"
                  archetype="Seer"
                  sun="gemini"
                  moon="libra"
                  rising="virgo"></Card>
              </div>
              <Modal 
                imageUrl="/nectarine.png"
                witchId="9468"
                name="Nectarine, the Delicate Snowflake"
                archetype="Seer"
                sun="cancer"
                moon="libra"
                rising="aries"
                articulation="You are a WITCH made of sea storms. You dance on the ocean, tap and jig on the waves. Your magic spawns from salt and starlight. You see visions of the future in the sky.

                HIKE UP YOUR SKIRT AND TRAMPLE!"
                show={seeWitchDetails}
                hide={toggle}
              />
        {/* </div> */}
        </div>
      </div>
    </div>
  )
}
