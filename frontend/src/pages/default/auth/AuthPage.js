import { Alert, AlertTitle, Snackbar, Button, TextField } from '@mui/material';
import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './AuthPage.module.scss';
import img1 from '../../../assets/images/login0.jpg';
import { AuthContext } from '../../../context';

export default function AuthPage() {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const { setisAuth } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLoginChange = e => {
    setLogin(e.target.value);
  }

  const handlePasswordChange = e => {
    setPassword(e.target.value);
  }

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setError(false);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (login === "1" && password === "1") {
      localStorage.setItem('isAuth', 'true');
      setisAuth(true);
      navigate('/');
    }
    else {
      setError(true);
    }

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
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        open={error}
        autoHideDuration={3000}
        onClose={handleClose}
      >
        <Alert
          severity="error"
          onClose={handleClose}
          sx={{ width: "100%" }}
        >
          <AlertTitle>Ошибка</AlertTitle>
          Проверьте — <strong>логин или пароль!</strong>
        </Alert>
      </Snackbar>
    </section>
  );
}
