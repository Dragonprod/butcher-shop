import React, { useState } from 'react';
import styles from './ProductCards.module.scss';
import ProductCard from '../../elements/ProductCard';

export default function ProductCards() {
  let defaultProductCards = [
    {
      id: 0,
      name: 'Бутер',
      photoPath: '../../../assets/images/1.png',
      stars: 1,
      price: 100,
    },
    {
      id: 1,
      name: 'Бургер',
      photoPath: '../../../assets/images/1.png',
      stars: 2,
      price: 120,
    },
    {
      id: 2,
      name: 'Стейк говядины',
      photoPath: '../../../assets/images/1.png',
      stars: 3,
      price: 130,
    },
    {
      id: 3,
      name: 'Бараньи рёбра',
      photoPath: '../../../assets/images/1.png',
      stars: 4,
      price: 140,
    },
  ];
  const [productCards, setProductCards] = useState(defaultProductCards);

  // TODO: Fetch Data

  return (
    <div className={styles.grid}>
      {productCards.map(productCard => (
        <ProductCard key={productCard.id} productCard={productCard} />
      ))}
    </div>
  );
}
