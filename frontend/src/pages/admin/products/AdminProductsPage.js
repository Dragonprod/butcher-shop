import React from 'react';
import AdminSideBar from '../../../components/modules/AdminSideBar';
import Header from '../../../components/modules/Header';
import styles from './AdminProductsPage.module.scss';

export default function AdminProductsPage() {
  return (
    <>
      <Header />
      <section className={styles.mainContainer}>
        <AdminSideBar />
      </section>
    </>
  );
}
