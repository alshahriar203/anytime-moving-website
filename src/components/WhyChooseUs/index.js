import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import styles from './index.module.scss';

function WhyChooseUs(props) {
  return (
    <section id="whyus-section"className={cn(styles.whyChooseUsSection, props.className, 'why-choose-us')}>
      {/* Why Choose Us Section */}

      <div className={styles.contentContainer}>
        <div className={styles.descriptionColumn}>
          <div className={styles.titleContainer}>
            <p className={styles.sectionTitle}>Why Choose Us</p>
          </div>

          <div className={styles.descriptionContainer}>
            <p className={styles.sectionDescription}>
              With years of experience, a dedicated team, and a commitment to customer satisfaction, we offer
              hassle-free moving solutions that prioritize your peace of mind. From packing to transport, we handle
              every detail with care and professionalism. Trust us to make your move smooth and stress-free!
            </p>
          </div>
        </div>

        <div className={styles.featuresColumn}>
          {/* Features List */}

          <div className={styles.featureItem}>
            <img className={styles.featureIcon} src={'/assets/briefcase-solid-blue.svg'} alt="alt text" />
            <figcaption className={styles.featureText}>Experienced Professional</figcaption>
          </div>

          <div className={styles.featureItem}>
            <img className={styles.featureIcon} src={'/assets/clock-regular-blue.svg'} alt="alt text" />
            <figcaption className={styles.featureText}>Flexible Scheduling and Timely Delivery</figcaption>
          </div>

          <div className={styles.featureItem}>
            <img className={styles.featureIcon} src={'/assets/wrench-blue.svg'} alt="alt text" />
            <figcaption className={styles.featureText}>Custom Moving Solution</figcaption>
          </div>

          <div className={styles.featureItem}>
            <img className={styles.featureIcon} src={'/assets/lock-solid-blue.svg'} alt="alt text" />
            <figcaption className={styles.featureText}>Safe and Secure Handling</figcaption>
          </div>

          <div className={styles.featureItem}>
            <img className={styles.featureIcon} src={'/assets/dollar-sign-solid-blue.svg'} alt="alt text" />
            <figcaption className={styles.featureText1}>Affordable Rates</figcaption>
          </div>
        </div>
      </div>
    </section>
  );
}

WhyChooseUs.propTypes = {
  className: PropTypes.string
};

export default WhyChooseUs;
