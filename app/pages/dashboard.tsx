import type { NextPage } from 'next'
import React, { useState } from 'react';
import Head from 'next/head'
import Navbar from "../components/navbar"
import styles from '../styles/Dashboard.module.css'
import Modal from '../components/modal';

export default function Dashboard() {
  const [seeWitchDetails, setSeeWitchDetails] = useState(false);
  const onCardPressed = async () => {
    setSeeWitchDetails(true);
  } 
  return (
    <div className={styles.background}>
        <Head>
        <title>Coven Swap</title>
        <meta name="description" content="Find the WITCH you seek" />
        <link rel="icon" href="/" />
        </Head>
        {/* <div className={styles.content}> */}
        <Navbar/>
            <div className={styles.messageBox}>
                <p className={styles.messageBox}>
                Alas, there are no WITCHES in your coven. View the collection on <a href="https://opensea.io/collection/cryptocoven">OpenSea</a>.
                </p>
            </div>
            <button onClick={() => onCardPressed}>show modal</button>

              <Modal 
                imageUrl="/hydra.png"
                witchId="162"
                name="Hydra, the Theoretical Sextant"
                archetype="Mage"
                sun="leo"
                moon="taurus"
                rising="pisces"
                articulation="You are a WITCH made of daydreams. You tattoo your own skin with wasps dipped in squid ink. Your magic spawns from sparks of flame. You have written dissertations on enchanted clothing. <br/><br/> FLOURISH MY FRIEND!"
              />
        {/* </div> */}
    </div>
  )
}
