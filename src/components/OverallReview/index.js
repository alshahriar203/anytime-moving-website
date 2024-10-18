import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import styles from './index.module.scss';

function OverallReview(props) {
  return (
    <section className={cn(styles.ratingContainer, props.className, 'overall-review')}>
      <h2 className={styles.ratingTitle}>Excellent</h2>
      <img className={styles.ratingIcon} src={'/assets/e901cc3f26bf139c376bce2af137e1ea.svg'} alt="alt text" />
      <p className={styles.reviewSummary_box}>
        <span className={styles.reviewSummary}>
          <span className={styles.reviewSummary_span0}>Based on </span>
          <span className={styles.reviewSummary_span1}>150 reviews</span>
        </span>
      </p>
      <img className={styles.starRatingImage} src={'/assets/d74b87527f5df90db221f95facc609ac.svg'} alt="alt text" />
    </section>
  );
}

OverallReview.propTypes = {
  className: PropTypes.string
};

export default OverallReview;
