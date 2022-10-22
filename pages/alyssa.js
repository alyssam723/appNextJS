// pages/about.js

import React from "react";
import styles from '../styles/Alyssa.module.css';
import Image from 'next/image';
import alyssa from '../images/alyssa.png';
export default function Alyssa(){
    
    return(

        <div className={styles.container}>
             
            <h2 className={styles.title}>Alyssa Page</h2>
     
            <p className={styles.description}>
           
            <Image className= {styles.image} src={alyssa} />
            
            </p>
          
                       
                 
        </div>
        
        
    )
}