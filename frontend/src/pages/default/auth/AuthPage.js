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
  const [isLoginForm, setIsLoginForm] = useState(true);

  const toggleForm = () => {};

  const handleLoginChange = e => {
    setLogin(e.target.value);
  };

  const handlePasswordChange = e => {
    setPassword(e.target.value);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setError(false);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (login === '1' && password === '1') {
      localStorage.setItem('isAuth', 'true');
      setisAuth(true);
      navigate('/');
    } else {
      setError(true);
    }
  };

  return (
    <section className={styles.mainGrid}>
      <div className={styles.imgColumnContainer}>
        <img src={img1} alt='Meat' />
      </div>
      <div className={styles.formColumnContainer}>
        <div className={styles.formContainer}>
          <div>
            <div className={styles.titlesContainer}>
              <h2
                className={`${isLoginForm && styles.active}`}
                onClick={() => setIsLoginForm(true)}>
                Вход
              </h2>
              <h2
                className={`${!isLoginForm && styles.active}`}
                onClick={() => setIsLoginForm(false)}>
                Регистрация
              </h2>
            </div>
            <p className={styles.tip}>
              Авторизируйтесь, чтобы иметь доступ <br /> к аккаунту и
              использовать корзину
            </p>
          </div>

          {/* 
            // * Login Form
          */}
          <form
            className={`${styles.form} ${styles.loginForm} ${
              isLoginForm && styles.active
            }`}
            autoComplete='off'
            onSubmit={handleSubmit}>
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
                '& .MuiOutlinedInput-root': {
                  borderRadius: '12px',
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
                },
              }}>
              Войти
            </Button>
          </form>

          {/* 
            // * Register Form
          */}
          <form
            className={`${styles.form} ${styles.registerForm} ${
              !isLoginForm && styles.active
            }`}
            autoComplete='off'
            onSubmit={handleSubmit}>
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
                '& .MuiOutlinedInput-root': {
                  borderRadius: '12px',
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
                '& .MuiOutlinedInput-root': {
                  borderRadius: '12px',
                },
              }}
            />
            <TextField
              className={styles.password}
              onChange={handlePasswordChange}
              label='Повторите пароль'
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
                },
              }}>
              Зарегистрироваться
            </Button>
          </form>
        </div>
      </div>
      <Snackbar
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={error}
        autoHideDuration={3000}
        onClose={handleClose}>
        <Alert severity='error' onClose={handleClose} sx={{ width: '100%' }}>
          <AlertTitle>Ошибка</AlertTitle>
          Проверьте — <strong>логин или пароль!</strong>
        </Alert>
      </Snackbar>
    </section>
  );
}
