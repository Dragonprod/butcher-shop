import React, { useContext } from 'react';
import styles from './ProductCard.module.scss';
import img1 from '../../../assets/images/1.png';
import { UIContext } from '../../../context/UIContext';

export default function ProductCard({ productCard }) {
  const { setModalActive, setSelectedProduct, cartProducts, setCartProducts } =
    useContext(UIContext);

  const handleProductModal = () => {
    setModalActive(true);
    setSelectedProduct(productCard);
  };

  const handleAddToCart = () => {
    setCartProducts([...cartProducts, productCard]);
  };

  // TODO: Dynamic Images

  return (
    <div className={styles.card}>
      <div
        className={styles.photoContainer}
        onClick={() => handleProductModal()}>
        {/* <img src={productCard.photoPath} alt={productCard.name} /> */}
        <img src={img1} alt={productCard.name} />
      </div>
      <div className={styles.contentContainer}>
        <h3 onClick={() => handleProductModal()}>{productCard.name}</h3>
        <p>{productCard.weight} кг</p>
        <div className={styles.priceContainer}>
          <h4>{productCard.price} ₽</h4>
          <button
            className={styles.cartButton}
            onClick={() => handleAddToCart()}>
            В корзину
          </button>
        </div>
      </div>
    </div>
  );
}
