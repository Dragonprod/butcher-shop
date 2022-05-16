import React from 'react';
import styles from './AdminOrderItem.module.scss';
import img1 from '../../../assets/images/login0.jpg';

export default function AdminOrderItem({ adminOrder, handleCompleteOrder }) {
  return (
    <li className={styles.itemContainer}>
      <div>
        <h4>{adminOrder.id}</h4>
      </div>
      <div>
        <h4>{adminOrder.email}</h4>
      </div>
      <div className={styles.ordersContainer}>
        {adminOrder.products.map(product => (
          <div key={product.id} className={styles.productContainer}>
            {/* <img src={product.photoUrl} alt={product.name} /> */}
            <img src={img1} alt={product.name} />
            <h3>{product.name}</h3>
          </div>
        ))}
      </div>
      <div>
        <h4>{adminOrder.createDate}</h4>
      </div>
      <div>
        <h4>{adminOrder.sum}</h4>
      </div>
      <div>
        {!adminOrder.isCompleted && (
          <button className={styles.completeButton}>Закрыть</button>
        )}
      </div>
    </li>
  );
}
