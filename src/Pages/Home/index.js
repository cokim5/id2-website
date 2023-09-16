

import React, { useEffect, useState } from 'react';

import styles from './index.module.scss';

import crewImage from '../../assets/crew2.png'
import jerichoImage from '../../assets/jericho.png'
import redwoodImage from '../../assets/redwood.png'
import id2Image from '../../assets/id2Logo.jpg'

import { useNavigate } from 'react-router-dom';

const Home = () => {

  const navigate = useNavigate();

  const data = [
    { link: 'null', name: 'Welcome to our Projects!', category: 'mobile', imageClass: styles.firstImage, visibleItemClass: styles.mobileVisibleText, hiddenItemClass: styles.mobileHiddenText, image: id2Image, description: "Scroll through, and click any screenshot to learn more", final: ""},
    { link: '/redwood', name: 'Redwood', category: 'mobile', imageClass: styles.mobileImage, visibleItemClass: styles.mobileVisibleText, hiddenItemClass: styles.mobileHiddenText, image: redwoodImage, description: "Filling the gap of Christian devotional sharing.", final: "Click the screenshot to learn more!"},
    { link: '/jericho', name: 'Jericho Foundation LLC Website', category: 'desktop', imageClass: styles.desktopImage, visibleItemClass: styles.desktopVisibleText, hiddenItemClass: styles.desktopHiddenText, image: jerichoImage, description: "Our community asked for our help, and we responded.", final: "Click the screenshot to learn more!" },
    { link: '/crew', name: 'CREW!', category: 'mobile', image: crewImage, imageClass: styles.mobileImage, visibleItemClass: styles.mobileVisibleText, hiddenItemClass: styles.mobileHiddenText, description: "Our first ever official mobile app, the inception of iD2. We saw a real problem, and we fixed it.", final: "Click the screenshot to learn more!" },
  ]

  const [visibleItem, setVisibleItem] = useState(null);
  let scrollTimeout = null;


  const handleScroll = () => {
    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(() => {
      const container = document.querySelector(`.${styles.container}`);
      if (container) {
        const middleViewport = window.innerWidth / 2;
        console.log('test1');
        console.log(middleViewport);
        console.log('test2');
        const items = Array.from(container.children);
        console.log(items);
        console.log('test3');

        let index = 0;
        for (const item of items) {
          const rect = item.getBoundingClientRect();
          console.log('rect ' + index + ' ' + rect);
          const itemCenter = (rect.left + rect.right) / 2;
          console.log('left ' + index + ': ' + rect.left + 'right ' + index + ': ' + rect.right);
          console.log('itemCenter ' + index + ' ' + itemCenter);
          if (itemCenter >= middleViewport - rect.width / 2 && itemCenter <= middleViewport + rect.width / 2) {
            if (visibleItem != item.getAttribute('data-index')) {
              setVisibleItem(item.getAttribute('data-index'));
              console.log('index: ' + item.getAttribute('data-index'));
            }
            break;
          }
        }
      }
    }, 100);
  };

  useEffect(() => {
    const container = document.querySelector(`.${styles.container}`);
    if (container) {
      container.addEventListener('scroll', handleScroll);
    }

    handleScroll();

    return () => {
      if (container) {
        container.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  return (

 
    <div className={styles.container}>
      {data.map((item, index) => (

        <div
          key={index}
          data-index={index}
          className={
            item.category === 'desktop'
              ? styles.desktopItem
              : styles.mobileItem
          }
        >
          <img
            src={item.image}
            alt={item.name}
            className={item.imageClass}
            style={{ transform: `scale(${visibleItem == index ? 1 : 0.8}) translateX(${visibleItem == index ? '-10vw' : '0'})` }}
            onClick={() => { item.link !== 'null' && navigate(item.link) }}
          />
          <span className={visibleItem == index ? item.visibleItemClass : item.hiddenItemClass}>
            {item.name}<br /><br />
            {item.description} <br /><br />
            {item.final}
          </span>
        </div>
      ))}
    </div>
  )
}

export default Home;