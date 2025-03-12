"use client";

import { OrderProps } from "@/lib/order.type";
import styles from "./styles.module.scss";
import { RefreshCcw } from "lucide-react";
import { ModalOrder } from "../modal";
import { OrderContext } from "@/providers/order";
import { use } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

interface OrderComponentProps {
  orders: OrderProps[];
}

export function Orders({ orders }: OrderComponentProps) {
  const { isOpen, onRequestOpen } = use(OrderContext);
  const router = useRouter();

  async function handleDetailOrder(order_id: string) {
    await onRequestOpen(order_id);
  }

  function handleRefresh() {
    router.refresh();
    toast.success("Pedidos atualizados com sucesso!");
  }

  return (
    <>
      <main className={styles.container}>
        <section className={styles.containerHeader}>
          <h1>Últimos pedidos</h1>

          <button onClick={handleRefresh}>
            <RefreshCcw size={24} color="#3fffa3" />
          </button>
        </section>

        <section className={styles.listOrders}>
          {orders.length > 0 ? (
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
            <span className={styles.emptyItem}>
              Nenhum pedido em aberto no momento : (
            </span>
          )}
        </section>
      </main>

      {isOpen && <ModalOrder />}
    </>
  );
}
