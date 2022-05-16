import React, { useEffect, useState } from 'react';
import { defaultOrders } from '../../../temp';
import OrderItem from '../../elements/OrderItem';
import styles from './OrdersTableBlock.module.scss';

export default function OrdersTableBlock() {
  const [orderItems, setOrderItems] = useState(defaultOrders);

  useEffect(() => {
    // TODO: Fetch Data
  }, []);

  return (
    <div>
      <h2 className={styles.title}>Заказы</h2>
      <ul className={styles.table}>
        <div className={styles.tableHeader}>
          <h3>№</h3>
          <h3>Список товаров</h3>
          <h3>Дата создания</h3>
          <h3>Сумма</h3>
          <h3>Статус</h3>
        </div>
        {orderItems.map(orderItem => (
          <OrderItem key={orderItem.id} orderItem={orderItem} />
        ))}
      </ul>
    </div>
  );
}
