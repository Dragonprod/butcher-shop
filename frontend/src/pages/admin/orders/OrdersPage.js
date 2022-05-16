import React from 'react';
import AdminSideBar from '../../../components/modules/AdminSideBar';
import Header from '../../../components/modules/Header';
import styles from './OrdersPage.module.scss';

export default function OrdersPage() {
  return (
    <>
      <Header />
      <section className={styles.mainContainer}>
        <AdminSideBar />
      </section>
    </>
  );
}
