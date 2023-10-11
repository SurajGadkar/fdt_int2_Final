import React from "react";
import styles from "./Clients.module.css";

function Clients() {
  return (
    <div className={styles.main__container}>
      <div className={styles.top__container}>
        <h1>What says our happy clients</h1>
        <div>
          {" < "} {" > "}
        </div>
      </div>
      <div className={styles.bottom__container}>Carousel</div>
    </div>
  );
}

export default Clients;
