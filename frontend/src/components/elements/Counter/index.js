import { IconButton } from '@mui/material';
import React, { useState } from 'react';
import styles from './Counter.module.scss';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';

export default function Counter({ handlePriceIncrease, handlePriceDecrease }) {
  const [amount, setAmount] = useState(1);

  const handleDecrease = () => {
    if (amount > 1) {
      setAmount(prevAmount => prevAmount - 1);
      handlePriceDecrease();
    }
    
  };
  const handleIncrease = () => {
    setAmount(prevAmount => prevAmount + 1);
    handlePriceIncrease();
  }

  return (
    <div className={styles.mainContainer}>
      <div>
        <IconButton onClick={() => handleDecrease()} aria-label='delete'>
          <RemoveIcon />
        </IconButton>
      </div>
      <div>{amount}</div>
      <div>
        <IconButton onClick={() => handleIncrease()} aria-label='delete'>
          <AddIcon />
        </IconButton>
      </div>
    </div>
  );
}
