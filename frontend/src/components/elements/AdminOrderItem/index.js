import React from 'react';
import styles from './AdminOrderItem.module.scss';

export default function AdminOrderItem({ adminOrder }) {
  return (
    <li className={styles.itemContainer}>
      <div>
        <h4>{adminOrder.id}</h4>
      </div>
      <div>
        <h4>{adminOrder.username}</h4>
      </div>
      <div>
        <h4>{adminOrder.email}</h4>
      </div>
      <div>
        <h4>{adminOrder.password.slice(0, 10)}...</h4>
      </div>
      <div>
        <h4>{adminOrder.orderAmount ? adminOrder.orderAmount : '-'}</h4>
      </div>
      <div>
        <h4>{adminOrder.role}</h4>
      </div>
      <div>
        <button>Закрыть</button>
      </div>
    </li>
  );
}
