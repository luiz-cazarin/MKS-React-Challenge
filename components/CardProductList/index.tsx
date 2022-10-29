import { useEffect, useState } from "react";
import styles from "./styles.module.css";
import Image from "next/image";

export default function CardProductList({ data, removeProductOnCart }: any) {
  const [amout, setAmout] = useState(1);
  useEffect(() => {
    data.valorSomado = parseFloat(data.price) * amout;
  }, [amout, data]);
  return (
    <div className={styles.cardList}>
      <div>
        <Image
          className={styles.img}
          src={data.photo}
          width={80}
          height={80}
          alt={data.name}
        />
      </div>
      <div className={styles.nameProductList}>{data.name}</div>
      <div className={styles.count}>
        <div
          onClick={() => {
            setAmout(amout > 1 ? amout - 1 : removeProductOnCart(data));
          }}
        >
          -
        </div>
        <p>{amout}</p>
        <div
          onClick={() => {
            setAmout(amout + 1);
          }}
        >
          +
        </div>
      </div>
      <div className={styles.priceList}>R$ {parseInt(data.price, 10)}</div>
    </div>
  );
}
