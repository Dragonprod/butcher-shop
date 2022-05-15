import { Alert, AlertTitle, Snackbar, Button, TextField } from '@mui/material';
import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './AuthPage.module.scss';
import img1 from '../../../assets/images/login0.jpg';
import { AuthContext } from '../../../context';
import { AUTH_PAGE, LOGIN, REGISTER } from '../../../constants';
import Header from '../../../components/modules/Header';
import API from '../../../api';

export default function AuthPage() {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [passwordRepeat, setPasswordRepeat] = useState('');
  const [error, setError] = useState(false);
  const { setisAuth, setisAdmin, setUser, setapiToken } = useContext(AuthContext);
  const navigate = useNavigate();
  const [isLoginForm, setIsLoginForm] = useState(true);

  const toggleForm = formType => {
    if (formType === LOGIN) setIsLoginForm(true);
    if (formType === REGISTER) setIsLoginForm(false);
  };

  const handleLoginChange = e => {
    setLogin(e.target.value);
  };

  const handlePasswordChange = e => {
    setPassword(e.target.value);
  };

  const handleRepeatPasswordChange = e => {
    setPasswordRepeat(e.target.value);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setError(false);
  };

  const handleSubmit = async e => {
    e.preventDefault();

    if (isLoginForm) {
      const authData = {
        username: login,
        password: password,
      };

      try {
        const authResponse = await API.post(`/auth/login`, authData);
        const user = {
          id: authResponse.data.id,
          email: authResponse.data.email
        }
        authResponse.data.roles.forEach(role => {
          switch (role) {
            case "ROLE_ADMIN":
              setisAdmin(true);
              localStorage.setItem('isAdmin', 'true')
              break;
            case "ROLE_USER":
              setisAdmin(false);
              localStorage.setItem('isAdmin', 'false')
              break;
            default:
              setisAdmin(false);
              localStorage.setItem('isAdmin', 'false')
              break;
          }
        });
        setapiToken(authResponse.data.accessToken)
        setisAuth(true)
        setUser(user)
        localStorage.setItem('isAuth', 'true')
        localStorage.setItem('api_token', authResponse.data.accessToken)
        localStorage.setItem('user', JSON.stringify(user))
        navigate('/')
      }
      catch (err) {
        switch (err.response.data.status) {
          case 401:
            setError(true);
            console.log("Bad credentials")
            break;

          default:
            setError(true);
            break;
        }
      }
    }
    else {
      if (password === passwordRepeat) {
        const registerData = {
          username: login,
          email: `${login}@butcher.shop`,
          role: ["user"],
          password: password,
        }
        try {
          await API.post(`/auth/register`, registerData);
          setIsLoginForm(true);
        }
        catch (err) {
          switch (err.response.data.status) {
            case 401:
              setError(true);
              console.log("Bad credentials")
              break;

            default:
              setError(true);
              break;
          }
        }
      }
      else {
        setError(true);
      }
    }
  };

  return (
    <>
      <Header page={AUTH_PAGE} />
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
                  onClick={() => toggleForm(LOGIN)}>
                  Вход
                </h2>
                <h2
                  className={`${!isLoginForm && styles.active}`}
                  onClick={() => toggleForm(REGISTER)}>
                  Регистрация
                </h2>
              </div>
              <p className={styles.tip}>
                Авторизируйтесь, чтобы иметь доступ <br /> к аккаунту и
                использовать корзину
              </p>
            </div>
            <form
              className={`${styles.form} ${styles.loginForm} ${isLoginForm && styles.active
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
                    textTransform: 'capitalize',
                    fontSize: '16px',
                    lineHeight: '145%',
                  },
                }}>
                Войти
              </Button>
            </form>

            <form
              className={`${styles.form} ${styles.registerForm} ${!isLoginForm && styles.active
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
                onChange={handleRepeatPasswordChange}
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
                    textTransform: 'capitalize',
                    fontSize: '16px',
                    lineHeight: '145%',
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
    </>
  );
}
