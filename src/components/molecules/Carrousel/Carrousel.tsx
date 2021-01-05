import React from 'react'
import styles from './Carrousel.module.css'

const Carrousel = () => {
  return (
    <div className={styles.root}>
      <img src="/assets/imageBanner.png" />
      <div className={styles.carrouselCaption}>
        <h2>Olá, o que você está buscando?</h2>
        <h1>Criar ou migrar seu e-commerce?</h1>
      </div>
      <div className={styles.dots}>
        <span className={styles.dotActive} />
        <span />
        <span />
        <span />
      </div>
    </div>
  )
}

export default Carrousel
