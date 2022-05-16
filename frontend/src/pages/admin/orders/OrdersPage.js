import React from 'react';
import AdminSideBar from '../../../components/modules/AdminSideBar';
import Header from '../../../components/modules/Header';
import OrdersTable from '../../../components/modules/OrdersTable';
import styles from './OrdersPage.module.scss';

export default function OrdersPage() {
  return (
    <>
      <Header isOnAdminPage />
      <section className={styles.mainContainer}>
        <AdminSideBar />
        <OrdersTable />
      </section>
    </>
  );
}
