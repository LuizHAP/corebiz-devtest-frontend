import React from 'react'
import styles from './Stars.module.css'

type Props = {
  value: number
}

const Stars = ({ value }: Props) => (
  <div className={styles.stars}>
    {Array.from({ length: 5 }, (_, index) => index + 1).map(item => (
      <img
        src={
          item <= value
            ? '/assets/starFullIcon.svg'
            : '/assets/starEmptyIcon.svg'
        }
        key={item}
      />
    ))}
  </div>
)

export default Stars
