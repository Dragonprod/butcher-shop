import { Button } from '@mui/material';
import React, { useContext } from 'react';
import { ADD_CATEGORY, ADD_PRODUCT } from '../../../constants';
import { UIContext } from '../../../context/UIContext';
import styles from './AdminToolsBlock.module.scss';

export default function AdminToolsBlock() {
  const { setModalActive } = useContext(UIContext);

  const handleProductModal = type => {
    if (type === ADD_CATEGORY) return;
    if (type === ADD_PRODUCT) return;
    setModalActive(true);
  };

  return (
    <div className={styles.block}>
      <h2 className={styles.title}>Опции</h2>
      <div className={styles.buttonsBlock}>
        <Button
          className={styles.submit}
          variant='contained'
          onClick={() => handleProductModal(ADD_CATEGORY)}
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
          onClick={() => handleProductModal(ADD_PRODUCT)}
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
