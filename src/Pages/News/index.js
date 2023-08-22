// import LocomotiveScroll from 'locomotive-scroll';
// import styles from './index.module.scss';
// import React, { useEffect } from 'react';


// const News = () => {


//     return (
//         <div>
//             <div className={styles.welcomeContainer}>
//                 <img
//                     src={require('../../assets/crewLogo.png')}
//                     className={styles.crewLogo}
//                 />
//                 <div className={styles.welcomeText}>
//                     Welcome to CREW!
//                 </div>
//                 <div className={styles.screenContainer}>


//                     <img
//                         src={require('../../assets/crew.png')}
//                         className={styles.crewWelcomeScreen}
//                     />
//                 </div>
//             </div>

//             <div className={styles.firstSlide}>
//                 WJOIFJIOEWJ
//             </div>
//         </div>
//     )
// }

// export default News;






import React, { useEffect, useRef } from 'react';
import LocomotiveScroll from 'locomotive-scroll';
import styles from './index.module.scss';

const News = () => {
    const scrollRef = useRef(null);

    useEffect(() => {
        const scroll = new LocomotiveScroll({
            el: scrollRef.current,
            smooth: true,
            smoothMobile: false,
        });

        return () => {
            if (scroll) {
                scroll.destroy();
            }
        };
    }, []);

    return (
        <div ref={scrollRef}>
            <div className={styles.welcomeContainer} >
                <div data-scroll-section>


                    <img
                        src={require('../../assets/crewLogo.png')}
                        className={styles.crewLogo}
                    />
                    <div className={styles.welcomeText}>
                        Welcome to CREW!
                    </div>
                </div>

                <div className={styles.screenContainer} data-scroll-section>
                    <img
                        src={require('../../assets/crew.png')}
                        className={styles.crewWelcomeScreen}
                        data-scroll
                    />
                </div>
            </div>
            <div className={styles.firstSlide} data-scroll-section>
                WJOIFJIOEWJ
            </div>
        </div>
    );
}

export default News;


