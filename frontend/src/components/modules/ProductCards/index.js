import React, { useEffect, useState } from 'react';
import styles from './ProductCards.module.scss';
import ProductCard from '../../elements/ProductCard';

export default function ProductCards() {
  let defaultCategories = [
    {
      id: 0,
      name: 'Бургеры',
      products: [
        {
          id: 0,
          name: 'Чизбургер',
          photoPath: '../../../assets/images/1.png',
          stars: 1,
          price: 50,
        },
        {
          id: 1,
          name: 'Гамбургер',
          photoPath: '../../../assets/images/1.png',
          stars: 2,
          price: 50,
        },
        {
          id: 2,
          name: 'Чикен бургер',
          photoPath: '../../../assets/images/1.png',
          stars: 3,
          price: 50,
        },
        {
          id: 3,
          name: 'Биг Мак',
          photoPath: '../../../assets/images/1.png',
          stars: 4,
          price: 300,
        },
      ],
    },
    {
      id: 1,
      name: 'Котлеты',
      products: [
        {
          id: 4,
          name: 'Бургерные котлеты',
          photoPath: '../../../assets/images/1.png',
          stars: 2,
          price: 120,
        },
        {
          id: 5,
          name: 'Домашние котлеты',
          photoPath: '../../../assets/images/1.png',
          stars: 3,
          price: 130,
        },
        {
          id: 6,
          name: 'Рыбные котлеты',
          photoPath: '../../../assets/images/1.png',
          stars: 4,
          price: 140,
        },
      ],
    },
    {
      id: 2,
      name: 'Стейки',
      products: [
        {
          id: 7,
          name: 'Стейк из говядины',
          photoPath: '../../../assets/images/1.png',
          stars: 1,
          price: 100,
        },
        {
          id: 8,
          name: 'Стейк из баранины',
          photoPath: '../../../assets/images/1.png',
          stars: 2,
          price: 120,
        },
      ],
    },
  ];
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
