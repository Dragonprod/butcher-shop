import React from 'react';
import styles from './CartTable.module.scss';

export default function CartTable() {
  let cartItems = [
    {
      id: 0,
      name: 'Бутер',
      description: 'Lorem ipsum',
      photoPath: '../../../assets/images/1.png',
      price: 100,
    },
    {
      id: 1,
      name: 'Бургер',
      description: 'Lorem ipsum',
      photoPath: '../../../assets/images/1.png',
      price: 120,
    },
    {
      id: 2,
      name: 'Стейк говядины',
      description: 'Lorem ipsum',
      photoPath: '../../../assets/images/1.png',
      price: 130,
    },
    {
      id: 3,
      name: 'Бараньи рёбра',
      description: 'Lorem ipsum',
      photoPath: '../../../assets/images/1.png',
      price: 140,
    },
  ];

  return (
    <div className={styles.table}>
      {cartItems.map(cartItem => (
        <div key={cartItem.id}></div>
      ))}
    </div>
  );
}
