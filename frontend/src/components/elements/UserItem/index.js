import { IconButton } from '@mui/material';
import React from 'react';
import styles from './UserItem.module.scss';
import CloseIcon from '@mui/icons-material/Close';

export default function UserItem({ userItem }) {
  const handleDelete = () => {};

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
        <h4>{userItem.orderAmount ? userItem.orderAmount : '-'}</h4>
      </div>
      <div>
        <h4>{userItem.role}</h4>
      </div>
      <div>
        <IconButton aria-label='delete' onClick={handleDelete}>
          <CloseIcon color='error' />
        </IconButton>
      </div>
    </li>
  );
}
