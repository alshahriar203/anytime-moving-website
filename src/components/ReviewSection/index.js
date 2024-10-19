import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import styles from './index.module.scss';


// OverallReview component
function OverallReview() {
  return (
    <section className={cn(styles.ratingContainer, 'overall-review')}>
      <h2 className={styles.ratingTitle}>Excellent</h2>
      <img className={styles.ratingIcon} src={'/assets/yellow-stars-rating.svg'} alt="rating-stars" />
      <p className={styles.reviewSummary_box}>
        <span className={styles.reviewSummary}>
          <span className={styles.reviewSummary_span0}>Based on </span>
          <span className={styles.reviewSummary_span1}>150 reviews</span>
        </span>
      </p>
      <img className={styles.starRatingImage} src={'/assets/google.svg'} alt="Google" />
    </section>
  );
}



// ReviewCard component
function ReviewCard({ userName, reviewTime, userAvatar, reviewText, ratingStars}) {
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

          <img className={styles.moreOptionsBtn} src={'/assets/green-star.svg'} alt="More options" />
        </div>

        <div className={styles.ratingStars}>
          {Array(ratingStars)
            .fill(0)
            .map((_, index) => (
              <img
                key={index}
                className={styles.starIcon}
                src={'/assets/blue-star.svg'}
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
      userAvatar: '/assets/avatar-example.png',
      reviewText:
        'Bruce (great driver), but wished the inventory was recorded in a digital format so it would be easier to complete upon delivery and for expense reporting.',
      ratingStars: 5,
    },
    {
      userName: 'Conor Lansdale',
      reviewTime: '8 hours ago',
      userAvatar: '/assets/avatar-example.png',
      reviewText:
        'Bruce (great driver), but wished the inventory was recorded in a digital format so it would be easier to complete upon delivery and for expense reporting.',
      ratingStars: 5,
    },
    {
      userName: 'Conor Lansdale',
      reviewTime: '8 hours ago',
      userAvatar: '/assets/avatar-example.png',
      reviewText:
        'Bruce (great driver), but wished the inventory was recorded in a digital format so it would be easier to complete upon delivery and for expense reporting.',
      ratingStars: 5,
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
