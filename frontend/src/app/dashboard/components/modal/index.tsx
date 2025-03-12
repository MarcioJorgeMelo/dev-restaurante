"use client";

import { X } from "lucide-react";
import styles from "./styles.module.scss";
import { use } from "react";
import { OrderContext } from "@/providers/order";

export function ModalOrder() {
  const { onRequestClose, order } = use(OrderContext);

  return (
    <dialog className={styles.dialogContainer}>
      <section className={styles.dialogContent}>
        <button onClick={onRequestClose} className={styles.dialogBack}>
          <X size={40} color="#FF3f4b" />
        </button>

        <article className={styles.container}>
          <h2>Detalhes do pedido</h2>

          <span className={styles.table}>
            Mesa <b>{order[0].order.table}</b>
          </span>

          {order[0].order?.name && (
            <span className={styles.name}>
              Nome da mesa: <b>{order[0].order.name}</b>
            </span>
          )}

          {order.map((item) => (
            <section key={item.id} className={styles.item}>
              <span>
                {item.amount} - <b>{item.product.name}</b>
              </span>

              <span className={styles.description}>
                {item.product.description}
              </span>
            </section>
          ))}

          <button className={styles.buttonOrder}>Concluir o pedido</button>
        </article>
      </section>
    </dialog>
  );
}
