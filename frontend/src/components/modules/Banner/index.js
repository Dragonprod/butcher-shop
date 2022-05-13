import styles from './Banner.module.scss';
import React from 'react';
import bannerImg from '../../../assets/images/banner.png';

export default function Banner() {
  return (
    <div className={styles.banner}>
      <div className={styles.textContainer}>
        <h1>
          Супер классная
          <br />
          мясная лавка
        </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </div>
      <img className={styles.bannerImg} src={bannerImg} alt='Meatballs' />
    </div>
  );
}
