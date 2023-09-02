import React, { useContext } from "react";
import styles from "./MobileBar.module.scss";
import NavLinkElement from "../../NavLinkElement/NavLinkElements";
import BtnClose from "../../Buttons/BtnClose/BtnClose";

import { NavigationBarContext } from "../../../contexts/NavigationBarContext";

function MobileBar() {
  const { activeMobileNav, navigationData, handleBtnMobileNav } =
    useContext(NavigationBarContext);

  return (
    <div
      className={
        activeMobileNav
          ? `${styles.MobileBar} ${styles.active}`
          : styles.MobileBar
      }
    >
      <div className={styles.btnCloseDiv}>
        <BtnClose handleBtn={handleBtnMobileNav} />
      </div>
      <div className={styles.mobileMenu}>
        {navigationData.map((item, i) => (
          <NavLinkElement item={item} key={i} handleBtn={handleBtnMobileNav} />
        ))}
      </div>
    </div>
  );
}

export default MobileBar;
