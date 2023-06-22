import React from "react";
import styles from "./ButtonSec.module.css";

const ButtonSec = ({ name }) => {
  return <button className={styles.buttonSec}>{name}</button>;
};

export default ButtonSec;
