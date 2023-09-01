import React from "react";
import styles from "./MobileBar.module.scss";
import NavLinkElement from "../../NavLinkElement/NavLinkElements";
import BtnClose from "../../Buttons/BtnClose/BtnClose";

interface Item {
  text: string;
  path: string;
}

interface handleMobileBarProps {
  isActive: boolean;
  navigationData: Item[];
  handleBtn: () => void;
}

function MobileBar({
  isActive,
  navigationData,
  handleBtn,
}: handleMobileBarProps) {
  return (
    <div
      className={
        isActive ? `${styles.MobileBar} ${styles.active}` : styles.MobileBar
      }
    >
      <div className={styles.btnCloseDiv}>
        <BtnClose handleBtn={handleBtn} />
      </div>
      <div className={styles.mobileMenu}>
        {navigationData.map((item, i) => (
          <NavLinkElement item={item} key={i} />
        ))}
      </div>
    </div>
  );
}

export default MobileBar;
