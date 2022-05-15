import React, { useContext, useEffect, useState } from 'react';
import { UIContext } from '../../../context/UIContext';
import styles from './OrdersTableBlock.module.scss';

export default function OrdersTableBlock() {
  const [login, setLogin] = useState('user@mail.ru');
  const [password, setPassword] = useState('123456');
  const { cartProducts } = useContext(UIContext);

  useEffect(() => {
    // TODO: Fetch Data
  }, []);

  const handleLoginChange = e => {
    setLogin(e.target.value);
  };

  const handlePasswordChange = e => {
    setPassword(e.target.value);
  };

  const handleSubmit = async e => {
    e.preventDefault();
  };

  return (
    <div>
      <h2 className={styles.title}>Заказы</h2>
      <ul className={styles.table}>
        <div className={styles.tableHeader}>
          <h3>№</h3>
          <h3>Список товаров</h3>
          <h3>Дата создания</h3>
          <h3>Сумма</h3>
          <h3>Статус</h3>
        </div>
        {cartProducts.map(cartItem => (
          <div></div>
        ))}
      </ul>
    </div>
  );
}
