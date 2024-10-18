import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import styles from './index.module.scss';

function Services(props) {
  return (
    <section className={cn(styles.servicesSection, props.className, 'services')}>
      {/* Services overview section */}

      <div className={styles.servicesContainer}>
        <div className={styles.titleContainer}>
          <p className={styles.sectionTitle}>Our Services</p>
        </div>

        <div className={styles.servicesList}>
          {/* List of service offerings */}

          <article className={styles.serviceCard}>
            <img className={styles.serviceIcon} src={'/assets/9b134b1c85975b97b36c9c626bd770a2.svg'} alt="alt text" />

            <div className={styles.serviceDetails}>
              <div className={styles.serviceTitleContainer}>
                <p className={styles.serviceTitle}>Residential Moving</p>
              </div>

              <div className={styles.serviceDescriptionContainer}>
                <p
                  className={
                    styles.serviceDescription
                  }>{`We offer safe and reliable moving services for homes, whether it's a local move or long distance.`}</p>
              </div>
            </div>
          </article>

          <article className={styles.serviceCard1}>
            <img className={styles.serviceIcon} src={'/assets/fc2f5faa6286804d8d8ed7eed9c138a5.png'} alt="alt text" />

            <div className={styles.serviceDetails1}>
              <div className={styles.serviceTitleContainer}>
                <p className={styles.serviceTitle1}>Commercial Moving</p>
              </div>

              <div className={styles.serviceDescriptionContainer}>
                <p className={styles.serviceDescription}>
                  Expert commercial moving services for offices and businesses, ensuring minimal downtime.
                </p>
              </div>
            </div>
          </article>

          <article className={styles.serviceCard}>
            <img className={styles.serviceIcon} src={'/assets/ffaf13d4ff44c298bf37558665bed35b.png'} alt="alt text" />

            <div className={styles.serviceDetails}>
              <div className={styles.serviceTitleContainer}>
                <p className={styles.serviceTitle2}>Handle With Care</p>
              </div>

              <div className={styles.serviceDescriptionContainer}>
                <p className={styles.serviceDescription}>
                  Specialized services for moving delicate and valuable items, like pianos and antiques.
                </p>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

Services.propTypes = {
  className: PropTypes.string
};

export default Services;
