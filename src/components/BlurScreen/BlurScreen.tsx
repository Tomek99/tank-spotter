import React from "react";
import styles from "./BlurScreen.module.scss";

interface BlurScreenProps {
  handleBlurScreen: () => void;
}

function BlurScreen({ handleBlurScreen }: BlurScreenProps) {
  return <div className={styles.BlurScreen} onClick={handleBlurScreen}></div>;
}

export default BlurScreen;
