import styles from "./styles.module.css";
import { ShoppingBag } from "react-feather";
import Image from "next/image";

export function CardProduct({ product, addProduct }: any) {
  return (
    <>
      <article className={styles.cardProduct}>
        <div className={styles.boxImg}>
          <Image className={styles.photo} src={product.photo} width={138} height={138} alt="" />
        </div>
        <div className={styles.box}>
          <div className={styles.containerNamePrice}>
            <div className={styles.nameProduct}>{product.name}</div>
            <div className={styles.price}>R$ {parseFloat(product.id).toFixed(2)}</div>
          </div>
          <div className={styles.description}>{product.model}</div>
        </div>
        <div
          className={styles.footerButton}
          onClick={() => addProduct(product)}
        >
          <div className={styles.containerBuy}>
            <ShoppingBag size={16} color="rgba(255, 255, 255, 1)" />
            <p style={{ fontSize: 13, color: "white" }}>COMPRAR</p>
          </div>
        </div>
      </article>
    </>
  );
}
