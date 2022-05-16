import React from 'react';
import AdminSideBar from '../../../components/modules/AdminSideBar';
import Header from '../../../components/modules/Header';
import ProductCards from '../../../components/modules/ProductCards';
import styles from './AdminProductsPage.module.scss';

export default function AdminProductsPage() {
  return (
    <>
      <Header isOnAdminPage />
      <section className={styles.mainContainer}>
        <AdminSideBar />
        <ProductCards isOnAdminPage />
      </section>
    </>
  );
}
