import React from "react";
import styles from "./Banner.module.css";
import BannerImage from "../../assets/banner.png";
function Banner() {
  const Button = ({ text }) => {
    return <button className={styles.btn}>{text}</button>;
  };
  return (
    <div className={styles.main__container}>
      <div className={styles.left__container}>
        <h1>
          <span className={`${styles.fz_banner}`}>You dont have to</span>
          <br></br>
          <span className={`${styles.fz_banner} ${styles.bold}`}>
            Fight them Alone.
          </span>
        </h1>
        <p className={`${styles.fz_para}`}>
          Lorem ipsum dolor sit amet consectetur adipiscing elit blandit,
          curabitur sodales conubia ut inceptos faucibus himenaeos tortor eget,
          hac massa gravida arcu interdum proin curae.
        </p>
        <div className={styles.input__bar}>
          icon
          <input
            className={styles.input}
            type="text"
            placeholder="Enter your email address"
          />
          <Button className={styles.btn} text="Let's Talk"></Button>
        </div>
      </div>
      <div className={styles.banner__background}>
        <img src={BannerImage} alt="Banner" className={styles.banner} />
      </div>
    </div>
  );
}

export default Banner;
