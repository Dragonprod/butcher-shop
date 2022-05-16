import React, { useContext } from 'react';
import { UIContext } from '../../../context/UIContext';
import styles from './UsersTable.module.scss';

export default function UsersTable() {
  const { cartProducts, totalPrice } = useContext(UIContext);

  const handleDelete = id => {};

  const handleAlertModal = async e => {};

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
              <div></div>
            ))}
          </ul>
          <div className={styles.totalContainer}>
            <h3>Всего к оплате</h3>
            <h3>{totalPrice} ₽</h3>
          </div>
          <div className={styles.buyButtonContainer}>
            <button className={styles.buyButton} onClick={handleAlertModal}>
              Оформить заказ
            </button>
          </div>
        </>
      ) : (
        <>
          <h2 className={styles.emptyCartTitle}>Нет записей</h2>
        </>
      )}
    </>
  );
}
