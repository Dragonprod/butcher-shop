import { Button, TextField } from '@mui/material';
import React, { useState } from 'react';
import Modal from '../Modal';
import styles from './AddCategoryModal.module.scss';

export default function AddCategoryModal() {
  const [category, setCategory] = useState('');

  const handleCategoryChange = e => {
    setCategory(e.target.value);
  };

  return (
    <Modal>
      <div className={styles.mainGrid}>
        <TextField
          className={styles.login}
          onChange={handleCategoryChange}
          label='Логин'
          variant='outlined'
          required
          fullWidth
          margin='normal'
          sx={{
            '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline':
              {
                borderColor: '#ff683a',
              },
            '& .MuiOutlinedInput-root': {
              borderRadius: '12px',
            },
          }}
        />
        <Button
          className={styles.submit}
          type='submit'
          variant='contained'
          sx={{
            background: '#ff683a',
            marginTop: 5,
            '&.MuiButton-root.MuiButton-contained': {
              width: '100%',
              borderRadius: '30px',
              padding: '16px',
              textTransform: 'capitalize',
              fontSize: '16px',
              lineHeight: '145%',
            },
          }}>
          Войти
        </Button>
      </div>
    </Modal>
  );
}
