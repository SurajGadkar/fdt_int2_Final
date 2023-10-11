import React from "react";
import styles from "./ChooseUs.module.css";

function ChooseUs() {
  const Button = ({ text }) => {
    return <button className={styles.btn}>{text}</button>;
  };
  const Card = ({ header, para, bg }) => {
    return (
      <div
        className={`${styles.card__main__container} ${
          bg ? styles.card__main__bg__true : null
        }`}
      >
        <div className={styles.rounded}>gift icon</div>
        <div>
          {" "}
          <h3>{header}</h3>
        </div>
        <div className={styles.para}>{para}</div>
        <Button text="Read More" />
      </div>
    );
  };
  return (
    <div className={styles.main__container}>
      <div className={styles.title}>
        <span>Why Choose Us ?</span>
      </div>
      <div className={styles.cards__container}>
        <Card
          header="98% Success rate"
          para="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer."
        />
        <Card
          header="100% Success rate"
          para="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer."
          bg={true}
        />
        <Card
          header="100% Success rate"
          para="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer."
        />
      </div>
    </div>
  );
}

export default ChooseUs;
