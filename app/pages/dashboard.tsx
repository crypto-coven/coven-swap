import type { NextPage } from 'next'
import React, { useState } from 'react';
import Head from 'next/head'
import Navbar from "../components/navbar"
import styles from '../styles/Dashboard.module.css'
import Modal from '../components/modal';
import { style } from 'styled-system';

import {
  NetworkAndEtherscanUri,
  Status,
  StatusType,
  WalletResponse,
} from '../config/types';
import {
  connectWallet,
  fetchContract,
  fetchNetworkAndEtherscanUri,
  getCurrentWalletConnected,
  installMetamask,
} from '../utils/interact';
import {
  ENV,
  mainnetEtherscanTxUri,
  mainNetwork,
} from '../utils/constants';
import { globals } from '../config/globals';

export default function Dashboard() {
  const [status, setStatus] = useState<Status>({
    statusMessage: null,
    statusType: StatusType.none,
  });
  const [seeWitchDetails, setSeeWitchDetails] = useState(false);
  const [walletAddress, setWallet] = useState('');
  const toggle = () => setSeeWitchDetails(!seeWitchDetails);
  const [networkAndEtherscanUri, setNetworkAndEtherscanUri] =
    useState<NetworkAndEtherscanUri>({
      network: mainNetwork,
      etherscanUri: mainnetEtherscanTxUri,
    });

    const getNetworkAndEtherscanUri = async () => {
      const [network, etherscanUri] = await fetchNetworkAndEtherscanUri();
      setNetworkAndEtherscanUri({ network, etherscanUri });
    };

    const onWalletConnected = (walletResponse: WalletResponse) => {
      setStatus({
          statusMessage: walletResponse.status,
          statusType: walletResponse.type,
      });
      if (walletResponse.address && walletResponse.address.length > 0) {
          setWallet(walletResponse.address);
      }
  };

  const onWalletDisconnect = () => {
      setStatus({
          statusMessage: null,
          statusType: StatusType.none,
      });
      setWallet('');
  }

  const getWallet = async () => {
      const { address, status, type } = await getCurrentWalletConnected();
      setStatus({ statusMessage: status, statusType: type });
      if (address) {
          setWallet(address);
      }
  };

  return (
    <div className={styles.background}>
        <Head>
        <title>Coven Swap</title>
        <meta name="description" content="Find the WITCH you seek" />
        <link rel="icon" href="/" />
        </Head>
        {/* <div className={styles.content}> */}
        <Navbar
          hasConnect
          onWalletConnected={onWalletConnected}
          onWalletDisconnect={onWalletDisconnect}
          walletAddress={walletAddress}
        />
        <div className={styles.container}>
            <div className={styles.messageBox}>
                <p>
                Alas, there are no WITCHES in your coven. View the collection on <a href="https://opensea.io/collection/cryptocoven">OpenSea</a>.
                </p>
            </div>
            <button onClick={toggle}>show modal</button>
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
        {/* </div> */}
      </div>
    </div>
  )
}
