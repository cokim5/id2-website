
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
          keyframes: { y: ['40vh', '30vh', '30vh', '30vh', '30vh', '28vh'], opacity: [0, 1, 1, 1, 1, 0], },
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
            <p className={styles.content1p1}>CREW! was birthed to solve the</p>
            <p className={styles.content1p2}>problem of college friends taking 10-15 </p>
            <p className={styles.content1p3}>minutes to decide where to eat, then always falling</p>
            <p className={styles.content1p4}>back to the same old cafeteria.</p>
            <p className={styles.content1p5}>V1.0 of CREW! leveraged an extremely comprehensive hand</p>
            <p className={styles.content1p6}>collected dataset on 220 restaurants around UW, then asked users</p>
            <p className={styles.content1p7}>to take a 15-second, 3-question quiz that assessed mood, rush, and</p>
            <p className={styles.content1p8}> appetite to recommend restaurants.</p>
            <div ref={image1}>
              <img src={require('../../../assets/crew3.png')} alt="Image 1" className={styles.screenshot} />
            </div>
          </div>

          <div className={styles.content} ref={content2}>
            <p className={styles.content1p1}>User feedback lead the team to</p>
            <p className={styles.content1p2}>realize that people wanted more direct</p>
            <p className={styles.content1p3}>control over the factors affecting their results.</p>
            <p className={styles.content2p4}>With this, V2.0 CREW! filters was born.</p>
            <p className={styles.content1p5}>Filters requests the user for preferred ethnicity, ambiance,</p>
            <p className={styles.content1p6}>price range, urgency, and genre to find restaurants that match</p>
            <p className={styles.content2p7}>the user's selections.</p>
            <p className={styles.content2p8}>Continue scrolling to view the results page!</p>
            <div ref={image2}>

              <img src={require('../../../assets/crew4.png')} alt="Image 1" className={styles.screenshot} />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.conclusionContainer} >
        <div className={styles.viewResultsContainer}>
          <img src={require('../../../assets/crew5.png')} className={styles.video} />
        </div>
        <div className={styles.visitCrewContainer}>
          <a href="https://apps.apple.com/us/app/crew/id1622758585" target="_blank" className={styles.link}>
            <div className={styles.clickableArea}>
              <img src={require('../../../assets/appstoreIcon2.png')} alt="App store" className={styles.appstoreIcon} />
              <h1>Visit CREW!</h1>
            </div>
          </a>
        </div>

      </div>
    </div>
  )
}

export default InfoSlides;