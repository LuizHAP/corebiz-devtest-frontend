import { ProductsSlider } from "@components/molecules";

import styles from './ProductsCarrousel.module.css'

interface Props {
  products: Object;
}

const ProductsCarrousel = ({ products }: Props) => {
  return (
    <div className={styles.root}>
      <ProductsSlider />
    </div>
  );
};

export default ProductsCarrousel;
