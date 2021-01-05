import React from 'react'
import styles from './Footer.module.css'

const Footer = () => {
  return (
    <footer className={styles.root}>
      <div className={styles.location}>
        <h2>Localização</h2>
        <div className={styles.line} />
        <span>Avenida Andrômeda, 2000. Bloco 6 e 8 </span>
        <span>Alphavile SP</span>
        <span>brasil@corebiz.ag</span>
        <span>+55 11 3090 1039</span>
      </div>
      <div className={styles.cta}>
        <button>
          <img src="./assets/mail.svg" />
          ENTRE EM CONTATO
        </button>
        <button>
          <img src="./assets/phone.svg" />
          FALE COM O NOSSO CONSULTOR ONLINE
        </button>
      </div>
      <div className={styles.sponsors}>
        <span>
          Created by <img src="./assets/corebiz.svg" />
        </span>
        <span>
          Powered by <img src="./assets/vtex.svg" />
        </span>
      </div>
    </footer>
  )
}

export default Footer
