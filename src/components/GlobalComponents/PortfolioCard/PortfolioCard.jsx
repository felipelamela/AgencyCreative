import React from 'react'
import styles from "./PortfolioCard.module.css"

const PortfolioCard = ({img, text}) => {
  return (
    <div className={styles.containerImgCard}>
      <img className={styles.imgPortfolio} src={img} alt="" />
      <p className={styles.textPortfolio}>{text}</p>
    </div>
  )
}

export default PortfolioCard