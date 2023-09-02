import React, { useContext } from "react";
import styles from "./BtnHamburger.module.scss";

import { NavigationBarContext } from "../../../contexts/NavigationBarContext";

function BtnHamburger() {
  const { activeMobileNav, handleBtnMobileNav } =
    useContext(NavigationBarContext);
  return (
    <div
      className={
        activeMobileNav
          ? `${styles.BtnHamburger} ${styles.active}`
          : styles.BtnHamburger
      }
      onClick={handleBtnMobileNav}
    >
      <span className={styles.bar}></span>
      <span className={styles.bar}></span>
      <span className={styles.bar}></span>
    </div>
  );
}

export default BtnHamburger;
