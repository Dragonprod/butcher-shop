import Banner from '../../../components/modules/Banner';
import Header from '../../../components/modules/Header';
import ProductCards from '../../../components/modules/ProductCards';

export default function CatalogPage() {
  return (
    <>
      <Header />
      <div>
        <Banner />
        <ProductCards />
      </div>
    </>
  );
}
