import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import styles from './index.module.scss';

function HowWeWork(props) {
  return (
    <section id="process-section" className={cn(styles.workProcessSection, props.className, 'how-we-work')}
    style={{ '--src': `url(/assets/work2.jpg)` }}>
      {/* Work Process Overview */}

      <div className={styles.processContainer}>
        <div className={styles.sectionTitle}>
          <p className={styles.sectionHeading}>Our Services</p>
          <div className={styles.descriptionWrapper}>
            <p
              className={
                styles.serviceDetails
              }>{`Tailored solutions to meet your unique needs. Explore the wide range of services we offer to help your business thrive.`}</p>
          </div>
        </div>
        {/* <div className={styles.descriptionWrapper}>
            <p
              className={
                styles.serviceDetails
              }>{`Whether you're moving across town or across the country, our expert team ensures a seamless, stress-free experience. We handle your belongings with care, so you can focus on settling into your new home. Get a free quote today and make your move with confidence.`}</p>
          </div> */}

        <div className={styles.processStepsGrid}>
          {/* Grid of work process steps */}

          <article className={styles.stepItem}>
            <div className={styles.stepNumberBox}>
              <p className={styles.stepNumber}>1</p>
            </div>

            <div className={styles.stepDetails}>
              <p className={styles.stepTitle}>Service</p>
              <p className={styles.stepDescription}>Service Description. This text describes the business step</p>
            </div>
          </article>

          <article className={styles.stepItem1}>
            <div className={styles.stepNumberBox}>
              <p className={styles.stepNumber}>2</p>
            </div>

            <div className={styles.stepDetails1}>
              <p className={styles.stepTitle}>Service</p>
              <p className={styles.stepDescription}>Service Description. This text describes the business step</p>
            </div>
          </article>

          <article className={styles.stepItem1}>
            <div className={styles.stepNumberBox}>
              <p className={styles.stepNumber}>3</p>
            </div>

            <div className={styles.stepDetails}>
              <p className={styles.stepTitle}>Service</p>
              <p className={styles.stepDescription}>Service Description. This text describes the business step</p>
            </div>
          </article>

          <article className={styles.stepItem2}>
            <div className={styles.stepNumberBox}>
              <p className={styles.stepNumber}>4</p>
            </div>

            <div className={styles.stepDetails1}>
              <p className={styles.stepTitle}>Service</p>
              <p className={styles.stepDescription}>Service Description. This text describes the business step</p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

HowWeWork.propTypes = {
  className: PropTypes.string
};

export default HowWeWork;
