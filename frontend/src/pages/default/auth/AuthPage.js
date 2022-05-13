import { TextField } from '@mui/material';
import React from 'react';
import styles from './AuthPage.module.scss';

export default function AuthPage() {
  return (
    <section className={styles.mainGrid}>
      <div className={styles.imgContainer}>Photo</div>
      <div className={styles.formContainer}>
        <form autoComplete='off'>
          <TextField
            label='Логин'
            variant='outlined'
            required
            fullWidth
            margin='normal'
          />
          <TextField
            label='Пароль'
            variant='outlined'
            type='password'
            required
            fullWidth
            margin='normal'
          />
        </form>
      </div>
    </section>
  );
}
