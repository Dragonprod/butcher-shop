import Banner from '../../../components/modules/Banner';
import Footer from '../../../components/modules/Footer';
import Header from '../../../components/modules/Header';
import ProductCards from '../../../components/modules/ProductCards';
import styles from './CatalogPage.module.scss';

export default function CatalogPage() {
  
  return (
    <>
      <Header/>
      <main className={styles.mainGrid}>
        <Banner />
        <ProductCards />
      </main>
      <Footer />
    </>
  );
}
