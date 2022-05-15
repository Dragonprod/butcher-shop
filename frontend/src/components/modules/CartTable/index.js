import { Link } from 'react-router-dom';
import React, { useContext } from 'react';
import CartItem from '../../elements/CartItem';
import styles from './CartTable.module.scss';
import { UIContext } from '../../../context/UIContext';

export default function CartTable() {
  const { cartProducts, setCartProducts } = useContext(UIContext);

  const handleDelete = id => {
    setCartProducts(cartProducts.filter(item => item.id !== id));
  };

  return (
    <>
      {cartProducts.length > 0 ? (
        <>
          <ul className={styles.table}>
            <div className={styles.tableHeader}>
              <h3>Фото</h3>
              <h3>Описание</h3>
              <h3>Цена</h3>
              <h3>Количество</h3>
              <h3>Сумма</h3>
            </div>
            {cartProducts.map(cartItem => (
              <CartItem
                key={cartItem.id}
                cartItem={cartItem}
                onClick={() => handleDelete(cartItem.id)}
              />
            ))}
          </ul>
          <div className={styles.totalContainer}>
            <h3>Всего к оплате</h3>
            <h3>{999} ₽</h3>
          </div>
          <div className={styles.buyButtonContainer}>
            <button className={styles.buyButton}>Купить</button>
          </div>
        </>
      ) : (
        <>
          <h2 className={styles.emptyCartTitle}>Ваша корзина пуста</h2>
          <h2 className={styles.emptyCartTitle}>
            Мы уверены, для Вас найдётся что-то подходящее в нашем{' '}
            <Link className={styles.redirect} to='/'>
              Каталоге
            </Link>
          </h2>
        </>
      )}
    </>
  );
}
