import React from 'react';
import styles from "./Feature.module.css";
import Navbar from '@/components/Navbar/Navabr';
import Footer from '@/components/Footer/Footer';

function Features() {
  return (
    <div className={styles.bannerImage}>
      <div className={styles.bannerImage1}>
        <Navbar />
        <h1>Home Page...</h1>
        <h1>Home Page...</h1>
        <h1>Home Page...</h1>
        <h1>Home Page...</h1>
        <h1>Home Page...</h1>
        <h1>Home Page...</h1>
        <h1>Home Page...</h1>
      </div>

      <div className={styles.bannerImage2}>
        <h1>Home Page...</h1>
        <h1>Home Page...</h1>
        <h1>Home Page...</h1>
        <h1>Home Page...</h1>
        <h1>Home Page...</h1>
        <h1>Home Page...</h1>
        <h1>Home Page...</h1>
        <h1>Home Page...</h1>
        <h1>Home Page...</h1>
        <h1>Home Page...</h1>
        <h1>Home Page...</h1>
      </div>
      <div className={styles.bannerImage2}>
        <h1>Home Page...</h1>
        <h1>Home Page...</h1>
        <h1>Home Page...</h1>
        <h1>Home Page...</h1>
        <h1>Home Page...</h1>
        <h1>Home Page...</h1>
        <h1>Home Page...</h1>
        <h1>Home Page...</h1>
        <h1>Home Page...</h1>
        <h1>Home Page...</h1>
      </div>
      <div className={styles.bannerImage2}>
        <h1>Home Page...</h1>
        <h1>Home Page...</h1>
        <h1>Home Page...</h1>
        <h1>Home Page...</h1>
        <h1>Home Page...</h1>
        <h1>Home Page...</h1>
        <h1>Home Page...</h1>
        <h1>Home Page...</h1>
        <h1>Home Page...</h1>
        <h1>Home Page...</h1>
      </div>

      <Footer />
    </div>

  );
}

export default Features;
