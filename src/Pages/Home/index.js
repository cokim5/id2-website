import React, { useEffect, useState } from 'react'
import styles from './index.module.scss'

const Home = () => {
  const [scrollPercentage, setScrollPercentage] = useState(0.0);
  const [isMenuFixed, setIsMenuFixed] = useState(false);
  const [activeSection, setActiveSection] = useState(null);

  const items = [
    { text: "log your devotionals", image: require('../../assets/redwood5.png') },
    { text: "look back on your entry", image: require('../../assets/redwood6.png') },
    { text: "add friends", image: require('../../assets/redwood3.png') },
    { text: "join & create groups", image: require('../../assets/redwood1.png') },
    { text: "search/organize your entries", image: require('../../assets/redwood4.png') },
    { text: "view your friends posts", image: require('../../assets/redwood2.png') },
  ]

  const [scrollLeft, setScrollLeft] = useState(0);

  const handleScrollLeft = () => {
    if (scrollLeft > 1) {
      setScrollLeft(scrollLeft - 2);
    }
  };

  const handleScrollRight = () => {
    if (scrollLeft < 3) {
      setScrollLeft(scrollLeft + 2);
    }
  };

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
    const menuItems = document.querySelectorAll('[data-target]');

    menuItems.forEach((menuItem) => {
      menuItem.addEventListener('click', () => {
        const targetId = menuItem.getAttribute('data-target');
        const targetSection = document.getElementById(targetId);

        targetSection.scrollIntoView({ behavior: 'smooth' });
      });
    });

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
          <p data-target="whatIsContainer" className={activeSection === 'whatIsContainer' ? styles.active : ''}>what is redwood</p>
          <p data-target="ourVisionContainer" className={activeSection === 'ourVisionContainer' ? styles.active : ''}>our vision</p>
          <p data-target="keyFeaturesContainer" className={activeSection === 'keyFeaturesContainer' ? styles.active : ''}>key features</p>
          <p data-target="visitContainer" className={activeSection === 'visitContainer' ? styles.active : ''}>visit redwood</p>
        </div>
      </div>




      <div id="whatIsContainer" className={styles.whatIsContainer}>
        <p className={styles.whatIsText}>A devotional journaling platform that fosters a sense of togetherness and growth in faith and community, bringing believers and non-believers alike closer together.</p>
      </div>
      <div id="ourVisionContainer" className={styles.ourVisionContainer}>
        <p className={styles.ourVisionText}>To <em className={styles.highlighted}>foster</em> communities that <em className={styles.highlighted}>thrive</em> not because of individual merit but through <em className={styles.highlighted}>support, care, and love.</em><br /> <br />
          For groups or communities that want to create a supportive space and grow together in their walk with God</p>
      </div>
      <div id="keyFeaturesContainer" className={styles.keyFeaturesContainer}>
        
        <div className={styles.carouselContainer}>
        <img src={require('../../assets/chevron-down-brown.png')} className={styles.buttonLeft} onClick={() => handleScrollLeft()} style={{opacity: `${scrollLeft != 0 ? 1 : 0}`}}/>
          <div className={styles.carouselWrapper} >
            {items.map((item, index) => (
              <div key={index} className={styles.carouselItem} style={{transform: `translateX(${scrollLeft * -100}%)`}}>
                <img src={item.image} className={styles.carouselImage} />
                <p className={styles.carouselCaption}>{item.text}</p>
              </div>
            ))}
          </div>
          <img src={require('../../assets/chevron-down-brown.png')} className={styles.buttonRight} onClick={() =>handleScrollRight()} style={{opacity: `${scrollLeft != 4 ? 1 : 0}`}}/>
        </div>
      </div>
      <div id="visitContainer" className={styles.visitContainer}>
        <p className={styles.visitText}>
          <span>c</span>
          <span>o</span>
          <span>m</span>
          <span>i</span>
          <span>n</span>
          <span>g</span>
          <span>&nbsp;&nbsp;&nbsp;</span>
          <span>s</span>
          <span>o</span>
          <span>o</span>
          <span>n</span>
        </p>
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