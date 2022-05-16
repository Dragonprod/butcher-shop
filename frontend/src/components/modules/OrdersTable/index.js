import React, { useState } from 'react';
import { defaultAdminOrders } from '../../../temp';
import AdminOrderItem from '../../elements/AdminOrderItem';
import styles from './OrdersTable.module.scss';

export default function OrdersTable() {
  const [uncompletedOrders, setUncompletedOrders] = useState(
    defaultAdminOrders.filter(item => !item.isCompleted)
  );
  const [completedOrders, setCompletedOrders] = useState(
    defaultAdminOrders.filter(item => item.isCompleted)
  );

  const handleCompleteOrder = () => {};

  return (
    <>
      <div className={styles.tableContainer}>
        <h2 className={styles.title}>Незавершённые заказы</h2>
        {uncompletedOrders.length > 0 ? (
          <ul className={styles.table}>
            <div className={styles.tableHeader}>
              <h3>ID заказа</h3>
              <h3>Пользователь</h3>
              <h3>Список товаров</h3>
              <h3>Дата оформления</h3>
              <h3>Сумма</h3>
            </div>
            {uncompletedOrders.map(adminOrder => (
              <AdminOrderItem key={adminOrder.id} adminOrder={adminOrder} />
            ))}
          </ul>
        ) : (
          <>
            <h2 className={styles.emptyCartTitle}>Нет записей</h2>
          </>
        )}
      </div>

      <div className={styles.tableContainer}>
        <h2 className={styles.title}>Завершённые заказы</h2>
        {completedOrders.length > 0 ? (
          <ul className={styles.table}>
            <div className={styles.tableHeader}>
              <h3>ID заказа</h3>
              <h3>Пользователь</h3>
              <h3>Список товаров</h3>
              <h3>Дата оформления</h3>
              <h3>Сумма</h3>
            </div>
            {completedOrders.map(adminOrder => (
              <AdminOrderItem key={adminOrder.id} adminOrder={adminOrder} />
            ))}
          </ul>
        ) : (
          <>
            <h2 className={styles.emptyCartTitle}>Нет записей</h2>
          </>
        )}
      </div>
    </>
  );
}
