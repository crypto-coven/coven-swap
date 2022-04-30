import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '../common/Button';
import styles from '../styles/Modal.module.css';

type ModalProps = {
    imageUrl: string;
    witchId: string;
    name: string;
    archetype: string;
    sun: string;
    moon: string;
    rising: string;
    articulation: string;
    // show: boolean;
};

const Modal = ({ imageUrl, witchId, name, archetype, sun, moon, rising, articulation }: ModalProps) => {
    // const close = () => {
    //     show = false;
    // }
    // if (!show) {
    //     return null
    // }
  return (
    <div className={styles.modal} onClick={e => e.stopPropagation()}>
        <div className={styles.content}>
            <Image
                src={imageUrl}
                className={styles.image}
                width={490}
                height={500}
            />
            <div className={styles.description}>
                <Image 
                    src="/coolicon.png"
                    alt="close"
                    className={styles.closeModal}
                    width={12.5}
                    height={12.5}
                />
                <p className={styles.details}>#{witchId}</p>
                <h1 className={styles.witchName}>{name}</h1>
                <p className={styles.header}>archetype</p>
                <p className={styles.details}>{archetype}</p><br/>
                <p className={styles.header}>astrological chart</p>
                <p className={styles.details}>☼ {sun} | ☾ {moon} | ↑ {rising}</p><br/>
                <p className={styles.header}>articulation</p>
                <p className={styles.details}>{articulation}</p>
                <div className={styles.buttonShadow}>
                    <Button className={styles.button} href="/dashboard">Let the Swap Commence</Button>
                </div>
            </div>
        </div>
  </div>
  );
}

export default Modal;
