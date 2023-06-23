import React from 'react'
import styles from "./Projects.module.css"
import PortfolioCard from '../GlobalComponents/PortfolioCard/PortfolioCard'
import image2cel from '../../assets/img/Rectangle834.png'
import image1cel from "../../assets/img/Rectangle836.png"
import handle from "../../assets/img/Rectangle835.png"
import ButtonSec from "../GlobalComponents/ButtonSec/ButtonSec"



const Projects = () => {
  return (
    <section className={styles.containerProjects}>
      <h2>Our Portfolio</h2>
      <h3>What do we do</h3>
      <p className={styles.lineProjects}>all projects that we have already done , proven can help to use more comfortable, then can used by client from our business</p>
      <div className={styles.containerImg}>
        <PortfolioCard img={image2cel} text="Design Byte App" />
        <PortfolioCard img={handle} text="Cloud App" />
        <PortfolioCard img={image1cel} text="Design Furniture App" />
      </div>
      <ButtonSec name="See All Portfolio"/>
    </section>
  )
}

export default Projects