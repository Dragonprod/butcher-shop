import React, { useContext, useState } from 'react';
import { UIContext } from '../../../context/UIContext';
import { defaultUsers } from '../../../temp';
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
            <h3>Фото</h3>
            <h3>Описание</h3>
            <h3>Цена</h3>
            <h3>Количество</h3>
            <h3>Сумма</h3>
          </div>
          {users.map(user => (
            <div></div>
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
