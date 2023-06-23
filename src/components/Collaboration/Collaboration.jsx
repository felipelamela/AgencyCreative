import React from "react";
import styles from "./Collaboration.module.css";
import ButtonPri from "../GlobalComponents/ButtonPri/ButtonPri";
import img1 from "../../assets/img/Rectangle 839.png"
import img2 from "../../assets/img/Rectangle 840.png"


const Collaboration = () => {
  return (
    <section className={styles.containerCollaboration}>
      <div className={styles.containerCobText}>
      <h3>Interesting Collaboration With Us?</h3>
      <p>Help you to reach your business goal</p>
      <ButtonPri name="Get Started" />
      </div>
      <div className={styles.containerCobImg}>
        <img className={styles.cobImg1} src={img1} alt="" />
        <img className={styles.cobImg2} src={img2} alt="" />

      </div>
    </section>
  );
};

export default Collaboration;
