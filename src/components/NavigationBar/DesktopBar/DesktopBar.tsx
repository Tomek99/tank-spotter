import React, { useContext } from "react";
import NavLinkElement from "../../NavLinkElement/NavLinkElements";
import styles from "./DesktopBar.module.scss";
import { NavigationBarContext } from "../../../contexts/NavigationBarContext";

function DesktopBar() {
  const { navigationData } = useContext(NavigationBarContext);

  function handleBtn(): void {}

  return (
    <div className={styles.DesktopBar}>
      {navigationData.map((item, i) => (
        <NavLinkElement item={item} key={i} handleBtn={handleBtn} />
      ))}
    </div>
  );
}

export default DesktopBar;
