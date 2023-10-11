import React from "react";
import styles from "./AreaOfPractices.module.css";
import image1 from "../../assets/image1.png";
import image2 from "../../assets/image2.png";
import image3 from "../../assets/image3.png";
import image4 from "../../assets/image4.png";
import image5 from "../../assets/image5.png";
import image6 from "../../assets/image6.png";

function AreaOfPractices() {
  const ImageContainer = ({ width, imgSrc }) => {
    return (
      <div
        className={`${styles.image__main__container} ${
          width ? styles.image__width__true : styles.image__width__false
        }`}
      >
        <img
          src={imgSrc}
          alt="banner"
          className={`${styles.img__container} `}
        />
      </div>
    );
  };
  return (
    <div className={styles.main__container}>
      <div className={styles.title}>
        <span>Area of Practices</span>
      </div>
      <div className={styles.image__container}>
        <div className={styles.container__flex}>
          <ImageContainer imgSrc={image1} width={true} />
          <ImageContainer imgSrc={image2} width={false} />
        </div>
        <div className={styles.container__flex}>
          <ImageContainer imgSrc={image3} width={false} />
          <ImageContainer imgSrc={image4} width={true} />
        </div>
        <div className={styles.container__flex}>
          <ImageContainer imgSrc={image5} width={true} />
          <ImageContainer imgSrc={image6} width={false} />
        </div>
      </div>
    </div>
  );
}

export default AreaOfPractices;
