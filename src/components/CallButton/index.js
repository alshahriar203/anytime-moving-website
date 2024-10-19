'use client'
import React from 'react';
import styles from './index.module.scss';

function CallButton() {
  return (
        <button className={styles.quoteBtn} onClick={() => {
          window.location.href = 'tel:9029438989';
            }}> 
            <img className={styles.phoneIcon} src={'/assets/black-phone.svg'} alt="phone" />
            <p className={styles.phoneNumber}>9029438989</p>
        </button>
  );
}

export default CallButton;
