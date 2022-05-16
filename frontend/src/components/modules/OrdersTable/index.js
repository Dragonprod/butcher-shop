import React, { useState } from 'react';
import { defaultAdminOrders } from '../../../temp';
import AdminOrderItem from '../../elements/AdminOrderItem';
import styles from './OrdersTable.module.scss';

export default function OrdersTable() {
  const [adminOrders, setAdminOrders] = useState(defaultAdminOrders);

  return (
    <>
      {/* <h2 className={styles.title}>Незавершённые заказы</h2> */}
      {adminOrders.length > 0 ? (
        <ul className={styles.table}>
          <div className={styles.tableHeader}>
            <h3>ID</h3>
            <h3>Пользователь</h3>
            <h3>ID заказа</h3>
            <h3>Список товаров</h3>
            <h3>Дата оформления</h3>
            <h3>Сумма</h3>
          </div>
          {adminOrders.map(adminOrder => (
            <AdminOrderItem key={adminOrder.id} adminOrder={adminOrder} />
            // <UserItem key={user.id} userItem={user} />
          ))}
        </ul>
      ) : (
        <>
          <h2 className={styles.emptyCartTitle}>Нет записей</h2>
        </>
      )}
    </>
  );
}
