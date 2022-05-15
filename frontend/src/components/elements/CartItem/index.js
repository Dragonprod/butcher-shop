import React, { useContext, useEffect, useState } from 'react';
import styles from './CartItem.module.scss';
import CloseIcon from '@mui/icons-material/Close';
import { IconButton } from '@mui/material';
import Counter from '../Counter';
import { UIContext } from '../../../context/UIContext';

export default function CartItem({ cartItem, handleDelete }) {
  const [price, setPrice] = useState(cartItem.price);
  const { setTotalPrice, setCartProductsWithAmount } = useContext(UIContext);

  const handlePriceDecrease = () => {
    setPrice(prevAmount => prevAmount - cartItem.price);
    setTotalPrice(prevAmount => prevAmount - cartItem.price);
    setCartProductsWithAmount(prevState => ({ ...prevState, [cartItem.id.toString()]: prevState[cartItem.id.toString()] - 1}))
  }

  const handlePriceIncrease = () => {
    setPrice(prevAmount => prevAmount + cartItem.price);
    setTotalPrice(prevAmount => prevAmount + cartItem.price);
    setCartProductsWithAmount(prevState => ({ ...prevState, [cartItem.id.toString()]: prevState[cartItem.id.toString()] + 1}))
  }

  return (
    <li className={styles.itemContainer}>
      <div className={styles.photoContainer}>
        <img src={cartItem.photoUrl} alt={cartItem.name} />
      </div>
      <div className={styles.contentContainer}>
        <h3>{cartItem.name}</h3>
        <p>{cartItem.weight} кг</p>
      </div>
      <div className={styles.priceContainer}>
        <h4>{cartItem.price} ₽</h4>
      </div>
      <div className={styles.counterContainer}>
        <Counter handlePriceIncrease={handlePriceIncrease} handlePriceDecrease={handlePriceDecrease} />
      </div>
      <div className={styles.sumContainer}>
        <h4>{price} ₽</h4>
      </div>
      <div>
        <IconButton aria-label='delete' onClick={handleDelete}>
          <CloseIcon color='error' />
        </IconButton>
      </div>
    </li>
  );
}
