import Banner from '../../../components/modules/Banner';
import CategoriesList from '../../../components/modules/CategoriesList';
import Footer from '../../../components/modules/Footer';
import Header from '../../../components/modules/Header';
import ProductCards from '../../../components/modules/ProductCards';
import styles from './CatalogPage.module.scss';

export default function CatalogPage() {
  return (
    <>
      <Header />
      <div className={styles.mainGrid}>
        <Banner />
        <div className={styles.goodsGrid}>
          <CategoriesList />
          <ProductCards />
        </div>
      </div>
      <Footer />
    </>
  );
}
