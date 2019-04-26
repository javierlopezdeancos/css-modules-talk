import React from "react";
import styles from "./buttonSecondary.module.scss";

const ButtonSecondary = props => {
  return <button className={styles.button}>{props.children}</button>;
};

export default ButtonSecondary;
