import styles from './Header.module.scss';
import React, { useState } from 'react';
import Logo from '../../elements/Logo';
import { Link } from 'react-router-dom';

export default function Header() {
  const [isAdmin, setisAdmin] = useState(false);
  
  return (
    <header className={styles.header}>
      <div className={styles.contentContainer}>
        <Link to='/'>
          <Logo />
        </Link>
        <nav className={styles.nav}>
          <Link to='/'>Каталог</Link>
          <Link to='/cart'>Корзина</Link>
          <Link to='/login' className={styles.loginButton}>
            Войти
          </Link>
          {isAdmin && (
            <Link to='/admin' className={styles.loginButton}>
              Админ.панель
            </Link>
          )}
        </nav>
      </div>
    </header>
  );
}
