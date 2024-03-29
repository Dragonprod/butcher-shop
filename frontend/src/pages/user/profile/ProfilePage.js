import React from 'react';
import Footer from '../../../components/modules/Footer';
import Header from '../../../components/modules/Header';
import OrdersTableBlock from '../../../components/modules/OrdersTableBlock';
import UserInfoBlock from '../../../components/modules/UserInfoBlock';
import styles from './ProfilePage.module.scss';

export default function ProfilePage() {
  return (
    <>
      <Header />
      <section className={styles.mainContainer}>
        <UserInfoBlock />
        <OrdersTableBlock />
      </section>
      <Footer />
    </>
  );
}
