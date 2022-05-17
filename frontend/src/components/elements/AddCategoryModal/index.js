import { Button, TextField } from '@mui/material';
import React, { useContext, useState } from 'react';
import { ADD_CATEGORY } from '../../../constants';
import { UIContext } from '../../../context/UIContext';
import Modal from '../Modal';
import styles from './AddCategoryModal.module.scss';
import API from '../../../api';

export default function AddCategoryModal() {
  const [category, setCategory] = useState('');
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [photoUrl, setPhotoUrl] = useState('');
  const [weight, setWeight] = useState(0);
  const [expirationDate, setExpirationDate] = useState(0);
  const [storageConditions, setStorageConditions] = useState('');
  const [composition, setComposition] = useState('');
  const [price, setPrice] = useState(0);
  const { adminModalType, setModalActive } = useContext(UIContext);

  const handleCategoryChange = e => {
    setCategory(e.target.value);
  };

  const handleNameChange = e => {
    setName(e.target.value);
  };

  const handleDescriptionChange = e => {
    setDescription(e.target.value);
  };

  const handlePhotoUrlChange = e => {
    setPhotoUrl(e.target.value);
  };

  const handleWeightChange = e => {
    setWeight(e.target.value);
  };

  const handleExpirationDateChange = e => {
    setExpirationDate(e.target.value);
  };

  const handleStorageConditionsChange = e => {
    setStorageConditions(e.target.value);
  };

  const handleCompositionChange = e => {
    setComposition(e.target.value);
  };

  const handlePriceChange = e => {
    setPrice(e.target.value);
  };

  const handleSubmit = async e => {
    e.preventDefault();
    if(adminModalType === ADD_CATEGORY) {
      try {
        const categoryData = {
          name: category
        }
        await API.post(`/categories`, categoryData);
        setModalActive(false);
      } catch (err) {
        console.log(err.response);
      }
    }
    else {
      try {
        const productData = {
          name: name,
          description: description,
          photoUrl: photoUrl,
          weight: weight,
          expirationDate: expirationDate,
          storageConditions: storageConditions,
          composition: composition,
          category: category,
          price: price
        }
        await API.post(`/products`, productData);
        setModalActive(false);
      } catch (err) {
        console.log(err.response);
      }
    }
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
              onChange={handleNameChange}
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
              onChange={handleDescriptionChange}
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
              onChange={handlePhotoUrlChange}
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
              onChange={handleWeightChange}
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
              onChange={handleExpirationDateChange}
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
              onChange={handleStorageConditionsChange}
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
              onChange={handleCompositionChange}
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
              onChange={handlePriceChange}
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
