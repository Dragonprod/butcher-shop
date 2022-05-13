import React from 'react';
import styles from './CartItem.module.scss';
import img1 from '../../../assets/images/1.png';
import CloseIcon from '@mui/icons-material/Close';
import { IconButton } from '@mui/material';

export default function CartItem({ cartItem }) {
  return (
    <li className={styles.itemContainer}>
      <div className={styles.photoContainer}>
        <img src={img1} alt={cartItem.name} />
      </div>
      <div className={styles.contentContainer}>
        <h3>{cartItem.name}</h3>
        <p>{cartItem.weight} кг</p>
      </div>
      <div className={styles.priceContainer}>
        <h4>{cartItem.price} ₽</h4>
      </div>
      <div className={styles.counterContainer}>
        <div></div>
      </div>
      <div className={styles.sumContainer}>
        <h4>{cartItem.price} ₽</h4>
      </div>
      <div>
        <IconButton aria-label='delete'>
          <CloseIcon color='error' />
        </IconButton>
      </div>
    </li>
  );
}
