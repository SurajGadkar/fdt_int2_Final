import React from "react";
import styles from "./Intro.module.css";

function Intro() {
  return (
    <div className={styles.main__container}>
      <div className={styles.left__container}>
        <span>Let's Introduce Ourself</span>
      </div>

      <div className={styles.right__container}>
        <h3 className={styles.header3}>Criminal Lawyer</h3>
        <p className={styles.para}>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequatduis enim velit mollit Exercitation.
        </p>
      </div>
    </div>
  );
}

/*<div className={styles.middle__container}>
        <div className={styles.line}></div>
      </div> */
export default Intro;
