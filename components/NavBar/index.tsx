import styles from "./styles.module.css";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import CardProductList from "../CardProductList";
import { useEffect, useState } from "react";

export default function NavBar({ closeDialog, dialog, productsCart, removeProduct, finishOrder }: any) {
  const [total, setTotal] = useState(0);

  function removeProductOnCart(payload: any) {
    removeProduct(payload);
  }

  useEffect(() => {
    let total = 0;
    productsCart.forEach((element: any) => {
      total += parseFloat(element.price);
    });
    setTotal(total);
  }, [productsCart]);

  return (
    <div className={dialog ? styles.navBar : styles.minNavBar}>
      <div className={styles.headerNavBar}>
        <h1 className={styles.h1}>Carrinho de compras</h1>
        <div onClick={() => closeDialog(false)}>
          <CloseRoundedIcon className={styles.iconClose} />
        </div>
      </div>
      <div className={styles.bodyNavBar}>
        {productsCart.map((product: any, key: any) => (
          <>
            <CardProductList
              data={product}
              removeProductOnCart={removeProductOnCart}
            />
          </>
        ))}
      </div>
      <div className={styles.footer}>
        <div className={styles.boxTotalPrice}>
          <p>Total</p>
          <p>R$ {total}</p>
        </div>
        <div className={styles.buttonFinishOrder} onClick={finishOrder}>
          <p className={styles.textButton}>Finalizar Compra</p>
        </div>
      </div>
    </div>
  );
}
