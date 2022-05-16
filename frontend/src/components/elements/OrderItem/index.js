import { useState } from 'react';
import styles from './OrderItem.module.scss';

const OrderItem = ({ orderItem }) => {
  const [orderItems, setOrderItems] = useState([]);

  return (
    <li className={styles.itemContainer}>
      <div className={styles.photoContainer}>
        <img src={orderItem.photoUrl} alt={orderItem.name} />
      </div>
      <div className={styles.contentContainer}>
        <h3>{orderItem.name}</h3>
        <p>{orderItem.weight} кг</p>
      </div>
      <div className={styles.priceContainer}>
        <h4>{orderItem.price} ₽</h4>
      </div>
      <div className={styles.counterContainer}></div>
      <div className={styles.sumContainer}>
        <h4>{999} ₽</h4>
      </div>
    </li>
  );
};

export default OrderItem;
