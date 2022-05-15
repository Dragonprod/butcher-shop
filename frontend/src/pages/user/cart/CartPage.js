import React from 'react';
import AlertModal from '../../../components/elements/AlertModal';
import CartTable from '../../../components/modules/CartTable';
import Footer from '../../../components/modules/Footer';
import Header from '../../../components/modules/Header';
import styles from './CartPage.module.scss';

export default function CartPage() {

  return (
    <>
      <Header />
      <AlertModal />
      <section className={styles.mainContainer}>
        <CartTable />
      </section>
      <Footer />
    </>
  );
}
