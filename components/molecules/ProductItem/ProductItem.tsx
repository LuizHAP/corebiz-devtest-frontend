import styles from "./ProductItem.module.css";
import parseMoney from "../../../utils/parseMoney";

import { Stars } from "@components/molecules";

type Props = {
  productId: number;
  productName: string;
  stars: number;
  imageUrl: string;
  listPrice: number;
  price: number;
  installments: Installments[];
};

type Installments = {
  quantity: number;
  value: number;
};

const ProductItem = ({
  productName,
  stars,
  imageUrl,
  listPrice,
  price,
  installments,
}: Props) => {
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

      {installments.length > 0
        ? installments.map((installment, index) => (
            <span className={styles.installment} key={index}>
              ou {installment.quantity}x de R$ {parseMoney(installment.value)}
            </span>
          ))
        : null}

      <button className={styles.button}>COMPRAR</button>
    </div>
  );
};

export default ProductItem;
