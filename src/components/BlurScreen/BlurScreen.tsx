import React, { useContext } from "react";
import styles from "./BlurScreen.module.scss";

import { NavigationBarContext } from "../../contexts/NavigationBarContext";

function BlurScreen() {
  const { handleBlurScreen } = useContext(NavigationBarContext);

  return <div className={styles.BlurScreen} onClick={handleBlurScreen}></div>;
}

export default BlurScreen;
