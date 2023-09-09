
import styles from './index.module.scss';
import React, { useEffect, useState, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const component = useRef();
  const pinSlider = useRef();
  const content1 = useRef();
  const content2 = useRef();
  const image1 = useRef(); 
  const image2 = useRef(); 

  const tl = useRef();

  useEffect(() => {
    const marquee2Element = document.querySelector(`.${styles.marquee2}`);
    if (marquee2Element) {
      marquee2Element.style.opacity = 0;
      setTimeout(() => {
        marquee2Element.style.opacity = 1;
      }, 10000); 
    }
    
    document.body.style.overflowX = 'hidden';

    return () => {
      document.body.style.overflowX = 'auto';
    };
  }, []);

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
          keyframes: { y: [1000, 500, 0, 0, 0, 0, 0], opacity: [1, 1, 1, 1, 1, 1, 1] },
          duration: 5,
          autoAlpha: 1
        });

        if (index === 0) {
          imageTl.to(image1.current, {
            keyframes: { y: [-900, -400, 0, 0, 0, -400, -900], opacity: [0, 0.5, 1, 1, 1, 0.5, 1] },
            duration: 5,
            autoAlpha: 1,
            opacity: 1,
          });
        } else if (index === 1) {
          imageTl.to(image2.current, {
            keyframes: { y: [-900, -400, 0, 0, 0, -400, -900], opacity: [0, 0.5, 1, 1, 1, 0.5, 1] },
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
      <div className={styles.intro} >
        <h1>Created website for construction company Jericho Foundation LLC</h1>
        <img src={require('../../assets/chevron-down.png')} />
      </div>
      <div className={styles.pinBox} ref={pinSlider} >

        <div className={styles.pinSlider}>
          <div className={styles.pinSliderBackground}>
            <div className={styles.content} ref={content1}>
              <img src={require('../../assets/jerichoScreenShot2.png')} />
              <div ref={image1} className={styles.caption}>
                <h1>01</h1>
                <p>Clean Homepage</p>
              </div>
            </div>

            <div className={styles.content} ref={content2}>
              <img src={require('../../assets/jerichoScreenShot1.png')} />
              <div ref={image2} className={styles.caption}>
                <h1>02</h1>
                <p>Interactive form, forwarded to company</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.conclusion} >
        <div className={styles.marquee}>
          <span>Interact with the website! &nbsp; Interact with the website! &nbsp; </span>
        </div>
        <div className={`${styles.marquee} ${styles.marquee2}`}>
          <span>Interact with the website! &nbsp; Interact with the website! &nbsp; </span>
        </div>

        <div className={styles.interactiveContainer}>
          <iframe title="jerichofoundationllc" src="https://jerichofoundationllc.com" className={styles.interactiveScreen}></iframe>
        </div>

      </div>
    </div>
  )
}

export default Projects;

