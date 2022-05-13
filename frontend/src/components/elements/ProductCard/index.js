import React from 'react';
import styles from './ProductCard.module.scss';
import img1 from '../../../assets/images/1.png';

export default function ProductCard({ productCard }) {
  // TODO: Dynamic Images
  return (
    <div className={styles.card}>
      <div className={styles.photoContainer}>
        {/* <img src={productCard.photoPath} alt={productCard.name} /> */}
        <img src={img1} alt={productCard.name} />
      </div>
      <div className={styles.contentContainer}>
        <h3>{productCard.name}</h3>
        <p>Lorem ipsum</p>
        <div className={styles.priceContainer}>
          <h4>{productCard.price} ₽</h4>
          <button className={styles.cartButton}>В корзину</button>
        </div>
      </div>
    </div>
  );
}
