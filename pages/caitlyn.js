// pages/about.js

import React from "react";
import styles from '../styles/Caitlyn.module.css';
import Image from 'next/image';
import caitlyn from '../images/caitlyn.png';

export default function Caitlyn(){
    return(
        <div className={styles.container}>
            <h2 className={styles.title}>Caitlyn Page</h2>
            <p className={styles.description}>
            <Image className= {styles.image} src={caitlyn} />
            </p>
        </div>
        
    )
}