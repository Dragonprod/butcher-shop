import React from 'react';
import styles from './Footer.module.scss';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      {new Date().getFullYear()}© Butcher Shop. ALL RIGHTS RESERVED
    </footer>
  );
}
