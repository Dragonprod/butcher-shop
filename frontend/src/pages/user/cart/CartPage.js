import React, { useContext, useEffect } from 'react';
import AlertModal from '../../../components/elements/AlertModal';
import CartTable from '../../../components/modules/CartTable';
import Footer from '../../../components/modules/Footer';
import Header from '../../../components/modules/Header';
import { UIContext } from '../../../context/UIContext';
import styles from './CartPage.module.scss';

export default function CartPage() {
  const { cartProducts, setTotalPrice } = useContext(UIContext);

  useEffect(() => {
    cartProducts.forEach(item => {
      setTotalPrice(prevAmount => prevAmount + item.price)
    })
  }, [cartProducts, setTotalPrice])

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
