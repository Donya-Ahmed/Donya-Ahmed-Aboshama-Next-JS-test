import React from 'react'
import { MdArrowForwardIos } from "react-icons/md";
import styles from "./Breadcrumbs.module.css"

export default function Breadcrumbs({title}:{title:string}) {
  return (
    <div className='flex justify-between items-center w-[18%] mx-auto mt-5'>
      <span className={styles.beardcrembsTitle}>Home</span>
      <MdArrowForwardIos size={12}/>
      <span className={styles.beardcrembsTitle}>{title}</span>
    </div>
  )
}
