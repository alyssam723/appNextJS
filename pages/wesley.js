// pages/contact.js

import React from "react";
import styles from '../styles/Wesley.module.css'
import Image from 'next/image';
import wesley from '../images/wesley.png';

export default function Wesley(){
    return(
        <div className={styles.container}>
            <h2 className={styles.title}>Wesley Page</h2>
            <div className={styles.details}>
            <Image className= {styles.image} src={wesley} />
            </div>
        </div>
    )
}