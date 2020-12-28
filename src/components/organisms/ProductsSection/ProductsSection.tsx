import styles from "./ProductsSection.module.css";
import { ProductsSlider } from "@/components/molecules";
import { ProductItem } from "@/components/molecules";
import Product from "@/types/product";

type Props = {
  products: Product[];
};

const ProductsSection = ({ products }: Props) => {
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
              installments={product.installments}
              key={index}
            />
          ))}
        </ProductsSlider>
      </div>
    </div>
  );
};

export default ProductsSection;
