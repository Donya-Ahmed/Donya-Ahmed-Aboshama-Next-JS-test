import React from 'react'
import styles from "./Button.module.css"
import ButtonProps from '@/Types/Interfaces/ButtonProps'
export default function OutlineButton({onClick,titleBtn}:ButtonProps) {
  return (
   <button className={styles.outlinedButton} onClick={onClick}>
     {titleBtn}
   </button>
  )
}
