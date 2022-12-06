import styles from "../styles/Home.module.css";
import Image from "next/image";
import logo from "../assets/header/MKS.png";
import text from "../assets/header/Sistemas.png";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

import { CardProduct } from "../components/CardProduct";
import NavBar from "../components/NavBar";

import axios from "axios";
import { useEffect, useState } from "react";

export default function Home() {
  const [productsCart, setProductsCart] = useState<any>([]);
  const [data, setData] = useState([]);
  const [dialog, setDialog] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // set api url
    axios
      .get("http://localhost:5000/vehicles")
      .then((res) => {
        setData(res.data.vehicles);
      })
      .catch((err) => {
        console.log(err);
      });
    setLoading(false);
  }, []);

  function addProduct(payload: any) {
    let val = productsCart.find((el: any) => el.id === payload.id);
    if (!val) {
      setProductsCart((prevArray: any) => [...productsCart, payload]);
    } else {
      setDialog(true);
    }
  }

  function removeProduct(payload: any) {
    let newList = productsCart.filter((el: any) => el.id !== payload.id);
    setProductsCart(newList);
  }

  function finishOrder() {
    // console.log(productsCart);
  }

  return (
    <div>
      <header className={styles.header}>
        <div className={styles.headerBoxLogo}>{/* logo */}</div>
        <div className={styles.orders} onClick={() => setDialog(true)}>
          <ShoppingCartIcon className={styles.icon} />
          <div>{productsCart.length}</div>
        </div>
      </header>
      {loading ? (
        <div className={styles.bodyProducts}>Loading...</div>
      ) : (
        <div className={styles.bodyProducts}>
          <div className={styles.product__container}>
            {data.map((product, key) => (
              <>
                <CardProduct product={product} addProduct={addProduct} />
              </>
            ))}
          </div>
        </div>
      )}
      <NavBar
        closeDialog={() => setDialog(false)}
        dialog={dialog}
        productsCart={productsCart}
        removeProduct={removeProduct}
        finishOrder={finishOrder}
      />
    </div>
  );
}
