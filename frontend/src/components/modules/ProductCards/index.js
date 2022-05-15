import React, { useEffect, useState } from 'react';
import styles from './ProductCards.module.scss';
import ProductCard from '../../elements/ProductCard';
import { defaultCategories } from '../../../temp/variables';

export default function ProductCards() {
  const [categories, setCategories] = useState(defaultCategories);

  useEffect(() => {
    // TODO: Fetch data
  }, []);

  return (
    <div className={styles.test}>
      {categories.map(category => (
        <div key={category.id} className={styles.categoryContainer}>
          <h2>{category.name}</h2>
          <div className={styles.productsGrid}>
            {category.products.map(product => (
              <ProductCard key={product.id} productCard={product} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
