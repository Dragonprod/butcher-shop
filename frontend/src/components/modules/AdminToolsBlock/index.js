import { Button } from '@mui/material';
import React from 'react';
import styles from './AdminToolsBlock.module.scss';

export default function AdminToolsBlock() {
  return (
    <div className={styles.block}>
      <h2 className={styles.title}>Опции</h2>
      <div className={styles.buttonsBlock}>
        <Button
          className={styles.submit}
          variant='contained'
          sx={{
            background: '#ff683a',
            marginTop: 5,
            '&.MuiButton-root.MuiButton-contained': {
              // width: '100%',
              margin: 0,
              borderRadius: '12px',
              padding: '16px',
              textTransform: 'capitalize',
              fontSize: '16px',
              lineHeight: '145%',
            },
          }}>
          Добавить категорию
        </Button>
        <Button
          className={styles.submit}
          variant='contained'
          sx={{
            background: '#ff683a',
            marginTop: 5,
            '&.MuiButton-root.MuiButton-contained': {
              // width: '100%',
              margin: 0,
              borderRadius: '12px',
              padding: '16px',
              textTransform: 'capitalize',
              fontSize: '16px',
              lineHeight: '145%',
            },
          }}>
          Добавить продукт
        </Button>
      </div>
    </div>
  );
}
