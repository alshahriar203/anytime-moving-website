'use client'
import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import CallButton from '../CallButton';
import styles from './index.module.scss';

function FooterFinal(props) {
  return (
    <section className={cn(styles.movingCompanySection, props.className, 'footer-final')}>
      {/* Main section for moving company information */}

      <div className={styles.contentWrapper}>
        <div className={styles.mainContent}>
          <div className={styles.companyInfo}>
            <img className={styles.logo} src={'/assets/anytime-moving-logo.png'} alt="anytime moving logo" />
            <CallButton/>
              
            {/* <button className={styles.contactBtn}>
                <span className={styles.contactBtnText}>Get Quote</span>
            </button> */}
          </div>
        

          <div className={styles.descriptionContainer}>
            <p className={styles.companyDescription}>
            Your trusted moving company based in Halifax, Nova Scotia. We specialize in residential and commercial moves, ensuring a stress-free and seamless relocation experience with expert care and attention to detail.
            </p>
          </div>

          <nav className={styles.navigationMenu}>
            {/* Navigation menu */}
            <p className={styles.menuTitle}>Menu</p>
            <a className={styles.menuItem} href="#whyus-section">Why Choose Us</a>
            <a className={styles.menuItem} href="#process-section">Our Services</a>
            <a className={styles.menuItem} href="#review-section">Customer Review</a>
          </nav>
        </div>

        <p className={styles.copyrightInfo}>
          © 2024 All Rights Reserved. Anytime Moving Inc.
        </p>
      </div>
    </section>
  );
}

FooterFinal.propTypes = {
  className: PropTypes.string
};

export default FooterFinal;
