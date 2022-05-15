import { Avatar, Button, TextField } from '@mui/material';
import React, { useEffect, useState } from 'react';
import styles from './OrdersTableBlock.module.scss';

export default function OrdersTableBlock() {
  const [login, setLogin] = useState('user@mail.ru');
  const [password, setPassword] = useState('123456');

  useEffect(() => {
    // TODO: Fetch Data
  }, []);

  const handleLoginChange = e => {
    setLogin(e.target.value);
  };

  const handlePasswordChange = e => {
    setPassword(e.target.value);
  };

  const handleSubmit = async e => {
    e.preventDefault();
  };

  return (
    <div>
      <h2 className={styles.title}>Заказы</h2>
      <div className={styles.block}>
        <div className={styles.avatarContainer}></div>
        <div className={styles.infoContainer}>
          <form
            className={`${styles.form}`}
            autoComplete='off'
            onSubmit={handleSubmit}>
            <Button
              className={styles.submit}
              type='submit'
              variant='contained'
              sx={{
                background: '#ff683a',
                marginTop: 5,
                '&.MuiButton-root.MuiButton-contained': {
                  // width: '100%',
                  borderRadius: '12px',
                  padding: '16px',
                  textTransform: 'capitalize',
                  fontSize: '16px',
                  lineHeight: '145%',
                },
              }}>
              Редактировать
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
