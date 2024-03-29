import { Link } from 'react-router-dom';
import React, { useContext } from 'react';
import CartItem from '../../elements/CartItem';
import styles from './CartTable.module.scss';
import { UIContext } from '../../../context/UIContext';
import API from '../../../api';

export default function CartTable() {
  const { cartProductsWithAmount, setCartProductsWithAmount, cartProducts, setCartProducts, totalPrice, setTotalPrice, setModalActive } = useContext(UIContext);

  const handleDelete = id => {
    setCartProducts(cartProducts.filter(item => item.id !== id));
    setTotalPrice(prevAmount => prevAmount - cartProducts.filter(item => item.id === id)[0].price)
    const copyCartProductsWithAmount = cartProductsWithAmount;
    delete copyCartProductsWithAmount[cartProducts.filter(item => item.id === id)[0].id.toString()]
    setCartProductsWithAmount(copyCartProductsWithAmount)
  };

  const handleAlertModal = async e => {
    const user = JSON.parse(localStorage.getItem('user'))

    const orderData = {
      userId: user.id,
      totalSum: totalPrice,
      createdAt: new Date(),
      productsWithAmount: cartProductsWithAmount
    }
    try {
      const orderResponse = await API.post(`/order`, orderData)
      setModalActive(true);
    }
    catch (err) {
      console.log(err.response)
    }
    setModalActive(true);
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
                handleDelete={() => handleDelete(cartItem.id)}
              />
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
