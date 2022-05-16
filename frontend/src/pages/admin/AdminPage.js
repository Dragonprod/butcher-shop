import React from 'react';
import AdminSideBar from '../../components/modules/AdminSideBar';
import Footer from '../../components/modules/Footer';
import Header from '../../components/modules/Header';
import styles from './AdminPage.module.scss';

export default function AdminPage() {
  return (
    <>
      <Header />
      <section className={styles.mainContainer}>
        <AdminSideBar />
      </section>
    </>
  );
}
