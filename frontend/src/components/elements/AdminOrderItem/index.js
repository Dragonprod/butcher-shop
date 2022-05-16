import React from 'react';
import styles from './AdminOrderItem.module.scss';
import img1 from '../../../assets/images/login0.jpg';

export default function AdminOrderItem({ adminOrder, handleCompleteOrder }) {
  console.log(adminOrder);
  return (
    <li className={styles.itemContainer}>
      <div>
        <h4>{adminOrder.id}</h4>
      </div>
      <div className={styles.ordersContainer}>
        {Object.values(adminOrder.productsWithAmount).map(product => (
          <div key={product.id} className={styles.productContainer}>
            <img src={product.photoUrl} alt={product.name} />
            <h3>{product.name}</h3>
          </div>
        ))}
      </div>
      <div>
        <h4>{adminOrder.createdAt}</h4>
      </div>
      <div>
        <h4>{adminOrder.totalSum}</h4>
      </div>
      <div>
        {!adminOrder.complete && (
          <button
            className={styles.completeButton}
            onClick={handleCompleteOrder}>
            Закрыть
          </button>
        )}
      </div>
    </li>
  );
}
