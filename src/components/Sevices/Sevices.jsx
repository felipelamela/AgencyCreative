import React from "react";
import styles from "./Sevice.module.css";
import Card from "../GlobalComponents/Card/Card";
import monitor from "../../assets/img/monitor.png";
import pen from "../../assets/img/pen-tool.png";
import tv from "../../assets/img/tv.png";
import conf from "../../assets/img/settings.png";

const Sevices = () => {
  return (
    <section className={styles.containerSevices}>
      <div className={styles.containerLeftSevices}>
        <h2>Our Services</h2>
        <h3>Perfect and Fast Movement</h3>
        <p>
          We move with make a Creative Strategy for help your business goal, we
          help to improve your income by a services we have. make your content
          look interesting and make people look for your business
        </p>
        <a className={styles.linkSevices} href="/">
          Read mode →{" "}
        </a>
      </div>
      <div className={styles.containerRightSevices}>
        <Card img={monitor} color="377DFF" text="Social Midia Management" />
        <Card img={conf} color="ff2d2d" text="Search Engine Opimization" />
        <Card img={pen} color="7ce761" text="Design" />
        <Card img={tv} color="ffa800" text="Ads" />
      </div>
    </section>
  );
};

export default Sevices;
