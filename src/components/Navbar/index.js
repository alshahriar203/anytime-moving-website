'use client'
import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import styles from './index.module.scss';

function Navbar(props) {
  return (
    <section className={cn(styles.headerSection, props.className, 'navbar')}>
      {/* Header section with navigation and contact information */}

      <div className={styles.headerContent}>
      <img className={styles.logo} src={'/assets/anytime-moving-logo.png'} alt="anytime moving logo" />

        <nav className={styles.navigationMenu}>
          {/* Main navigation menu */}

          <div className={styles.navItem}>
            <a className={styles.navLink} href="#process-section">Services</a>
          </div>

          <div className={styles.navItem1}>
            <a className={styles.navLink} href="#whyus-section">Why Us</a>
          </div>

          <div className={styles.navItem2}>
            <a className={styles.navLink} href="#review-section">Reviews</a>
          </div>
        </nav>

        
        <div className={styles.contactInfo}>
        <button className={styles.quoteBtn} onClick={() => {
          window.location.href = 'tel:9029438989';
        }}>
          <div className={styles.phoneContainer}>
            <img className={styles.phoneIcon} src={'/assets/black-phone.svg'} alt="phone" />
            <p className={styles.phoneNumber}>(+880) 01730854112</p>
          </div>
        </button>
        </div>
      </div>
    </section>
  );
}

Navbar.propTypes = {
  className: PropTypes.string
};

export default Navbar;
