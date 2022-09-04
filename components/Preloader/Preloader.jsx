import React, { useEffect, useRef } from "react";
import styles from "./preloader.module.css";
import gsap from "gsap";
import eventEmitter from "utils/eventEmitter";

function Preloader() {
  const leftRef = useRef();
  const rightRef = useRef();

  const onLoadingComplete = () => eventEmitter.emit("preloading-complete");

  useEffect(() => {
    gsap
      .timeline()
      .to(leftRef.current, {
        delay: 0.3,
        left: "-50%",
        duration: 1,
        ease: "circ.in",
      })
      .to(
        rightRef.current,
        {
          right: "-50%",
          duration: 1,
          ease: "circ.in",
          onComplete: onLoadingComplete,
        },
        "-=1"
      );
  }, []);

  return (
    <>
      <div
        ref={leftRef}
        className={`${styles.overlap} ${styles.left} bg-slate-100`}
      ></div>
      <div
        ref={rightRef}
        className={`${styles.overlap} ${styles.right} bg-slate-100`}
      ></div>
    </>
  );
}

export default Preloader;
