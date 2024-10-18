import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import OverallReview from '../OverallReview';
import styles from './index.module.scss';

// ReviewCard component
function ReviewCard({ userName, reviewTime, userAvatar, reviewText, ratingStars, moreOptionsIcon }) {
  return (
    <article className={styles.reviewCard}>
      <div className={styles.reviewContent}>
        <div className={styles.reviewHeader}>
          <div className={styles.userInfo}>
            <img className={styles.userAvatar} src={userAvatar} alt={`${userName}'s avatar`} />

            <div className={styles.userDetails}>
              <p className={styles.userName}>{userName}</p>
              <p className={styles.reviewTime}>{reviewTime}</p>
            </div>
          </div>

          <img className={styles.moreOptionsBtn} src={moreOptionsIcon} alt="More options" />
        </div>

        <div className={styles.ratingStars}>
          {Array(ratingStars)
            .fill(0)
            .map((_, index) => (
              <img
                key={index}
                className={styles.starIcon}
                src={'/assets/036dbf9383b24d2342cd1672b944bfd3.svg'}
                alt="star"
              />
            ))}
        </div>

        <p className={styles.reviewText}>{reviewText}</p>
      </div>
    </article>
  );
}

ReviewCard.propTypes = {
  userName: PropTypes.string.isRequired,
  reviewTime: PropTypes.string.isRequired,
  userAvatar: PropTypes.string.isRequired,
  reviewText: PropTypes.string.isRequired,
  ratingStars: PropTypes.number.isRequired,
  moreOptionsIcon: PropTypes.string.isRequired,
};

// ReviewSection component
function ReviewSection(props) {
  const reviews = [
    {
      userName: 'Conor Lansdale',
      reviewTime: '8 hours ago',
      userAvatar: '/assets/a14ebde15a80c6dcd89c0ca448413ef2.png',
      reviewText:
        'Bruce (great driver), but wished the inventory was recorded in a digital format so it would be easier to complete upon delivery and for expense reporting.',
      ratingStars: 5,
      moreOptionsIcon: '/assets/9fe4bcfbeb3e7f5d095c67e6f7a1e46d.svg',
    },
    {
      userName: 'Conor Lansdale',
      reviewTime: '8 hours ago',
      userAvatar: '/assets/a14ebde15a80c6dcd89c0ca448413ef2.png',
      reviewText:
        'Bruce (great driver), but wished the inventory was recorded in a digital format so it would be easier to complete upon delivery and for expense reporting.',
      ratingStars: 5,
      moreOptionsIcon: '/assets/44c65ea09dc1bd87d57e0390eb4b6097.svg',
    },
    {
      userName: 'Conor Lansdale',
      reviewTime: '8 hours ago',
      userAvatar: '/assets/a14ebde15a80c6dcd89c0ca448413ef2.png',
      reviewText:
        'Bruce (great driver), but wished the inventory was recorded in a digital format so it would be easier to complete upon delivery and for expense reporting.',
      ratingStars: 5,
      moreOptionsIcon: '/assets/9f4943c0d93a1fb20d42d7a35ff289cf.svg',
    },
  ];

  return (
    <section id="review-section" className={cn(styles.reviewsSection, props.className, 'review-section')}>
      {/* Customer reviews section */}

      <div className={styles.titleContainer}>
        <p className={styles.sectionTitle}>Our Clients’ Satisfaction Comes First</p>
      </div>

      <OverallReview />

      <div className={styles.reviewsContainer}>
        {/* Render review cards using ReviewCard component */}
        {reviews.map((review, index) => (
          <ReviewCard
            key={index}
            userName={review.userName}
            reviewTime={review.reviewTime}
            userAvatar={review.userAvatar}
            reviewText={review.reviewText}
            ratingStars={review.ratingStars}
            moreOptionsIcon={review.moreOptionsIcon}
          />
        ))}
      </div>
    </section>
  );
}

ReviewSection.propTypes = {
  className: PropTypes.string,
};

export default ReviewSection;
