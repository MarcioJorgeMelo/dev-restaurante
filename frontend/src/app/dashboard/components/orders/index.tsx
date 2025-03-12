"use client";

import { OrderProps } from "@/lib/order.type";
import styles from "./styles.module.scss";
import { RefreshCcw } from "lucide-react";
import { ModalOrder } from "../modal";
import { OrderContext } from "@/providers/order";
import { use } from "react";

interface OrderComponentProps {
  orders: OrderProps[];
}

export function Orders({ orders }: OrderComponentProps) {
  const { isOpen, onRequestOpen } = use(OrderContext);

  async function handleDetailOrder(order_id: string) {
    await onRequestOpen(order_id);
  }

  return (
    <>
      <main className={styles.container}>
        <section className={styles.containerHeader}>
          <h1>Últimos pedidos</h1>

          <button>
            <RefreshCcw size={24} color="#3fffa3" />
          </button>
        </section>

        <section className={styles.listOrders}>
          {orders ? (
            orders.map((order) => (
              <button
                key={order.id}
                className={styles.orderItem}
                onClick={() => handleDetailOrder(order.id)}
              >
                <div className={styles.tag} />
                <span>Mesa {order.table}</span>
              </button>
            ))
          ) : (
            <p>Nenhum pedido em aberto no momento : (</p>
          )}
        </section>
      </main>

      {isOpen && <ModalOrder />}
    </>
  );
}
