import "./styles.css";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";
import jericho1 from '../../assets/jericho1.png';
import jericho2 from '../../assets/jericho2.png';

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const component = useRef();
  const pinSlider = useRef();
  const content1 = useRef();
  const content2 = useRef();

  const tl = useRef();

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      let contents = gsap.utils.toArray(".content");
      gsap.set(contents, { autoAlpha: 0, y: 500 });

      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: pinSlider.current,
          scrub: true,
          pin: true,
          start: "top top",
          end: "+=3000 bottom",
        }
      });

      contents.forEach((content) => {
        tl.to(content, {
          keyframes: { y: [500, 185, -325] },
          duration: 5,
          autoAlpha: 1
        });
      });
      /* let content = gsap.utils.toArray(".content");
      tl.current = gsap
        .timeline({
          scrollTrigger: {
            trigger: pinSlider.current,
            scrub: true,
            pin: true,
            start: "top top",
            end: "3000px",
            markers: true
          }
        })
        .set(content1.current, { opacity: 0, y: 500 })
        .set(content2.current, { opacity: 0, y: 500 })
        .set(content3.current, { opacity: 0, y: 500 })
        .to(content1.current, {
          keyframes: { y: [500, 185, -325] },
          duration: 5,
          opacity: 1
        })
        .to(content2.current, {
          keyframes: { y: [500, 185, -325] },
          duration: 5,
          opacity: 1
        })
        .to(content3.current, {
          keyframes: { y: [500, 185, -325] },
          duration: 5,
          opacity: 1
        });
 */
    }, component);
    return () => ctx.revert();
  });
  return (
    <div className="App" ref={component}>
      <div className="intro" style={{ height: "100vh", background: "#396195" }}>
        <h1>Created a website for a construction company Jericho Foundation LLC</h1>
      </div>
      <div className="pinBox" ref={pinSlider} >
        <div
          className={"pinSlider"}
        >
          <div className="content" ref={content1}>
            <img 
                src={jericho1}
                alt=""
            />
          </div>
          <div className="content" ref={content2}>
          <img 
                src={jericho2}
                alt=""
            />
          </div>
        </div>
      </div>
      <div className="intro" style={{ height: "100vh", background: "#396195" }}>
        <h1>End</h1>
      </div>
    </div>
  );
}
