import styles from './Header.module.scss';
import React from 'react';
import Logo from '../../elements/Logo';
import { Link } from 'react-router-dom';

export default function Header() {
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
        </nav>
      </div>
    </header>
  );
}
