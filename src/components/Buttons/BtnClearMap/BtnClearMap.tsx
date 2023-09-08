import React from "react";
import styles from "./BtnClearMap.module.scss";

interface BtnClearMapProps {
  handleBtn: () => void;
}

function BtnClearMap({ handleBtn }: BtnClearMapProps) {
  return (
    <button className={styles.BtnClearMap} onClick={handleBtn}>
      Clear map
    </button>
  );
}

export default BtnClearMap;
