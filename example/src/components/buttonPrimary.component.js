import React from "react";
import styles from "./buttonPrimary.module.scss";

const ButtonPrimary = props => {
  return <button className={styles.button}>{props.children}</button>;
};

export default ButtonPrimary;
