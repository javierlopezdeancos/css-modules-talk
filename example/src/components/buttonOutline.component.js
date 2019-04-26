import React from "react";
import styles from "./buttonOutline.module.scss";

const ButtonOutline = props => {
  return <button className={styles.button}>{props.children}</button>;
};

export default ButtonOutline;
