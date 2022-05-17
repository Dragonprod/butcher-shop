import React, { useEffect, useState } from 'react';
import styles from './ProductCards.module.scss';
import ProductCard from '../../elements/ProductCard';
import API from '../../../api';

export default function ProductCards({ isOnAdminPage }) {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const getCategoriesData = async () => {
      const categoriesData = await API.get(`/categories`);
      setCategories(categoriesData.data);
    };
    getCategoriesData();
  }, []);

  return (
    <div className={styles.test}>
      {categories.map(category => (
        <div key={category.id} className={styles.categoryContainer}>
          <h2>{category.name}</h2>
          <div className={styles.productsGrid}>
            {category.products.map(product => (
              <ProductCard
                key={product.id}
                productCard={product}
                isOnAdminPage={isOnAdminPage}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
