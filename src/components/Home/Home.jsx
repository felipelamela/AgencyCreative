import React from "react";
import imagem from "../../assets/img/Rectangle844.png";
import styles from "./Home.module.css";
import ButtonPri from "../GlobalComponents/ButtonPri/ButtonPri";

const Home = () => {
  return (
    <section className={styles.containerHome}>
      <h2 className={styles.titleHome}>
        Make your dream business goal come true
      </h2>
      <p className={styles.lineHome}>
        when you need us for improve your business,
        <br /> then come with us to help your business have reach it, you just
        sit and feel that goal
      </p>
      <ButtonPri name="Start Project" />
      <img className={styles.imgHome} src={imagem} alt="" />
    </section>
  );
};

export default Home;
