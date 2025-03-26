import React from 'react'
import styles from "./HeroSection.module.css"
import Breadcrumbs from '../Breadcrumbs/Breadcrumbs'
export default function HeroSection({title,header}:{title:string,header:string}) {
  return (
    <div>
      <h2 className={styles.header}>{header}</h2>
      <Breadcrumbs title={title}/>
    </div>
  )
}
