import React from 'react'
import styles from "./HeroSection.module.css"
import Breadcrumbs from '../Breadcrumbs/Breadcrumbs'
export default function HeroSection({title}:{title:string}) {
  return (
    <div>
      <h2 className={styles.header}>Fashion</h2>
      <Breadcrumbs title={title}/>
    </div>
  )
}
