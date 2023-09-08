import React from "react";
import styles from "./BtnCancel.module.scss";

interface BtnCancelProps {
  handleBtn: () => void;
}

function BtnCancel({ handleBtn }: BtnCancelProps) {
  return (
    <button className={styles.BtnCancel} onClick={handleBtn}>
      Cancel
    </button>
  );
}

export default BtnCancel;
