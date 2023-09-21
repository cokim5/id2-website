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
                                        As a college junior, Collin Kim stands out as a remarkable individual with an innate ability for pragmatic problem-solving. He approaches issues methodically, always searching for the next puzzle to unravel. His leadership style is characterized by unwavering strength and vision, placing the well-being of his peers at the forefront. Collin's passion lies in devising practical solutions that drive genuine, positive changes in people's lives.<br /><br /> Get in contact with him here:<br />email: collin@id2.company<br />
                                        <a href="https://www.linkedin.com/in/collin-kim-a3b70b17b/" target="_blank" ><img src={require('../../assets/linkedin.png')} className={styles.image}/></a>
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
                                    As a college junior, David Hyun shines as an outstanding individual celebrated for his coding prowess and a relentless commitment to conquering challenges. He embodies a methodical mindset, always on the lookout for intricate problems to solve. David thrives on tackling complex puzzles head-on, leveraging his coding skills to decipher and innovate. His passion lies in the thrill of unraveling intricacies and crafting ingenious solutions that pave the way for meaningful progress.<br /><br />Get in contact with him here: <br />email: david@id2.company<br />
                                    <a href="https://www.linkedin.com/in/david-hyun-5122611a3/" target="_blank" ><img src={require('../../assets/linkedin.png')} className={styles.image}/></a>
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
                                    As a college junior, Hanara Nam stands out as a creative visionary, constantly pushing the boundaries of design innovation. With a passion for crafting intricate and detailed wireframes, Hanara brings an unparalleled level of creativity to every project. Her diligent work ethic and lightning-fast pace set her apart, allowing her to transform concepts into remarkable designs with unparalleled efficiency. Hanara thrives in the world of design, where her boundless imagination and unwavering dedication shine brightly. <br /><br />Get in contact with her here: <br />email: hanara@id2.company<br />
                                    <a href="https://www.linkedin.com/in/hanaranam/" target="_blank" ><img src={require('../../assets/linkedin.png')} className={styles.image}/></a>
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