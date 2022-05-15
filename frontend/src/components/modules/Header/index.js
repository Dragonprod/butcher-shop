import styles from './Header.module.scss';
import React, { useContext, useState } from 'react';
import { AuthContext } from '../../../context';
import Logo from '../../elements/Logo';
import { Link } from 'react-router-dom';
import { AUTH_PAGE } from '../../../constants';
import { Avatar } from '@mui/material';

export default function Header({ page = '' }) {
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
          {page === AUTH_PAGE ? null : (
            <>
              <Link to='/cart'>Корзина</Link>
              {isAuth ? (
                <>
                  <Link to='/profile' className={styles.avatarButton}>
                    <Avatar>H</Avatar>
                  </Link>
                  <Link to='/logout' className={styles.loginButton}>
                    Выйти
                  </Link>
                </>
              ) : (
                <Link to='/login' className={styles.loginButton}>
                  Войти
                </Link>
              )}
            </>
          )}

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
