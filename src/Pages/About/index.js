import React, {useRef, useEffect} from 'react';
import styles from './index.module.scss'
import { Parallax } from "react-parallax";
import iD2 from "../../assets/id2.png";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/pagination';

import 'swiper/css';
import 'swiper/css/pagination';

import hanara from '../../assets/hanara.png'
import collin from '../../assets/collin.png'
import david from '../../assets/david.png'

import { Pagination } from 'swiper/modules';

const names = ['CEO', 'CTO', 'CDO'];


function About(){

    return (
        <div className={styles.wrapper}>
            <Parallax className={styles.Parallax} strength={300} bgImage={iD2} bgImageStyle={{ height: '123vh'}}>
                <div className={styles.content}>
                    <div className={styles.textContent}>Who is iD2?</div>
                </div>
            </Parallax>
    
            <div className={styles.contentPeople}>
                    <Swiper
                        direction={'vertical'}
                        pagination={{ 
                            el: `.${styles.customPagination}`,
                            clickable: true, 
                            renderBullet: function (index, className) {
                                return (
                                    '<span class="' +
                                        className +
                                        ' ' +
                                        styles.customPaginationBullet + // Add your custom class here
                                        '">' +
                                        names[index] +
                                    '</span>'
                                );
                          },}}
                        modules={[Pagination]}
                        className={styles.swiper_container}
                    >

                        <SwiperSlide className={styles.swiper_slide}>
                            <div className={styles.slideWrap}>
                                <img className={styles.img} src={collin} alt="slide_image" />
                                <div className={styles.info}>
                                    <div className={styles.title}>
                                        Collin Kim
                                    </div>
                                    <div className={styles.text}>
                                        Lorem ipsum...
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className={styles.swiper_slide}>
                        <div className={styles.slideWrap}>
                                <img className={styles.img} src={david} alt="slide_image" />
                                <div className={styles.info}>
                                    <div className={styles.title}>
                                        David Hyun
                                    </div>
                                    <div className={styles.text}>
                                        Lorem ipsum...
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className={styles.swiper_slide}>
                             <div className={styles.slideWrap}>
                                <img className={styles.img} src={hanara} alt="slide_image" />
                                <div className={styles.info}>
                                    <div className={styles.title}>
                                        Hanara Nam
                                    </div>
                                    <div className={styles.text}>
                                        Lorem ipsum...
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <div className={styles.titleContainer}>MEET OUR MEMBERS</div>
                        <div class={styles.customPagination}/>
                    </Swiper>
            </div>

        </div>
      );
};

export default About;