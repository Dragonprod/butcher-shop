import React from 'react';
import Header from '../../components/modules/Header';
import styles from './AdminPage.module.scss';

export default function AdminPage() {
  return (
    <>
      <Header />
      <section className={styles.mainGrid}></section>
    </>
  );
}
