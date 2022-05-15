import { Alert, AlertTitle } from '@mui/material';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UIContext } from '../../../context/UIContext';
import Modal from '../Modal';
import styles from './AlertModal.module.scss';

export default function AlertModal() {
  const { setModalActive } = useContext(UIContext);

  const handleAlertModal = () => {
    setModalActive(false);
  };

  return (
    <Modal>
      <div className={styles.mainGrid}>
        <Alert severity='success'>
          <AlertTitle>
            <strong>Заказ отправлен</strong>
          </AlertTitle>
          В течение минуты с Вами свяжется наш менеджер
        </Alert>
        <div className={styles.buttonsContainer}>
          <button className={styles.accentButton} onClick={handleAlertModal}>
            Закрыть
          </button>
          <Link
            to='/'
            className={styles.accentButton}
            onClick={handleAlertModal}>
            Главная
          </Link>
        </div>
      </div>
    </Modal>
  );
}
