
import styles from './index.module.scss';
import React, { useEffect, useState, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import jericho1 from '../../../assets/jericho.png';
import jericho2 from '../../../assets/jericho.png';
import './styles.css'
import { isVisible } from '@testing-library/user-event/dist/utils';

gsap.registerPlugin(ScrollTrigger);

// const InfoSlides = () => {
//     const component = useRef();
//     const pinSlider = useRef();
//     const content1 = useRef();
//     const content2 = useRef();

//     const tl = useRef();

//     useEffect(() => {
//         let ctx = gsap.context(() => {
//             let contents = gsap.utils.toArray(".content");
//             gsap.set(contents, { autoAlpha: 0, y: 40 });

//             let tl = gsap.timeline({
//                 scrollTrigger: {
//                     trigger: pinSlider.current,
//                     scrub: true,
//                     pin: true,
//                     start: "top top",
//                     end: "+=3000 bottom",
//                 }
//             });

//             contents.forEach((content) => {
//                 tl.to(content, {
//                     keyframes: { y: ['40vh', '20vh', '20vh', '20vh', '20vh', '0vh'], opacity: [0, 0.5, 1, 1, 0.5, 0], },
//                     duration: 2,
//                     autoAlpha: 1,
//                 });
//             });
//         }, component);
//         return () => ctx.revert();
//     }, []);

//     return (
//         <div className="App" ref={component}>
//             <div className="pinBox" ref={pinSlider} >
//                 <div className={"pinSlider"}>
//                     <div className="content" ref={content1}>
//                         <p>this is the first info</p>
//                     </div>

//                     <div className="content" ref={content2}>
//                         <p>this is the second info</p>
//                     </div>
//                 </div>
//             </div>
//             <div className="intro" style={{ height: "100vh", background: "#396195" }}>
//                 <h1>End</h1>
//             </div>
//         </div>
//     )
// }

// export default InfoSlides;





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
            let contents = gsap.utils.toArray(".content");
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
                    keyframes: { y: ['40vh', '30vh', '30vh', '30vh', '30vh', '20vh'], opacity: [0, 1, 1, 1, 1, 0], },
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
        <div className="App" ref={component}>
            <div className="pinBox" ref={pinSlider} >
                <div className={"pinSlider"}>
                    <div className="content" ref={content1}>
                        <p>this is the first info</p>
                        <div className="image" ref={image1}>
                            <img src={require('../../../assets/crew.png')} alt="Image 1" className="screenshot" />
                        </div>
                    </div>

                    <div className="content" ref={content2}>
                        <p>this is the second info</p>
                        <div className="image" ref={image2}>

                            <img src={require('../../../assets/crew.png')} alt="Image 1" className="screenshot" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="intro" >
                <img src={require('../../../assets/appstoreIcon.png')} alt="App store" className="appstoreIcon" />
                <h1>Visit CREW!</h1>
            </div>
        </div>
    )
}

export default InfoSlides;