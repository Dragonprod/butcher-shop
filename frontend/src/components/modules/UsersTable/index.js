import React, { useEffect, useState } from 'react';
import { defaultUsers } from '../../../temp';
import UserItem from '../../elements/UserItem';
import styles from './UsersTable.module.scss';
import API from '../../../api';

export default function UsersTable() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getUsersData = async e => {
      try {
        const usersResponse = await API.get(`/users`);
        setUsers(usersResponse.data);
      }
      catch (err) {
        console.log(err.response)
      }
    };
    getUsersData();
  }, [])

  const handleDelete = async id => {
    try {
      await API.delete(`/users/${id}`);
      setUsers(users.filter(item => item.id !== id));
    }
    catch (err) {
      console.log(err.response)
    }
  }
  return (
    <>
      <div className={styles.tableContainer}>
        <h2 className={styles.title}>Пользователи</h2>
        {users.length > 0 ? (
          <ul className={styles.table}>
            <div className={styles.tableHeader}>
              <h3>ID</h3>
              <h3>Логин</h3>
              <h3>Почта</h3>
              <h3>Пароль</h3>
              <h3>Кол-во заказов</h3>
              <h3>Роль</h3>
            </div>
            {users.map(user => (
              <UserItem key={user.id} userItem={user} handleDelete={() => handleDelete(user.id)}/>
            ))}
          </ul>
        ) : (
          <>
            <h2 className={styles.emptyCartTitle}>Нет записей</h2>
          </>
        )}
      </div>
    </>
  );
}
