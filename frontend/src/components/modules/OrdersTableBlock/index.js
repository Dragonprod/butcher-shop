import React, { useEffect, useState } from 'react';
import OrderItem from '../../elements/OrderItem';
import styles from './OrdersTableBlock.module.scss';
import API from '../../../api';

export default function OrdersTableBlock() {
  const [orderItems, setOrderItems] = useState([]);

  useEffect(() => {
    const getOrdersData = async e => {
      const user = JSON.parse(localStorage.getItem('user'))
      try {
        const ordersResponse = await API.get(`/order/user/${user.id}`);
        setOrderItems(ordersResponse.data);
      }
      catch (err) {
        console.log(err.response)
      }
    };
    getOrdersData();
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
