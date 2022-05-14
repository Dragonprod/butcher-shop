import styles from './Header.module.scss';
import React, { useContext, useState } from 'react';
import { AuthContext } from '../../../context';
import Logo from '../../elements/Logo';
import { Link } from 'react-router-dom';

export default function Header() {
  const [isAdmin, setisAdmin] = useState(false);
  const { isAuth } = useContext(AuthContext);
  return (
    <header className={styles.header}>
      <div className={styles.contentContainer}>
        <Link to='/'>
          <Logo />
        </Link>
        <nav className={styles.nav}>
          <Link to='/'>Каталог</Link>
          <Link to='/cart'>Корзина</Link>
          {isAuth ? (<Link to='/logout' className={styles.loginButton}>
            Выйти
          </Link>) : (<Link to='/login' className={styles.loginButton}>
            Войти
          </Link>)}

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
