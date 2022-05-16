import React from 'react';
import AdminSideBar from '../../components/modules/AdminSideBar';
import Header from '../../components/modules/Header';
import UsersTable from '../../components/modules/UsersTable';
import styles from './AdminPage.module.scss';

export default function AdminPage() {
  return (
    <>
      <Header />
      <section className={styles.mainContainer}>
        <AdminSideBar />
        <UsersTable />
      </section>
    </>
  );
}
