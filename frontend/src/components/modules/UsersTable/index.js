import React, { useContext, useState } from 'react';
import { UIContext } from '../../../context/UIContext';
import { defaultUsers } from '../../../temp';
import UserItem from '../../elements/UserItem';
import styles from './UsersTable.module.scss';

export default function UsersTable() {
  const [users, setUsers] = useState(defaultUsers);

  const handleDelete = id => {};

  const handleAlertModal = async e => {};

  return (
    <>
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
            <UserItem key={user.id} userItem={user} />
          ))}
        </ul>
      ) : (
        <>
          <h2 className={styles.emptyCartTitle}>Нет записей</h2>
        </>
      )}
    </>
  );
}
