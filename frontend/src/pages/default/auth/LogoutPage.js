import React, { useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../../components/modules/Header';
import { AuthContext } from '../../../context';
import styles from './LogoutPage.module.scss';

export default function LogoutPage() {
  const { setisAuth, setisAdmin, setUser, setapiToken } =
    useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    setisAuth(false);
    setisAdmin(false);
    setUser(null);
    setapiToken(null);
    localStorage.removeItem('isAuth');
    localStorage.removeItem('isAdmin');
    localStorage.removeItem('user');
    localStorage.removeItem('api_token');
    setTimeout(() => {
      navigate('/');
    }, 1000);
  }, [setisAuth, setisAdmin, setUser, setapiToken, navigate]);

  return (
    <>
      <Header />
      <section className={styles.mainContainer}>
        <h2 className={styles.title}>Выполняется выход...</h2>
      </section>
    </>
  );
}
