import React, { useEffect, useState } from 'react';

import styles from './index.module.scss';

import crewImage from '../../assets/crew.png'
import jerichoImage from '../../assets/jericho.png'
import redwoodImage from '../../assets/redwood.png'

import { useNavigate } from 'react-router-dom';

const Contact = () => {

  const navigate = useNavigate();

  const data = [
    { link: 'null', name: 'Welcome to our Projects!', category: 'mobile', image: redwoodImage },
    { link: '/crew', name: 'CREW!', category: 'mobile', image: crewImage, description: "Our first ever official mobile app, the inception of iD2. We saw a real problem, and we fixed it." },
    { link: '/jericho', name: 'jericho', category: 'desktop', image: jerichoImage },
    { link: '/redwood', name: 'Redwood', category: 'mobile', image: redwoodImage },
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

  // const handleImageClick = (id) => {
  //   const navigate = useNavigate();
  //   if (id === 1) {
  //     navigate.push('/crew');
  //   } else if (id === 2) {
  //     navigate.push('/jericho');
  //   } else if (id === 3) {
  //     navigate.push('/redwood');
  //   }
  // }

  useEffect(() => {
    const container = document.querySelector(`.${styles.container}`);
    if (container) {
      container.addEventListener('scroll', handleScroll);
    }

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
            className={item.category === 'desktop' ? styles.desktopImage : styles.mobileImage}
            style={{ transform: `scale(${visibleItem == index ? 1 : 0.8}) translateX(${visibleItem == index ? '-10vw' : '0'})` }}
            onClick={() => { item.link !== 'null' && navigate(item.link) }}
          />
          <span className={visibleItem == index ? styles.visibleText : styles.hiddenText}>
            {item.name}
          </span>
        </div>
      ))}
    </div>
  )
}

export default Contact;