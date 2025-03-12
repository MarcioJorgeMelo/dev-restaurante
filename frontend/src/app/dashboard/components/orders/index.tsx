import { OrderProps } from "@/lib/order.type";
import styles from "./styles.module.scss";
import { RefreshCcw } from "lucide-react";

interface OrderComponentProps {
  orders: OrderProps[];
}

export function Orders({ orders }: OrderComponentProps) {
  return (
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
            <button key={order.id} className={styles.orderItem}>
              <div className={styles.tag} />
              <span>Mesa {order.table}</span>
            </button>
          ))
        ) : (
          <p>Nenhum pedido em aberto no momento : (</p>
        )}
      </section>
    </main>
  );
}
