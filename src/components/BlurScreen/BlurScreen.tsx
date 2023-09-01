import React from "react";
import styles from "./BlurScreen.module.scss";

interface handleBlurScreenProps {
  handleBlurScreen: () => void;
}

function BlurScreen({ handleBlurScreen }: handleBlurScreenProps) {
  return <div className={styles.BlurScreen} onClick={handleBlurScreen}></div>;
}

export default BlurScreen;
