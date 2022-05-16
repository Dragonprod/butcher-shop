import React from 'react';
import styles from './AdminSideBar.module.scss';
import { Link } from 'react-router-dom';

export default function AdminSideBar() {
  return (
    <aside className={styles.aside}>
      <nav className={styles.menu}>
        <Link to='/admin'>Пользователи</Link>
        <Link to='/admin/orders'>Заказы</Link>
        <Link to='/admin/products'>Продукты</Link>
      </nav>
    </aside>
  );
}
