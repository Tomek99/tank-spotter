import React from "react";
import styles from "./TextArea.module.scss";

interface TextAreaProps {
  message: string;
  handleMessage: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

function TextArea({ message, handleMessage }: TextAreaProps) {
  return (
    <textarea
      className={styles.TextArea}
      value={message}
      onChange={(e) => handleMessage(e)}
    />
  );
}

export default TextArea;
