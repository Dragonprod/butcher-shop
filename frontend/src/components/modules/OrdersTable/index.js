import React, { useEffect, useState } from 'react';
import { defaultAdminOrders } from '../../../temp';
import AdminOrderItem from '../../elements/AdminOrderItem';
import styles from './OrdersTable.module.scss';
import API from '../../../api';

export default function OrdersTable() {
  const [uncompletedOrders, setUncompletedOrders] = useState([]);
  const [completedOrders, setCompletedOrders] = useState([]);

  useEffect(() => {
    const getCompletedOrdersData = async e => {
      try {
        const completedOrdersResponse = await API.get(
          `/order/sorted?isComplete=true`
        );
        setCompletedOrders(completedOrdersResponse.data);
      } catch (err) {
        console.log(err.response);
      }
    };
    const getUncompletedOrdersData = async e => {
      try {
        const uncompletedOrdersResponse = await API.get(
          `/order/sorted?isComplete=false`
        );
        setUncompletedOrders(uncompletedOrdersResponse.data);
      } catch (err) {
        console.log(err.response);
      }
    };
    getCompletedOrdersData();
    getUncompletedOrdersData();
  }, []);

  const handleCompleteOrder = async id => {
    try {
      await API.post(`/order/${id}/complete`);
      setUncompletedOrders(uncompletedOrders.filter(item => item.id !== id));
      setUncompletedOrders(completedOrders.filter(item => item.id !== id));
    } catch (err) {
      console.log(err.response);
    }
  };

  return (
    <>
      <div className={styles.tableContainer}>
        <h2 className={styles.title}>Незавершённые заказы</h2>
        {uncompletedOrders.length > 0 ? (
          <ul className={styles.table}>
            <div className={styles.tableHeader}>
              <h3>ID заказа</h3>
              <h3>Список товаров</h3>
              <h3>Дата оформления</h3>
              <h3>Сумма</h3>
            </div>
            {uncompletedOrders.map(adminOrder => (
              <AdminOrderItem
                key={adminOrder.id}
                adminOrder={adminOrder}
                handleCompleteOrder={() => handleCompleteOrder(adminOrder.id)}
              />
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
