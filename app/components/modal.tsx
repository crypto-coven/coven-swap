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
    show: boolean;
    hide: () => void;
};

const Modal = ({ imageUrl, witchId, name, archetype, sun, moon, rising, articulation, show, hide }: ModalProps) => {
    if (!show) {
        return null
    }
  return (
    <div className={styles.modal}>
        <div className={styles.overlay}></div>
        <div className={styles.content}>
            <div className={styles.imageWrapper}>
                <Image
                    src={imageUrl}
                    className={styles.image}
                    width={490}
                    height={500}
                />
            </div>
            <div className={styles.description}>
                <button className={styles.closeModal}
                onClick={hide}>
                    <Image 
                        src="/coolicon.png"
                        alt="close"
                        width={12.5}
                        height={12.5}
                    />
                </button>
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
