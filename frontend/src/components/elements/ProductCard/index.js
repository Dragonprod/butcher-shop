import React, { useContext } from 'react';
import styles from './ProductCard.module.scss';
import { UIContext } from '../../../context/UIContext';

export default function ProductCard({ productCard }) {
  const {
    setModalActive,
    setSelectedProduct,
    cartProducts,
    setCartProducts,
    setIsProductAddedToCart,
  } = useContext(UIContext);

  const handleProductModal = () => {
    setModalActive(true);
    setSelectedProduct(productCard);
  };

  const handleAddToCart = () => {
    if(cartProducts.indexOf(productCard) === -1) {
      setCartProducts([...cartProducts, productCard])
      setIsProductAddedToCart(true);
    }
  };

  return (
    <div className={styles.card}>
      <div
        className={styles.photoContainer}
        onClick={handleProductModal}>
        <img src={productCard.photoUrl} alt={productCard.name} />
      </div>
      <div className={styles.contentContainer}>
        <h3 onClick={handleProductModal}>{productCard.name}</h3>
        <p>{productCard.weight} кг</p>
        <div className={styles.priceContainer}>
          <h4>{productCard.price} ₽</h4>
          <button
            className={styles.cartButton}
            onClick={handleAddToCart}>
            В корзину
          </button>
        </div>
      </div>
    </div>
  );
}
