import React, { useState } from 'react';
import { defaultAdminOrders } from '../../../temp';
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
            <h3>Логин</h3>
            <h3>Почта</h3>
            <h3>Пароль</h3>
            <h3>Кол-во заказов</h3>
            <h3>Роль</h3>
          </div>
          {adminOrders.map(user => (
            <></>
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
