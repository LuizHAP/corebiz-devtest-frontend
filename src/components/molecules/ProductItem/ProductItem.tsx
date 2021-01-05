import React from 'react'
import styles from './ProductItem.module.css'
import parseMoney from '@/utils/parseMoney'

import { Stars } from '@/components/molecules'

type Props = {
  productId: number
  productName: string
  stars: number
  imageUrl: string
  listPrice: number
  price: number
  quantity: number
  value: number
}

const ProductItem: React.FC<Props> = ({
  productName,
  stars,
  imageUrl,
  listPrice,
  price,
  quantity,
  value
}) => {
  return (
    <div className={styles.root}>
      {listPrice ? <div className={styles.offMark} /> : null}

      <img src={imageUrl} alt={productName} className={styles.productImage} />

      <span className={styles.productName}>{productName}</span>

      <Stars value={stars} />

      <span className={styles.listPrice}>
        {listPrice ? `de R$ ${parseMoney(listPrice)}` : <br />}
      </span>

      <span className={styles.price}>por R$ {parseMoney(price)}</span>

      {quantity && (
        <span className={styles.installment}>
          ou {quantity}x de R$ {parseMoney(value)}
        </span>
      )}

      <button className={styles.button}>COMPRAR</button>
    </div>
  )
}

export default ProductItem
