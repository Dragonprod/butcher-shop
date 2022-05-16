import { IconButton } from '@mui/material';
import React from 'react';
import styles from './UserItem.module.scss';
import CloseIcon from '@mui/icons-material/Close';

export default function UserItem({ userItem, handleDelete }) {
  return (
    <li className={styles.itemContainer}>
      <div>
        <h4>{userItem.id}</h4>
      </div>
      <div>
        <h4>{userItem.username}</h4>
      </div>
      <div>
        <h4>{userItem.email}</h4>
      </div>
      <div>
        <h4>{userItem.password.slice(0, 10)}...</h4>
      </div>
      <div>
        <h4>{userItem.orders.length}</h4>
      </div>
      <div>
        <h4>{userItem.roles[0].name}</h4>
      </div>
      <div>
        <IconButton aria-label='delete' onClick={handleDelete}>
          <CloseIcon color='error' />
        </IconButton>
      </div>
    </li>
  );
}
