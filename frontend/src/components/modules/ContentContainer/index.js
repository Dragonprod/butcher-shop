import React from 'react';
import styles from './Banner.module.scss';

export default function ContentContainer({ children }) {
  return <div className={styles.container}>{children}</div>;
}
