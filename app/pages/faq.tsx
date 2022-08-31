import type { NextPage } from 'next'
import React, { useState } from 'react';
import Head from 'next/head'
import Navbar from "../components/Navbar"
import styles from '../styles/Dashboard.module.css'
import { style } from 'styled-system';

export default function Faq() {
    return (
        <div className={styles.background}>
            <Head>
            <title>Coven Swap</title>
            <meta name="description" content="Find the WITCH you seek" />
            <link rel="icon" href="/" />
            </Head>
            {/* <div className={styles.content}> */}
            <Navbar></Navbar>
        </div>
    )

}