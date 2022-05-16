import React, { useEffect, useState } from 'react';
import { defaultAdminOrders } from '../../../temp';
import AdminOrderItem from '../../elements/AdminOrderItem';
import styles from './OrdersTable.module.scss';
import API from '../../../api';

export default function OrdersTable() {
  const [uncompletedOrders, setUncompletedOrders] = useState(
    defaultAdminOrders.filter(item => !item.isCompleted)
  );
  const [completedOrders, setCompletedOrders] = useState(
    defaultAdminOrders.filter(item => item.isCompleted)
  );

  // useEffect(() => {
  //   usersData.forEach(user => {
  //     user.orders.forEach(order => {
  //       let data = [];
  //       Object.values(order.productsWithAmount).map(product => (
  //         data.push(product)
  //       ));
  //       const row = {
  //         id: order.id,
  //         email: user.email,
  //         totalSum: order.totalSum,
  //         products: data,
  //         createdAt: order.createdAt,
  //         complete: order.complete
  //       }
  //       if (order.complete) {
  //         let filteredCompleteOrders = completedOrders.filter(e => e.id !== row.id);
  //         setCompletedOrders([...filteredCompleteOrders, row])
  //       }
  //       else {
  //         let filteredUnCompleteOrders = uncompletedOrders.filter(e => e.id !== row.id);
  //         setUncompletedOrders([...filteredUnCompleteOrders, row])
  //       }
  //     });
  //   })
  // }, [usersData, completedOrders, uncompletedOrders, setUncompletedOrders, setCompletedOrders])

  const handleCompleteOrder = async id => {
    try {
      await API.post(`/order/${id}/complete`);
      setUncompletedOrders(uncompletedOrders.filter(item => item.id !== id));
      setUncompletedOrders(completedOrders.filter(item => item.id !== id));
    }
    catch (err) {
      console.log(err.response)
    }
  }

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
              <AdminOrderItem key={adminOrder.id} adminOrder={adminOrder} handleCompleteOrder={() => handleCompleteOrder(adminOrder.id)} />
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
