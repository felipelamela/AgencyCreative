import React from "react";
import styles from "./HeaderNav.module.css";
import imgLogo from "../../assets/img/logo-white.png";
import ButtonSec from "../GlobalComponents/ButtonSec/ButtonSec";

const HeaderNav = () => {
  return (
    <header className={styles.containerHeader}>
      <img className={styles.logoHeader} src={imgLogo} alt="" />

      <nav>
        <ul className={styles.containerNavUl}>
          <li>
            <a className={styles.linkHeaderNav} href="/">
              Home
            </a>
          </li>
          <li>
            <a className={styles.linkHeaderNav} href="/">
              About
            </a>
          </li>
          <li>
            <a className={styles.linkHeaderNav} href="/">
              Sevices
            </a>
          </li>
          <li>
            <a className={styles.linkHeaderNav} href="/">
              Projects
            </a>
          </li>
        </ul>
      </nav>
      <ButtonSec name="Contact us" />
    </header>
  );
};

export default HeaderNav;
