import React from "react";
import styles from "./BtnClose.module.css";
import { GrClose } from "react-icons/gr";

interface handleBtnActive {
  handleBtn: () => void;
}

function BtnClose({ handleBtn }: handleBtnActive) {
  return (
    <button
      className={styles.BtnClose}
      onClick={handleBtn}
      data-testid="btnClose"
    >
      <GrClose size={30} />
    </button>
  );
}

export default BtnClose;
