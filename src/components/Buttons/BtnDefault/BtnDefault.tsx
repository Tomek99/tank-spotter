import React from "react";
import styles from "./BtnDefault.module.scss";

interface BtnDefaultProps {
  text: string;
  id: number;
  handleBtn: (id: number) => void;
}

function BtnDefault({ text, id, handleBtn }: BtnDefaultProps) {
  return (
    <button className={styles.BtnDefault} onClick={() => handleBtn(id)}>
      {text}
    </button>
  );
}

export default BtnDefault;
