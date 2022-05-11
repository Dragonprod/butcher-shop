import React from 'react';
import styles from './ProductCards.module.scss';
import ProductCard from '../../elements/ProductCard';

export default function ProductCards() {
  let productCards = [
    { id: 0, name: 'Бутер', photo: '', stars: 1, price: 100 },
    { id: 1, name: 'Бургер', photo: '', stars: 2, price: 120 },
    { id: 2, name: 'Стейк говядины', photo: '', stars: 3, price: 130 },
    { id: 3, name: 'Бараньи рёбра', photo: '', stars: 4, price: 140 },
  ];

  return (
    <div className={styles.grid}>
      {productCards.map(productCard => (
        <ProductCard key={productCard.id} productCard={productCard} />
      ))}
    </div>
  );
}
