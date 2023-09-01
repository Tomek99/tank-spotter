import React, { useState } from "react";
import styles from "./NavigationBar.module.scss";
import navigationData from "../../data/navigationElements.json";
import { FaRegUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import BtnHamburger from "../Buttons/BtnHamburger/BtnHamburger";
import MobileBar from "./MobileBar/MobileBar";
import DesktopBar from "./DesktopBar/DesktopBar";

type ActiveType = boolean;

function NavigationBar() {
  const [active, setActive] = useState<ActiveType>(false);

  function handleBtn(): void {
    setActive(!active);
  }

  return (
    <div className={styles.NavigationBar}>
      <BtnHamburger isActive={active} handleBtn={handleBtn} />

      <ul className={styles.navElements}>
        <Link to="/">
          {" "}
          <img src="./logo.png" className={styles.logoImg} />
        </Link>

        {/* <div className={styles.divCenter}>
          {navigationData.map((item, i) => (
            <NavLinkElement item={item} key={i} />
          ))}
        </div> */}
        <DesktopBar navigationData={navigationData} />

        <div className={styles.divRight}>
          <FaRegUser size={35} />
        </div>
      </ul>
      <MobileBar
        isActive={active}
        navigationData={navigationData}
        handleBtn={handleBtn}
      />
    </div>
  );
}

export default NavigationBar;
