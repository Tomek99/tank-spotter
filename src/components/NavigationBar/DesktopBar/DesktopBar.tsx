import React from "react";
import NavLinkElement from "../../NavLinkElement/NavLinkElements";
import styles from "./DesktopBar.module.scss";

interface Item {
  text: string;
  path: string;
}

interface handleDesktopBarProps {
  navigationData: Item[];
}

function DesktopBar({ navigationData }: handleDesktopBarProps) {
  return (
    <div className={styles.DesktopBar}>
      {navigationData.map((item, i) => (
        <NavLinkElement item={item} key={i} />
      ))}
    </div>
  );
}

export default DesktopBar;
