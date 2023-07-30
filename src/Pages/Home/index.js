import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import image1 from '../../assets/crew.png'
import image2 from '../../assets/jericho.png'
import image3 from '../../assets/redwood.png'

import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';

import styles from './index.module.scss'

function index() {
    return (
        <div className={styles.wrapper}>
            
          <Swiper
            effect={'coverflow'}
            grabCursor={true}
            initialSlide={1}
            centeredSlides={true}
            // loop={true}
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
                {/* <div className={styles.overlay}>
                    <p>This is the overlay content for slide 1</p>
                </div> */}
            </SwiperSlide>
            <SwiperSlide className={styles.swiper_slide}>
              <img className={styles.imgComputer} src={image2} alt="slide_image" />
              {/* <div className={styles.overlay}>
                    <p>This is the overlay content for slide 1</p>
                </div> */}
            </SwiperSlide>
            <SwiperSlide className={styles.swiper_slide}>
              <img className={styles.img} src={image3} alt="slide_image" />
              {/* <div className={styles.overlay}>
                    <p>This is the overlay content for slide 1</p>
                </div> */}
            </SwiperSlide>
            {/* <div className={styles.sliderController}>
                <div className="swiper-button-prev slider-arrow">
                    <ion-icon name="arrow-back-outline"></ion-icon>
                </div>
                <div className="swiper-button-next slider-arrow">
                    <ion-icon name="arrow-forward-outline"></ion-icon>
                </div>
            </div> */}
          </Swiper>
        </div>
    )
}

export default index