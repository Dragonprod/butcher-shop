import React, { useEffect, useState } from 'react';
import styles from './ProductCards.module.scss';
import ProductCard from '../../elements/ProductCard';
import API from '../../../api';

export default function ProductCards() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const getCategoriesData = async () => {
      const categoriesData = await API.get(`/categories/`);
      setCategories(categoriesData.data);
    };
    getCategoriesData();
  }, []);

  return (
    <div className={styles.test}>
      {categories.map((category, id) => (
        <div key={id} className={styles.categoryContainer}>
          <h2>{category.name}</h2>
          <div className={styles.productsGrid}>
            {category.products.map((product, pid) => (
              <ProductCard key={pid} id={pid} productCard={product} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
