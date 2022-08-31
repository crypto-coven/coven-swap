import React from "react";
import { useEffect, useRef, useState } from "react";
import { useAccount, useConnect, useDisconnect, useEnsName } from "wagmi";
import { InjectedConnector } from "wagmi/connectors/injected";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Navbar.module.css";
import { style } from "styled-system";
import { Button } from "./Button";
declare let window: any;

const Navbar = () => {
  const { address } = useAccount();
  const { data: ensName } = useEnsName({ address });
  const { connect } = useConnect({
    connector: new InjectedConnector(),
  });
  const { disconnect } = useDisconnect();

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
            {!address && (
              <Button onClick={() => connect()} variant="outline_dark">
                CONNECT WALLET
              </Button>
            )}
            {address && (
              <div className={styles.addressText}>
                {ensName
                  ? `${ensName}`
                  : `${String(address).substring(0, 6)}...${String(
                      address
                    ).substring(38)}`}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
