import React from 'react';
import Footer from '../../../components/modules/Footer';
import Header from '../../../components/modules/Header';
import styles from './CartPage.module.scss';

export default function CartPage() {
  return (
    <>
      <Header />
      <section className={styles.mainContainer}></section>
      <Footer />
    </>
  );
}
