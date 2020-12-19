import styles from "./ProductsSection.module.css";
import { ProductsCarrousel } from "@components/organisms";

const ProductsSection = () => {
  return (
    <div className={styles.root}>
      <div className={styles.container}>
        <h2>Mais vendidos</h2>
        <div />
        <ProductsCarrousel />
      </div>
    </div>
  );
};

export default ProductsSection;
