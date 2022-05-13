import { Button, TextField } from '@mui/material';
import React, { useState } from 'react';
import styles from './AuthPage.module.scss';

export default function AuthPage() {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit() {
    console.log(login, password);
  }

  return (
    <section className={styles.mainGrid}>
      <div className={styles.imgContainer}>Photo</div>
      <div className={styles.formContainer}>
        <form autoComplete='off' onSubmit={handleSubmit}>
          <TextField
            className={styles.login}
            onChange={e => setLogin(e.target.value)}
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
            onChange={e => setPassword(e.target.value)}
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
