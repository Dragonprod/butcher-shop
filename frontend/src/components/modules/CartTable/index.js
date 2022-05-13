import React, { useState } from 'react';
import CartItem from '../../elements/CartItem';
import styles from './CartTable.module.scss';

export default function CartTable() {
  let defaultCartItems = [
    {
      id: 0,
      name: 'Бутер',
      description: 'Lorem ipsum',
      weight: 0.5,
      photoPath: '../../../assets/images/1.png',
      price: 100,
    },
    {
      id: 1,
      name: 'Бургер',
      description: 'Lorem ipsum',
      weight: 0.5,
      photoPath: '../../../assets/images/1.png',
      price: 120,
    },
    {
      id: 2,
      name: 'Стейк говядины',
      description: 'Lorem ipsum',
      weight: 0.5,
      photoPath: '../../../assets/images/1.png',
      price: 130,
    },
    {
      id: 3,
      name: 'Бараньи рёбра',
      description: 'Lorem ipsum',
      weight: 0.5,
      photoPath: '../../../assets/images/1.png',
      price: 140,
    },
  ];
  const [cartItems, setCartItems] = useState(defaultCartItems);

  // TODO: Fetch Data

  return (
    <ul className={styles.table}>
      <div className={styles.tableHeader}>
        <h3>Фото</h3>
        <h3>Описание</h3>
        <h3>Цена</h3>
      </div>
      {cartItems.map(cartItem => (
        <CartItem key={cartItem.id} cartItem={cartItem} />
      ))}
    </ul>
  );
}
