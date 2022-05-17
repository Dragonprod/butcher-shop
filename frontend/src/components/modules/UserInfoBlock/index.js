import { Avatar, Button, TextField } from '@mui/material';
import React, { useEffect, useState } from 'react';
import styles from './UserInfoBlock.module.scss';
import parseJwt from '../../../service/index';

export default function UserInfoBlock() {
  const [login, setLogin] = useState('');
  const [id, setId] = useState('');

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'))
    setLogin("Email: " + user.email)
    setId("ID:" + user.id)
  }, []);

  return (
    <div>
      <h2 className={styles.title}>Личные данные</h2>
      <div className={styles.block}>
        <div className={styles.avatarContainer}>
          <Avatar sx={{ width: 150, height: 150, fontSize: 40 }}>H</Avatar>
        </div>
        <div className={styles.infoContainer}>
          <form
            className={`${styles.form}`}
            autoComplete='off'>
            <h1 className={styles.password}>{id}</h1>
            <h1 className={styles.login}>{login}</h1>
          </form>
        </div>
      </div>
    </div>
  );
}
