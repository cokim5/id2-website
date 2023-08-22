
import styles from './index.module.scss';
import React, { useEffect, useState } from 'react';


const WelcomeSlide = () => {

    useEffect(() => {
        const handleScroll = () => {
            const crewWelcomeScreen = document.querySelector(`.${styles.crewWelcomeScreen}`);
            const crewLogo = document.querySelector(`.${styles.crewLogo}`);
            const welcomeText = document.querySelector(`.${styles.welcomeText}`);
            
            if (crewWelcomeScreen && crewLogo && welcomeText) {
                const { top } = crewWelcomeScreen.getBoundingClientRect();
                if (top <= 0) {
                    crewLogo.style.top = `${Math.min(0, top)}px`;
                    welcomeText.style.top = `${Math.min(0, top)}px`;
                } else {
                    crewLogo.style.top = '0';
                    welcomeText.style.top = '0';
                }
            }
        };
        

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);


    return (

            <div className={styles.welcomeContainer}>
                <img
                    src={require('../../../assets/crewLogo.png')}
                    className={styles.crewLogo}
                />
                 <div className={styles.welcomeText}>
                    Welcome to CREW!
                </div>
                <div className={styles.screenContainer}>
                    <img
                        src={require('../../../assets/crew.png')}
                        className={styles.crewWelcomeScreen}
                    />
                </div>
            </div>
    )
}

export default WelcomeSlide;



