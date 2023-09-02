import React, { useState } from "react";
import styles from "./NavigationBar.module.scss";
import navigationData from "../../data/navigationElements.json";
import { FaRegUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import BtnHamburger from "../Buttons/BtnHamburger/BtnHamburger";
import MobileBar from "./MobileBar/MobileBar";
import DesktopBar from "./DesktopBar/DesktopBar";
import BlurScreen from "../BlurScreen/BlurScreen";
import { NavigationBarContext } from "../../contexts/NavigationBarContext";

function NavigationBar() {
  const [blurScreen, setBlurScreen] = useState<boolean>(false);
  function handleBlurScreen(): void {
    setBlurScreen(false);
    setActiveMobileNav(false);
  }

  /* --------------------------------- */
  const [activeMobileNav, setActiveMobileNav] = useState<boolean>(false);
  function handleBtnMobileNav(): void {
    setActiveMobileNav(!activeMobileNav);
    setBlurScreen(!blurScreen);
  }
  return (
    <NavigationBarContext.Provider
      value={{
        blurScreen,
        activeMobileNav,
        navigationData,
        handleBlurScreen,
        handleBtnMobileNav,
      }}
    >
      <div className={styles.NavigationBar}>
        <BtnHamburger />

        <ul className={styles.navElements}>
          <Link to="/">
            {" "}
            <img src="./logo.png" className={styles.logoImg} />
          </Link>

          <DesktopBar />

          <div className={styles.divRight}>
            <FaRegUser size={35} />
          </div>
        </ul>
        <MobileBar />
        {blurScreen ? <BlurScreen /> : null}
      </div>
    </NavigationBarContext.Provider>
  );
}

export default NavigationBar;
