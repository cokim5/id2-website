import React, { useEffect, useState } from 'react'
import styles from './index.module.scss'

const Home = () => {
  const [scrollPercentage, setScrollPercentage] = useState(0.0);
  const [isMenuFixed, setIsMenuFixed] = useState(false);
  const [activeSection, setActiveSection] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const pageHeight = document.body.scrollHeight * (3.0 / 7.0);

      const newScrollPercentage = (scrollY / (pageHeight - windowHeight)) * 100;

      setScrollPercentage(newScrollPercentage);
      console.log(scrollPercentage);

      if (scrollPercentage > 123.42324815124046 && !isMenuFixed) {
        setIsMenuFixed(true);
      } else if (scrollPercentage <= 123.42324815124046 && isMenuFixed) {
        setIsMenuFixed(false);
      }

      const sections = ['whatIsContainer', 'ourVisionContainer', 'keyFeaturesContainer', 'visitContainer'];
      for (const sectionId of sections) {
        const section = document.getElementById(sectionId);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= windowHeight * 0.5 && rect.bottom >= windowHeight * 0.5) {
            setActiveSection(sectionId);
            break;
          }
        }
      }

      const whatIsContainer = document.getElementById('whatIsContainer');
      if (whatIsContainer) {
        const rect = whatIsContainer.getBoundingClientRect();
        if (rect.top > windowHeight * 0.5) {
          setActiveSection(null);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrollPercentage]);

  useEffect(() => {
    // Get all the menu items by their data-target attribute
    const menuItems = document.querySelectorAll('[data-target]');

    // Add click event listeners to each menu item
    menuItems.forEach((menuItem) => {
      menuItem.addEventListener('click', () => {
        // Get the target section's ID from the data-target attribute
        const targetId = menuItem.getAttribute('data-target');
        const targetSection = document.getElementById(targetId);

        // Scroll to the target section smoothly
        targetSection.scrollIntoView({ behavior: 'smooth' });
      });
    });

    // Clean up the event listeners when the component unmounts
    return () => {
      menuItems.forEach((menuItem) => {
        menuItem.removeEventListener('click', () => { });
      });
    };
  }, []);

  return (

    <div>
      <div className={styles.introSlide}>
        <h1 style={{ marginLeft: `${-scrollPercentage / 4}vw`, transform: `rotate(${-scrollPercentage * 8}deg)`, marginTop: `${-scrollPercentage / 4}vh`, fontSize: `${-scrollPercentage / 9 + 10}vw` }} className={styles.h1Letter1}>R</h1>
        <h1 style={{ marginLeft: `${-scrollPercentage / 2}vw`, transform: `rotate(${scrollPercentage * 6}deg)`, marginTop: `${scrollPercentage}vh`, fontSize: `${scrollPercentage / 8 + 10}vw` }} className={styles.h1Letter2}>E</h1>
        <h1 style={{ marginLeft: `${scrollPercentage}vw`, transform: `rotate(${scrollPercentage * 4}deg)`, marginTop: `${-scrollPercentage}vh`, fontSize: `${-scrollPercentage / 4 + 10}vw` }} className={styles.h1Letter3}>D</h1>
        <h1 style={{ marginLeft: `${scrollPercentage / 1.5}vw`, transform: `rotate(${-scrollPercentage * 9}deg)`, marginTop: `${scrollPercentage / 1.5}vh`, fontSize: `${-scrollPercentage / 80 + 10}vw` }} className={styles.h1Letter4}>W</h1>
        <h1 style={{ marginLeft: `${-scrollPercentage}vw`, transform: `rotate(${scrollPercentage}deg)`, marginTop: `${-scrollPercentage}vh`, fontSize: `${-scrollPercentage / 4 + 10}vw` }} className={styles.h1Letter5}>O</h1>
        <h1 style={{ marginLeft: `${scrollPercentage}vw`, transform: `rotate(${scrollPercentage * 8}deg)`, marginTop: `${scrollPercentage}vh`, fontSize: `${scrollPercentage / 90 + 10}vw` }} className={styles.h1Letter6}>O</h1>
        <h1 style={{ marginLeft: `${-scrollPercentage / 2}vw`, transform: `rotate(${-scrollPercentage * 4}deg)`, marginTop: `${-scrollPercentage / 3}vh`, fontSize: `${-scrollPercentage / 9 + 10}vw` }} className={styles.h1Letter7}>D</h1>
        <h4 style={{ fontSize: `${scrollPercentage / 50 + 3}vw`, transition: 'color 0.5s', color: scrollPercentage > 82 ? '#ECDCD1' : '#C3A699' }} className={styles.h4Letter1}>rooted in God.</h4>
      </div>
      <div className={styles.introSlideBuffer}>
      </div>

      <div className={styles.tableOfContentsSlide}>
        <img src={require('../../assets/redwood_logo.png')} className={styles.logo} />
        <div className={`${styles.menuContainer} ${isMenuFixed ? styles.fixed : ''}`} style={{
          right: `${scrollPercentage < 123.4
              ? '20'
              : scrollPercentage > 143.8
                ? '2'
                : 20 - (scrollPercentage - 123.4) * ((20 - 2) / (143.8 - 123.4))
            }vw`
        }}>
          <p data-target="whatIsContainer"  style={{ color: activeSection === 'whatIsContainer' ? '#785444' : '#C3A699' }}>what is redwood</p>
          <p data-target="ourVisionContainer" style={{ color: activeSection === 'ourVisionContainer' ? '#785444' : '#C3A699' }}>our vision</p>
          <p data-target="keyFeaturesContainer" style={{ color: activeSection === 'keyFeaturesContainer' ? '#785444' : '#C3A699' }}>key features</p>
          <p data-target="visitContainer" style={{ color: activeSection === 'visitContainer' ? '#785444' : '#C3A699' }}>visit redwood</p>
        </div>
      </div>




      <div id="whatIsContainer" className={styles.whatIsContainer}>
        what is
      </div>
      <div id="ourVisionContainer" className={styles.ourVisionContainer}>
        our vision
      </div>
      <div id="keyFeaturesContainer" className={styles.keyFeaturesContainer}>
        key features
      </div>
      <div id="visitContainer" className={styles.visitContainer}>
        visit
      </div>



    </div>
  )
}

export default Home








/*
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import image1 from '../../assets/crew.png'
import image2 from '../../assets/jericho.png'
import image3 from '../../assets/redwood.png'

import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
        <div className={styles.wrapper}>
          <Swiper
            effect={'coverflow'}
            grabCursor={true}
            initialSlide={1}
            centeredSlides={true}
            slidesPerView={'auto'}
            coverflowEffect={{
                rotate: 0,
                stretch: -30,
                depth: 40,
                modifier: 20,
                slideShadows: false,
            }}
            slideToClickedSlide={true}
            speed={1000}
            pagination={{ el: '.swiper-pagination', clickable: true }}
            navigation={{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
              clickable: true,
            }}
            modules={[EffectCoverflow, Pagination, Navigation]}
            className={styles.swiper_container}
          >
            <SwiperSlide className={styles.swiper_slide}>
              <img className={styles.img} src={image1} alt="slide_image" />
            </SwiperSlide>
            <SwiperSlide className={styles.swiper_slide}>
              <img className={styles.imgComputer} src={image2} alt="slide_image" />
            </SwiperSlide>
            <SwiperSlide className={styles.swiper_slide}>
              <img className={styles.img} src={image3} alt="slide_image" />                
            </SwiperSlide>
          </Swiper>
        </div>
        */