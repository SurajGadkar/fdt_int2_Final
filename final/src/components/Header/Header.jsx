import React from "react";
import styles from "./Header.module.css";
/* Changes to make
 *links to be made using nav
 *contact now to be made a button
 *Logo clickable link
 */
function Header() {
  return (
    <div className={styles.main__container}>
      <div className={styles.logo}>.</div>
      <div className={styles.links}>
        <p>Home</p>
        <p>Attorney</p>
        <p>Practice areas</p>
        <p>About us</p>
      </div>
      <div className={styles.contact}>Contact Now</div>
    </div>
  );
}

export default Header;
