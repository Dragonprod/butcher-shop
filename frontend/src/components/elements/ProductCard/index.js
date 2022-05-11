import React from 'react';
import styles from './ProductCard.module.scss';

export default function ProductCard({ productCard }) {
  return (
    <div className={styles.card}>
      <div className={styles.photoContainer}>
        <img src={productCard.photoPath} alt={productCard.name} />
      </div>
      <div className={styles.contentContainer}>
        <h3>{productCard.name}</h3>
        <div className={styles.starsContainer}>
          {Array.from(Array(productCard.stars), (e, i) => (
            <span className={styles.star} key={i}></span>
          ))}
        </div>
        <p>{productCard.price}</p>
      </div>
      <button className={styles.contentContainer}>Добавить в корзину</button>
    </div>
  );
}
