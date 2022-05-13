import { IconButton } from '@mui/material';
import React, { useState } from 'react';
import styles from './Counter.module.scss';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';

export default function Counter() {
  const [amount, setAmount] = useState(1);

  const handleDecrease = () => setAmount(prevAmount => prevAmount - 1);
  const handleIncrease = () => setAmount(prevAmount => prevAmount + 1);

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
