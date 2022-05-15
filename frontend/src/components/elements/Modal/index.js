import React, { useContext } from 'react';
import { UIContext } from '../../../context/UIContext';
import styles from './Modal.module.scss';

export default function Modal({ children }) {
  const { modalActive: active, setModalActive: setActive } =
    useContext(UIContext);

  return (
    <div
      className={
        active ? styles.popupDarkBackgroundActive : styles.popupDarkBackground
      }
      onClick={() => setActive(false)}>
      <div
        className={active ? styles.modalContentActive : styles.modalContent}
        onClick={e => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
}
