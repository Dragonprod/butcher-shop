import { useContext, useEffect } from 'react';
import AddToCartTooltip from '../../../components/elements/AddToCartTooltip';
import ProductModal from '../../../components/elements/ProductModal';
import Banner from '../../../components/modules/Banner';
import Footer from '../../../components/modules/Footer';
import Header from '../../../components/modules/Header';
import ProductCards from '../../../components/modules/ProductCards';
import { UIContext } from '../../../context/UIContext';
import styles from './CatalogPage.module.scss';

export default function CatalogPage() {
  const { setIsProductAddedToCart } = useContext(UIContext);

  useEffect(() => {
    return () => {
      setIsProductAddedToCart(false);
    }
  }, [setIsProductAddedToCart])

  return (
    <>
      <Header />
      <ProductModal />
      <AddToCartTooltip />
      <main className={styles.mainGrid}>
        <Banner />
        <ProductCards />
      </main>
      <Footer />
    </>
  );
}
