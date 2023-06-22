import React from 'react'
import styles from "./ButtonPri.module.css"

const ButtonPri = ({name}) => {
  return (
    <button className={styles.buttonPri}>{name}</button>
  )
}

export default ButtonPri