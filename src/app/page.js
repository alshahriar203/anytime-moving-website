// app/page.js
import React from 'react';
import HeroSection from '../components/HeroSection';
import WhyChooseUs from '../components/WhyChooseUs';
import HowWeWork from '../components/HowWeWork';
import ReviewSection from '../components/ReviewSection';
import cn from 'classnames';
import styles from './page.module.scss'; // Landing page-specific styles
import '../styles/common.css';
import '../styles/fonts.css';
// import FooterFinal from '../components/FooterFinal';
// import Navbar from '../components/Navbar';


export default function LandingPage(props) {

  return (
    <div className={cn(styles.root, props.className, 'landing-page')}>
      <HeroSection />
      <WhyChooseUs />
      <HowWeWork />
      <ReviewSection />
    </div>
  );
}
