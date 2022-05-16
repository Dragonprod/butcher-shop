import React, { useState } from 'react';
import { defaultUsers } from '../../../temp';
import UserItem from '../../elements/UserItem';
import styles from './UsersTable.module.scss';

export default function UsersTable() {
  const [users, setUsers] = useState(defaultUsers);

  return (
    <>
      {/* <h2 className={styles.title}>Незавершённые заказы</h2> */}
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
