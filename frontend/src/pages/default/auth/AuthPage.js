import { Button, TextField } from '@mui/material';
import React, { useState } from 'react';
import styles from './AuthPage.module.scss';
import img1 from '../../../assets/images/login0.jpg';

export default function AuthPage() {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  const handleLoginChange = e => {
    setLogin(e.target.value);
  }
  const handlePasswordChange = e => {
    setPassword(e.target.value);
  }

  function handleSubmit() {
    console.log(login, password);
  }

  return (
    <section className={styles.mainGrid}>
      <div className={styles.imgContainer}>
        <img src={img1} alt='Meat' />
      </div>
      <div className={styles.formContainer}>
        <h2>Вход в Аккаунт</h2>
        <form autoComplete='off' onSubmit={handleSubmit}>
          <TextField
            className={styles.login}
            onChange={handleLoginChange}
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
            }}
          />
          <TextField
            className={styles.password}
            onChange={handlePasswordChange}
            label='Пароль'
            variant='outlined'
            type='password'
            required
            fullWidth
            margin='normal'
            sx={{
              '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline':
              {
                borderColor: '#ff683a',
              },
            }}
          />
          <Button
            className={styles.submit}
            type='submit'
            variant='contained'
            sx={{ background: '#ff683a', marginTop: 5 }}>
            Войти
          </Button>
        </form>
      </div>
    </section>
  );
}
