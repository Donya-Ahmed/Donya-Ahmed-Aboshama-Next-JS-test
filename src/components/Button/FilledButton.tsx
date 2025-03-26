import React from 'react'
import styles from "./Button.module.css"
import ButtonProps from '@/Types/Interfaces/ButtonProps'
export default function FilledButton({onClick,titleBtn}:ButtonProps) {
  return (
   <button className={styles.filledButton} onClick={onClick}>
     {titleBtn}
   </button>
  )
}
