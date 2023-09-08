import React from "react";
import styles from "./BtnDeleteTank.module.scss";

interface BtnDeleteTankProps {
  id: number;
  handleBtn: (id: number) => void;
}

function BtnDeleteTank({ id, handleBtn }: BtnDeleteTankProps) {
  return (
    <button className={styles.BtnDeleteTank} onClick={() => handleBtn(id)}>
      Delete mark
    </button>
  );
}

export default BtnDeleteTank;
