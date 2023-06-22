import React from "react";
import styles from "./Card.module.css";

const Card = ({ img, text, color }) => {
  return (
    <div className={styles.containerCard}>
      <div className={styles.containerImg}>
        <img
          className={styles.imgCard}
          style={{ backgroundColor: `${color}`}}
          src={img}
          alt=""
        />
      </div>
      <p className={styles.textCard}>{text}</p>
    </div>
  );
};

export default Card;
