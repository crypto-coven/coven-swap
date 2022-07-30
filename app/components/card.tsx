import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/Card.module.css';

type CardProps = {
    imageUrl: string;
    witchId: string;
    name: string;
    archetype: string;
    sun: string;
    rising: string;
    moon: string;
};

const Card = ({ imageUrl, witchId, name, archetype, sun, moon, rising }: CardProps) => {
    return (
        <div className={styles.card}>
            <Image
                src={imageUrl}
                className={styles.image}
                width={260}
                height={255}
            />
            <div className={styles.infoContainer}>
                <div className={styles.name}>{name}</div>
                <div className={styles.footer}>
                    <div className={styles.archetype}>{archetype}</div>
                    <div className={styles.starchart}>
                        <Image
                            src={`/signs/${sun}.png`}
                            className={styles.sign}
                            width={16}
                            height={16}
                        />
                        <Image
                            src={`/signs/${moon}.png`}
                            className={styles.sign}
                            width={16}
                            height={16}
                        />
                        <Image
                            src={`/signs/${rising}.png`}
                            className={styles.sign}
                            width={16}
                            height={16}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Card;
