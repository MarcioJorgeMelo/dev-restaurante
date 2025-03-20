"use client";

import { X } from "lucide-react";
import styles from "./styles.module.scss";
import Image from "next/image";
import { use } from "react";
import { OrderContext } from "@/providers/order";
import { calculateTotalOrder } from "@/lib/helper";

export function ModalOrder() {
  const { onRequestClose, order, finishOrder } = use(OrderContext);

  async function handleFinishOrder() {
    await finishOrder(order[0].order.id);
  }

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

          {order.map((item, index) => (
            <section key={item.id} className={styles.item}>
              <Image
                src={item.product.banner}
                alt={`${order[index].product.description}`}
                width={30}
                height={30}
              />

              <span>
                Qtd: {item.amount} - <b>{item.product.name}</b> - R${" "}
                {parseFloat(item.product.price) * item.amount}
              </span>

              <span className={styles.description}>
                {item.product.description}
              </span>
            </section>
          ))}

          <h3 className={styles.total}>
            Total: R$ {calculateTotalOrder(order)}
          </h3>

          <button className={styles.buttonOrder} onClick={handleFinishOrder}>
            Concluir o pedido
          </button>
        </article>
      </section>
    </dialog>
  );
}
