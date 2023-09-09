
import styles from './index.module.scss';
import React, { useEffect, useState, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const InfoSlides = () => {
    const component = useRef();
    const pinSlider = useRef();
    const content1 = useRef();
    const content2 = useRef();
    const image1 = useRef(); // Reference to the first image element
    const image2 = useRef(); // Reference to the second image element

    const tl = useRef();

    useEffect(() => {
        let ctx = gsap.context(() => {
            let contents = gsap.utils.toArray(`.${styles.content}`);
            gsap.set(contents, { autoAlpha: 0, y: 0 });

            let tl = gsap.timeline({
                scrollTrigger: {
                    trigger: pinSlider.current,
                    scrub: true,
                    pin: true,
                    start: "top top",
                    end: () => `+=${5 * window.innerHeight}px`,
                }
            });

            let imageTl = gsap.timeline({
                scrollTrigger: {
                    trigger: pinSlider.current,
                    scrub: true,
                    start: "top top",
                    end: () => `+=${5 * window.innerHeight}px`,
                }
            });

            contents.forEach((content, index) => {
                tl.to(content, {
                    keyframes: { y: ['40vh', '30vh', '30vh', '30vh', '30vh', '20vh'], opacity: [0, 1, 1, 1, 1, 0], },
                    duration: 5,
                    autoAlpha: 1,
                });
                
                if (index === 0) {
                    imageTl.to(image1.current, {
                        keyframes: { y: ['100vh', '00vh', '-30vh', '-30vh', '-60vh', '-160vh'], opacity: [1, 1, 1, 1, 1, 1] },
                        duration: 5,
                        autoAlpha: 1,
                        opacity: 1,
                    });
                } else if (index === 1) {
                    imageTl.to(image2.current, {
                        keyframes: { y: ['100vh', '00vh', '-30vh', '-30vh', '-60vh', '-250vh'], opacity: [1, 1, 1, 1, 1, 1] },
                        duration: 5,
                        autoAlpha: 1,
                        opacity: 1,
                    });
                }
            });


        }, component);
        return () => ctx.revert();
    }, []);

    return (
        <div className={styles.container} ref={component}>
            <div className={styles.pinBox} ref={pinSlider} >
                <div className={styles.pinSlider}>
                    <div className={styles.content} ref={content1}>
                        <p>this is the first info</p>
                        <div ref={image1}>
                            <img src={require('../../../assets/crew.png')} alt="Image 1" className={styles.screenshot} />
                        </div>
                    </div>

                    <div className={styles.content} ref={content2}>
                        <p>this is the second info</p>
                        <div ref={image2}>

                            <img src={require('../../../assets/crew.png')} alt="Image 1" className={styles.screenshot} />
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.intro} >
                <img src={require('../../../assets/appstoreIcon.png')} alt="App store" className={styles.appstoreIcon} />
                <h1>Visit CREW!</h1>
            </div>
        </div>
    )
}

export default InfoSlides;