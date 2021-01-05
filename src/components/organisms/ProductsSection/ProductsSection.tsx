import React from 'react'
import styles from './ProductsSection.module.css'
import { ProductsSlider, ProductItem } from '@/components/molecules'
import Product from '@/types/product'

type Props = {
  products: Product[]
}

const ProductsSection: React.FC<Props> = ({ products }) => {
  return (
    <div className={styles.root}>
      <div className={styles.container}>
        <h1>Mais vendidos</h1>
        <div className={styles.line} />
        <ProductsSlider>
          {products.map((product, index) => (
            <ProductItem
              productId={product.productId}
              productName={product.productName}
              stars={product.stars}
              imageUrl={product.imageUrl}
              listPrice={product.listPrice}
              price={product.price}
              quantity={product?.installments[0]?.quantity}
              value={product?.installments[0]?.value}
              key={index}
            />
          ))}
        </ProductsSlider>
      </div>
    </div>
  )
}

export default ProductsSection
