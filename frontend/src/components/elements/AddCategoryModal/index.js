import { Button, TextField } from '@mui/material';
import React, { useContext, useState } from 'react';
import { ADD_CATEGORY } from '../../../constants';
import { UIContext } from '../../../context/UIContext';
import Modal from '../Modal';
import styles from './AddCategoryModal.module.scss';

export default function AddCategoryModal() {
  const [category, setCategory] = useState('');
  const { adminModalType } = useContext(UIContext);

  const handleCategoryChange = e => {
    setCategory(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
  };

  return (
    <Modal>
      <div className={styles.mainGrid}>
        {adminModalType === ADD_CATEGORY ? (
          <form
            className={`${styles.form}`}
            autoComplete='off'
            onSubmit={handleSubmit}>
            <TextField
              className={styles.login}
              onChange={handleCategoryChange}
              label='Название категории'
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
              Создать
            </Button>
          </form>
        ) : (
          <form
            className={`${styles.form}`}
            autoComplete='off'
            onSubmit={handleSubmit}>
            <TextField
              className={styles.login}
              onChange={handleCategoryChange}
              label='Название продукта'
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
            <TextField
              className={styles.login}
              onChange={handleCategoryChange}
              label='Описание'
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
            <TextField
              className={styles.login}
              onChange={handleCategoryChange}
              label='URL изображения'
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
            <TextField
              className={styles.login}
              onChange={handleCategoryChange}
              label='Вес'
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
            <TextField
              className={styles.login}
              onChange={handleCategoryChange}
              label='Срок годности'
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
            <TextField
              className={styles.login}
              onChange={handleCategoryChange}
              label='Условия хранения'
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
            <TextField
              className={styles.login}
              onChange={handleCategoryChange}
              label='Состав'
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
            <TextField
              className={styles.login}
              onChange={handleCategoryChange}
              label='Категория'
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
            <TextField
              className={styles.login}
              onChange={handleCategoryChange}
              label='Цена'
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
              Создать
            </Button>
          </form>
        )}
      </div>
    </Modal>
  );
}
