
import styles from './index.module.scss';
import React, { useEffect, useState } from 'react';


const InfoSlides = () => {

    return (

        <div className={styles.firstSlide}>
            <div className={styles.screenContainer}>
                screens go here
            </div>
            <div className={styles.textContainer}>
                <p>Explain CREW!</p>

            </div>
        </div>
    )
}

export default InfoSlides;



