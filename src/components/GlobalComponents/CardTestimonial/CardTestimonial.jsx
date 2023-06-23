import React from "react";
import styles from "./CardTestimonial.module.css";

const CardTestimonial = ({ img, name, prof, descri }) => {
  return (
    <div className={styles.containerCardTesti}>
      <div className={styles.containerImgName}>
        <img src={img} alt="" />
        <div className={styles.containerName}>
          <h4 className={styles.cardTestiName}>{name}</h4>
          <p className={styles.cardTestiProf}>{prof}</p>
        </div>
      </div>
      <p className={styles.cardTestiDescri}>{descri}</p>
    </div>
  );
};

export default CardTestimonial;
