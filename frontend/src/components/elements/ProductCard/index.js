import React, { useContext } from 'react';
import styles from './ProductCard.module.scss';
import { UIContext } from '../../../context/UIContext';
import API from '../../../api';

export default function ProductCard({ productCard, isOnAdminPage }) {
  const {
    setModalActive,
    setSelectedProduct,
    cartProducts,
    setCartProducts,
    setIsProductAddedToCart,
    setTotalPrice,
    cartProductsWithAmount,
    setCartProductsWithAmount,
  } = useContext(UIContext);

  const handleProductModal = () => {
    setModalActive(true);
    setSelectedProduct(productCard);
  };

  const handleAddToCart = async e => {
    if(isOnAdminPage) {
      try {
        await API.delete(`/products/${productCard.id}`)
      } 
      catch (err) {
        console.log(err.response.data)
      }
    }
    else {
      if (cartProducts.indexOf(productCard) === -1) {
        setCartProducts([...cartProducts, productCard]);
        setIsProductAddedToCart(true);
        setTotalPrice(prevAmount => prevAmount + productCard.price);
        if (cartProductsWithAmount[productCard.id] === undefined) {
          setCartProductsWithAmount(prevState => ({
            ...prevState,
            [productCard.id.toString()]: 1,
          }));
        }
      }
    }
    
  };

  return (
    <div className={styles.card}>
      <div className={styles.photoContainer} onClick={handleProductModal}>
        <img src={productCard.photoUrl} alt={productCard.name} />
      </div>
      <div className={styles.contentContainer}>
        <h3 onClick={handleProductModal}>{productCard.name}</h3>
        <p>{productCard.weight} кг</p>
        <div className={styles.priceContainer}>
          <h4>{productCard.price} ₽</h4>
          <button className={styles.cartButton} onClick={handleAddToCart}>
            {isOnAdminPage ? 'Удалить' : 'В корзину'}
          </button>
        </div>
      </div>
    </div>
  );
}
