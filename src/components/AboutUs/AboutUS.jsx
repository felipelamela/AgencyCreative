import React from "react";
import image from "../../assets/img/Rectangle832.png";
import styles from "./AboutUS.module.css";
import ButtonPri from "../GlobalComponents/ButtonPri/ButtonPri";
import ButtonSec from "../GlobalComponents/ButtonSec/ButtonSec";

const AboutUS = () => {
  return (
    <section className={styles.containerAbout}>
      <h2>About US</h2>
      <h3>Our Teammate</h3>
      <div className={styles.containerContentAbout}>
        <img className={styles.imgAboutUs} src={image} alt="" />
        <div className={styles.containerTextAbout}>
          <p className={styles.textAbout}>
            We move with make a Creative Strategy for help your business goal,
            we help to improve your income by a services we have. make your
            content look interesting and make people look for your business
          </p>
          <p className={styles.textAbout}>
            We move with make a Creative Strategy for help your business goal,
            we help to improve your income by a services we have. make your
            content look interesting and make people look for your business
          </p>
          <div className={styles.containerButtonAbout}>
            <ButtonPri name="About Us" />
            <ButtonSec name="Our Story" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUS;
